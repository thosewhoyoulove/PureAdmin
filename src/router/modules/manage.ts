// 最简代码，也就是这些字段必须有
export default {
  path: "/manage",
  meta: {
    title: "管理",
    icon: "material-symbols:folder-managed-outline"
  },
  children: [
    {
      path: "/manage/user",
      name: "User",
      component: () => import("@/views/manage/user.vue"),
      meta: {
        title: "用户管理",
        icon: "ep:user",
        showParent: true
      }
    },
    {
      path: "/manage/position",
      name: "Position",
      component: () => import("@/views/manage/position.vue"),
      meta: {
        title: "岗位管理",
        icon: "ep:user",
        showParent: true
      }
    },
    {
      path: "/manage/merchant",
      name: "Merchant",
      component: () => import("@/views/manage/merchant.vue"),
      meta: {
        title: "商家管理",
        icon: "ep:user",
        showParent: true
      }
    }
  ]
};
