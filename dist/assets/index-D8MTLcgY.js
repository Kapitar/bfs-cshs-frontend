function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-D0mwxL3O.js","assets/index-BMlR1jPU.js","assets/index-DqWS7ZOo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BMlR1jPU.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-D0mwxL3O.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
