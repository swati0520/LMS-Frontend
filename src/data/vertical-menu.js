const verticalMenu = [
  {
    type: "item",
    label: "Dashboard",
    href: "/student/dashboard",
    icon: "dashboard",
    permissions: [],
  },
  {
    type: "submenu",
    label: "Courses",
    icon: "courses",
    permissions: [],
    children: [
      {
        type: "item",
        label: "My Courses",
        href: "/student/courses",
        permissions: [],
      },
      {
        type: "item",
        label: "Browse Courses",
        href: "/courses",
        permissions: [],
      },
    ],
  },
  {
    type: "item",
    label: "Learning",
    href: "/student/learning",
    icon: "learning",
    permissions: [],
  },
  {
    type: "item",
    label: "Quiz",
    href: "/student/quiz",
    icon: "quiz",
    permissions: [],
  },
  {
    type: "item",
    label: "Profile",
    href: "/student/profile",
    icon: "profile",
    permissions: [],
  },
  {
    type: "item",
    label: "Logout",
    href: "#logout",
    icon: "logout",
    permissions: [],
    section: "footer",
  },
];

export default verticalMenu;
