function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DncqV9FM.js","assets/index-0Jr9f2qy.js","assets/index-DqWS7ZOo.css","assets/index-hGGAPcjL.js","assets/index-DrHOpe1q.js","assets/index-CUSvBJuo.js","assets/index-BCbbINdD.js","assets/index-BoJsHMo9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-0Jr9f2qy.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DncqV9FM.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-hGGAPcjL.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DrHOpe1q.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CUSvBJuo.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BCbbINdD.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BoJsHMo9.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
