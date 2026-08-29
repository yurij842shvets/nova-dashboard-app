import {
  LayoutDashboard,
  FolderKanban,
  Users,
  ArrowLeftRight,
  ChartNoAxesCombined,
  Settings,
} from "lucide-react";

export const NAVIGATION = [
  {
    label: "Overview",
    items: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Workspace",
    items: [
      {
        name: "Projects",
        href: "/projects",
        icon: FolderKanban,
      },
      {
        name: "Clients",
        href: "/clients",
        icon: Users,
      },
    ],
  },
  {
    label: "Finance",
    items: [
      {
        name: "Transactions",
        href: "/transactions",
        icon: ArrowLeftRight,
      },
      {
        name: "Analytics",
        href: "/analytics",
        icon: ChartNoAxesCombined,
      },
    ],
  },
];

export const SIDEBAR_BOTTOM = [
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];