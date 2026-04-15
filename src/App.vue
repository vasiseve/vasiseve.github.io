<template>
  <div class="wrap">
    <header class="top">
      <div class="bar container">
        <RouterLink to="/" class="brand">
          <span class="dot" aria-hidden="true"></span>
          <span>Vasileios Sevetlidis, PhD</span>
        </RouterLink>

        <nav class="nav">
          <RouterLink to="/research">Research</RouterLink>
          <RouterLink to="/cv">CV</RouterLink>
        </nav>

        <div class="cta">
          <a class="btn" href="/#/iclr">ICLR</a>
          <a class="btn" href="/#/aistats">AISTATS</a>
          <a class="btn primary" href="/#/contact">Email</a>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="container footer">
      <div class="muted">
        © {{ new Date().getFullYear() }} Vasileios Sevetlidis, PhD • Xanthi, Greece
      </div>
      <div class="links">
        <a href="https://scholar.google.com/citations?user=8RIQDfoAAAAJ&hl=en" target="_blank" rel="noreferrer">Scholar</a>
        <a href="https://orcid.org/0000-0001-9348-8786" target="_blank" rel="noreferrer">ORCID</a>
        <a href="https://arxiv.org/search/cs?searchtype=author&query=Sevetlidis,+V" target="_blank" rel="noreferrer">arXiv</a>
        <a href="https://github.com/vasiseve" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://gitlab.com/vasiseve" target="_blank" rel="noreferrer">GitLab</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.wrap{ min-height: 100vh; }
.top{
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(247,249,251,0.88);
  border-bottom: 1px solid var(--rule);
}
.bar{ display: flex; align-items: center; justify-content: space-between; gap: 14px; padding-top: 14px; padding-bottom: 14px; }
.brand{ display: inline-flex; align-items: center; gap: 10px; font-weight: 700; letter-spacing: -0.02em; }
.dot{ width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 6px var(--accent-soft); }
.nav{ display: flex; gap: 14px; flex-wrap: wrap; color: var(--muted); }
.nav a.router-link-active{ color: var(--text); text-decoration: none; }
.cta{ display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
.footer{ display: flex; justify-content: space-between; align-items: center; gap: 10px; padding-top: 22px; padding-bottom: 28px; color: var(--muted2); }
.footer .links{ display: flex; gap: 12px; flex-wrap: wrap; }
.muted{ color: var(--muted2); }
@media (max-width: 900px){
  .bar{ flex-direction: column; align-items: flex-start; }
  .cta{ width: 100%; justify-content: flex-start; }
}
</style>
