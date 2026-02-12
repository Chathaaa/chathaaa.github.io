window.portfolioData = {
  person: {
    name: "Gurshawn Chatha",
    roleLabel: "Frontend Engineer",
    headline: "Frontend Engineer specializing in real-time UI and production systems",
    heroCopy: "I build interactive web applications used in production, with a focus on real-time behavior and dependable user interfaces.",
    about: "I've spent the last three years building and supporting interactive web applications in production. I enjoy working on UI that behaves predictably, handles edge cases well, and scales to real users.",
    email: "shawnchatha@gmail.com",
    contactHeadline: "Let's build something useful.",
    contactCopy: "Available for frontend and product-focused opportunities.",
    skills: ["JavaScript", "React", "Real-Time UI", "WebSockets", "REST APIs", "Chrome Extensions", "Production Frontend"],
    socialLinks: [
      { label: "GitHub", url: "https://github.com/chathaaa" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/gurshawnchatha/" }
    ]
  },
  seo: {
    siteTitle: "Gurshawn Chatha | Frontend Engineer",
    description: "Frontend engineer portfolio featuring interactive web apps, real-time UI, and production-ready frontend projects.",
    siteUrl: "",
    previewImage: ""
  },
  projects: [
    {
      title: "Release Sanity - Pre-Deployment Risk & Release Checklist Tool",
      role: "Full-Stack Developer (Personal Project)",
      summary: "Web application that analyzes pull requests and generates a structured release checklist to surface potential risks before deployment. Integrates with GitHub to fetch PR data and present actionable summaries to improve developer confidence.",
      keyFocus: "PR risk analysis workflows and clear release-readiness UX.",
      category: "Developer Tool / SaaS",
      tags: ["React", "Node.js", "GitHub API", "Full-Stack", "CI/CD", "Developer Tooling"],
      liveUrl: "https://release-sanity.vercel.app/",
      repoUrl: ""
    },
    {
      title: "WatchParty - Live Chat Overlay for Sports Streams",
      role: "Frontend Engineer (Personal Project)",
      summary: "Browser extension that adds a real-time chat overlay on live sports streams (e.g., ESPN, Peacock, Prime). Uses WebSockets and componentized UI to sync chat across viewers in real time. Inspired by shared viewing experiences and built with React and JavaScript.",
      keyFocus: "Real-time state synchronization and resilient extension UI behavior.",
      category: "Web Application / Browser Extension",
      tags: ["React", "JavaScript", "WebSockets", "Real-Time UI", "Chrome Extension"],
      liveUrl: "https://chathaaa.github.io/WatchParty-site",
      repoUrl: ""
    },
    {
      title: "SyncSong - Cross-Platform Music Sync",
      role: "Frontend Engineer (Personal Project)",
      summary: "Web app for listening together in sync via Spotify and Apple Music. Implemented real-time queue and playback sync with state updates across users, focusing on responsive controls and API integration.",
      keyFocus: "Low-latency playback sync and robust cross-session state updates.",
      category: "Web Application",
      tags: ["React", "JavaScript", "WebSockets", "REST APIs", "Real-Time UI"],
      liveUrl: "https://sync-song-opal.vercel.app/",
      repoUrl: ""
    }
  ]
};
