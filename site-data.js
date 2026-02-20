window.portfolioData = {
  person: {
    name: "Gurshawn Chatha",
    roleLabel: "Fullstack JavaScript Developer",
    headline: "Fullstack JavaScript developer building and shipping interactive, API-driven web apps and real-time systems",
    heroCopy: "Frontend-leaning fullstack JavaScript developer focused on responsive UI, real-time sync, API integrations, OAuth, WebSockets, PostgreSQL, and GitHub Apps/webhooks.",
    about: "Fullstack JavaScript developer building and shipping interactive, API-driven web applications and real-time systems. Skilled in WebSocket architecture, OAuth integrations, and end-to-end product development from frontend UI to backend services. Focused on writing maintainable code and solving complex synchronization and integration challenges.",
    email: "shawnchatha@gmail.com",
    contactHeadline: "Let's build something useful.",
    contactCopy: "Available for frontend and product-focused opportunities.",
    skillGroups: [
      {
        group: "Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]
      },
      {
        group: "Frontend",
        items: ["React", "Vite", "Responsive UI Design", "State Management"]
      },
      {
        group: "Backend",
        items: ["Node.js", "Express", "REST APIs", "WebSockets"]
      },
      {
        group: "APIs & Integration",
        items: ["GitHub API", "GitHub Apps", "Spotify API", "Apple Music (MusicKit)", "OAuth 2.0"]
      },
      {
        group: "Data & Tools",
        items: ["PostgreSQL", "Docker", "Render", "Vercel", "Git", "GitHub"]
      }
    ],
    likes: [
      "Real-time UX and synchronization challenges",
      "API integrations and auth flows",
      "Product-focused UI with strong usability",
      "Reliability work and edge-case handling"
    ],
    socialLinks: [
      { label: "GitHub", url: "https://github.com/chathaaa" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/gurshawnchatha/" }
    ]
  },
  seo: {
    siteTitle: "Gurshawn Chatha | Fullstack JavaScript Developer",
    description: "Fullstack JavaScript developer building API-driven web applications and real-time systems with React, Node.js, WebSockets, OAuth, and PostgreSQL.",
    siteUrl: "",
    previewImage: ""
  },
  projects: [
    {
      title: "SyncSong - Cross-Platform Real-Time Music Sync App",
      role: "Full-Stack Developer (Personal Project)",
      summary: "Listen together across Spotify and Apple Music with a shared queue and real-time playback sync.",
      highlights: [
        "Built a real-time music listening app enabling Spotify and Apple Music users to share synchronized playback across platforms.",
        "Implemented host-authoritative WebSocket architecture for low-latency playback control and queue management.",
        "Designed an event-based message protocol (PLAY, PAUSE, ADD_TRACK, REORDER) to keep room state consistent.",
        "Debugged cross-SDK edge cases (auto-pause / auto-skip) and fixed desync issues by refactoring event flow.",
        "Implemented periodic state reconciliation + host resync to correct playback drift across clients."
      ],
      category: "Web Application",
      tags: ["JavaScript", "WebSockets", "Node.js", "Vite", "Render", "Vercel", "Spotify API", "Apple Music (MusicKit)", "OAuth"],
      liveUrl: "https://sync-song-opal.vercel.app/",
      repoUrl: ""
    },
    {
      title: "Release Sanity - GitHub PR Risk Analysis Tool",
      role: "Full-Stack Developer (Personal Project)",
      summary: "Auto-generate a PR 'what changed + what might be risky' summary and checklist before merge.",
      highlights: [
        "Built a GitHub App that analyzes pull request diffs and generates risk summaries before merge.",
        "Implemented GitHub App integration, OAuth, and webhook processing for real-time pull request updates.",
        "Designed heuristic-based analysis logic to detect high-risk changes (auth, database, API contracts).",
        "Built UI to display concise change summaries and actionable release checklists."
      ],
      category: "Developer Tool / SaaS",
      tags: ["TypeScript", "Node.js", "GitHub Apps", "Webhooks", "PostgreSQL", "Vercel"],
      liveUrl: "https://release-sanity.vercel.app/",
      repoUrl: ""
    }
  ]
};
