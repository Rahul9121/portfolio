/**
 * Rahul Ega Portfolio — main.js
 * Vanilla JS only. Edit the constants and data arrays below.
 */

/* ============================================================================
 * EDIT ME: contact constants
 * ========================================================================== */
const CONTACT_EMAIL = "rahulega695@gmail.com";
const WHATSAPP_NUMBER = "12038041989"; // country code + number, no + or spaces
// EDIT: LinkedIn profile URL (also search REPLACE_LINKEDIN in index.html)
const LINKEDIN_URL = "REPLACE_LINKEDIN";

/* ============================================================================
 * EDIT ME: projects (rendered into #projectsGrid)
 * demo → https://rahul9121.github.io/[repo]
 * github → https://github.com/Rahul9121/[repo]
 * ========================================================================== */
// While projects are being built, every Live Demo / GitHub button opens the
// under-construction page. When a project ships, replace COMING_SOON on that
// project with its real URL (kept in the // real: comments below).
const COMING_SOON = "under-construction.html";

const PROJECTS = [
  {
    id: "streaming-pipeline",
    title: "Real-Time Event Streaming Pipeline",
    description:
      "Kafka and Spark Structured Streaming pipeline that ingests high-volume events, applies windowed aggregations, and lands curated data in Delta Lake.",
    tech: ["Kafka", "Spark Streaming", "Delta Lake", "PySpark", "Docker"],
    demo: COMING_SOON, // real: https://rahul9121.github.io/realtime-event-streaming
    github: COMING_SOON, // real: https://github.com/Rahul9121/realtime-event-streaming
    thumbLabel: "STREAM",
    gradient: "linear-gradient(135deg, rgba(0,240,255,.35), rgba(122,44,255,.3))",
  },
  {
    id: "batch-etl",
    title: "PySpark Batch ETL Framework",
    description:
      "Medallion-style pipeline that ingests, dedupes, and normalizes market data into partitioned Parquet layers, with SQL reconciliation between each layer.",
    tech: ["PySpark", "Parquet", "Python", "SQL", "Postgres"],
    demo: COMING_SOON, // real: https://rahul9121.github.io/pyspark-batch-etl
    github: COMING_SOON, // real: https://github.com/Rahul9121/pyspark-batch-etl
    thumbLabel: "BATCH",
    gradient: "linear-gradient(135deg, rgba(255,43,214,.3), rgba(0,240,255,.25))",
  },
  {
    id: "dbt-warehouse",
    title: "dbt Analytics Warehouse",
    description:
      "Dimensional models with incremental loads, data tests, and auto-generated docs and lineage for a trusted analytics warehouse.",
    tech: ["dbt", "DuckDB", "SQL", "CI/CD", "GitHub Pages"],
    demo: COMING_SOON, // real: https://rahul9121.github.io/dbt-analytics-warehouse
    github: COMING_SOON, // real: https://github.com/Rahul9121/dbt-analytics-warehouse
    thumbLabel: "WAREHOUSE",
    gradient: "linear-gradient(135deg, rgba(182,255,0,.28), rgba(0,240,255,.22))",
  },
  {
    id: "airflow-elt",
    title: "Airflow ELT with Data Quality Gates",
    description:
      "One DAG runs ingest, Spark transform, dbt, and quality checks with retries and failure alerts, and publishes an HTML data-quality report.",
    tech: ["Airflow", "PySpark", "dbt", "Docker", "pytest"],
    demo: COMING_SOON, // real: https://rahul9121.github.io/airflow-elt-data-quality
    github: COMING_SOON, // real: https://github.com/Rahul9121/airflow-elt-data-quality
    thumbLabel: "ORCH",
    gradient: "linear-gradient(135deg, rgba(122,44,255,.35), rgba(255,43,214,.22))",
  },
  {
    id: "lakehouse-lab",
    title: "Lakehouse and Spark Performance Lab",
    description:
      "Benchmarks Parquet, Avro, ORC, and Delta, then measures how partitioning, broadcast joins, and compaction cut Spark runtimes.",
    tech: ["Delta Lake", "Parquet", "Avro", "ORC", "Spark Tuning"],
    demo: COMING_SOON, // real: https://rahul9121.github.io/lakehouse-spark-performance-lab
    github: COMING_SOON, // real: https://github.com/Rahul9121/lakehouse-spark-performance-lab
    thumbLabel: "LAKEHOUSE",
    gradient: "linear-gradient(135deg, rgba(0,240,255,.2), rgba(182,255,0,.28))",
  },
  {
    id: "hive-migration",
    title: "Hive-to-PySpark Migration and CI/CD",
    description:
      "Rewrites HiveQL jobs as PySpark and validates source-to-target counts and key fields, shipped with Docker, Terraform, and GitHub Actions.",
    tech: ["PySpark", "Hive", "ADLS (Azurite)", "Terraform", "CI/CD"],
    demo: COMING_SOON, // real: https://rahul9121.github.io/hive-to-pyspark-migration
    github: COMING_SOON, // real: https://github.com/Rahul9121/hive-to-pyspark-migration
    thumbLabel: "MIGRATION",
    gradient: "linear-gradient(135deg, rgba(255,43,214,.28), rgba(122,44,255,.3))",
  },
];

