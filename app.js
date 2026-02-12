const data = window.portfolioData || {};
const person = data.person || {};
const seo = data.seo || {};
const projects = Array.isArray(data.projects) ? data.projects : [];

const projectGrid = document.getElementById("project-grid");
const projectFilters = document.getElementById("project-filters");

function setText(id, value) {
  const element = document.getElementById(id);
  if (element && value) {
    element.textContent = value;
  }
}

function setAttribute(id, attribute, value) {
  const element = document.getElementById(id);
  if (element && value) {
    element.setAttribute(attribute, value);
  }
}

function renderMeta() {
  document.title = seo.siteTitle || document.title;
  setAttribute("meta-description", "content", seo.description);
  setAttribute("meta-og-title", "content", seo.siteTitle);
  setAttribute("meta-og-description", "content", seo.description);
  setAttribute("meta-og-url", "content", seo.siteUrl);
  setAttribute("meta-og-image", "content", seo.previewImage);
  setAttribute("meta-twitter-title", "content", seo.siteTitle);
  setAttribute("meta-twitter-description", "content", seo.description);
  setAttribute("meta-twitter-image", "content", seo.previewImage);
  setAttribute("meta-canonical", "href", seo.siteUrl);
}

function renderProfile() {
  setText("logo-text", person.name);
  setText("hero-eyebrow", person.roleLabel);
  setText("hero-title", person.headline);
  setText("hero-copy", person.heroCopy);
  setText("about-copy", person.about);
  setText("contact-headline", person.contactHeadline);
  setText("contact-copy", person.contactCopy);
  setText("footer-name", person.name);

  const emailLink = document.getElementById("contact-email-link");
  if (emailLink && person.email) {
    emailLink.textContent = person.email;
    emailLink.href = `mailto:${person.email}`;
  }

  const skillsEl = document.getElementById("skills");
  if (skillsEl && Array.isArray(person.skills)) {
    skillsEl.innerHTML = "";
    person.skills.forEach((skill) => {
      const chip = document.createElement("span");
      chip.textContent = skill;
      skillsEl.appendChild(chip);
    });
  }

  const socialLinksEl = document.getElementById("social-links");
  if (socialLinksEl && Array.isArray(person.socialLinks)) {
    socialLinksEl.innerHTML = "";
    person.socialLinks.forEach((item) => {
      if (!item.url) {
        return;
      }
      const link = document.createElement("a");
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = item.label;
      socialLinksEl.appendChild(link);
    });
  }
}

function addProjectLink(container, label, url) {
  if (!url) {
    return;
  }
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  container.appendChild(link);
}

function renderProjects(filter = "All") {
  const visible = filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter);

  projectGrid.innerHTML = "";

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No projects in this category yet.";
    projectGrid.appendChild(empty);
    return;
  }

  visible.forEach((project, idx) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.animationDelay = `${idx * 80}ms`;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const summary = document.createElement("p");
    summary.textContent = project.summary;

    const tags = document.createElement("div");
    tags.className = "tags";
    (project.tags || []).forEach((tagLabel) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = tagLabel;
      tags.appendChild(tag);
    });

    const links = document.createElement("div");
    links.className = "project-links";
    addProjectLink(links, "Live", project.liveUrl);
    addProjectLink(links, "Code", project.repoUrl);

    card.appendChild(title);
    card.appendChild(summary);
    card.appendChild(tags);
    card.appendChild(links);
    projectGrid.appendChild(card);
  });
}

function renderProjectFilters() {
  const categories = ["All", ...new Set(projects.map((project) => project.category).filter(Boolean))];
  projectFilters.innerHTML = "";

  categories.forEach((category, idx) => {
    const button = document.createElement("button");
    button.className = "chip";
    if (idx === 0) {
      button.classList.add("active");
    }
    button.type = "button";
    button.dataset.filter = category;
    button.textContent = category;

    button.addEventListener("click", () => {
      projectFilters.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
      button.classList.add("active");
      renderProjects(category);
    });

    projectFilters.appendChild(button);
  });
}

renderMeta();
renderProfile();
renderProjectFilters();
renderProjects();
setText("year", String(new Date().getFullYear()));
