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
    colors: {
      cream: '#FFF8DC',
      brand: {
        pink: '#FF5C8A',
        pinkHot: '#FF6B9D',
        purple: '#A78BFA',
        green: '#7FD957',
        yellow: '#FFE066',
      },
    },
    fontFamily: {
      sans: '"Noto Sans SC", "PingFang SC", "Hiragino Sans GB", system-ui, sans-serif',
      display: '"Archivo Black", "Noto Sans SC", system-ui, sans-serif',
      mono: '"Space Grotesk", ui-monospace, monospace',
      hand: '"Caveat", "Permanent Marker", cursive',
    },
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
    // Neobrutalism 基础
    'nb-border': 'border-3 border-solid border-black',
    'nb-border-sm': 'border-2 border-solid border-black',
    'nb-shadow': 'shadow-[6px_6px_0_0_#000]',
    'nb-shadow-sm': 'shadow-[4px_4px_0_0_#000]',
    'nb-shadow-lg': 'shadow-[8px_8px_0_0_#000]',
    'nb-card': 'nb-border nb-shadow rounded-lg bg-white transition-all duration-150',
    'nb-press':
      'hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-[0_0_0_0_#000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-[0_0_0_0_#000]',
    'nb-btn':
      'nb-border nb-shadow rounded-lg px-6 py-3 font-black inline-flex items-center gap-2 transition-all duration-150 hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-[0_0_0_0_#000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-[0_0_0_0_#000]',
    'nb-tag':
      'nb-border-sm shadow-[3px_3px_0_0_#000] rounded-md px-3 py-1 font-bold text-sm inline-flex items-center gap-1 bg-white',
    'nb-input':
      'w-full nb-border-sm rounded-md px-4 py-3 bg-white text-black font-medium focus:outline-0 focus:border-brand-pink focus:shadow-[4px_4px_0_0_#FF5C8A] transition-all duration-150',
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
    // Neobrutalism 动态主题色 safelist
    'bg-brand-pink',
    'bg-brand-pinkHot',
    'bg-brand-purple',
    'bg-brand-green',
    'bg-brand-yellow',
    'bg-cream',
  ],
})
