/**
 * 网站全局配置
 * 修改这个文件即可更新全站的公司信息
 */

export const siteConfig = {
  // 公司基本信息
  name: '长兴强耐电子',
  nameEn: 'CXQNDZ',
  tagline: '以技术驱动未来，让创新改变世界',
  description: '创新驱动科技致力于为企业提供前沿的技术解决方案，助力数字化转型。',

  // 品牌色（用于 favicon 等）
  brandColor: '#0071e3',

  // 页脚信息
  copyright: `© ${new Date().getFullYear()} 创新驱动科技. All Rights Reserved.`,

  // 导航链接
  navigation: [
    { label: '首页', href: '/' },
    { label: '产品服务', href: '/products' },
    { label: '关于我们', href: '/about' },
    { label: '联系我们', href: '/contact' },
  ],

  // 联系方式
  contact: {
    email: 'hello@cxqndz.com',
    phone: '400-XXX-XXXX',
    address: '中国 · 您的城市',
    workingHours: '周一至周五 9:00 - 18:00',
  },

  // 社交媒体
  social: {
    wechat: '#',
    weibo: '#',
    linkedin: '#',
  },
} as const;
