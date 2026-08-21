import { useEffect, useState } from "react";
import { loadingMessages } from "../game/data.js";

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const timer = setInterval(() => setProgress((value) => { const next = Math.min(100, value + 8); if (next === 100) { clearInterval(timer); setTimeout(onComplete, 180); } return next; }), 170); return () => clearInterval(timer); }, [onComplete]);
  return <section className="min-h-[72vh] flex flex-col items-center justify-center text-center px-6"><div className="text-6xl mb-5 animate-bounce">🏢</div><h1 className="text-4xl font-black tracking-tight text-slate-900">互联网大厂</h1><h2 className="text-3xl font-black text-indigo-600 mt-1">实习模拟器</h2><p className="text-slate-500 mt-3">Intern Survivor Simulator · 源码重建版</p><p className="text-sm text-slate-400 mt-6">{loadingMessages[Math.min(loadingMessages.length - 1, Math.floor(progress / 25))]}</p><div className="w-64 h-2 bg-slate-200 rounded-full mt-3 overflow-hidden"><div className="h-full bg-indigo-500 transition-all" style={{ width: `${progress}%` }} /></div><p className="text-xs text-slate-400 mt-2">{progress}% — 正在为你准备工位...</p></section>;
}
