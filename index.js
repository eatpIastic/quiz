/// <reference types="../CTAutocomplete" />

import registerWhen from "../BloomCore/utils/Utils";
import Dungeon from "../BloomCore/Dungeons/Dungeon";

let questionTime = 0;
let length = 100;

registerWhen(register("renderOverlay", () => {
  const remaining = (length - (Date.now() - questionTime) / 1000).toFixed(2);
  if (remaining < 0) return
  Renderer.drawString(`${remaining}`, (Renderer.screen.getWidth()/2)-(Renderer.getStringWidth(`${remaining}`)/2), (Renderer.screen.getHeight()/2)+10);
}), () => Dungeon.inDungeon);


register("chat", () => {
  questionTime = Date.now();
  length = 12;
}).setCriteria("[STATUE] Oruo the Omniscient: I am Oruo the Omniscient. I have lived many lives. I have learned all there is to know.")

register("chat", () => {
  questionTime = Date.now();
  length = 8.2;
}).setCriteria(/\[STATUE\] Oruo the Omniscient: .+ answered Question #\d correctly!/)
