import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus"; 
import "element-plus/dist/index.css";
import router from '@/router'
import VueAMap, { initAMapApiLoader } from "@vuemap/vue-amap";
import "@vuemap/vue-amap/dist/style.css";
initAMapApiLoader({
  key: "165ffdb04e5182122b110a5d3e9928e2",
});
import zhCn from "element-plus/es/locale/lang/zh-cn";

const app = createApp(App);
app.use(ElementPlus, { locale: zhCn });
app.use(VueAMap);
app.use(router);
app.mount("#app");
