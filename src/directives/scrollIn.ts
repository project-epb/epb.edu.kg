import type { DirectiveBinding, ObjectDirective } from 'vue'

interface ScrollInOptions {
  // 动画延迟时间（毫秒）
  delay?: number
  // 动画方向
  direction?: 'up' | 'down' | 'left' | 'right'
  // 交错动画延迟（毫秒）
  stagger?: number
  // 只触发一次
  once?: boolean
  // Intersection Observer 阈值
  threshold?: number
  // 根边距
  rootMargin?: string
  // 动画持续时间（毫秒）
  duration?: number
}

interface ElementWithScrollData extends HTMLElement {
  __scrollInObserver?: IntersectionObserver
  __scrollInOptions?: ScrollInOptions
  __scrollInTriggered?: boolean
  __scrollInIndex?: number
}

const defaultOptions: Required<ScrollInOptions> = {
  delay: 0,
  direction: 'up',
  stagger: 0,
  once: true,
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  duration: 600,
}

// 检查是否支持 prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * 获取动画初始状态的 CSS 类
 */
function getInitialClasses(direction: string): string[] {
  const baseClasses = ['opacity-0', 'transition-all', 'ease-out']

  switch (direction) {
    case 'up':
      baseClasses.push('translate-y-12')
      break
    case 'down':
      baseClasses.push('-translate-y-12')
      break
    case 'left':
      baseClasses.push('translate-x-12')
      break
    case 'right':
      baseClasses.push('-translate-x-12')
      break
  }

  return baseClasses
}

/**
 * 获取动画结束状态的 CSS 类
 */
function getFinalClasses(): string[] {
  return ['opacity-100', 'translate-x-0', 'translate-y-0']
}

/**
 * 应用初始动画状态
 */
function applyInitialState(el: ElementWithScrollData, options: ScrollInOptions) {
  const initialClasses = getInitialClasses(options.direction!)

  // 设置动画持续时间
  el.style.transitionDuration = `${options.duration}ms`

  // 添加初始状态类
  el.classList.add(...initialClasses)

  // 如果有交错延迟，设置 transition-delay
  if (options.stagger && options.stagger > 0 && el.__scrollInIndex !== undefined) {
    el.style.transitionDelay = `${el.__scrollInIndex * options.stagger}ms`
  }
}

/**
 * 触发动画
 */
function triggerAnimation(el: ElementWithScrollData, options: ScrollInOptions) {
  if (prefersReducedMotion) {
    // 如果用户偏好减少动画，直接显示最终状态
    el.classList.remove(...getInitialClasses(options.direction!))
    el.classList.add(...getFinalClasses())
    return
  }

  const delay = options.delay || 0

  setTimeout(() => {
    // 移除初始状态类
    el.classList.remove(...getInitialClasses(options.direction!))
    // 添加最终状态类
    el.classList.add(...getFinalClasses())

    el.__scrollInTriggered = true
  }, delay)
}

/**
 * 创建 Intersection Observer
 */
function createObserver(el: ElementWithScrollData, options: ScrollInOptions): IntersectionObserver {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target as ElementWithScrollData

        if (entry.isIntersecting && (!options.once || !element.__scrollInTriggered)) {
          triggerAnimation(element, options)

          // 如果设置了只触发一次，停止观察
          if (options.once && element.__scrollInObserver) {
            element.__scrollInObserver.unobserve(element)
          }
        } else if (!options.once && !entry.isIntersecting) {
          // 如果不是只触发一次，且元素不在视口中，重置状态
          if (element.__scrollInTriggered) {
            element.classList.remove(...getFinalClasses())
            applyInitialState(element, options)
            element.__scrollInTriggered = false
          }
        }
      })
    },
    {
      threshold: options.threshold,
      rootMargin: options.rootMargin,
    }
  )
}

/**
 * 解析指令参数和修饰符
 */
function parseOptions(binding: DirectiveBinding): ScrollInOptions {
  const options = { ...defaultOptions }

  // 处理修饰符
  if (binding.modifiers.up) options.direction = 'up'
  if (binding.modifiers.down) options.direction = 'down'
  if (binding.modifiers.left) options.direction = 'left'
  if (binding.modifiers.right) options.direction = 'right'
  if (binding.modifiers.once) options.once = true

  // 处理传入的参数对象
  if (binding.value && typeof binding.value === 'object') {
    Object.assign(options, binding.value)
  }

  // 处理传入的简单数值（作为延迟时间）
  if (binding.value && typeof binding.value === 'number') {
    options.delay = binding.value
  }

  return options
}

/**
 * 计算交错动画的索引
 */
function calculateStaggerIndex(el: HTMLElement): number {
  const parent = el.parentElement
  if (!parent) return 0

  // 查找具有相同指令的兄弟元素
  const siblings = Array.from(parent.children).filter((child) => {
    // 检查元素是否有 v-scroll-in 指令的属性标记
    return (
      child.hasAttribute('data-v-scroll-in') ||
      child.getAttribute('v-scroll-in') !== null ||
      // 检查 Vue 内部的指令标记
      Object.keys(child).some((key) => key.includes('scrollIn'))
    )
  })

  // 如果找不到兄弟元素，则查找所有子元素
  if (siblings.length <= 1) {
    const allSiblings = Array.from(parent.children)
    return allSiblings.indexOf(el)
  }

  return siblings.indexOf(el)
}

export const vScrollIn: ObjectDirective<ElementWithScrollData, ScrollInOptions | number> = {
  mounted(el: ElementWithScrollData, binding: DirectiveBinding) {
    const options = parseOptions(binding)

    // 如果有交错动画，计算索引
    if (options.stagger && options.stagger > 0) {
      el.__scrollInIndex = calculateStaggerIndex(el)
    }

    // 保存配置
    el.__scrollInOptions = options

    // 应用初始状态
    applyInitialState(el, options)

    // 创建并启动观察器
    el.__scrollInObserver = createObserver(el, options)
    el.__scrollInObserver.observe(el)
  },

  updated(el: ElementWithScrollData, binding: DirectiveBinding) {
    // 如果配置发生变化，重新初始化
    const newOptions = parseOptions(binding)
    const oldOptions = el.__scrollInOptions

    if (JSON.stringify(newOptions) !== JSON.stringify(oldOptions)) {
      // 停止旧的观察器
      if (el.__scrollInObserver) {
        el.__scrollInObserver.unobserve(el)
      }

      // 重置状态
      el.classList.remove(...getInitialClasses(oldOptions?.direction || 'up'))
      el.classList.remove(...getFinalClasses())
      el.__scrollInTriggered = false

      // 重新初始化
      el.__scrollInOptions = newOptions
      applyInitialState(el, newOptions)
      el.__scrollInObserver = createObserver(el, newOptions)
      el.__scrollInObserver.observe(el)
    }
  },

  unmounted(el: ElementWithScrollData) {
    // 清理观察器
    if (el.__scrollInObserver) {
      el.__scrollInObserver.unobserve(el)
      el.__scrollInObserver = undefined
    }

    // 清理数据
    el.__scrollInOptions = undefined
    el.__scrollInTriggered = undefined
    el.__scrollInIndex = undefined
  },
}
