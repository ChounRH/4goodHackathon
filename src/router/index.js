import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home", // Redirect the root path to "/home"
    },
    {
      path: "/home",
      component: () => import("../views/PreLogin/Home.vue"),
    },
    {
      path: "/discovery",
      component: () => import("../views/PostLogin/Discovery.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/bookmark",
      component: () => import("../views/PostLogin/Bookmark.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/adventures",
      component: () => import("../views/PostLogin/Adventures.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/item/:uuid",
      component: () => import("../views/PostLogin/ItemDetails.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/search/:searchinput",
      component: () => import("../views/PostLogin/DiscoverySeach.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/search/:searchinput/:searchtype",
      component: () => import("../views/PostLogin/DiscoverySeach.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/search/:searchinput/:searchtype/:category",
      component: () => import("../views/PostLogin/DiscoverySeach.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    // Profile route
    {
      path: "/profile",
      component: () => import("../views/PostLogin/Profile.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    // Catch-all route for 404
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/PostLogin/NotFound.vue"),
    },
  ],
});

// Helper to check the current authenticated user
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

// Global route guard to check authentication
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You don't have access!");
      next("/home"); // Redirect to home if not authenticated
    }
  } else {
    next();
  }
});

export default router;
