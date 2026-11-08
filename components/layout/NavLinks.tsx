// components/layout/NavLinks.tsx
"use client";
import { useEffect, useId, useRef, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { isGroup, type NavGroupItem, type NavItem } from "@/types/nav";

const isActive = (pathname: string, href: string) =>
  pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

export function NavLinks({ items, toggleLabel }: { items: NavItem[]; toggleLabel: string }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <nav>
      <button
        type="button"
        className="text-fg-2 md:hidden"
        onClick={() => setMobileOpen((o) => !o)}
        aria-label={toggleLabel}
        aria-expanded={mobileOpen}
      >
        ☰
      </button>

      <ul
        className={`${mobileOpen ? "flex" : "hidden"} absolute left-0 top-16 w-full flex-col gap-1 border-b border-line bg-surface p-4
          md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
      >
        {items.map((item) =>
          isGroup(item) ? (
            <NavDropdown key={item.label} item={item} pathname={pathname} onNavigate={close} />
          ) : (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={close}
                className={`block py-2 md:py-0 ${
                  isActive(pathname, item.href)
                    ? "font-semibold text-brand-ink"
                    : "text-fg-2 hover:text-brand-ink-hover"
                }`}
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

function NavDropdown({
  item,
  pathname,
  onNavigate,
}: {
  item: NavGroupItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const menuId = useId();
  const groupActive = item.children.some((c) => isActive(pathname, c.href));

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={menuId}
        className={`flex w-full items-center justify-between gap-1 py-2 md:py-0 ${
          groupActive ? "font-semibold text-brand-ink" : "text-fg-2 hover:text-brand-ink-hover"
        }`}
      >
        {item.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
          className={`text-fg-4 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open && (
        <ul
          id={menuId}
          className="flex flex-col pl-4
            md:absolute md:left-0 md:top-full md:mt-3 md:min-w-56 md:rounded-xl md:border md:border-line md:bg-surface md:p-2 md:pl-2 md:shadow-lg"
        >
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => {
                  setOpen(false);
                  onNavigate();
                }}
                className={`block rounded-lg px-3 py-2 ${
                  isActive(pathname, child.href)
                    ? "bg-brand-tint font-semibold text-brand-ink"
                    : "text-fg hover:bg-surface-2 hover:text-brand-ink-hover"
                }`}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}