import { useState } from "react";
import { careerTracks } from "../game/data.js";

const aliases = ["逍遥", "无涯", "卷王", "摸鱼", "不加班", "常加班", "谢顶"];

export function NameScreen({ careerId, roleId, onBack, onStart }) {
  const [name, setName] = useState("");
  const career = careerTracks.find((track) => track.id === careerId);
  const roleName = career?.subRoles.find((role) => role.id === roleId)?.name || roleId;
  const careerName = career ? `${career.icon}${career.name}` : careerId;
  return <section className="max-w-xl mx-auto px-4 py-10 text-center"><button className="block text-sm text-indigo-600 mb-10" onClick={onBack}>← 返回选择岗位</button><h2 className="text-2xl font-black text-slate-900">给自己取个花名吧</h2><p className="inline-block mt-4 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">{careerName} · {roleName}</p><div className="flex gap-2 max-w-sm mx-auto mt-8"><input autoFocus value={name} onChange={(event) => setName(event.target.value)} placeholder="输入你的花名..." maxLength={8} className="flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500" /><button className="px-4 rounded-lg border border-slate-200 bg-white" onClick={() => setName(aliases[Math.floor(Math.random() * aliases.length)])}>🎲 随机</button></div><button disabled={!name.trim()} onClick={() => onStart(name)} className="mt-5 w-full max-w-sm rounded-lg bg-indigo-600 py-3 text-white font-bold disabled:opacity-40">🚀 开始实习之旅</button><p className="text-xs text-slate-400 mt-4">提示：大厂花名一般是2-4个字，比如“逍遥”、“无涯”、“卷王”</p></section>;
}
