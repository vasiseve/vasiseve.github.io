<template>
  <div class="container">
    <section class="card box">
      <div class="top">
        <div>
          <h1 class="h1">About</h1>
          <p class="lead">
            I’m <b>Vasileios Sevetlidis, PhD</b>. I work on reliable machine learning when supervision is imperfect
            (PU learning, weak supervision), with an emphasis on reproducible evaluation and practical tooling.
          </p>

          <div class="row">
            <a class="btn" href="https://scholar.google.com/citations?user=8RIQDfoAAAAJ&hl=en" target="_blank" rel="noreferrer">Scholar</a>
            <a class="btn" href="https://orcid.org/0000-0001-9348-8786" target="_blank" rel="noreferrer">ORCID</a>
            <a class="btn" href="https://arxiv.org/search/cs?searchtype=author&query=Sevetlidis,+V" target="_blank" rel="noreferrer">arXiv</a>
            <a class="btn" href="https://github.com/vasiseve" target="_blank" rel="noreferrer">GitHub</a>
            <a class="btn" href="https://gitlab.com/vasiseve" target="_blank" rel="noreferrer">GitLab</a>
          </div>
        </div>

        <div class="side card inner">
          <div class="kicker">Contact</div>
          <div class="mono">{{ emailHint }}</div>
          <div class="kicker" style="margin-top:14px;">Focus</div>
          <ul class="mini">
            <li>PU learning</li>
            <li>Weak supervision</li>
            <li>Robust evaluation</li>
            <li>Reproducible ML</li>
          </ul>
        </div>
      </div>

      <div class="divider"></div>

      <div class="grid">
        <div class="col-6">
          <h2 class="h2">Research taste</h2>
          <p class="p">
            I like work that is <b>clear</b>, <b>measurable</b>, and <b>reusable</b>: strong baselines,
            careful protocols, and code that others can run without archaeology.
          </p>
          <p class="p" style="margin-top:10px;">
            A recurring theme in my work is reducing “hidden assumptions” in learning setups where labels are incomplete,
            biased, or expensive—while keeping the methods practical.
          </p>
        </div>

        <div class="col-6">
          <h2 class="h2">What I’m open to</h2>
          <ul class="list">
            <li>Research collaborations around weak/imperfect supervision and evaluation</li>
            <li>Building tooling and reproducible pipelines for ML practice</li>
            <li>Speaking (seminars, reading groups, tutorials)</li>
          </ul>
        </div>

        <div class="col-12">
          <div class="card inner2">
            <h2 class="h2">Stack</h2>
            <p class="p">
              Python • PyTorch • scikit-learn • experiment tracking • Linux • Docker • Git • CI/CD • reproducibility tooling
            </p>
          </div>
        </div>

        <div class="col-12">
          <h2 class="h2">Outside research</h2>
          <p class="p">
            I enjoy building things end-to-end—especially projects that connect ML with real systems constraints.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const emailHint = "vasiseve [at] athenarc [dot] gr";
</script>

<style scoped>
.box{ padding: 18px; }
.top{ display: grid; grid-template-columns: 1.7fr 1fr; gap: 14px; align-items: start; }
.lead{ margin: 10px 0 0; color: var(--muted); font-size: 1.06rem; }
.row{ display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; }
.side{ padding: 14px; }
.inner{ background: var(--surface-soft); box-shadow: none; }
.inner2{ padding: 14px; background: var(--surface-soft); box-shadow: none; }
.kicker{ font-size: 0.82rem; letter-spacing: 0.03em; text-transform: uppercase; color: var(--muted2); margin-bottom: 6px; }
.mono{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; color: var(--text); }
.mini{ margin: 8px 0 0; padding-left: 18px; color: var(--muted); }
.divider{ height: 1px; background: var(--rule); margin: 18px 0; }
.list{ margin: 8px 0 0; padding-left: 18px; color: var(--muted); }

@media (max-width: 900px){
  .top{ grid-template-columns: 1fr; }
}
</style>