/* ============================================================================
 * EDIT ME: experience (rendered into #experienceTimeline)
 * bullets may include <strong>…</strong> for key terms
 * ========================================================================== */
const EXPERIENCE = [
  {
    role: "Senior Data Engineer",
    company: "Meta",
    location: "USA",
    type: "Contract",
    dates: "Jan 2026 – Present",
    stack: [
      "Python", "PySpark", "Spark", "Kafka", "Azure Databricks", "ADLS",
      "Delta Lake", "dbt", "Airflow", "SQL", "Git", "Agile/Scrum",
    ],
    bullets: [
      "Designed and built large-scale <strong>PySpark</strong> data pipelines for processing and transforming high-volume event and behavioral data, handling ingestion, transformation, and delivery to analytical and reporting systems.",
      "Developed <strong>Kafka</strong>-based streaming ingestion pipelines for real-time event data processing, consuming topic streams, applying transformation logic, and writing processed outputs to <strong>Delta Lake</strong> on Azure Data Lake Storage.",
      "Built and maintained <strong>dbt</strong> data models for transforming raw data into clean, structured analytical layers, implementing incremental models, tests, and documentation for pipeline reliability.",
      "Optimized <strong>Spark</strong> job performance by tuning partition strategies, broadcast join configurations, and execution plans, reducing processing time on large dataset jobs.",
      "Used <strong>Azure Databricks</strong> for interactive data exploration, notebook-based pipeline development, and collaborative data engineering work across team members.",
      "Developed data quality validation checks within pipeline workflows, catching schema drift, null rate anomalies, and referential integrity issues before data reached downstream consumers.",
      "Managed pipeline scheduling and dependency orchestration using <strong>Apache Airflow</strong>, monitoring DAG execution and resolving failures across batch processing workflows.",
      "Collaborated with data science and analytics teams to understand data requirements, model output schemas, and pipeline SLA expectations.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Bank of America",
    location: "USA",
    type: "Contract",
    dates: "Jun 2024 – Dec 2025",
    stack: [
      "Python", "PySpark", "Spark", "Snowflake", "Azure Data Factory", "ADLS",
      "dbt", "SQL", "Airflow", "Git", "Agile/Scrum",
    ],
    bullets: [
      "Built and maintained <strong>PySpark</strong> ETL pipelines for ingesting and transforming financial data from source systems into <strong>Snowflake</strong>, handling data type normalization, deduplication, and business rule application.",
      "Developed <strong>dbt</strong> models for Snowflake to build dimensional and fact table layers, writing incremental models, applying data tests, and maintaining model documentation for the data warehouse.",
      "Used <strong>Azure Data Factory</strong> to orchestrate data movement across storage layers and systems, building pipelines for scheduled ingestion, conditional branching, and error handling.",
      "Designed and implemented data quality frameworks within pipeline workflows, validating row counts, null rates, and expected value ranges on critical data assets before downstream consumption.",
      "Worked with <strong>Parquet</strong> and <strong>Delta Lake</strong> formats on Azure Data Lake Storage, managing partition layouts and file compaction for efficient query performance.",
      "Wrote complex <strong>SQL</strong> queries and stored procedures for data transformation, reconciliation, and ad hoc analysis to support business and compliance teams.",
      "Participated in Agile sprints, contributed to design reviews, and worked with source system teams to resolve data feed issues and schema changes.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Fidelity Investments",
    location: "Hyderabad, India",
    type: "Full Time",
    dates: "Feb 2021 – Aug 2023",
    stack: [
      "Python", "PySpark", "SQL", "Hive", "HDFS", "Kafka", "Azure",
      "PostgreSQL", "Git", "Agile/Scrum",
    ],
    bullets: [
      "Developed <strong>PySpark</strong> and <strong>Hive</strong>-based data processing jobs on Hadoop clusters for transforming and aggregating investment and transaction data for reporting and analytics consumption.",
      "Built <strong>Kafka</strong> data ingestion pipelines for consuming event streams from trading and transaction systems, applying parsing and transformation logic before writing to downstream storage.",
      "Wrote <strong>Python</strong> and <strong>SQL</strong> scripts for data extraction, transformation, and loading across source systems and analytical databases, supporting daily and monthly reporting workflows.",
      "Implemented data validation and reconciliation checks on pipeline outputs, comparing source-to-target row counts and key field values to ensure data accuracy.",
      "Supported migration of on-premise processing jobs to <strong>Azure</strong> cloud infrastructure, rewriting Hive jobs as PySpark workloads and testing outputs against legacy baselines.",
      "Collaborated with analysts and reporting teams to understand data requirements and deliver pipeline changes for new reporting dimensions and metrics.",
    ],
  },
];

const TYPING_ROLES = [
  "Senior Data Engineer",
  "PySpark Pipeline Builder",
  "Azure + Snowflake Specialist",
  "Kafka Streaming Engineer",
];

/* Helpers */
const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const isFinePointer = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const isMobileViewport = () => window.matchMedia("(max-width: 900px)").matches;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Allow only <strong> in experience bullets (from our own data). */
function sanitizeBullet(html) {
  const withMarkers = String(html)
    .replace(/<strong>/gi, "[[S]]")
    .replace(/<\/strong>/gi, "[[/S]]");
  return escapeHtml(withMarkers)
    .replace(/\[\[S\]\]/g, "<strong>")
    .replace(/\[\[\/S\]\]/g, "</strong>");
}

/* ---------- Render projects ---------- */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => {
    const tech = p.tech
      .map((t) => `<span class="skill-chip">${escapeHtml(t)}</span>`)
      .join("");
    return `
      <article class="project-card os-window reveal">
        <div class="os-titlebar">
          <span class="os-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="mono">${escapeHtml(p.id)}.exe</span>
          <span class="os-controls" aria-hidden="true">─ □ ×</span>
        </div>
        <div class="project-thumb" data-label="${escapeHtml(p.thumbLabel)}" style="background:${p.gradient}, repeating-linear-gradient(45deg, rgba(255,255,255,.04) 0 8px, transparent 8px 16px);"></div>
        <div class="project-body">
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.description)}</p>
          <div class="project-tech">${tech}</div>
          <div class="project-actions">
            <a class="btn btn-pill btn-cyan" href="${escapeHtml(p.demo)}" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a class="btn btn-pill btn-outline" href="${escapeHtml(p.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* ---------- Render experience ---------- */
function renderExperience() {
  const timeline = document.getElementById("experienceTimeline");
  if (!timeline) return;

  timeline.innerHTML = EXPERIENCE.map((job, index) => {
    const collapsed = index >= 2 ? " is-collapsed" : "";
    const stack = job.stack
      .map((s) => `<span>${escapeHtml(s)}</span>`)
      .join("");
    const bullets = job.bullets
      .map((b) => `<li>${sanitizeBullet(b)}</li>`)
      .join("");

    return `
      <article class="exp-card reveal${collapsed}" data-index="${index}">
        <div class="exp-top">
          <h3>${escapeHtml(job.role)} <span style="color:var(--cyan)">|</span> ${escapeHtml(job.company)}</h3>
          <span class="mono micro">${escapeHtml(job.dates)}</span>
        </div>
        <p class="exp-meta">${escapeHtml(job.type)} · ${escapeHtml(job.location)}</p>
        <div class="exp-stack">${stack}</div>
        <ul class="exp-bullets">${bullets}</ul>
      </article>
    `;
  }).join("");
}

function initShowMoreExperience() {
  const btn = document.getElementById("showMoreExperience");
  const timeline = document.getElementById("experienceTimeline");
  const label = btn && btn.querySelector(".show-more-label");
  const plus = btn && btn.querySelector(".plus");
  if (!btn || !timeline) return;

  // Hide button if 2 or fewer jobs
  if (EXPERIENCE.length <= 2) {
    btn.hidden = true;
    return;
  }

  btn.addEventListener("click", () => {
    const expanded = timeline.classList.toggle("is-expanded");
    btn.setAttribute("aria-expanded", expanded ? "true" : "false");
    if (label) {
      label.textContent = expanded ? "Show Less" : "Show More Experience";
    }
    if (plus) {
      plus.textContent = expanded ? "–" : "+";
    }
  });
}

/* ---------- Typing animation ---------- */
function initTyping() {
  const el = document.getElementById("typedRole");
  if (!el) return;

  if (prefersReducedMotion()) {
    el.textContent = TYPING_ROLES[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = TYPING_ROLES[roleIndex];
    if (!deleting) {
      charIndex += 1;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        window.setTimeout(tick, 1600);
        return;
      }
      window.setTimeout(tick, 55);
    } else {
      charIndex -= 1;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % TYPING_ROLES.length;
        window.setTimeout(tick, 350);
        return;
      }
      window.setTimeout(tick, 28);
    }
  };

  tick();
}

/* ---------- Navbar / mobile menu ---------- */
function initNav() {
  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  const progress = document.getElementById("scrollProgress");

  const setMenuOpen = (open) => {
    if (!toggle || !menu) return;
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
    document.body.classList.toggle("menu-open", open);
  };

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      setMenuOpen(menu.hidden);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    });
  }

  const onScroll = () => {
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle("is-scrolled", scrolled > 12);

    if (progress) {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? Math.min(100, (scrolled / max) * 100) : 0;
      progress.style.width = pct + "%";
      progress.setAttribute("aria-valuenow", String(Math.round(pct)));
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Active section highlight
  const sectionIds = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "contact",
  ];
  const links = document.querySelectorAll(".nav-links a[data-section]");

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          links.forEach((a) => {
            a.classList.toggle("is-active", a.getAttribute("data-section") === id);
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
    );
    sections.forEach((s) => io.observe(s));
  }
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  nodes.forEach((n) => io.observe(n));
}

/* ---------- Hero bubbles + parallax ---------- */
function initHeroFx() {
  const bubbles = document.getElementById("heroBubbles");
  if (bubbles && !prefersReducedMotion()) {
    const count = isMobileViewport() ? 6 : 12;
    for (let i = 0; i < count; i += 1) {
      const s = document.createElement("span");
      const size = 12 + Math.random() * 50;
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = (Math.random() * 5).toFixed(2) + "s";
      s.style.opacity = String(0.25 + Math.random() * 0.45);
      bubbles.appendChild(s);
    }
  }

  const frame = document.getElementById("photoFrame");
  if (!frame || !isFinePointer() || prefersReducedMotion()) return;

  const visual = document.getElementById("heroVisual");
  if (!visual) return;

  visual.addEventListener("mousemove", (e) => {
    const rect = visual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    frame.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(${y * -6}px)`;
  });

  visual.addEventListener("mouseleave", () => {
    frame.style.transform = "";
  });

  // enable 3d feel
  visual.style.perspective = "800px";
  frame.style.transition = "transform 0.2s ease-out";
  frame.style.transformStyle = "preserve-3d";
}

