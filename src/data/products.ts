/**
 * 产品/服务数据
 * 在这里添加、修改、删除产品信息
 */

export interface Product {
  id: string;
  name: string;
  icon: string;       // Emoji 或图标文字
  description: string;
  features: string[];
  featured?: boolean; // 是否在首页精选展示
  pddLink?: string;   // 拼多多商品链接
}

export const products: Product[] = [
  {
    id: 'ebike-charger',
    name: '电瓶车智能充电器',
    icon: '🛵',
    description: '适用于48V/60V/72V电动自行车、电瓶车，智能芯片控制，充满自停，安全可靠。',
    features: [
      '兼容48V/60V/72V主流电压',
      '智能三段式充电，延长电池寿命',
      '过充/过压/过流/短路多重保护',
      'LED状态指示灯，充电状态一目了然',
    ],
    featured: true,
    pddLink: 'https://mobile.yangkeduo.com/goods.html?goods_id=YOUR_ID',
  },
  {
    id: 'tricycle-charger',
    name: '三轮车专用充电器',
    icon: '🛺',
    description: '专为电动三轮车设计的大功率充电器，散热强劲，长时间工作稳定不发热。',
    features: [
      '大功率输出，充电速度更快',
      '纯铜线圈变压器，耐用寿命长',
      '铝合金外壳，散热性能优异',
      '适用于货运/载客/农用三轮车',
    ],
    featured: true,
    pddLink: 'https://mobile.yangkeduo.com/goods.html?goods_id=YOUR_ID',
  },
  {
    id: 'forklift-charger',
    name: '电动叉车充电器',
    icon: '🏗️',
    description: '工业级电动叉车专用充电器，支持铅酸/锂电池，适合厂房仓库长时间高强度作业。',
    features: [
      '支持铅酸/锂电池双模式充电',
      '工业级大功率输出，充电效率高',
      'IP54防护等级，防尘防水',
      '温度补偿功能，适应恶劣环境',
    ],
    featured: true,
    pddLink: 'https://mobile.yangkeduo.com/goods.html?goods_id=YOUR_ID',
  },
  {
    id: 'fast-charger',
    name: '智能快速充电器',
    icon: '⚡',
    description: '支持多电压快充，搭载智能温控系统，充电又快又安全，大幅缩短等待时间。',
    features: [
      '快充技术，比普通充电器快30%',
      '智能温度监控，自动调节电流',
      'LCD液晶显示屏，实时显示电量',
      '支持多种电池类型自动识别',
    ],
    pddLink: 'https://mobile.yangkeduo.com/goods.html?goods_id=YOUR_ID',
  },
  {
    id: 'lead-acid-charger',
    name: '铅酸电池脉冲充电器',
    icon: '🔋',
    description: '针对铅酸电池优化的脉冲修复型充电器，有效延长电池寿命，减少硫酸盐化。',
    features: [
      '脉冲修复技术，减轻电池硫酸盐化',
      '反接保护，误接不怕烧',
      '冬天充满自停，夏天防过充',
      '适合电动三轮车/电瓶车/叉车',
    ],
    pddLink: 'https://mobile.yangkeduo.com/goods.html?goods_id=YOUR_ID',
  },
  {
    id: 'lithium-charger',
    name: '锂电池专用充电器',
    icon: '🔌',
    description: '专为锂电池设计的智能充电器，多重安全保护，充电精准稳定，延长锂电池寿命。',
    features: [
      '针对三元锂/磷酸铁锂精准调校',
      '均衡充电管理，保护电芯',
      '防过充/过放/过热三重防护',
      '轻便小巧，便于携带',
    ],
    pddLink: 'https://mobile.yangkeduo.com/goods.html?goods_id=YOUR_ID',
  },
];

/** 首页精选产品 */
export const featuredProducts = products.filter((p) => p.featured);
