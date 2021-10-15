import Vue from "vue";
import VueRouter, { RouteConfig, Route } from "vue-router";

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
  },
  {
    path: "/reports/detail/:id",
    name: "ReportDetail",
    props: (router: Route) => ({
      id: router.params.id
    }),
    component: () => import(/* webpackChunkName: "report-detail" */ "@/views/reports/detail/ReportDetailView.vue")
  },
  {
    path: "/reports/edit/:id",
    name: "ReportEdit",
    props: (router: Route) => ({
      id: router.params.id
    }),
    component: () => import(/* webpackChunkName: "report-edit" */ "@/views/reports/create/ReportCreateView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
