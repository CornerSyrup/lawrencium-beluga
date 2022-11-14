import { createApp } from "vue";

import vuetify from "../plugin/vuetify";

import "./main.css";
import App from "./App.vue";

createApp(App).use(vuetify).mount("#app");
