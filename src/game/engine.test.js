import test from "node:test";
import assert from "node:assert/strict";
import { advanceWeek, canAdvance, chooseCareer, chooseSubRole, completeTask, initialState, performAction, selectFaction, setPlayerName, startInternship } from "./engine.js";

test("new player can reach the first playable week", () => {
  let state = initialState();
  state = chooseCareer(state, "dev");
  state = chooseSubRole(state, "backend");
  state = startInternship(setPlayerName(state, "卷王"));
  state = selectFaction(state, "zhongjian");
  assert.equal(state.phase, "playing");
  assert.equal(state.playerName, "卷王");
  assert.equal(state.careerTrack, "dev");
  assert.equal(state.subRole, "backend");
});

test("weekly tasks gate advancing and effects are additive", () => {
  let state = selectFaction(startInternship(setPlayerName(chooseSubRole(chooseCareer(initialState(), "dev"), "backend"), "卷王")), "zhongjian");
  const before = state.stats;
  state = performAction(state, "ask_mentor");
  assert.equal(state.stats.ability, before.ability + 4);
  assert.equal(state.stats.mentorFavor, before.mentorFavor + 5);
  assert.equal(canAdvance(state), false);
  for (let index = 0; index < state.weeklyTasks.eventCount; index += 1) state = completeTask(state, "event");
  for (let index = 0; index < state.weeklyTasks.messageCount; index += 1) state = completeTask(state, "message");
  assert.equal(canAdvance(state), true);
  assert.equal(advanceWeek(state).week, 2);
});
