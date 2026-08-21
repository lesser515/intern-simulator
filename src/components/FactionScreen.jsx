import { factions, mentors } from "../game/data.js";

export function FactionScreen({ mentorId, onFaction }) {
  const mentor = mentors[mentorId];
  return <section className="max-w-2xl mx-auto px-4 py-10"><div className="text-center"><div className="text-5xl">{mentor.icon}</div><h2 className="text-2xl font-black mt-3">你的导师是：{mentor.name}</h2><p className="text-slate-500 mt-2">{mentor.description}</p><p className="text-xs text-indigo-500 mt-3">💡 {mentor.hint}</p></div><h3 className="text-xl font-bold mt-10">🏴 选择你的实习生圈子</h3><p className="text-sm text-slate-500 mt-1 mb-4">第2周时你会被拉入一个实习生小群，不同圈子有不同的buff</p><div className="grid gap-3">{Object.entries(factions).map(([id, faction]) => <button key={id} onClick={() => onFaction(id)} className="p-4 rounded-xl border border-slate-200 bg-white text-left hover:border-indigo-300 hover:shadow-md transition-all"><strong className="text-lg">{faction.icon} {faction.name}</strong><p className="text-sm text-slate-500 mt-1">{faction.description}</p><p className="text-xs text-indigo-500 mt-2">✨ {faction.specialDesc}</p></button>)}</div></section>;
}
