const root = document.querySelector('#root')
const assets = 'portfolio/'
const data = {
  images: [
    { title: '服装商品详情', type: '广告设计', folder: '广告设计/服装类', note: '为服饰梳理版式、卖点与内容节奏，输出成套详情视觉。', gallery: [assets + '广告设计/服装类/图片节点 1.png', assets + '广告设计/服装类/图片节点 1(1).png', assets + '广告设计/服装类/图片节点 2.png', assets + '广告设计/服装类/图片节点 4.png', assets + '广告设计/服装类/图片节点 5.png', assets + '广告设计/服装类/图片节点 6.png'] },
    { title: '箱包商品详情', type: '广告设计', folder: '广告设计/箱包类设计', note: '把箱包的功能卖点拆成可读的详情结构与视觉层级。', gallery: [assets + '广告设计/箱包类设计/图片节点 1.png', assets + '广告设计/箱包类设计/图片节点 2.png', assets + '广告设计/箱包类设计/图片节点 3.png', assets + '广告设计/箱包类设计/图片节点 4.png', assets + '广告设计/箱包类设计/图片节点 5.png', assets + '广告设计/箱包类设计/图片节点 6.png'] },
    { title: '美妆商品详情', type: '广告设计', folder: '广告设计/美妆类', note: '从质地、肤感到卖点画面，完成统一的美妆详情视觉。', gallery: [assets + '广告设计/美妆类/01_hero_main.png', assets + '广告设计/美妆类/02_selling_deep_clean.png', assets + '广告设计/美妆类/03_selling_watery.png', assets + '广告设计/美妆类/05_selling_eyes_lips.png', assets + '广告设计/美妆类/06_selling_sensitive.png', assets + '广告设计/美妆类/14_mood_refresh.png'] },
    { title: '商品电商海报', type: '海报封面', image: assets + '海报封面/商品电商类.png', note: '将商品利益点转译为适合投放的第一眼画面。' },
    { title: '服装电商海报', type: '海报封面', image: assets + '海报封面/服装电商类.png', note: '以人物、色彩和构图建立品牌记忆点。' },
    { title: '人物海报', type: '海报封面', image: assets + '海报封面/人物海报类.png', note: '人物视觉与商业传播之间的平衡练习。' },
    { title: '节日海报', type: '海报封面', image: assets + '海报封面/节日海报.png', note: '把节日氛围、活动信息与商品卖点放进一张可投放的画面。' },
    { title: '卡通海报', type: '海报封面', image: assets + '海报封面/卡通海报类.png', note: '用卡通造型完成轻松、有辨识度的海报表达。' },
    { title: '真人写实类', type: '人物形象', image: assets + '人物形象/真人写实类.png', note: '为个人 IP 与内容栏目建立稳定的形象资产。' },
    { title: '古风写实类', type: '人物形象', image: assets + '人物形象/古风写实类.png', note: '从风格设定到成片输出的视觉探索。' },
    { title: '真人意境类', type: '人物形象', image: assets + '人物形象/真人意境类.png', note: '用氛围与叙事服务人物内容。' },
    { title: '插画类古风', type: '人物形象', image: assets + '人物形象/插画类古风.png', note: '用插画语言重塑古风人物，探索风格化表达。' },
    { title: '3D模型类', type: '人物形象', image: assets + '人物形象/3D模型类.png', note: '从平面转向 3D 造型，建立可多角度展示的角色形象。' },
    { title: '男主（周铭）', type: '人物形象', image: assets + '人物形象/男主（周铭）.png', note: '围绕故事人物完成角色设定与形象延展。' },
    { title: '人物形象 01', type: '人物形象', image: assets + '人物形象/1.png', note: '人物形象的基础设定与统一视觉参考。' },
  ],
  social: [
    { title: '小红书主页搭建', type: '多平台运营', image: assets + '小红书运营/小红书首页.jpg', note: '把账号定位、栏目结构和封面规则变成可执行的主页。' },
    { title: '小红书数据复盘', type: '多平台运营', image: assets + '小红书运营/小红书数据.jpg', note: '围绕内容表现建立可读、可复用的数据复盘。' },
    { title: '抖音主页搭建', type: '多平台运营', image: assets + '抖音运营/抖音主页.jpg', note: '统一短视频账号的视觉入口与内容导航。' },
    { title: '抖音数据看板', type: '多平台运营', image: assets + '抖音运营/抖音数据页.jpg', note: '让数据成为下一轮内容决策的依据。' },
  ],
  motion: [
    { title: '人物服装类', type: '电商广告视频', video: assets + '广告视频/人物服装类.mp4', note: '以人物动作和服装细节完成电商短视频节奏。' },
    { title: '家具商品类', type: '电商广告视频', video: assets + '广告视频/家具商品类.mp4', note: '从空间氛围进入产品功能与使用场景。' },
    { title: '影音商品类', type: '电商广告视频', video: assets + '广告视频/影音商品类.mp4', note: '用镜头语言讲清产品的体验价值。' },
    { title: '美妆护肤类', type: '电商广告视频', video: assets + '广告视频/美妆护肤类.mp4', note: '从质地、肤感到使用场景的镜头表达。' },
    { title: '视频节点 4', type: '特效视频', video: assets + '特效视频/视频节点 4 (3).mp4', note: '特效节点与内容包装的节奏实验。' },
    { title: '视频节点 5', type: '特效视频', video: assets + '特效视频/视频节点 5 (1).mp4', note: '为品牌内容建立更有记忆点的转场与动效。' },
    { title: '炸裂的鼠标', type: '特效视频', video: assets + '特效视频/炸裂的鼠标.mp4', note: '颗粒、爆点与节奏感的特效包装实验。' },
    { title: '剑来（特效版）', type: '特效视频', video: assets + '特效视频/剑来.mp4', note: '把剑来世界的时空感做成特效叙事实验。' },
    { title: '变装视频', type: '特效视频', video: assets + '特效视频/变装视频.mp4', note: '一镜切换与变装的视觉爆发节奏。' },
    { title: '特效视频', type: '特效视频', video: assets + '特效视频/特效视频.mp4', note: '多种特效手法的混合编排实验。' },
    { title: '兰亭序', type: '剧情短片', video: assets + '剧情短片/兰亭序.mp4', note: 'AI 漫剧与古典文本的视觉化尝试。' },
    { title: '剑来', type: '剧情短片', video: assets + '剧情短片/剑来.mp4', note: '把世界观设定转译为 AI 漫剧的叙事片段。' },
    { title: '如梦令·常记溪亭日暮', type: '剧情短片', video: assets + '剧情短片/如梦令·常记溪亭日暮.mp4', note: '用古典词境完成一支 AI 漫剧短片。' },
    { title: '剧情短片 C', type: '剧情短片', video: assets + '剧情短片/C.mp4', note: '剧情片段的转场与叙事节奏实验。' },
    { title: '弱水', type: '剧情短片', video: assets + '剧情短片/弱水.mp4', note: '以意境和情感推进的 AI 漫剧片段。' },
    { title: '375 第一幕', type: '剧情短片', video: assets + '剧情短片/375第一幕.mp4', note: 'AI 漫剧开场幕的镜头与叙事搭建。' },
    { title: '9月6日', type: '剧情短片', video: assets + '剧情短片/9月6日.mp4', note: '一支关于时间与等待的 AI 漫剧短片段。' },
    { title: '375路公交车', type: '剧情短片', video: assets + '剧情短片/375路公交车.mp4', note: '一辆末班车上的众生相与叙事张力。' },
    { title: '古诗鉴赏', type: '剧情短片', video: assets + '剧情短片/古诗鉴赏.mp4', note: '把诗词意境逐句转译为 AI 漫剧画面。' },
    { title: '绘本故事', type: '剧情短片', video: assets + '剧情短片/绘本故事.mp4', note: '用绘本质感讲一个完整的小故事。' },
  ],
  systems: [
    { title: '小红书运营 Agent', type: '智能体创作', image: assets + 'Agent示例/小红书运营agent.png', note: '把选题、内容、审核和发布前检查串成一条工作流。' },
    { title: '视觉生成 Skill', type: 'Skill 工作流', image: assets + 'skill截图示例/视觉生成.png', note: '将视觉生成拆成可复用、可验收的步骤。' },
    { title: '数据 Skill', type: 'Skill 工作流', image: assets + 'skill截图示例/数据skill.png', note: '帮助内容团队快速完成结构化的数据整理。' },
    { title: '笔记文案 Skill', type: 'Skill 工作流', image: assets + 'skill截图示例/笔记文案skill.png', note: '从洞察到文案，沉淀稳定的生产提示。' },
  ],
}
const toolCategories = [
  { title: '图像类', note: '商品视觉、人物设定与多模态探索', tools: [
    { title: 'Nano Banana 2', scene: '商品主视觉、人物与场景生成', level: '熟练', image: assets + 'ai工具图标/logos/nano-banana.svg', mark: 'NB2', family: 'nano' },
    { title: 'Nano Banana Pro', scene: '高质感商业图、细节修图与变体', level: '熟悉', image: assets + 'ai工具图标/logos/nano-banana.svg', mark: 'NBP', family: 'nano' },
    { title: 'GPT Image 2 系列', scene: '文字排版、商品变体与精修', level: '熟悉', image: assets + 'ai工具图标/generated/openai-logo-tile.png', family: 'gpt-image' },
    { title: 'Midjourney', scene: '风格参考、构图探索与视觉实验', level: '熟悉', image: assets + 'ai工具图标/logos/midjourney.svg', mark: 'MJ', family: 'mj' },
    { title: '即梦 AI', scene: '灵感出图与视频素材生成', level: '常用', image: assets + 'ai工具图标/logos/jimeng.png', mark: 'JM', family: 'jimeng' },
    { title: 'ChatGPT', scene: '对话、文案与创作细节打磨', level: '常用', image: assets + 'ai工具图标/logos/chatgpt.svg', mark: 'GPT', family: 'chatgpt' },
    { title: '豆包', scene: '快捷出图与日常创作助手', level: '常用', image: assets + 'ai工具图标/logos/doubao.png', mark: 'DB', family: 'doubao' },
  ] },
  { title: '视频类', note: '动态广告、短视频首帧与素材灵感', tools: [
    { title: 'Seedance / 商品广告', scene: '商品镜头、动态展示与广告片', level: '熟练', image: assets + 'ai工具图标/logos/bytedance.svg', mark: 'SD', family: 'seedance' },
    { title: 'Kling 系列', scene: '人物动作、产品动态与镜头控制', level: '熟练', image: assets + 'ai工具图标/logos/kuaishou.png', mark: 'KL', family: 'kling' },
    { title: 'LIB TV', scene: '视频灵感、素材拆解与趋势参考', level: '常用', image: assets + 'ai工具图标/logos/libtv.svg', mark: 'L', family: 'libtv' },
  ] },
  { title: '代码类', note: '把创意拆解成可运行、可复用的交付流程', tools: [
    { title: 'Claude Code', scene: '代码协作、重构与复杂任务推进', level: '熟悉', image: assets + 'ai工具图标/logos/claude.svg', mark: 'CC', family: 'claude' },
    { title: 'Codex', scene: 'Vibe Coding、页面搭建与流程调试', level: '熟练', image: assets + 'ai工具图标/logos/codex.svg', mark: 'CX', family: 'codex' },
    { title: 'WorkBuddy', scene: '需求拆解、原型验证与交付协作', level: '常用', image: assets + 'ai工具图标/logos/workbuddy.svg', mark: 'WB', family: 'workbuddy' },
  ] },
]
const labels = { home: '首页', work: '作品案例', social: '运营内容', motion: '视频创作', systems: '工作流', about: '关于我' }
const resumeAnswers = [
  { keys: ['擅长', '能力', '技能'], answer: '我专注商品视觉、AIGC 短视频和内容工作流，把一个商品拆成可传播的图像、视频与交付流程。' },
  { keys: ['项目', '代表', '案例'], answer: '代表案例是电商视觉生成 Skill 与小红书运营 Agent，前者负责从商品 brief 到多渠道素材，后者串起选题、生产、审核与复盘。' },
  { keys: ['工具', '模型'], answer: '图像侧使用 Nano Banana 与 GPT Image 2，视频侧使用 Seedance、Kling、LIB TV，代码侧使用 Claude Code、Codex、WorkBuddy。' },
  { keys: ['工作方式', '流程', '怎么做'], answer: '先确认商品、受众和渠道，再快速成片、统一视觉系统，最后质检、交付并复盘。' },
  { keys: ['经历', '背景', '前端'], answer: '我的背景横跨前端开发与 AIGC 内容创作，擅长把创意拆成可运行、可复用、可检查的工作流。' },
]
const state = { route: routeFromLocation(), filter: '全部', theme: localStorage.getItem('portfolio-theme') || 'light', modal: null, menu: false, workflow: 'skill', workflowStep: 0, workflowRun: { mode: null, status: 'idle', step: -1, input: '', output: null }, workflowRunId: 0, workflowTimer: null, resumeAnswer: '', resumeOpen: false }

