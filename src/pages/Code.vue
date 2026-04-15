<template>
  <div class="container">
    <section class="card box">
      <div class="head">
        <div>
          <h1 class="h1">Code</h1>
          <p class="lead">
            Curated repositories and reproducible artifacts. I try to keep things runnable and well-documented.
          </p>
        </div>

        <div class="row">
          <a class="btn" href="https://github.com/vasiseve" target="_blank" rel="noreferrer">GitHub</a>
          <a class="btn" href="https://gitlab.com/vasiseve" target="_blank" rel="noreferrer">GitLab</a>
          <RouterLink class="btn primary" to="/contact">Work with me</RouterLink>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Featured -->
      <h2 class="h2">Featured</h2>
      <div class="grid">
        <RepoCard
          class="col-6"
          title="Your flagship repo"
          subtitle="One sentence: what it does + who it’s for."
          :tags="['PU learning', 'baselines', 'reproducibility']"
          status="Maintained"
          :links="[
            { label: 'Repo', href: 'https://github.com/vasiseve' },
            { label: 'Docs', href: 'https://github.com/vasiseve' },
            { label: 'Paper', href: 'https://arxiv.org/search/cs?searchtype=author&query=Sevetlidis,+V' }
          ]"
          snippet="pip install your-package-name"
        />

        <RepoCard
          class="col-6"
          title="Paper reproduction: <paper-slug>"
          subtitle="Reproducible experiments and results for the paper."
          :tags="['weak supervision', 'experiments']"
          status="Stable"
          :links="[
            { label: 'Repo', href: 'https://github.com/vasiseve' },
            { label: 'PDF', href: 'https://arxiv.org/search/cs?searchtype=author&query=Sevetlidis,+V' }
          ]"
          snippet="python -m pip install -r requirements.txt && python run.py"
        />
      </div>

      <div class="divider"></div>

      <!-- Demos -->
      <h2 class="h2">Demos</h2>
      <p class="p">
        Conference-friendly “try it now” links. Keep these minimal and working.
      </p>

      <div class="grid" style="margin-top:12px;">
        <DemoCard
          class="col-6"
          title="Colab notebook: quickstart"
          subtitle="Run a minimal PU learning baseline in 2–3 minutes."
          :links="[
            { label: 'Open in Colab', href: '#' },
            { label: 'Repo', href: 'https://github.com/vasiseve' }
          ]"
        />

        <DemoCard
          class="col-6"
          title="Interactive evaluation checklist"
          subtitle="A small notebook for robust evaluation / sanity checks."
          :links="[
            { label: 'Notebook', href: '#' },
            { label: 'Slides', href: '#' }
          ]"
        />
      </div>

      <div class="divider"></div>

      <!-- More repos -->
      <h2 class="h2">More projects</h2>
      <p class="p">A few additional repositories worth looking at.</p>

      <div class="grid" style="margin-top:12px;">
        <RepoRow
          class="col-12"
          title="Utility repo / scripts"
          desc="Small tools: data prep, plotting, evaluation helpers."
          status="Maintained"
          href="https://github.com/vasiseve"
        />
        <RepoRow
          class="col-12"
          title="Teaching / course materials"
          desc="Notes, assignments, or demos (if you want them public)."
          status="Active"
          href="https://github.com/vasiseve"
        />
        <RepoRow
          class="col-12"
          title="Archived experiments"
          desc="Older experiments kept for reference."
          status="Archived"
          href="https://github.com/vasiseve"
        />
      </div>

      <div class="divider"></div>

      <!-- Repro note -->
      <h2 class="h2">Reproducibility notes</h2>
      <ul class="list">
        <li>I try to pin dependencies and provide runnable commands.</li>
        <li>Where possible, I include seeds, configs, and evaluation scripts.</li>
        <li>If something breaks, email: <span class="mono">{{ emailHint }}</span></li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const emailHint = "vasiseve [at] athenarc [dot] gr";

function statusTone(status) {
  const s = (status || "").toLowerCase();
  if (s.includes("arch")) return "archived";
  if (s.includes("stable")) return "stable";
  return "active";
}

