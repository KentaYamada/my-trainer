import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: {
      name: "ReportIndex"
    }
  },
  {
    path: "/reports",
    name: "ReportIndex",
    component: () => import(/* webpackChunkName: "report-index" */ "@/views/reports/index/ReportIndexView.vue")
  },
  {
    path: "/reports/create",
    name: "ReportCreate",
    component: () => import(/* webpackChunkName: "report-create" */ "@/views/reports/create/ReportCreateView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
