function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B2L9Dle1.js","assets/index-BMlR1jPU.js","assets/index-DqWS7ZOo.css","assets/index-D8MTLcgY.js","assets/index-BIiS9a2K.js","assets/index-C47RRLdw.js","assets/index-CrWeZuRq.js","assets/index-CGaPgrlv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BMlR1jPU.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B2L9Dle1.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D8MTLcgY.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BIiS9a2K.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C47RRLdw.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CrWeZuRq.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CGaPgrlv.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
