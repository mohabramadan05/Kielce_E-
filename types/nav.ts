export type NavLinkItem = { label: string; href: string };
export type NavGroupItem = { label: string; children: NavLinkItem[] };
export type NavItem = NavLinkItem | NavGroupItem;

export const isGroup = (item: NavItem): item is NavGroupItem => "children" in item;