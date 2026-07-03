/**
 * 公司发展历程数据
 */

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2018',
    title: '公司成立',
    description: '创始团队在技术孵化器中成立公司，确立以 AI 和云计算为核心方向。',
  },
  {
    year: '2019',
    title: '首轮融资',
    description: '完成天使轮融资，团队扩展至 20 人，发布第一版 AI 分析平台原型。',
  },
  {
    year: '2020',
    title: '产品正式发布',
    description: 'AI 智能分析平台正式商用，获得首批 10 家企业客户，营收突破 500 万。',
  },
  {
    year: '2021',
    title: '业务快速扩张',
    description: '新增云计算和物联网业务线，客户超过 100 家，团队规模达 80 人。',
  },
  {
    year: '2022',
    title: 'A 轮融资',
    description: '完成 A 轮融资，在深圳设立研发中心，发布数字孪生平台产品。',
  },
  {
    year: '2023',
    title: '行业领先',
    description: '服务客户超过 200 家，获评年度最佳企业服务商，营收突破亿元。',
  },
  {
    year: '2024',
    title: '全国布局',
    description: '在北京、上海、成都设立办事处，启动国际化战略，团队超 150 人。',
  },
  {
    year: '2025',
    title: '持续创新',
    description: '推出新一代 AI 原生架构产品，深度整合大模型能力，赋能千行百业。',
  },
];

/** 核心数据 */
export const companyStats = [
  { value: 200, suffix: '+', label: '服务客户' },
  { value: 50, suffix: '+', label: '完成项目' },
  { value: 99, suffix: '%', label: '客户满意度' },
  { value: 150, suffix: '+', label: '团队成员' },
];
