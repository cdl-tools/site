import { createApp } from "vue";
import { plugin as formkit } from "@formkit/vue";
import { createHead } from "@unhead/vue";
import { DataLoaderPlugin } from "unplugin-vue-router/data-loaders";

import App from "./App.vue";
import router from "./router";
import formkitConfig from "./formkit.config";

const app = createApp(App);

const head = createHead();
app.use(head);

app.use(formkit, formkitConfig);

app.use(DataLoaderPlugin, { router });
app.use(router);

app.mount("#app");
