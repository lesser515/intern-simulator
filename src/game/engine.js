import { actions, careerTracks, factions, mentors } from "./data.js";

const clamp = (value) => Math.max(0, Math.min(100, value));
const mergeEffects = (stats, effects) => Object.fromEntries(Object.entries(stats).map(([key, value]) => {
  const nextValue = value + (effects[key] || 0);
  return [key, key === "money" ? Math.max(0, nextValue) : clamp(nextValue)];
}));

export const initialState = () => ({
  phase: "loading", week: 1, totalWeeks: 12, playerName: "", careerTrack: null, subRole: null,
  mentorPersonality: null, faction: null, stats: { hair: 80, dignity: 70, kpi: 15, popularity: 30, ability: 15, anxiety: 20, mentorFavor: 50, money: 800 },
  weeklyTasks: { eventCount: 1 + Math.floor(Math.random() * 2), eventCompleted: 0, messageCount: 2, messageCompleted: 0 },
  log: [], selectedAction: null, ending: null,
});

export const chooseCareer = (state, id) => ({ ...state, careerTrack: id, phase: "subRole" });
export const chooseSubRole = (state, id) => ({ ...state, subRole: id, phase: "name" });
export const setPlayerName = (state, playerName) => ({ ...state, playerName: playerName.trim() });

export const startInternship = (state) => {
  const mentorKeys = Object.keys(mentors);
  const mentorPersonality = mentorKeys[Math.floor(Math.random() * mentorKeys.length)];
  const mentor = mentors[mentorPersonality];
  return { ...state, phase: "factionSelect", mentorPersonality, log: [`🧑‍🏫 你的导师是${mentor.icon}「${mentor.name}」— ${mentor.description}`] };
};

export const selectFaction = (state, factionId) => {
  const faction = factions[factionId];
  return { ...state, phase: "playing", faction: factionId, log: [...state.log, `🏴 你加入了${faction.icon}「${faction.name}」— ${faction.specialDesc}`, `第1周 - ${state.playerName}，欢迎入职！你的工牌还热乎着呢。`] };
};

export const performAction = (state, actionId) => {
  const action = actions.find((item) => item.id === actionId);
  if (!action || state.phase !== "playing") return state;
  const nextStats = mergeEffects(state.stats, action.effects);
  const next = { ...state, stats: nextStats, selectedAction: actionId, log: [...state.log, `第${state.week}周 - ${action.icon} ${action.name}`], weeklyTasks: { ...state.weeklyTasks, eventCompleted: Math.min(state.weeklyTasks.eventCount, state.weeklyTasks.eventCompleted + 1) } };
  return nextStats.hair <= 0 || nextStats.dignity <= 0 || nextStats.anxiety >= 100 ? { ...next, phase: "gameOver", ending: "本周的压力已经超过承受范围。" } : next;
};

export const completeTask = (state, kind) => {
  const key = kind === "event" ? "eventCompleted" : "messageCompleted";
  const countKey = kind === "event" ? "eventCount" : "messageCount";
  const tasks = { ...state.weeklyTasks, [key]: Math.min(state.weeklyTasks[countKey], state.weeklyTasks[key] + 1) };
  return { ...state, weeklyTasks: tasks, log: [...state.log, `第${state.week}周 - 完成了${kind === "event" ? "随机事件" : "消息查看"}`] };
};

export const canAdvance = (state) => state.weeklyTasks.eventCompleted >= state.weeklyTasks.eventCount && state.weeklyTasks.messageCompleted >= state.weeklyTasks.messageCount;

export const advanceWeek = (state) => {
  if (!canAdvance(state)) return state;
  if (state.week >= state.totalWeeks) return { ...state, phase: "victory", ending: "实习期结束，进入转正评审。" };
  const mentor = mentors[state.mentorPersonality];
  const faction = factions[state.faction];
  const weeklyEffects = { money: (careerTracks.find((track) => track.id === state.careerTrack)?.salary || 200) * 5, anxiety: 1, hair: -1, kpi: -3, mentorFavor: -2, ...(mentor?.weeklyEffect || {}), ...(faction?.weeklyEffect || {}) };
  return { ...state, week: state.week + 1, stats: mergeEffects(state.stats, weeklyEffects), weeklyTasks: { eventCount: 1 + Math.floor(Math.random() * 2), eventCompleted: 0, messageCount: 2, messageCompleted: 0 }, selectedAction: null, log: [...state.log, `进入第${state.week + 1}周`] };
};
