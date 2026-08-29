import { LucideIcon } from "lucide-react";

export interface NavigationSection {
  label: string;
  items: {
    name: string;
    href: string;
    icon: LucideIcon;
  }[];
}

export interface NavigationSectionBottom {
  name: string;
  href: string;
  icon: LucideIcon;
}
