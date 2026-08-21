export const careerTracks = [
  {
    id: "dev", name: "研发", icon: "💻", color: "from-blue-500 to-cyan-500",
    description: "写代码、修Bug、被催排期", salary: 800, hc: "名额充足",
    subRoles: [
      ["backend", "后端开发实习生", "⚙️"], ["frontend", "前端开发实习生", "🎨"],
      ["algorithm", "算法实习生", "🧠"], ["test", "测试开发实习生", "🔍"],
      ["data", "数据开发实习生", "📊"], ["infra", "基础架构实习生", "🏗️"],
      ["mobile", "移动端开发实习生", "📱"], ["security", "安全工程实习生", "🔐"],
    ],
  },
  {
    id: "pm", name: "产品", icon: "📋", color: "from-purple-500 to-pink-500",
    description: "画原型、写PRD、被开发怼", salary: 600, hc: "名额较多",
    subRoles: [["c-pm", "C端产品实习生", "📱"], ["b-pm", "B端产品实习生", "🏢"], ["data-pm", "数据产品实习生", "📈"], ["strategy-pm", "策略产品实习生", "🎯"], ["ai-pm", "AI产品实习生", "🤖"], ["growth-pm", "增长产品实习生", "🚀"], ["platform-pm", "平台产品实习生", "🔧"]],
  },
  {
    id: "ops", name: "运营", icon: "📢", color: "from-orange-500 to-amber-500",
    description: "拉新、促活、写文案、蹭热点", salary: 200, hc: "名额较多",
    subRoles: [["user-ops", "用户运营实习生", "👥"], ["content-ops", "内容运营实习生", "✍️"], ["activity-ops", "活动运营实习生", "🎉"], ["community-ops", "社群运营实习生", "💬"], ["data-ops", "数据运营实习生", "📊"], ["live-ops", "直播运营实习生", "📺"], ["intl-ops", "国际化运营实习生", "🌍"]],
  },
  {
    id: "design", name: "设计", icon: "🎨", color: "from-pink-500 to-rose-500",
    description: "改稿、改稿、再改稿", salary: 200, hc: "名额一般",
    subRoles: [["ui", "UI设计实习生", "🖌️"], ["ux", "交互设计实习生", "🔄"], ["visual", "视觉设计实习生", "👁️"], ["brand-design", "品牌设计实习生", "🏷️"], ["motion", "动效设计实习生", "✨"], ["3d-design", "3D设计实习生", "🎮"]],
  },
  {
    id: "market", name: "市场", icon: "📣", color: "from-green-500 to-emerald-500",
    description: "策划活动、对接媒体、蹲数据", salary: 200, hc: "名额一般",
    subRoles: [["brand", "品牌策划实习生", "🏷️"], ["media", "媒介投放实习生", "📺"], ["pr", "公关实习生", "🎤"], ["sem", "SEM投放实习生", "🔍"], ["social-media", "社媒运营实习生", "📱"], ["event-market", "活动策划实习生", "🎪"]],
  },
  {
    id: "sales", name: "销售/BD", icon: "🤝", color: "from-indigo-500 to-violet-500",
    description: "打电话、跑客户、背指标", salary: 200, hc: "名额较多",
    subRoles: [["csm", "客户成功实习生", "🌟"], ["bd", "商务拓展实习生", "🔗"], ["sales-rep", "销售代表实习生", "📞"], ["channel", "渠道销售实习生", "🛒"], ["key-account", "大客户销售实习生", "💎"], ["pre-sales", "售前咨询实习生", "📑"]],
  },
  {
    id: "hr", name: "HR", icon: "👥", color: "from-teal-500 to-cyan-500",
    description: "招聘、培训、做表格、背锅", salary: 200, hc: "名额极少",
    subRoles: [["recruiter", "招聘实习生", "🔎"], ["hrbp", "HRBP实习生", "🤝"], ["training", "培训发展实习生", "📚"], ["c-and-b", "薪酬福利实习生", "💰"], ["employee-relations", "员工关系实习生", "🤗"]],
  },
  {
    id: "admin", name: "行政", icon: "🏢", color: "from-slate-500 to-gray-500",
    description: "订会议室、搞团建、修打印机", salary: 200, hc: "名额极少",
    subRoles: [["office-admin", "行政管理实习生", "📋"], ["reception", "前台接待实习生", "🙋"], ["facility", "设施管理实习生", "🔧"], ["procurement", "采购实习生", "🛍️"], ["secretary", "总裁秘书实习生", "📝"]],
  },
  {
    id: "finance", name: "财务", icon: "💰", color: "from-amber-500 to-yellow-500",
    description: "做报表、核对账目、催报销", salary: 200, hc: "名额紧张",
    subRoles: [["accounting", "会计实习生", "🧮"], ["audit", "审计实习生", "🔍"], ["tax", "税务实习生", "📄"], ["investment", "投资分析实习生", "📈"], ["budget", "预算管理实习生", "📊"]],
  },
].map((track) => ({ ...track, subRoles: track.subRoles.map(([id, name, icon]) => ({ id, name, icon })) }));

