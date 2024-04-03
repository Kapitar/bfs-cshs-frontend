function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DdUdCe3M.js","assets/index-E8lgpYz9.js","assets/index-By4G4aqi.css","assets/index-Dy2Q9AzX.js","assets/index--KHUnwaK.js","assets/index-BLHa9X_T.js","assets/index-DC66e10o.js","assets/index-BV5erwNG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-E8lgpYz9.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DdUdCe3M.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Dy2Q9AzX.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index--KHUnwaK.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BLHa9X_T.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DC66e10o.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BV5erwNG.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