function routeFromLocation() {
  const segments = window.location.pathname.split('/').filter(Boolean)
  const leaf = segments.length ? segments[segments.length - 1].toLowerCase() : ''
  if (leaf === 'images') return 'work'
  if (leaf === 'xiaohongshu') return 'social'
  if (leaf === 'videos') return 'motion'
  if (leaf === 'skill-agent') return 'systems'
  if (leaf === 'about') return 'about'
  return 'home'
}
function routeTo(route) {
  cancelWorkflowRun()
  const paths = { home: './', work: 'images', social: 'xiaohongshu', motion: 'videos', systems: 'skill-agent', about: 'about' }
  window.history.pushState({}, '', paths[route] || './')
  state.route = route; state.filter = '全部'; state.modal = null; state.menu = false; state.resumeOpen = false
  render(); window.scrollTo({ top: 0, behavior: 'smooth' })
}
function coverFor(item) { return (item.gallery && item.gallery[0]) || item.image }
function mediaFor(item) {
  return item.video ? `<video muted loop autoplay playsinline preload="metadata" src="${item.video}"></video>` : `<img src="${coverFor(item)}" alt="${item.title}" loading="lazy" />`
}
function workCard(item, index, set) {
  return `<button class="work-card ${item.video ? 'is-video' : ''}" data-open="${index}" data-set="${set}"><span class="work-media">${mediaFor(item)}<span class="work-index">${String(index + 1).padStart(2, '0')}</span>${item.video ? '<span class="play-mark">播放</span>' : ''}</span><span class="work-meta"><span><strong>${item.title}</strong><small>${item.type}</small></span><span class="work-arrow">↗</span></span></button>`
}
function galleryLayout(count) {
  if (count === 7) return { cols: 3, rows: 3, hero: true }
  if (count === 4) return { cols: 2, rows: 2, hero: false }
  const cols = count <= 3 ? count : 3
  return { cols, rows: Math.ceil(count / cols), hero: false }
}
function galleryMarkup(item) {
  const { cols, rows, hero } = galleryLayout(item.gallery.length)
  return `<div class="modal-gallery${hero ? ' has-hero' : ''}" style="grid-template-columns:repeat(${cols},minmax(0,1fr));grid-template-rows:repeat(${rows},minmax(0,1fr))">${item.gallery.map((src, index) => `<figure class="modal-gallery-item${hero && index === 0 ? ' is-hero' : ''}"><img src="${src}" alt="${item.title} ${String(index + 1).padStart(2, '0')}" /><figcaption>${String(index + 1).padStart(2, '0')} / ${String(item.gallery.length).padStart(2, '0')}</figcaption></figure>`).join('')}</div>`
}
function answerResumeQuestion(query) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return ''
  const matched = resumeAnswers.find(item => item.keys.some(key => normalized.includes(key.toLowerCase())))
  return matched?.answer || '你可以问我：擅长什么、代表项目、会哪些工具，或者我的工作方式。'
}
function resumeAssistant() {
  const answer = state.resumeAnswer
  const isOpen = state.resumeOpen
  const toggleLabel = isOpen ? '收起简历问答助手' : '打开简历问答助手'
  return `<div class="resume-assistant ${isOpen ? 'is-open' : ''}"><button class="resume-assistant-toggle" type="button" data-resume-toggle aria-expanded="${isOpen}" aria-controls="resume-assistant-panel" aria-label="${toggleLabel}" title="${toggleLabel}"><span class="resume-assistant-mark">Q&amp;A</span><span class="resume-toggle-copy"><small>RESUME Q&amp;A</small><strong>简历问答</strong></span><span class="resume-toggle-icon" aria-hidden="true">↗</span></button><div class="resume-assistant-panel" id="resume-assistant-panel" aria-hidden="${!isOpen}"><div class="resume-assistant-head"><span><small>RESUME Q&amp;A</small><strong>简历问答助手</strong></span><i>LOCAL</i></div><p>想了解我的项目、技能或工作方式？</p><div class="resume-quick-actions"><button type="button" data-resume-question="代表项目">代表项目</button><button type="button" data-resume-question="擅长什么">擅长什么</button><button type="button" data-resume-question="会哪些工具">工具栈</button></div><form class="resume-query" data-resume-form><input name="resume-question" maxlength="60" placeholder="输入一个问题" aria-label="输入一个关于简历的问题" /><button type="submit" aria-label="发送问题">↗</button></form><div class="resume-answer" ${answer ? '' : 'hidden'}>${answer}</div></div></div>`
}
function toolsSection() {
  const tools = toolCategories.flatMap(category => category.tools)
  return `<section class="section-block tools-section"><div class="section-heading"><div><p class="eyebrow">TOOLS / 工具栈</p><h2>按任务选择工具，把模型编排成流程。</h2></div><span class="tool-count">${String(tools.length).padStart(2, '0')} TOOLS</span></div><div class="tools-categories">${toolCategories.map((category, categoryIndex) => `<article class="tool-category tool-category-${category.tools.length}"><header><span>${String(categoryIndex + 1).padStart(2, '0')}</span><div><h3>${category.title}</h3><p>${category.note}</p></div></header><div class="tool-list">${category.tools.map(tool => `<div class="tool-item"><span class="tool-logo tool-logo-${tool.family || 'generic'}">${tool.image ? `<img src="${tool.image}" alt="${tool.title} logo" loading="lazy" onerror="this.outerHTML='<b>${tool.mark || '\u00b7'}</b>'" />` : `<b>${tool.mark}</b>`}</span><div class="tool-copy"><strong>${tool.title}</strong><small>${tool.scene}</small></div><span class="tool-level">${tool.level}</span></div>`).join('')}</div></article>`).join('')}</div></section>`
}
function homeWithTools() {
  return homePage().replace('<section class="statement-band">', toolsSection() + '<section class="statement-band">')
}
function shell(content) {
  document.documentElement.dataset.theme = state.theme
  root.innerHTML = `<div class="site-shell"><header class="site-header"><a class="brand" href="/" data-route="home"><span class="brand-mark">TJ</span><span><strong>唐婧</strong><small>AIGC VISUAL DESIGN</small></span></a><nav class="main-nav ${state.menu ? 'open' : ''}">${Object.entries(labels).slice(0, 5).map(([key, label]) => `<button class="nav-link ${state.route === key ? 'active' : ''}" data-route="${key}">${label}</button>`).join('')}</nav><div class="header-actions"><button class="icon-button" data-theme-toggle aria-label="切换主题">${state.theme === 'dark' ? '☼' : '◐'}</button><button class="contact-button" data-route="about">联系我 <span>↗</span></button><button class="menu-button" data-menu>${state.menu ? '关闭' : '菜单'}</button></div></header><main>${content}</main><footer class="site-footer"><span>© 2026 唐婧</span><span>AIGC VISUAL / E-COMMERCE CONTENT</span><span>专注商品视觉、内容视频与 AI 工作流</span></footer>${state.modal ? modal(state.modal) : ''}</div>`
  bindEvents()
}
function homePage() {
  const featured = data.images.slice(0, 3)
  return `<section class="hero-section"><div class="hero-copy"><p class="eyebrow"><i></i> AIGC VISUAL DESIGNER / 2026</p><h1>把商品<br /><em>讲成故事。</em></h1><p class="hero-lede">我是唐婧，一名专注 AIGC 内容创作的视觉设计师。我用生成式视觉、短视频和内容工作流，帮助品牌把一个产品变成一整套可传播的内容资产。</p><div class="hero-actions"><button class="primary-button" data-route="work">浏览作品 <span>↗</span></button><button class="text-button" data-route="about">了解我的方法 <span>→</span></button></div><div class="hero-stats"><span><strong>4</strong><small>内容方向</small></span><span><strong>25+</strong><small>视觉案例</small></span><span><strong>AI</strong><small>工作流思维</small></span></div></div><div class="hero-visual"><div class="visual-tag">CHARACTER / 01</div><div class="model-stage ${state.resumeOpen ? 'assistant-open' : ''}"><div class="model-halo"></div><model-viewer id="hero-model" src="${assets}syrw3D.glb" alt="唐婧的 AI 角色模型" camera-controls auto-rotate rotation-per-second="10deg" shadow-intensity="1" exposure="1.1" environment-image="neutral" interaction-prompt="auto"></model-viewer></div>${resumeAssistant()}<div class="hero-line"></div></div></section><section class="section-block selected-section"><div class="section-heading"><div><p class="eyebrow">SELECTED WORK / 精选案例</p><h2>从第一眼，到下一次点击。</h2></div><button class="text-button" data-route="work">查看全部案例 <span>↗</span></button></div><div class="selected-grid">${featured.map((item, i) => `<button class="selected-card" data-open="${i}" data-set="images"><img src="${coverFor(item)}" alt="${item.title}" /><span><small>${String(i + 1).padStart(2, '0')} / ${item.type}</small><strong>${item.title}</strong><em>查看案例 ↗</em></span></button>`).join('')}</div></section><section class="statement-band"><p class="eyebrow">WHAT I DO / 我能做什么</p><div class="statement-grid"><h2>让视觉好看，<br /><em>也让业务好用。</em></h2><div class="capability-list"><div><span>01</span><strong>商品视觉</strong><p>详情图、海报、人物与场景，建立一套统一的商品表达。</p></div><div><span>02</span><strong>内容视频</strong><p>电商短视频、特效包装和 AI 漫剧，让内容进入传播场景。</p></div><div><span>03</span><strong>工作流</strong><p>用 Skill 与 Agent 把重复生产变成可复用、可检查的流程。</p></div></div></div></section><section class="section-block process-section"><div class="section-heading"><div><p class="eyebrow">PROCESS / 工作方法</p><h2>从需求到交付，保持每一步可复盘。</h2></div></div><div class="process-grid"><div><span>01</span><strong>理解商品</strong><p>先确认受众、卖点和渠道，再决定视觉语言。</p></div><div><span>02</span><strong>快速成片</strong><p>用 AI 加速探索，把方向尽早变成可讨论的画面。</p></div><div><span>03</span><strong>统一系统</strong><p>沉淀版式、提示词和验收标准，让好结果可持续。</p></div><div><span>04</span><strong>交付复盘</strong><p>记录资产、版本和下一轮优化建议，方便团队接手。</p></div></div></section>`
}
function portfolioPage(kind, title, intro, filters) {
  const items = data[kind]; const visible = state.filter === '全部' ? items : items.filter(item => item.type === state.filter)
  return `<section class="page-intro"><p class="eyebrow">${kind === 'images' ? 'IMAGE / 图像创作' : kind === 'social' ? 'SOCIAL / 多平台运营' : kind === 'motion' ? 'MOTION / 视频创作' : 'SYSTEM / 智能体创作'}</p><h1>${title}</h1><p>${intro}</p></section><section class="portfolio-controls"><div class="filter-row">${filters.map(filter => `<button class="filter-button ${state.filter === filter ? 'active' : ''}" data-filter="${filter}">${filter}</button>`).join('')}</div><span class="result-count">${visible.length} CASES</span></section><section class="work-grid ${kind === 'motion' ? 'motion-grid' : ''}">${visible.map(item => workCard(item, items.indexOf(item), kind)).join('')}</section>`
}
function aboutPage() {
  return `<section class="about-page"><div class="page-intro"><p class="eyebrow">ABOUT / 关于我</p><h1>视觉是入口，<br /><em>系统是后劲。</em></h1><p>我是唐婧，一名专注 AIGC 内容创作的视觉设计师。我的工作横跨商品图、品牌海报、短视频、账号运营和 Agent 工作流，习惯把创意落到可执行、可复盘的交付里。</p></div><div class="about-layout"><div class="about-note"><span>我的工作方式</span><strong>视觉创作<br />+ 内容策略<br />+ AI 工作流</strong><small>欢迎通过本作品集与我联系</small></div><div class="timeline"><div><span>VISUAL</span><strong>商品与品牌内容</strong><p>为电商与内容团队提供图像、视频和运营资产。</p></div><div><span>PROCESS</span><strong>从单张图到整套系统</strong><p>以商品和渠道为中心，完成从概念到交付的完整链路。</p></div><div><span>AI WORKFLOW</span><strong>把工具变成方法</strong><p>持续探索 Skill、Agent 和 Vibe Coding 在真实业务中的边界。</p></div></div></div><div class="contact-panel"><p class="eyebrow">LET'S MAKE SOMETHING USEFUL</p><h2>有一个商品，<br />值得被看见。</h2><button class="primary-button" data-route="work">从作品开始 <span>↗</span></button></div></section>`
}
const workflowData = {
  skill: {
    eyebrow: 'SKILL / 能力封装', title: 'Skill 搭建', count: '12', unit: 'SKILLS', intro: 'Skill 是面向具体设计任务的能力封装：把输入规范、出图策略和质检标准固定下来，让电商内容稳定交付。', flagship: '电商视觉生成 Skill', flagshipNote: '从商品需求进入，到主图、详情图和渠道适配完成的一条可复用链路。', image: assets + 'skill截图示例/ecommerce-visual-skill-preview.png', tags: ['商品详情图', '人物与穿搭', '场景生成', '海报封面', '短视频首帧', '内容文案', '数据复盘', '发布质检', '商品抠图', '风格迁移', '活动节点', '渠道适配'], steps: [['01','需求输入','平台、商品、受众、卖点、比例'],['02','结构化拆解','把卖点拆成画面、文案与构图规则'],['03','生成与质检','统一风格，检查主体、文字和安全边界'],['04','渠道交付','输出详情页、投放图和内容平台版本']], subs: ['商品详情图 Skill','服装穿搭 Skill','人物形象 Skill','电商海报 Skill','场景生成 Skill','短视频首帧 Skill']
  },
  agent: {
    eyebrow: 'AGENT / 业务编排', title: 'Agent 搭建', count: '5', unit: 'AGENTS', intro: 'Agent 是面向业务目标的任务编排：让多个 Skill 按顺序协作，完成选题、生产、审核与复盘，形成可追踪的内容闭环。', flagship: '小红书运营 Agent', flagshipNote: '从选题洞察到发布前检查，串起内容生产、审核和数据复盘。', image: assets + 'Agent示例/xhs-agent-workflow-preview-portrait.png', tags: ['选题洞察', '笔记生成', '视觉配图', '发布质检', '数据复盘'], steps: [['01','业务目标','明确账号定位、栏目与本轮增长任务'],['02','任务路由','按内容类型调用对应的 Skill 组合'],['03','人工审核','保留关键决策点，检查事实和品牌表达'],['04','复盘沉淀','记录版本、表现和下一次可复用的规则']], subs: ['商品内容批量 Agent','达人合作物料 Agent','活动节点内容 Agent','数据复盘 Agent']
  },
}
const workflowSubcaseData = {
  skill: {
    '商品详情图 Skill': { image: assets + '广告设计/美妆类/01_hero_main.png', scene: '商品详情页 / 长图', note: '把商品卖点拆成首屏、功能和信任信息，形成可复用的详情图结构。', input: '商品资料、卖点、平台比例', process: '卖点分层 → 画面生成 → 文字与主体质检', output: '主图、详情长图、渠道适配版本' },
    '服装穿搭 Skill': { image: assets + '广告设计/服装类/图片节点 1.png', scene: '服饰上新 / 穿搭内容', note: '围绕人物、版型和搭配关系，快速生成统一的服装内容视觉。', input: '款式图、面料、季节与人群', process: '人物设定 → 穿搭组合 → 风格一致性检查', output: '穿搭主视觉、卖点卡片、封面图' },
    '人物形象 Skill': { image: assets + '人物形象/真人写实类.png', scene: '人物 IP / 品牌角色', note: '先固定人物设定和镜头规则，再扩展不同场景与内容用途。', input: '人物设定、气质关键词、镜头需求', process: '角色设定 → 场景扩展 → 面部与风格检查', output: '人物资产、栏目封面、内容配图' },
    '电商海报 Skill': { image: assets + '海报封面/商品电商类.png', scene: '活动投放 / 节点传播', note: '把促销信息和商品利益点压缩为第一眼可读的投放画面。', input: '活动机制、商品卖点、投放尺寸', process: '信息排序 → 视觉构图 → 文案与安全区检查', output: '活动海报、投放素材、封面变体' },
    '场景生成 Skill': { image: assets + '广告设计/箱包类设计/图片节点 2.png', scene: '商品空间 / 使用场景', note: '以真实使用情境承接商品功能，让材质和比例更容易被理解。', input: '商品图、空间风格、使用情境', process: '空间搭建 → 商品融合 → 光影与比例检查', output: '场景主图、详情场景、氛围素材' },
    '短视频首帧 Skill': { image: assets + '海报封面/服装电商类.png', scene: '短视频开场 / 信息抓取', note: '为短视频先确定首帧构图、标题和商品焦点，减少后续试错。', input: '视频主题、商品焦点、平台比例', process: '开场钩子 → 画面生成 → 标题与主体检查', output: '首帧画面、标题版式、封面变体' },
  },
  agent: {
    '商品内容批量 Agent': { image: assets + 'skill截图示例/视觉生成.png', scene: '多 SKU 上新 / 批量生产', note: '将多个商品的资料统一整理，再按渠道批量调用视觉 Skill。', input: '商品清单、卖点表、渠道规则', process: '任务拆分 → Skill 路由 → 批量质检', output: '多 SKU 视觉包、版本清单、交付记录' },
    '达人合作物料 Agent': { image: assets + '小红书运营/小红书首页.jpg', scene: '达人合作 / 内容共创', note: '把达人 brief、品牌边界和平台规格放进同一条协作流程。', input: '达人 brief、品牌素材、发布时间', process: '需求匹配 → 素材编排 → 人工审核', output: '合作笔记、配图包、发布检查单' },
    '活动节点内容 Agent': { image: assets + '海报封面/商品电商类.png', scene: '大促节点 / 活动传播', note: '围绕节点节奏编排预热、爆发和返场内容，减少临时制作。', input: '节点日历、活动机制、渠道计划', process: '内容排期 → 素材生成 → 节点审核', output: '节点内容包、排期表、渠道版本' },
    '数据复盘 Agent': { image: assets + '小红书运营/小红书数据.jpg', scene: '内容复盘 / 下一轮决策', note: '把平台数据整理成下一轮选题、视觉和发布时间的行动建议。', input: '内容数据、周期目标、历史版本', process: '数据归因 → 问题聚类 → 规则沉淀', output: '复盘摘要、优化清单、可复用规则' },
  },
}
const workflowDemoData = {
  skill: {
    inputLabel: '预设商品 brief',
    input: '春季轻户外防晒衣｜女款｜轻薄防泼水｜小红书 / 详情页',
    outputTitle: '春季防晒衣 · 多渠道视觉包',
    outputItems: ['商品主视觉 1 张', '详情长图 1 套', '小红书封面 3 张'],
    outputNote: '已按 3 个渠道比例整理，可继续进入人工审稿。',
  },
  agent: {
    inputLabel: '预设运营目标',
    input: '「春日通勤」栏目｜目标：提升收藏率｜渠道：小红书',
    outputTitle: '春日通勤 · 发布前内容包',
    outputItems: ['选题卡 3 条', '笔记草稿 3 篇', '配图与检查单 1 份'],
    outputNote: '已完成发布前检查，保留人工确认后再发布。',
  },
}
function cancelWorkflowRun() {
  if (state.workflowTimer) window.clearTimeout(state.workflowTimer)
  state.workflowTimer = null
  state.workflowRunId += 1
}
function startWorkflowDemo(mode, input) {
  cancelWorkflowRun()
  const runId = state.workflowRunId
  state.workflowRun = { mode, status: 'running', step: 0, input: input.trim() || workflowDemoData[mode].input, output: null }
  state.workflowStep = 0
  render()
  scheduleWorkflowStep(mode, runId)
}
function scheduleWorkflowStep(mode, runId) {
  state.workflowTimer = window.setTimeout(() => {
    if (runId !== state.workflowRunId || state.route !== 'systems' || state.workflow !== mode) return
    const nextStep = state.workflowRun.step + 1
    if (nextStep < workflowData[mode].steps.length) {
      state.workflowRun.step = nextStep
      state.workflowStep = nextStep
      render()
      scheduleWorkflowStep(mode, runId)
      return
    }
    state.workflowRun.status = 'done'
    state.workflowRun.output = workflowDemoData[mode]
    render()
  }, 900)
}
function escapeHtml(value) {
  const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  return String(value).replace(/[&<>"']/g, character => entities[character])
}
function workflowDemoMarkup(mode, item) {
  const demo = workflowDemoData[mode]
  const run = state.workflowRun.mode === mode ? state.workflowRun : { mode, status: 'idle', step: -1, input: '', output: null }
  const running = run.status === 'running'
  const done = run.status === 'done'
  const currentStep = running || done ? Math.max(run.step, 0) : -1
  const statusText = done ? '模拟完成 · 可查看交付结果' : running ? `执行中 · ${String(currentStep + 1).padStart(2, '0')} / ${item.steps.length}` : '模拟数据 · 点击开始演示'
  const inputValue = run.input || demo.input
  return `<div class="demo-panel"><div class="demo-panel-head"><div><span class="demo-kicker">SIMULATION / 模拟执行</span><strong>${demo.inputLabel}</strong></div><span class="demo-status ${running ? 'is-running' : done ? 'is-done' : ''}" aria-live="polite"><i></i>${statusText}</span></div><form class="demo-launch" data-demo-form><input name="demo-input" value="${escapeHtml(inputValue)}" aria-label="${demo.inputLabel}" /><button type="submit" ${running ? 'disabled' : ''}>${running ? '执行中…' : done ? '重新执行' : '开始演示 ↗'}</button></form><div class="demo-progress" role="status"><span class="demo-progress-track"><i style="width:${done ? 100 : running ? ((currentStep + 1) / item.steps.length) * 100 : 0}%"></i></span><small>${done ? `${item.steps.length} 个节点已完成，结果已生成` : running ? '按预设节奏推进节点，约 4 秒完成' : '输入已准备好，结果将使用模拟数据生成'}</small></div></div><div class="demo-result ${done ? 'is-visible' : ''}" aria-live="polite"><div><span class="demo-result-kicker">OUTPUT / 模拟交付</span><strong>${done ? demo.outputTitle : '运行后显示模拟交付结果'}</strong></div>${done ? `<div class="demo-result-items">${demo.outputItems.map((output, index) => `<span><b>${String(index + 1).padStart(2, '0')}</b>${output}</span>`).join('')}</div><p>${demo.outputNote}</p>` : '<span class="demo-result-placeholder">等待工作流完成后生成</span>'}</div>`
}
function workflowPage(mode) {
  const item = workflowData[mode]
  const activeStep = item.steps[state.workflowStep] || item.steps[0]
  const run = state.workflowRun.mode === mode ? state.workflowRun : { status: 'idle', step: -1 }
  return `<section class="workflow-page"><div class="page-intro workflow-intro"><div class="workflow-switch"><button class="${mode === 'skill' ? 'active' : ''}" data-workflow="skill">Skill 搭建</button><button class="${mode === 'agent' ? 'active' : ''}" data-workflow="agent">Agent 搭建</button></div><p class="eyebrow">${item.eyebrow}</p><h1>${item.title}</h1><p>${item.intro}</p></div><section class="workflow-board"><aside class="workflow-rail"><div class="rail-kicker">FLAGSHIP / 旗舰案例</div><h2>${item.flagship}</h2><p>${item.flagshipNote}</p><div class="rail-divider"></div><div class="coverage-title"><span>能力覆盖</span><strong>${item.count}<small>${item.unit}</small></strong></div><div class="coverage-list">${item.tags.map((tag, i) => `<span><b>${String(i + 1).padStart(2, '0')}</b>${tag}</span>`).join('')}</div><div class="rail-foot">可复用 · 可检查 · 可交接</div></aside><article class="flagship-card"><header class="flagship-head"><div><span class="status-tag">交互式演示</span><span class="status-tag light">模拟数据</span></div><span class="flagship-code">${mode === 'skill' ? 'E-COMMERCE VISUAL SKILL' : 'CONTENT OPERATIONS AGENT'}</span></header><div class="flagship-body"><div class="flagship-copy"><p class="eyebrow">${mode === 'skill' ? 'FROM BRIEF TO ASSET' : 'FROM GOAL TO LOOP'}</p><h2>${item.flagship}</h2><p>${item.flagshipNote}</p>${workflowDemoMarkup(mode, item)}<div class="flow-list">${item.steps.map((step, index) => `<button class="flow-step ${index === state.workflowStep ? 'active' : ''} ${run.status === 'running' && index <= run.step ? 'is-complete' : ''}" data-workflow-step="${index}" aria-current="${index === state.workflowStep ? 'step' : 'false'}"><span>${step[0]}</span><div><strong>${step[1]}</strong><small>${step[2]}</small></div><b>${run.status === 'running' && index < run.step ? '✓' : '↗'}</b></button>`).join('')}</div></div><div class="flagship-preview"><div class="preview-top"><span>WORKFLOW PREVIEW</span><span class="preview-dot ${run.status === 'running' ? 'is-running' : run.status === 'done' ? 'is-done' : ''}"></span></div><img src="${item.image}" alt="${item.flagship}流程示例" /><div class="preview-focus"><small>当前节点 ${activeStep[0]}</small><strong>${activeStep[1]}</strong><span>${activeStep[2]}</span></div><div class="preview-caption">${mode === 'skill' ? '输入规范 → 视觉生成 → 质检交付' : '业务目标 → Skill 路由 → 审核复盘'}</div></div></div></article></section><section class="subcase-section"><div class="subcase-heading"><div><p class="eyebrow">CASE COVERAGE / 子案例</p><h2>${mode === 'skill' ? '同一套方法，覆盖不同商品场景。' : '一个 Agent，连接多个内容任务。'}</h2></div><span>${item.subs.length} SUB CASES</span></div><div class="subcase-grid">${item.subs.map((sub, i) => `<button class="subcase-card" data-workflow-subcase="${sub}"><span>${String(i + 1).padStart(2, '0')}</span><strong>${sub}</strong><em>查看范围 ↗</em></button>`).join('')}</div></section></section>`
}
function modal(item) {
  if (item.kind === 'workflow-subcase') {
    return `<div class="modal-backdrop" data-close-modal><section class="detail-modal workflow-detail-modal" role="dialog" aria-modal="true"><button class="modal-close" data-close-modal aria-label="关闭">×</button><div class="workflow-modal-media"><img src="${item.image}" alt="${item.title}代表性作品" /><span>${item.scene}</span></div><div class="modal-content"><p class="eyebrow">${item.type}</p><h2>${item.title}</h2><p>${item.note}</p><div class="workflow-detail-grid"><div><span>INPUT / 输入</span><strong>${item.input}</strong></div><div><span>FLOW / 链路</span><strong>${item.process}</strong></div><div><span>OUTPUT / 输出</span><strong>${item.output}</strong></div></div><div class="detail-row"><span>适用场景</span><strong>${item.scene}</strong></div></div></section></div>`
  }
  const media = item.video ? `<video controls autoplay src="${item.video}"></video>` : item.gallery ? galleryMarkup(item) : item.image ? `<img src="${item.image}" alt="${item.title}" />` : `<div class="modal-placeholder"><span>${state.workflow === 'skill' ? 'SKILL' : 'AGENT'}</span><strong>${item.title}</strong></div>`
  return `<div class="modal-backdrop" data-close-modal><section class="detail-modal" role="dialog" aria-modal="true"><button class="modal-close" data-close-modal aria-label="关闭">×</button><div class="modal-media">${media}</div><div class="modal-content"><p class="eyebrow">${item.type}</p><h2>${item.title}</h2><p>${item.note}</p><div class="detail-row"><span>DELIVERABLE</span><strong>${item.video ? '短视频 / 动效片段' : '视觉资产 / 商业内容'}</strong></div><div class="detail-row"><span>ROLE</span><strong>视觉创作 · AI 内容设计</strong></div></div></section></div>`
}
function render() {
  let content = ''
  if (state.route === 'home') content = homeWithTools()
  if (state.route === 'work') content = portfolioPage('images', '商品与品牌视觉', '以商品为核心，建立能直接进入详情页、投放和内容渠道的视觉资产。', ['全部', '广告设计', '海报封面', '人物形象'])
  if (state.route === 'social') content = portfolioPage('social', '运营内容与数据', '把账号定位、内容栏目和复盘数据整理成可持续的内容系统。', ['全部', '多平台运营'])
  if (state.route === 'motion') content = portfolioPage('motion', '视频与动态内容', '电商短视频、特效包装和 AI 漫剧，覆盖从商品展示到品牌叙事的不同节奏。', ['全部', '电商广告视频', '特效视频', '剧情短片'])
  if (state.route === 'systems') content = workflowPage(state.workflow)
  if (state.route === 'about') content = aboutPage()
  shell(content)
}
function bindEvents() {
  root.querySelectorAll('[data-route]').forEach(el => el.addEventListener('click', event => { event.preventDefault(); routeTo(el.dataset.route) }))
  root.querySelectorAll('[data-filter]').forEach(el => el.addEventListener('click', () => { state.filter = el.dataset.filter; render() }))
  root.querySelectorAll('[data-open]').forEach(el => el.addEventListener('click', () => { const item = data[el.dataset.set]?.[Number(el.dataset.open)]; if (item) { state.modal = item; render() } }))
  root.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', event => { if (event.target === el || el.classList.contains('modal-close')) { state.modal = null; render() } }))
  root.querySelector('[data-theme-toggle]')?.addEventListener('click', () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('portfolio-theme', state.theme); render() })
  root.querySelector('[data-menu]')?.addEventListener('click', () => { state.menu = !state.menu; render() })
  root.querySelectorAll('[data-workflow]').forEach(el => el.addEventListener('click', () => { cancelWorkflowRun(); state.workflow = el.dataset.workflow; state.workflowStep = 0; state.workflowRun = { mode: null, status: 'idle', step: -1, input: '', output: null }; state.modal = null; render() }))
  root.querySelectorAll('[data-workflow-step]').forEach(el => el.addEventListener('click', () => { state.workflowStep = Number(el.dataset.workflowStep); render() }))
  root.querySelector('[data-demo-form]')?.addEventListener('submit', event => { event.preventDefault(); const input = event.currentTarget.elements['demo-input']; startWorkflowDemo(state.workflow, input?.value || '') })
  root.querySelectorAll('[data-workflow-subcase]').forEach(el => el.addEventListener('click', () => { const text = el.dataset.workflowSubcase; const detail = workflowSubcaseData[state.workflow]?.[text]; state.modal = { kind: 'workflow-subcase', title: text, type: state.workflow === 'skill' ? 'Skill 工作流' : 'Agent 工作流', ...detail }; render() }))
  root.querySelectorAll('[data-resume-question]').forEach(el => el.addEventListener('click', () => { state.resumeAnswer = answerResumeQuestion(el.dataset.resumeQuestion); render() }))
  root.querySelector('[data-resume-toggle]')?.addEventListener('click', () => { state.resumeOpen = !state.resumeOpen; render() })
  root.querySelector('[data-resume-form]')?.addEventListener('submit', event => { event.preventDefault(); const input = event.currentTarget.elements['resume-question']; state.resumeAnswer = answerResumeQuestion(input.value); render() })
  setupMotion()
}
function setupMotion() {
  const nodes = root.querySelectorAll('.section-block,.statement-band,.process-grid>div,.work-card,.page-intro,.about-layout,.contact-panel')
  nodes.forEach((node, index) => { node.classList.add('reveal'); node.style.setProperty('--reveal-delay', `${Math.min(index * 45, 260)}ms`) })
  if (!('IntersectionObserver' in window)) { nodes.forEach(node => node.classList.add('is-visible')); return }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: .12 })
  nodes.forEach(node => observer.observe(node))
}
window.addEventListener('popstate', () => { state.route = routeFromLocation(); render() })
window.addEventListener('keydown', event => { if (event.key !== 'Escape') return; if (state.modal) { state.modal = null; render(); return } if (state.resumeOpen) { state.resumeOpen = false; render() } })
render()