export const mentors = {
  strict: { name: "严厉型导师", icon: "😠", description: "高标准严要求，代码必须完美才能过Review。你会学到很多，但精神压力巨大。", hint: "严厉型导师会在1on1时更严格，但给的建议更有价值", weeklyEffect: { kpi: 2, anxiety: 2, ability: 2, dignity: -2 } },
  laissez_faire: { name: "放养型导师", icon: "😎", description: "基本不管你，好感不容易涨也不容易掉。你很自由，但也很孤独。", hint: "放养型导师不会主动帮你争取任何东西，但也不会为难你", weeklyEffect: { anxiety: -1 } },
  pua: { name: "PUA型导师", icon: "🧐", description: "画大饼、打鸡血、疯狂画饼。你以为自己是未来之星，其实只是廉价劳动力。", hint: "PUA型导师会让你更努力，但尊严消耗得很快", weeklyEffect: { kpi: 3, anxiety: 3, dignity: -2 } },
  zen: { name: "佛系型导师", icon: "🧘", description: "都行，看你自己，没事早点下班。压力很小，但你的转正他也不太上心。", hint: "佛系型导师不会主动帮你争取任何东西，但也不会为难你", weeklyEffect: { anxiety: -2 } },
};

export const factions = {
  juanwang: { name: "卷王联盟", icon: "🔥", description: "信仰是\"没有什么是加班解决不了的\"。加入后每周自动+2KPI但+3焦虑。", specialDesc: "解锁专属行动\"卷王冲刺\"；导师对你印象更好；但焦虑值更容易爆", weeklyEffect: { kpi: 2, anxiety: 3, hair: -2, mentorFavor: 1 } },
  moyu: { name: "摸鱼同盟", icon: "🐟", description: "信仰是\"上班如上坟，摸鱼才是真谛\"。加入后每周-2KPI但-3焦虑。", specialDesc: "解锁专属行动\"带薪如厕\"；焦虑值不容易爆；但导师好感更难涨", weeklyEffect: { kpi: -2, anxiety: -3, hair: 2, dignity: 1 } },
  zhongjian: { name: "中间派", icon: "⚖️", description: "两边都不得罪，见人说人话见鬼说鬼话。平衡但没有极端buff。", specialDesc: "解锁专属行动\"两头讨好\"；人缘涨得快；但不会有极端的好处或坏处", weeklyEffect: { popularity: 2, ability: 1 } },
};

export const statMeta = [
  ["hair", "💇", "发量", "归零则猝死"], ["dignity", "👑", "尊严", "归零则精神崩溃"],
  ["kpi", "📊", "绩效", "转正答辩的关键"], ["popularity", "🤝", "人缘", "同事关系"],
  ["ability", "🧠", "能力", "专业水平"], ["anxiety", "😰", "焦虑值", "过高会崩溃"],
  ["mentorFavor", "🧑‍🏫", "导师好感", "导师对你的评价"], ["money", "💰", "余额", "实习工资"],
];

export const actions = [
  { id: "deep_work", icon: "⌨️", name: "埋头苦干", description: "疯狂写代码/文档，产出拉满但掉头发", effects: { hair: -6, kpi: 8, ability: 2, anxiety: 4, dignity: -2 } },
  { id: "ask_mentor", icon: "🙋", name: "请教导师", description: "主动向导师请教问题，提升能力和好感", effects: { ability: 4, mentorFavor: 5, anxiety: -4, kpi: 2 } },
  { id: "write_report", icon: "📝", name: "写周报", description: "花一下午包装周报，让领导看到你的\"产出\"", effects: { kpi: 5, dignity: -3, mentorFavor: 3, hair: -3 } },
  { id: "meetings", icon: "🗣️", name: "疯狂开会", description: "参加各种拉通对齐会议，实际产出为零", effects: { popularity: 4, kpi: -5, hair: -3, anxiety: 2 } },
  { id: "overtime", icon: "🌙", name: "主动加班", description: "每天卷到最后一个走，朋友圈打卡\"深夜的xxx\"", effects: { hair: -8, kpi: 7, dignity: -5, mentorFavor: 3, anxiety: 6 } },
];

export const loadingMessages = ["正在对齐颗粒度...", "正在赋能业务闭环...", "正在为你准备工位...", "正在申请工牌权限...", "正在分配导师..."];
