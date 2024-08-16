export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "BNML (Balanghay Nine Masonic Lodge) 493",
  description: "BNML (Balanghay Nine Masonic Lodge) 493",
  navItems: [
    {
      label: "Dashboard",
      href: "/",
      key: "dashboard"
    },
    {
      label: "Activities",
      key: "activities",
      dropDownItems: [
        {
          label: "Stated Meeting",
          href: "/stated-meeting",
          description: "Meetings",
          key: "stated-meeting"
        },
        {
          label: "Special Meeting",
          href: "/special-meeting",
          description: "Meetings",
          key: "special-meeting"
        },
        {
          label: "Events",
          href: "/events",
          description: "Events",
          key: "events"
        },
      ],
    },
    {
      label: "Others",
      key: "others",
      dropDownItems: [
        {
          label: "Installations",
          href: "/installations",
          description: "Installation",
          key: "installations"
        },
        {
          label: "Flag Tribute",
          href: "/flag-tribute",
          description: "Flag Tribute.",
          key: "flag-tribute"
        },
      ],
    },
    {
      label: "Directories",
      key: "directories",
      dropDownItems: [
        {
          label: "Photo Documentations",
          href: "/photodocs",
          description: "Meetings, Installation, and Etc.",
          key: "photodocs"
        },
        {
          label: "Minutes/Proceedings",
          href: "/minutes",
          description: "Minutes/Proceedings",
          key: "minutes"
        },
        {
          label: "Downloadable Forms",
          href: "/downloadables",
          description: "Downloadables",
          key: "downloadables"
        },
        {
          label: "Grand Lodge Issuances",
          href: "/issuances",
          description: "Grand Lodge Issuances/memos",
          key: "issuances"
        },
        {
          label: "Financial Report",
          href: "/financial-report",
          description: "Financial Report",
          key: "financal-report"
        },
      ]
    },
    {
      label: "Master Records",
      key: "master-records",
      dropDownItems: [
        {
          label: "Installations",
          href: "/lib-installations",
          description: "Library of Directories",
          key: "lib_installations"
        },
        {
          label: "Officers",
          href: "/officers",
          description: "Officers",
          key: "officers"
        },
        {
          label: "Members",
          href: "/members",
          description: "Officers",
          key: "members"
        },
        {
          label: "Petitioners",
          href: "/petitioners",
          description: "Petitioners",
          key: "petitioners"
        },
        {
          label: "Users",
          href: "/users",
          description: "Users",
          key: "users"
        },
      ]
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