/* ---------- Cursor trail ---------- */
function initCursorTrail() {
  const trail = document.getElementById("cursorTrail");
  if (!trail || !isFinePointer() || prefersReducedMotion()) return;

  let x = 0;
  let y = 0;
  let visible = false;

  document.addEventListener(
    "mousemove",
    (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        trail.style.opacity = "0.85";
      }
      trail.style.left = x + "px";
      trail.style.top = y + "px";
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    trail.style.opacity = "0";
    visible = false;
  });
}

/* ---------- Copy buttons ---------- */
function initCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const value = btn.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(value);
        const prev = btn.textContent;
        btn.textContent = "Copied";
        window.setTimeout(() => {
          btn.textContent = prev;
        }, 1400);
      } catch (err) {
        btn.textContent = "Select & copy";
      }
    });
  });
}

/* ---------- Contact form (Gmail / WhatsApp, no backend) ---------- */
function isValidEmail(email) {
  // Practical validation — not RFC-perfect, good UX
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
}

/**
 * Build the shared message body from form fields.
 */
function buildMessage({ name, email, company, message }) {
  const fromCompany = company ? ` from ${company}` : "";
  return (
    `Hi Rahul,\n\n` +
    `My name is ${name}${fromCompany}.\n\n` +
    `${message}\n\n` +
    `You can reach me at: ${email}\n\n` +
    `Thanks,\n${name}`
  );
}

