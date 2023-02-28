import type { App } from "vue";
import Analytics from "./component/Analytics.vue";
import type { AnalyticsProps } from "@withbeacon/core";
export default {
    install: (app: App, options:AnalyticsProps) => {
        app.component("Analytics", Analytics)
    }
}