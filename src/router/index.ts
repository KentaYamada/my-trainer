import Vue from "vue";
import VueRouter, { RouteConfig, Route, NavigationGuardNext, RouteRecord } from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: {
      name: "ReportIndex"
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/reports",
    name: "ReportIndex",
    component: () => import(/* webpackChunkName: "report-index" */ "@/views/reports/index/ReportIndexView.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/reports/create",
    name: "ReportCreate",
    component: () => import(/* webpackChunkName: "report-create" */ "@/views/reports/create/ReportCreateView.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/reports/detail/:id",
    name: "ReportDetail",
    props: (router: Route) => ({
      id: router.params.id
    }),
    component: () => import(/* webpackChunkName: "report-detail" */ "@/views/reports/detail/ReportDetailView.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/reports/edit/:id",
    name: "ReportEdit",
    props: (router: Route) => ({
      id: router.params.id
    }),
    component: () => import(/* webpackChunkName: "report-edit" */ "@/views/reports/create/ReportCreateView.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/auth/signin",
    name: "SignIn",
    component: () => import(/* webpackChunkName: "sign-in" */ "@/views/auth/AuthView.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "notfound" */ "@/views/notfound/NotFoundView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  // eslint-disable-line no-unused-vars
  const requireAuth: boolean = to.matched.some((record: RouteRecord) => record.meta.requireAuth);
  const isSignedIn: boolean = store.getters["auth/is-sign-in"];

  if (requireAuth) {
    if (isSignedIn) {
      next();
    } else {
      next("/auth/signin");
    }
  } else {
    next();
  }
});

export default router;
