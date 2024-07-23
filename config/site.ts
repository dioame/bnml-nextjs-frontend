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
      key: "others",
      dropDownItems: [
        {
          label: "Stated Meeting",
          href: "/stated_meeting",
          key: "stated_meeting"
        },
        {
          label: "Special Meeting",
          href: "/special_meeting",
          key: "special_meeting"
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
          key: "installations"
        },
        {
          label: "Flag Tribute",
          href: "/flag_tribute",
          key: "flag_tribute"
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
