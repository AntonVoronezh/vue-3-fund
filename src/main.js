import { createApp } from "vue";
import App from "./App";
import comp from "@/components/UI";

const app = createApp(App);

comp.forEach((item) => app.component(item.name, item));

app.mount("#app");
