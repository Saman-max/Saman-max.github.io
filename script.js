'use strict';
const projectNotes = {
 application: {title:'留学网申助手', subtitle:'SkipApplication · Web + Browser Extension', sections:[['从什么问题开始','不同学校的网申系统需要重复填写相似信息，但字段名称、表单结构和材料要求不一致。项目围绕“维护一套可复用的申请资料，再辅助完成不同页面”展开。'],['产品流程','在 Web 端整理申请事实与材料，浏览器插件扫描目标页面字段，结合本地规则与 LLM 语义匹配给出建议，再由用户确认并写入。'],['实现与取舍','已有 Web 端、FastAPI 后端与 WXT 浏览器插件实现，包含候选资料选择、填写状态反馈与材料文件匹配上传。结构化事实与带学校语境的开放题分别管理；有歧义或缺失的信息引导用户补充。'],['当前状态','持续迭代中的项目。现有能力不代表全面适配所有学校的网申系统；最终递交由用户完成。']],tags:['Python','FastAPI','React','Vite','WXT','LLM'],note:'这里展示项目流程与实现概况，个人负责模块和合作分工仍待补充；封面为项目功能流程图。'},
 dance:{title:'AI 舞蹈教练',subtitle:'Shokz · User Discovery & Prototype',sections:[['从什么问题开始','视频教程便于跟练，但学习者很难知道自己的动作哪里有偏差，课下练习也缺少及时反馈。'],['我的参与','设计筛选问卷与访谈提纲，梳理用户需求，参与 Demo 原型实现与 MVP 优先级取舍。通过访谈收敛人群与练习场景。'],['原型探索','探索参考视频与摄像头画面分屏、姿态比较和语音反馈。关注家庭空间、摄像头摆放、动作与节奏差异，以及提示时机对练习的影响。'],['项目状态','实习期间参与的原型项目。后续仍需通过真实练习场景验证识别与反馈效果。']],tags:['React','TypeScript','MediaPipe','TTS','User Research'],note:'实习项目仅展示经历概述，未公开公司内部代码、用户资料或内部文档。封面为项目功能流程图。'},
 korean:{title:'韩语口语陪练',subtitle:'Graduation Project · Language Learning',sections:[['项目动机','把韩语学习背景与大模型应用结合，探索一种可以直接开口交流的语言练习方式。'],['我的工作','在本科毕业项目中开发支持语音与文字交互的韩语口语陪练 Demo。'],['关注的问题','从读教材到真实表达，学习者需要更多练习机会。项目以可交互的陪练原型探索这一问题。']],tags:['LLM Applications','Korean Learning','Voice Interaction'],note:'本科毕业项目 Demo；未将原型描述为已上线或经过大规模验证的产品。封面为项目功能流程图。'},
 nlp:{title:'Python 文本处理与关系抽取',subtitle:'Course Project · From Text to Structure',sections:[['问题与目标','将分散的网页文本组织成可以进一步处理和分析的语料，探索从文本中抽取实体关系。'],['我的工作','独立搭建 Python 文本处理工作流，涵盖网页采集、HTML 解析、XML 结构化语料组织、语言预处理与基于依存路径的实体关系抽取。'],['学习重点','关注原始数据、结构化表示与抽取方法之间的衔接，并通过完整工作流理解语言数据处理。']],tags:['Python','HTML Parsing','XML','NLP'],note:'课程项目；未声称已发表论文或取得未经核实的评测结果。封面为项目功能流程图。'}
};
const dialog=document.querySelector('#project-dialog');
function fillDialog(title,subtitle,sections,tags=[],note='',cover=''){
 const root=document.querySelector('#dialog-content');root.replaceChildren();
 const h=document.createElement('h2');h.id='dialog-title';h.textContent=title;root.append(h);
 const s=document.createElement('p');s.className='dialog-subtitle';s.textContent=subtitle;root.append(s);
 if(cover){const img=document.createElement('img');img.className='dialog-cover';img.src='assets/cover-'+cover+'.svg';img.alt=title+'核心功能流程图';img.width=720;img.height=520;root.append(img)}
 for(const [label,body] of sections){const t=document.createElement('h3');t.textContent=label;const p=document.createElement('p');p.textContent=body;root.append(t,p)}
 if(tags.length){const el=document.createElement('div');el.className='tags';tags.forEach(tag=>{const e=document.createElement('span');e.textContent=tag;el.append(e)});root.append(el)}
 if(note){const n=document.createElement('p');n.className='dialog-disclaimer';n.textContent=note;root.append(n)}
 dialog.showModal();
}
document.querySelectorAll('[data-project]').forEach(el=>el.addEventListener('click',()=>{const p=projectNotes[el.dataset.project];fillDialog(p.title,p.subtitle,p.sections,p.tags,p.note,el.dataset.project)}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.querySelector('#resume-button').addEventListener('click',()=>fillDialog('经历概览','Haoyu Luo · 罗皓予',[
 ['教育','上海外国语大学 · 朝鲜语本科（2022–2026）；东国大学交换学习（2024）；东华大学统计学相关课程修读（2023–2024）。'],
 ['实习','韶音：AI 创新产品实习生（2026.05–07）；魔珐科技：AI 产品实习生（2026.01–03）；百度：AIGC 产品实习生（2025.06–11）；上海人工智能实验室：产品实习生（2024.06–09）。'],
 ['项目','留学网申助手、AI 舞蹈教练、韩语口语陪练、Python 文本处理与关系抽取。'],
 ['竞赛','2025 MathorCup 本科生组赛区二等奖；2024 全球 AI 攻防挑战赛赛道一团队初赛第 43 / 1,574 名。']
],['User Research','PRD / MVP','Python','SQL','Figma']));
const filters=document.querySelectorAll('.filter');
filters.forEach(b=>b.addEventListener('click',()=>{filters.forEach(f=>{const active=f===b;f.classList.toggle('active',active);f.setAttribute('aria-pressed',String(active))});let n=0;document.querySelectorAll('.project').forEach(p=>{p.hidden=b.dataset.filter!=='all'&&p.dataset.category!==b.dataset.filter;if(!p.hidden)n++});document.querySelector('.project-count').textContent=String(n).padStart(2,'0')+' PROJECTS'}));
const navLinks=[...document.querySelectorAll('nav a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}})},{rootMargin:'-10% 0px -65% 0px',threshold:0});
navLinks.forEach(a=>{const section=document.querySelector(a.hash);if(section)observer.observe(section)});
let toastTimer;function toast(s){const t=document.querySelector('#toast');t.textContent=s;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600)}
document.querySelector('#copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href.split('#')[0]);toast('主页链接已复制')}catch{toast('请从浏览器地址栏复制主页链接')}});
document.querySelector('#year').textContent=new Date().getFullYear();
// Slow, low-luminance botanical fireworks. No flashes, sound, or input tracking.
const canvas=document.querySelector('#fireworks'),ctx=canvas.getContext('2d');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let enabled=!reduced.matches,w=0,h=0,frame=0,last=0,clock=0;
const palettes=[[194,161,111],[153,118,182],[95,151,154],[186,124,145]];
const blooms=[{x:.07,y:.34,r:.30,phase:2.1,col:0},{x:.92,y:.15,r:.34,phase:8.2,col:1},{x:.88,y:.84,r:.25,phase:13.5,col:2},{x:.05,y:.92,r:.22,phase:17.8,col:3}];
function resize(){w=innerWidth;h=innerHeight;const d=Math.min(devicePixelRatio||1,1.6);canvas.width=Math.round(w*d);canvas.height=Math.round(h*d);canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(d,0,0,d,0,0);draw()}
function draw(){ctx.clearRect(0,0,w,h);const scale=Math.min(w,1000);for(const [bi,b] of blooms.entries()){
 const life=((clock*.42+b.phase)%20)/20;const rise=Math.sin(Math.PI*life);const radius=scale*b.r*(.45+life*.8);const opacity=Math.pow(rise,.65)*.27;const cx=w*b.x,cy=h*b.y;const rgb=palettes[b.col];const n=w<600?31:53;
 for(let i=0;i<n;i++){const angle=i/n*Math.PI*2+bi*.37;const variation=.78+.22*Math.sin(i*7.13+bi);const length=radius*variation;ctx.beginPath();for(let k=0;k<=18;k++){const t=k/18;const rad=length*(.12+t*.88);const a=angle+Math.sin(t*2+clock*.06+i*.2)*.08*t;const x=cx+Math.cos(a)*rad;const y=cy+Math.sin(a)*rad+rad*rad/scale*.16; k?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.strokeStyle=`rgba(${rgb.join(',')},${opacity*(.3+.4*Math.sin(i*1.9)**2)})`;ctx.lineWidth=.55;ctx.stroke();
 for(let j=0;j<7;j++){const t=.22+j*.12;const rad=length*t;const a=angle+Math.sin(t*2+clock*.06+i*.2)*.08*t;const x=cx+Math.cos(a)*rad,y=cy+Math.sin(a)*rad+rad*rad/scale*.16;ctx.beginPath();ctx.arc(x,y,j===6?1:.55,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb.join(',')},${opacity*(.65+.3*Math.sin(i+j+clock*.12)**2)})`;ctx.fill()}
 }
 const glow=ctx.createRadialGradient(cx,cy,0,cx,cy,radius*.75);glow.addColorStop(0,`rgba(${rgb.join(',')},${opacity*.055})`);glow.addColorStop(1,`rgba(${rgb.join(',')},0)`);ctx.fillStyle=glow;ctx.fillRect(cx-radius,cy-radius,radius*2,radius*2);
}}
function tick(t){if(!enabled||document.hidden){frame=0;last=0;return}if(t-last>40){clock+=last?Math.min((t-last)/1000,.1):.04;last=t;draw()}frame=requestAnimationFrame(tick)}
function updateMotion(){const b=document.querySelector('#motion-toggle');b.setAttribute('aria-pressed',String(enabled));b.setAttribute('aria-label',enabled?'暂停背景动画':'开启背景动画');document.querySelector('#motion-label').textContent=enabled?'动态开启':'动态暂停';if(enabled&&!frame&&!document.hidden)frame=requestAnimationFrame(tick);if(!enabled){cancelAnimationFrame(frame);frame=0;last=0}}
document.querySelector('#motion-toggle').addEventListener('click',()=>{enabled=!enabled;updateMotion()});reduced.addEventListener('change',()=>{enabled=!reduced.matches;updateMotion()});document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateMotion()});addEventListener('resize',resize);resize();updateMotion();
