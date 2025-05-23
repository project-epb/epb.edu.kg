import { defineConfig, presetWind4, presetAttributify } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetAttributify(),
  ],
  extractors: [extractorPug()],
  theme: {
    animation: {
      'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
      'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
      'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
      'fade-in': 'fadeIn 0.6s ease-out forwards',
      'bounce-in': 'bounceIn 0.8s ease-out forwards',
    },
    keyframes: {
      fadeInUp: {
        '0%': {
          opacity: '0',
          transform: 'translateY(50px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      fadeInDown: {
        '0%': {
          opacity: '0',
          transform: 'translateY(-50px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      fadeInLeft: {
        '0%': {
          opacity: '0',
          transform: 'translateX(-50px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      fadeInRight: {
        '0%': {
          opacity: '0',
          transform: 'translateX(50px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      fadeIn: {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      bounceIn: {
        '0%': {
          opacity: '0',
          transform: 'scale(0.3) translateY(50px)',
        },
        '50%': {
          opacity: '0.8',
          transform: 'scale(1.05) translateY(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'scale(1) translateY(0)',
        },
      },
    },
  },
  shortcuts: {
    // 滚动动画相关的工具类
    'scroll-animate-base': 'opacity-0 transition-all duration-600 ease-out',
    'scroll-animate-up': 'scroll-animate-base translate-y-12',
    'scroll-animate-down': 'scroll-animate-base -translate-y-12',
    'scroll-animate-left': 'scroll-animate-base translate-x-12',
    'scroll-animate-right': 'scroll-animate-base -translate-x-12',
    'scroll-animate-visible': 'opacity-100 translate-x-0 translate-y-0',
    // 预制动画类
    'animate-on-scroll': 'scroll-animate-up',
    'animate-visible': 'scroll-animate-visible',
  },
  safelist: [
    // 确保动画相关的类被包含在最终的 CSS 中
    'opacity-0',
    'opacity-100',
    'translate-y-12',
    '-translate-y-12',
    'translate-x-12',
    '-translate-x-12',
    'translate-x-0',
    'translate-y-0',
    'transition-all',
    'duration-600',
    'ease-out',
    'scroll-animate-base',
    'scroll-animate-up',
    'scroll-animate-down',
    'scroll-animate-left',
    'scroll-animate-right',
    'scroll-animate-visible',
    'animate-on-scroll',
    'animate-visible',
  ],
})