const RepoCard = {
  props: {
    title: String,
    subtitle: String,
    tags: Array,
    status: String,
    links: Array,
    snippet: String,
  },
  computed: {
    tone() { return statusTone(this.status); }
  },
  template: `
  <article class="card inner repo">
    <div class="toprow">
      <div>
        <div class="title">{{ title }}</div>
        <div class="desc">{{ subtitle }}</div>
      </div>
      <span class="pill" :data-tone="tone">{{ status }}</span>
    </div>

    <div class="tags">
      <span v-for="t in tags" :key="t" class="tag">{{ t }}</span>
    </div>

    <div v-if="snippet" class="code">
      <span class="k">Quickstart</span>
      <pre><code>{{ snippet }}</code></pre>
    </div>

    <div class="row">
      <a v-for="l in links" :key="l.href + l.label" class="btn small" :href="l.href" target="_blank" rel="noreferrer">{{ l.label }}</a>
    </div>
  </article>`
};

const DemoCard = {
  props: { title: String, subtitle: String, links: Array },
  template: `
  <article class="card inner repo">
    <div class="title">{{ title }}</div>
    <div class="desc">{{ subtitle }}</div>
    <div class="row">
      <a v-for="l in links" :key="l.href + l.label" class="btn small" :href="l.href" target="_blank" rel="noreferrer">{{ l.label }}</a>
    </div>
  </article>`
};

const RepoRow = {
  props: { title: String, desc: String, status: String, href: String },
  computed: {
    tone() { return statusTone(this.status); }
  },
  template: `
  <a class="rowcard" :href="href" target="_blank" rel="noreferrer">
    <div class="left">
      <div class="title">{{ title }}</div>
      <div class="desc">{{ desc }}</div>
    </div>
    <div class="right">
      <span class="pill" :data-tone="tone">{{ status }}</span>
      <span class="arrow">→</span>
    </div>
  </a>`
};
</script>

<style scoped>
.box{ padding: 18px; }
.head{ display: flex; align-items: flex-end; justify-content: space-between; gap: 14px; flex-wrap: wrap; }
.lead{ margin: 10px 0 0; color: var(--muted); font-size: 1.06rem; }
.row{ display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }
.divider{ height: 1px; background: var(--rule); margin: 18px 0; }

.inner{ padding: 14px; background: var(--surface-soft); box-shadow: none; }
.repo{ min-height: 210px; }

.title{ font-weight: 800; letter-spacing: -0.02em; }
.desc{ color: var(--muted); margin-top: 6px; font-size: 0.98rem; }

.toprow{ display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; }

.pill{
  font-size: 0.85rem;
  padding: 7px 10px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: #ffffff;
  color: var(--muted);
  white-space: nowrap;
}
.pill[data-tone="active"]{ border-color: var(--accent-border); background: var(--accent-soft); color: var(--accent-strong); }
.pill[data-tone="stable"]{ border-color: #a7c7e7; background: #e8f2fb; color: #255a86; }
.pill[data-tone="archived"]{ border-color: var(--border); background: #ffffff; color: var(--muted2); }

.tags{ display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
.tag{
  font-size: 0.86rem;
  padding: 6px 9px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: #ffffff;
  color: var(--muted);
}

.code{ margin-top: 12px; }
.code .k{ display:block; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.03em; color: var(--muted2); margin-bottom: 6px; }
pre{
  margin: 0;
  padding: 12px;
  border-radius: var(--radius);
  background: var(--code-bg);
  border: 1px solid var(--border);
  overflow: auto;
}
code{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; color: var(--code-text); }

.small{ padding: 8px 10px; border-radius: var(--radius); font-size: 0.92rem; }

.rowcard{
  display: flex; justify-content: space-between; align-items: center; gap: 14px;
  padding: 14px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface-soft);
}
.rowcard:hover{ background: #ffffff; text-decoration: none; }
.right{ display: inline-flex; gap: 10px; align-items: center; }
.arrow{ color: var(--muted2); font-size: 1.2rem; }

.list{ margin: 10px 0 0; padding-left: 18px; color: var(--muted); }
.mono{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; }
</style>
