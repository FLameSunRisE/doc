import { createApp } from "vue";
import App from "./App.vue";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginVue from "@bugsnag/plugin-vue";
const bugsnagVue = Bugsnag.getPlugin('vue')
Bugsnag.start({
  apiKey: "e880b43a9023920d5fb1d2bd93aed75e",
  plugins: [new BugsnagPluginVue()],
});
createApp(App).use(bugsnagVue).mount("#app");
