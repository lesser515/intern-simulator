import { useCallback, useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { FactionScreen } from "./components/FactionScreen.jsx";
import { GameScreen } from "./components/GameScreen.jsx";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { NameScreen } from "./components/NameScreen.jsx";
import { RoleScreen } from "./components/RoleScreen.jsx";
import { StartScreen } from "./components/StartScreen.jsx";
import { chooseCareer, chooseSubRole, completeTask, initialState, performAction, selectFaction, setPlayerName, startInternship, advanceWeek } from "./game/engine.js";
import "./source.css";

export default function App() {
  const [state, setState] = useState(initialState);
  const update = useCallback((transition) => setState((current) => transition(current)), []);
  const content = state.phase === "loading" ? <LoadingScreen onComplete={() => update((current) => ({ ...current, phase: "start" }))} />
    : state.phase === "start" ? <StartScreen onCareer={(id) => update((current) => chooseCareer(current, id))} />
    : state.phase === "subRole" ? <RoleScreen careerId={state.careerTrack} onBack={() => update((current) => ({ ...current, phase: "start", careerTrack: null }))} onRole={(id) => update((current) => chooseSubRole(current, id))} />
    : state.phase === "name" ? <NameScreen careerId={state.careerTrack} roleId={state.subRole} onBack={() => update((current) => ({ ...current, phase: "subRole", subRole: null }))} onStart={(name) => update((current) => startInternship(setPlayerName(current, name)))} />
    : state.phase === "factionSelect" ? <FactionScreen mentorId={state.mentorPersonality} onFaction={(id) => update((current) => selectFaction(current, id))} />
    : <GameScreen state={state} onAction={(id) => update((current) => performAction(current, id))} onTask={(kind) => update((current) => completeTask(current, kind))} onAdvance={() => update(advanceWeek)} />;
  return <div className="source-app min-h-screen bg-slate-50 text-slate-900 flex flex-col"><div className="flex-1">{content}</div><Footer /></div>;
}
