export const siteConfig = {
  name: "Erasmus+",
  nav: [
    {
      key: "about",
      children: [
        { key: "policy", href: "/about/policy" },
        { key: "news", href: "/news" },
        { key: "gallery", href: "/gallery" },
      ],
    },
    {
      key: "students",
      children: [
        { key: "incoming", href: "/students/incoming" },
        { key: "outgoing", href: "/students/outgoing" },
        { key: "coordinators", href: "/students/coordinators" },
      ],
    },
    { key: "ka220", href: "/ka220" },
    { key: "ka171", href: "/ka171" },
    { key: "contact", href: "/contact" },


  ],
} as const;
