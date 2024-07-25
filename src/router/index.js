import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/login.vue";
import DashBoard from "../views/dashboard.vue";
import RegisterView from "../views/register.vue";
import { useAuth } from "@/store/authStore";
import { useTodo } from "@/store/TodoStore";
const { checkAuth, isAuthenticated } = useAuth();
const { fetchTodo } = useTodo();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashBoard,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { requiresAuth: false },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: { requiresAuth: false },
    },
    // {
    //   path: "/search",
    //   name: "search",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/SearchView.vue"),
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

router.beforeEach(async (to, from, next) => {
  await checkAuth();
  await fetchTodo();
  console.log(isAuthenticated.value);
  //
  if (to.meta.requiresAuth && !isAuthenticated.value) return next("/login");

  if (
    to.name === "login" &&
    to.meta.requiresAuth === false &&
    isAuthenticated.value
  ) {
    return next("/");
  }
  if (
    to.name === "register" &&
    to.meta.requiresAuth === false &&
    isAuthenticated.value
  ) {
    return next("/");
  }
  next();
});

export default router;