function buildSubject(name, company) {
  let subject = `Portfolio Inquiry from ${name}`;
  if (company) subject += ` | ${company}`;
  return subject;
}

/**
 * Open Gmail compose or mailto / WhatsApp with pre-filled content.
 * Must be called directly from the submit handler (user gesture).
 */
function openOutboundMessage({ sendVia, name, email, company, message }) {
  const body = buildMessage({ name, email, company, message });
  const subject = buildSubject(name, company);
  let url = "";

  if (sendVia === "whatsapp") {
    url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
  } else {
    // Gmail on desktop; mailto on mobile for reliability
    const mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    if (mobile) {
      url =
        `mailto:${CONTACT_EMAIL}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
    } else {
      url =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(CONTACT_EMAIL)}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
    }
  }

  const win = window.open(url, "_blank", "noopener");
  return { url, blocked: !win };
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const companyInput = document.getElementById("company");
  const messageInput = document.getElementById("message");
  const status = document.getElementById("formStatus");
  const fallback = document.getElementById("formFallback");

  const clearErrors = () => {
    ["name", "email", "message"].forEach((id) => {
      const field = document.getElementById(id)?.closest(".field");
      const err = document.getElementById(id + "Error");
      if (field) field.classList.remove("is-invalid");
      if (err) err.textContent = "";
    });
  };

  const setError = (id, msg) => {
    const field = document.getElementById(id)?.closest(".field");
    const err = document.getElementById(id + "Error");
    if (field) field.classList.add("is-invalid");
    if (err) err.textContent = "> " + msg;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();
    if (status) status.textContent = "";
    if (fallback) {
      fallback.hidden = true;
      fallback.innerHTML = "";
    }

    const name = (nameInput?.value || "").trim();
    const email = (emailInput?.value || "").trim();
    const company = (companyInput?.value || "").trim();
    const message = (messageInput?.value || "").trim();
    const sendVia =
      (form.querySelector('input[name="sendVia"]:checked') || {}).value ||
      "gmail";

    let ok = true;
    if (name.length < 2) {
      setError("name", "ERR: name required (min 2 chars)");
      ok = false;
    }
    if (!isValidEmail(email)) {
      setError("email", "ERR: valid email required");
      ok = false;
    }
    if (message.length < 10) {
      setError("message", "ERR: message required (min 10 chars)");
      ok = false;
    }
    if (!ok) {
      if (status) {
        status.style.color = "var(--danger)";
        status.textContent = "> VALIDATION FAILED. Fix fields and retry.";
      }
      return;
    }

    const result = openOutboundMessage({
      sendVia,
      name,
      email,
      company,
      message,
    });

    const body = buildMessage({ name, email, company, message });

    if (status) {
      status.style.color = "var(--ok)";
      status.innerHTML =
        `> MESSAGE READY. Just hit send in ${sendVia === "whatsapp" ? "WhatsApp" : "Gmail"}. ` +
        `<button type="button" class="copy-btn" id="copyMessageBtn">Copy message</button>`;
      const copyBtn = document.getElementById("copyMessageBtn");
      if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(body);
            copyBtn.textContent = "Copied";
          } catch (err) {
            copyBtn.textContent = "Copy failed";
          }
        });
      }
    }

    if (result.blocked && fallback) {
      fallback.hidden = false;
      fallback.innerHTML = `> POPUP BLOCKED. <a href="${result.url}" target="_blank" rel="noopener noreferrer">Click here to open</a>`;
    }
  });
}

/* ---------- Back to top ---------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  });
}

/* ---------- LinkedIn placeholder swap if constant set ---------- */
function applyLinkedIn() {
  if (!LINKEDIN_URL || LINKEDIN_URL === "REPLACE_LINKEDIN") return;
  document.querySelectorAll('a[href="REPLACE_LINKEDIN"]').forEach((a) => {
    a.href = LINKEDIN_URL;
    if (a.textContent.includes("linkedin.com")) {
      a.textContent = LINKEDIN_URL.replace(/^https?:\/\//, "");
    }
  });
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderExperience();
  initShowMoreExperience();
  initTyping();
  initNav();
  initReveal();
  initHeroFx();
  initCursorTrail();
  initCopyButtons();
  initContactForm();
  initBackToTop();
  applyLinkedIn();
});