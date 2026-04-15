<template>
  <div class="container">
    <section class="card box">
      <h1 class="h1">Contact</h1>
      <p class="p">
        Best way to reach me:
        <span class="email">vasiseve [at] athenarc [dot] gr</span>
      </p>

      <div class="divider"></div>

      <h2 class="h2">Links</h2>
      <div class="row">
        <a class="btn" href="https://scholar.google.com/citations?user=8RIQDfoAAAAJ&hl=en" target="_blank" rel="noreferrer">Scholar</a>
        <a class="btn" href="https://orcid.org/0000-0001-9348-8786" target="_blank" rel="noreferrer">ORCID</a>
        <a class="btn" href="https://arxiv.org/search/cs?searchtype=author&query=Sevetlidis,+V" target="_blank" rel="noreferrer">arXiv</a>
        <a class="btn" href="https://github.com/vasiseve" target="_blank" rel="noreferrer">GitHub</a>
        <a class="btn" href="https://gitlab.com/vasiseve" target="_blank" rel="noreferrer">GitLab</a>
      </div>

      <div class="divider"></div>

      <h2 class="h2">Open to</h2>
      <ul class="list">
        <li>Research collaborations (PU learning, weak supervision, evaluation)</li>
        <li>Engineering / reproducibility tooling</li>
        <li>Speaking (seminars, reading groups)</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.box{ padding: 18px; }
.row{ display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }
.divider{ height: 1px; background: var(--rule); margin: 16px 0; }
.list{ margin: 8px 0 0; padding-left: 18px; color: var(--muted); }
.email { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; }
</style>
