<template>
  <div class="container">
    <section class="card box">
      <div class="head">
        <div>
          <h1 class="h1">Talks & Posters</h1>
          <p class="lead">
            Slides, posters, and short abstracts — optimized for QR codes and quick follow-ups.
          </p>
        </div>

        <div class="row">
          <a class="btn" href="/#/iclr">ICLR quick links</a>
          <a class="btn" href="/#/aistats">AISTATS quick links</a>
          <RouterLink class="btn primary" to="/contact">Reach out</RouterLink>
        </div>
      </div>

      <div class="divider"></div>

      <!-- QR / Poster quick links -->
      <h2 class="h2">Poster quick links</h2>
      <p class="p">
        If you scanned a QR code at a poster session, use these.
      </p>

      <div class="grid" style="margin-top:12px;">
        <QuickLink
          class="col-6"
          title="ICLR"
          subtitle="Paper • poster • slides • code • BibTeX"
          to="/iclr"
        />
        <QuickLink
          class="col-6"
          title="AISTATS"
          subtitle="Paper • poster • slides • code • BibTeX"
          to="/aistats"
        />
      </div>

      <div class="divider"></div>

      <!-- Featured / upcoming -->
      <h2 class="h2">Featured / upcoming</h2>
      <div class="grid">
        <TalkCard
          class="col-12"
          title="Gauge-invariant representation holonomy"
          event="ICLR"
          date="2026"
          kind="Poster"
          abstract="A geometric diagnostic for learned representations that measures the residual twist accumulated when features are transported around closed paths."
          :links="[
            { label: 'Paper page', href: '/#/iclr' },
            { label: 'Project', href: 'https://vasiseve.github.io/Gauge-Invariant-Representation-Holonomy' },
            { label: 'OpenReview', href: 'https://openreview.net/forum?id=czJqKToDGq' },
            { label: 'Code', href: 'https://github.com/vasiseve/gauge-invariant-representation-holonomy-code' }
          ]"
        />
      </div>

      <div class="divider"></div>

      <!-- Archive -->
      <h2 class="h2">Archive</h2>
      <p class="p">
        Past talks, posters, and recorded presentations.
      </p>

      <div class="grid" style="margin-top:12px;">
        <TalkCard
          class="col-12"
          title="Add older talk here"
          event="Seminar / Workshop"
          date="2025"
          kind="Talk"
          abstract="Short description. Keep it skimmable."
          :links="[
            { label: 'Slides', href: '#' },
            { label: 'Video', href: '#' }
          ]"
        />

        <TalkCard
          class="col-12"
          title="Add another entry"
          event="Reading group"
          date="2024"
          kind="Talk"
          abstract="Short description."
          :links="[
            { label: 'Slides', href: '#' }
          ]"
        />
      </div>

      <div class="divider"></div>

      <h2 class="h2">Contact</h2>
      <p class="p">
        Best way to reach me: <span class="mono">{{ emailHint }}</span>
      </p>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const emailHint = "vasiseve [at] athenarc [dot] gr";

const QuickLink = {
  props: { title: String, subtitle: String, to: String },
  template: `
    <RouterLink class="q card inner" :to="to">
      <div class="qtitle">{{ title }}</div>
      <div class="qsub">{{ subtitle }}</div>
      <div class="qarrow">→</div>
    </RouterLink>
  `,
  components: { RouterLink },
};

const TalkCard = {
  props: { title: String, event: String, date: String, kind: String, abstract: String, links: Array },
  template: `
    <article class="card inner talk">
      <div class="toprow">
        <div>
          <div class="tt">{{ title }}</div>
          <div class="meta">
            <span class="pill">{{ kind }}</span>
            <span class="dot">•</span>
            <span>{{ event }}</span>
            <span class="dot">•</span>
            <span>{{ date }}</span>
          </div>
        </div>
      </div>

      <p class="abs">{{ abstract }}</p>

      <div class="row">
        <a v-for="l in links" :key="l.href + l.label" class="btn small"
           :href="l.href" target="_blank" rel="noreferrer">
          {{ l.label }}
        </a>
      </div>
    </article>
  `,
};
</script>

<style scoped>
.box{ padding: 18px; }
.head{ display: flex; align-items: flex-end; justify-content: space-between; gap: 14px; flex-wrap: wrap; }
.lead{ margin: 10px 0 0; color: var(--muted); font-size: 1.06rem; }
.row{ display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }
.divider{ height: 1px; background: var(--rule); margin: 18px 0; }

.inner{ padding: 14px; background: var(--surface-soft); box-shadow: none; }
.small{ padding: 8px 10px; border-radius: var(--radius); font-size: 0.92rem; }

.q{ display: block; padding: 16px; text-decoration: none; position: relative; }
.q:hover{ text-decoration: none; background: #ffffff; }
.qtitle{ font-weight: 800; letter-spacing: -0.02em; font-size: 1.05rem; }
.qsub{ margin-top: 6px; color: var(--muted); }
.qarrow{ position: absolute; right: 16px; top: 16px; color: var(--muted2); font-size: 1.2rem; }

.talk{ }
.tt{ font-weight: 850; letter-spacing: -0.02em; font-size: 1.05rem; }
.meta{ margin-top: 8px; color: var(--muted); display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.pill{
  font-size: 0.85rem;
  padding: 6px 10px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: #ffffff;
  color: var(--muted);
}
.dot{ color: var(--muted2); }
.abs{ margin: 12px 0 0; color: var(--muted); }
.mono{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; }
</style>
