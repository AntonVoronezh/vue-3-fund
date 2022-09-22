import { createApp } from "vue";
import App from "./App";
import comp from "@/components/UI";
import router from "@/router/router";

const app = createApp(App);

comp.forEach((item) => app.component(item.name, item));

app.use(router).mount("#app");
