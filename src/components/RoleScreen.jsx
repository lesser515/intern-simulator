import { careerTracks } from "../game/data.js";

export function RoleScreen({ careerId, onBack, onRole }) {
  const career = careerTracks.find((track) => track.id === careerId);
  return <section className="max-w-2xl mx-auto px-4 py-10"><button className="text-sm text-indigo-600 mb-8" onClick={onBack}>← 返回选择岗位</button><h2 className="text-2xl font-black text-slate-900 mb-6">{career.icon}选择你的具体岗位</h2><div className="grid gap-3 sm:grid-cols-2">{career.subRoles.map((role) => <button key={role.id} onClick={() => onRole(role.id)} className="p-4 text-left rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all"><span className="text-2xl mr-2">{role.icon}</span><strong>{role.name}</strong></button>)}</div></section>;
}
