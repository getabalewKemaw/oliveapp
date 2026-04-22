export interface NavItem {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
  dropdownImage?: string;
}

export interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
}
