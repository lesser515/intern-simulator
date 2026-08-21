# 互联网大厂实习模拟器

这是从线上构建地址恢复、并逐步重建为可维护源码的独立版本：

`https://common-infra-online.oss-cn-beijing.aliyuncs.com/rush-app/builds/yoc8fpl3yj4d/2e0c09d/index.html`

## 本地运行

在本目录执行：

```bash
npm run dev
```

然后打开 <http://localhost:4173>。

## 源码版

恢复版仍然由 `index.html` 加载线上生产构建，作为行为基准和发布兜底。新建的可维护源码位于 `src/`，入口是 `source.html`：

```bash
npm install
npm run dev:source
```

然后打开 <http://127.0.0.1:4174/source.html>。源码版已经拆分为：

- `src/game/data.js`：岗位、子岗位、导师、圈子、属性和行动数据
- `src/game/engine.js`：状态流转、属性计算、任务和周推进规则
- `src/components/`：加载、岗位选择、花名、导师/圈子、游戏面板和页脚
- `src/App.jsx` / `src/main.jsx`：应用编排和入口

源码版第一阶段覆盖原版的主要入场流程和基础周循环；原生产构建仍完整保留，便于逐步对照补齐复杂事件、成就和结局。

## 恢复范围

- 已保留线上版本的 HTML、JavaScript bundle 和 CSS bundle，页面流程与线上版本一致。
- 已移除原平台运行监控和共享访问计数，公开部署不会继续向原平台发送运行数据。
- 这是生产构建产物，不是原始 React/TypeScript 源码；原平台没有暴露源码映射文件，因此目前适合直接运行、备份和重新部署。
- 应用本身不依赖业务后端。访问量统计会尝试调用 `api.countapi.xyz`，该请求失败不会影响游戏流程。
- 字体仍从 Google Fonts 加载；离线时会自动回退到系统字体。
- 首次进入会显示使用指南；关闭后可通过右下角 `?` 按钮再次打开，也可勾选“下次不再自动显示”。指南由 `guide.js` 和 `guide.css` 提供，并同时接入恢复版与源码版入口。

## 后续维护建议

如果要继续大幅改玩法或界面，建议以当前页面和 bundle 中的文案、数据结构为基线，重新建立 React/Vite 源码工程；当前版本可作为行为对照和发布兜底。

## GitHub Pages

仓库根目录的 `index.html` 是当前正式发布版，可直接通过 GitHub Pages 托管。`src/` 是正在重建的 React 源码，后续可以在任何终端克隆仓库继续修改。
