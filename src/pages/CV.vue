<template>
  <div class="container">
    <section class="card box">
      <div class="head">
        <div>
          <div class="badge">Curriculum vitae</div>
          <h1 class="h1">Vasileios Sevetlidis</h1>
          <p class="lead">
            Machine learning researcher working on geometry, dynamics, weak supervision,
            positive-unlabeled learning, representation geometry, training memory, and diffusion models.
          </p>
        </div>

        <div class="row">
          <a class="btn primary" href="/cv/vasileios-sevetlidis-cv.pdf" download>
            Download CV PDF
          </a>
          <RouterLink class="btn primary" to="/research">Research map</RouterLink>
          <RouterLink class="btn" to="/contact">Contact</RouterLink>
        </div>
      </div>

      <div class="divider"></div>

      <section class="summary-grid">
        <div class="summary-card">
          <span class="kicker">Current roles</span>
          <p>
            Adjunct Professor at International Hellenic University, Postdoctoral Researcher
            at Democritus University of Thrace, and Research Associate at Athena Research Center.
          </p>
        </div>
        <div class="summary-card">
          <span class="kicker">Research profile</span>
          <p>
            Machine learning as a dynamical process: representation formation, optimizer memory,
            weak supervision, and geometry-aware diagnostics.
          </p>
        </div>
      </section>

      <div class="divider"></div>

      <section class="cv-section">
        <h2 class="h2">Experience</h2>
        <div class="timeline">
          <article v-for="item in experience" :key="item.date + item.title" class="entry">
            <div class="date">{{ item.date }}</div>
            <div>
              <h3>{{ item.title }}</h3>
              <p class="place">{{ item.place }}</p>
              <p v-if="item.detail" class="detail">{{ item.detail }}</p>
            </div>
          </article>
        </div>
      </section>

      <div class="divider"></div>

      <section class="cv-section">
        <h2 class="h2">Education</h2>
        <div class="timeline">
          <article v-for="item in education" :key="item.date + item.title" class="entry">
            <div class="date">{{ item.date }}</div>
            <div>
              <h3>{{ item.title }}</h3>
              <p class="place">{{ item.place }}</p>
              <p v-if="item.detail" class="detail">{{ item.detail }}</p>
            </div>
          </article>
        </div>
      </section>

      <div class="divider"></div>

      <section class="cv-section">
        <h2 class="h2">Teaching</h2>
        <div class="timeline">
          <article v-for="item in teaching" :key="item.date + item.title" class="entry">
            <div class="date">{{ item.date }}</div>
            <div>
              <h3>{{ item.title }}</h3>
              <p class="place">{{ item.place }}</p>
              <p v-if="item.detail" class="detail">{{ item.detail }}</p>
            </div>
          </article>
        </div>
      </section>

      <div class="divider"></div>

      <section class="cv-section">
        <h2 class="h2">Selected Publications</h2>
        <div class="publication-groups">
          <article v-for="group in publications" :key="group.title" class="pub-group">
            <h3>{{ group.title }}</h3>
            <ul>
              <li v-for="paper in group.items" :key="paper.title">
                <a v-if="paper.href" :href="paper.href" target="_blank" rel="noreferrer">
                  {{ paper.title }}
                </a>
                <span v-else>{{ paper.title }}</span>
                <span class="meta"> {{ paper.venue }}, {{ paper.year }}</span>
              </li>
            </ul>
          </article>
        </div>
        <p class="p note-link">
          Full topic-organized publication list:
          <RouterLink to="/research">Research</RouterLink>
        </p>
      </section>

      <div class="divider"></div>

      <section class="cv-section">
        <h2 class="h2">Projects</h2>
        <div class="project-grid">
          <a
            v-for="project in projects"
            :key="project.name"
            class="project"
            :href="project.href"
            target="_blank"
            rel="noreferrer"
          >
            <span>{{ project.year }}</span>
            <strong>{{ project.name }}</strong>
            <small>{{ project.description }}</small>
          </a>
        </div>
      </section>

      <div class="divider"></div>

      <section class="cv-section split">
        <div>
          <h2 class="h2">Awards</h2>
          <ul class="plain-list">
            <li>Scholarship and distinction for graduating first in the MSc cohort, University of the Aegean.</li>
            <li>Erasmus+ Mobility Consortium for traineeships, Talent at Work.</li>
            <li>Italian Government scholarship for doctoral studies.</li>
            <li>Scholarship and distinction for graduating first, TEI of Central Macedonia.</li>
          </ul>
        </div>

        <div>
          <h2 class="h2">Service and Other</h2>
          <ul class="plain-list">
            <li>Session Chair, International Conference on Pattern Recognition Applications and Methods.</li>
            <li>Program Committee, EETN Conference on Artificial Intelligence.</li>
            <li>Reviewer, International Conference on Machine Learning.</li>
            <li>Reviewer, Neural Information Processing Systems.</li>
            <li>Reviewer, International Journal of Computational Methods in Heritage Science.</li>
            <li>Reviewer, 5th CAA-GR Conference 2024.</li>
            <li>Languages: Greek native, English B2, Italian basic.</li>
            <li>Certified UAS pilot, open category.</li>
          </ul>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const experience = [
  {
    date: "Feb 2025-present",
    title: "Adjunct Professor",
    place: "International Hellenic University",
    detail: "Department of Computer, Informatics & Telecommunications Engineering.",
  },
  {
    date: "Nov 2024-present",
    title: "Postdoctoral Researcher",
    place: "Democritus University of Thrace",
    detail: "Automation and Robotics Laboratory, Department of Production and Management Engineering.",
  },
  {
    date: "Jan 2019-present",
    title: "Research Associate",
    place: "Athena Research Center",
    detail: "Collaboration with the Institute for Language and Speech Processing.",
  },
  {
    date: "Jul 2022-present",
    title: "Freelance IT Engineer",
    place: "Independent practice",
    detail: "Software, data, and machine-learning engineering work.",
  },
  {
    date: "Jun 2019-Oct 2020",
    title: "Research Associate",
    place: "Foundation for Research and Technology - Hellas",
    detail: "Collaboration with the Institute for Mediterranean Studies.",
  },
  {
    date: "Nov 2015-Aug 2016",
    title: "Visiting Researcher",
    place: "University of Edinburgh",
    detail: "Electrical Engineering; learning-based image modality synthesis.",
  },
  {
    date: "Sep 2013-Aug 2014",
    title: "Research Associate",
    place: "Athena Research Center",
    detail: "Collaboration with the Institute for Language and Speech Processing.",
  },
  {
    date: "Feb 2013-Jun 2013",
    title: "Intern",
    place: "OTE S.A.",
    detail: "Transmission and access network.",
  },
];

const education = [
  {
    date: "2018-2024",
    title: "PhD, Production and Management Engineering",
    place: "Democritus University of Thrace",
    detail: "Dissertation: Learning from positive and unlabeled data for imbalanced datasets: theory and real-world applications.",
  },
  {
    date: "2016-2018",
    title: "MSc, Applied Archaeological Sciences",
    place: "University of the Aegean",
    detail: "Summa cum laude. Thesis: A Machine Learning Approach to Analysis and Classification of Measurements in Cultural Heritage.",
  },
  {
    date: "2014-2016",
    title: "Doctoral studies, Image Analysis",
    place: "IMT Institute for Advanced Studies Lucca",
    detail: "Withdrew. Thesis topic: Learning Based Modality Synthesis and Normalization for Cardiovascular Magnetic Resonance Imaging.",
  },
  {
    date: "2008-2013",
    title: "BSc, Information and Communication Engineering",
    place: "TEI of Central Macedonia",
    detail: "Summa cum laude.",
  },
];

const teaching = [
  {
    date: "Feb 2025-Jun 2025\nFeb 2026-Jun 2026",
    title: "Operating Systems I",
    place: "International Hellenic University",
    detail: "Department of Computer, Informatics & Telecommunications Engineering.",
  },
  {
    date: "Sep 2025-Jan 2026",
    title: "Operating Systems II",
    place: "International Hellenic University",
    detail: "Department of Computer, Informatics & Telecommunications Engineering.",
  },
  {
    date: "Sep 2025-Jan 2026",
    title: "Simulation and System Identification",
    place: "International Hellenic University",
    detail: "Department of Computer, Informatics & Telecommunications Engineering.",
  },
];

const publications = [
  {
    title: "Learning Dynamics and Representation Geometry",
    items: [
      {
        title: "Gauge-invariant representation holonomy",
        venue: "ICLR",
        year: "2026",
        href: "https://openreview.net/forum?id=czJqKToDGq",
      },
      {
        title: "Process-Tensor Tomography of SGD: Measuring Non-Markovian Memory via Back-Flow of Distinguishability",
        venue: "AISTATS",
        year: "2026",
        href: "https://openreview.net/forum?id=TonOzlbE3k",
      },
      {
        title: "Training Memory in Deep Neural Networks: Mechanisms, Evidence, and Measurement Gaps",
        venue: "arXiv",
        year: "2026",
        href: "https://arxiv.org/abs/2601.21624",
      },
    ],
  },
  {
    title: "Positive-Unlabeled and Weakly Supervised Learning",
    items: [
      {
        title: "Angular Regularization for Positive-Unlabeled Learning on the Hypersphere",
        venue: "TMLR",
        year: "2025",
        href: "https://openreview.net/forum?id=XQhO0Ly6el",
      },
      {
        title: "Dense-PU: Learning a Density-Based Boundary for Positive and Unlabeled Learning",
        venue: "IEEE Access",
        year: "2024",
        href: "https://doi.org/10.1109/ACCESS.2024.3420453",
      },
      {
        title: "Enhancing Weakly Supervised Defect Detection Through Anomaly-Informed Weighted Training",
        venue: "IEEE TIM",
        year: "2024",
        href: "https://ieeexplore.ieee.org/document/10716729/",
      },
    ],
  },
  {
    title: "Applied ML and Cultural Systems",
    items: [
      {
        title: "Tackling Dataset Bias With an Automated Collection of Real-World Samples",
        venue: "IEEE Access",
        year: "2022",
        href: "https://doi.org/10.1109/ACCESS.2022.3226517",
      },
      {
        title: "Effective Raman spectra identification with tree-based methods",
        venue: "Journal of Cultural Heritage",
        year: "2019",
        href: "https://doi.org/10.1016/j.culher.2018.10.016",
      },
      {
        title: "Whole Image Synthesis using a Deep Encoder-Decoder Network",
        venue: "SASHIMI / MICCAI workshop",
        year: "2016",
        href: "https://doi.org/10.1007/978-3-319-46630-9_13",
      },
    ],
  },
];

const projects = [
  {
    year: "2024",
    name: "ARGUS",
    description: "Smart monitoring of remote cultural treasures.",
    href: "https://www.argus-project.eu",
  },
  {
    year: "2024",
    name: "Firefly",
    description: "Fostering virtual heritage experience for elderly users.",
    href: "https://firefly.athenarc.gr",
  },
  {
    year: "2022",
    name: "CAnTi",
    description: "Conservation of Ancient Tiryns.",
    href: "http://canti.athenarc.gr",
  },
  {
    year: "2022",
    name: "Thalia",
    description: "Digital toolset for small cultural institutions.",
    href: "http://thalia.athenarc.gr",
  },
  {
    year: "2022",
    name: "Tramir",
    description: "Interactive room for traditional Greek music and dances.",
    href: "https://tramir.bookscanner.gr",
  },
  {
    year: "2020",
    name: "PHILOTIS",
    description: "Technologies for recording, analysis, and documentation of living languages.",
    href: "http://philotis.athenarc.gr",
  },
];

</script>

<style scoped>
.box{ padding: 18px; }
.head{ display: flex; align-items: flex-end; justify-content: space-between; gap: 14px; flex-wrap: wrap; }
.lead{ margin: 10px 0 0; color: var(--muted); font-size: 1.06rem; max-width: 72ch; }
.row{ display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }
.divider{ height: 1px; background: var(--rule); margin: 22px 0; }

.summary-grid{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.summary-card{
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-soft);
}
.summary-card p{ margin: 6px 0 0; color: var(--muted); }
.kicker{
  display: block;
  color: var(--muted2);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.cv-section{ margin: 0; }
.timeline{ display: grid; gap: 10px; margin-top: 12px; }
.entry{
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr);
  gap: 14px;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-soft);
}
.date{ color: var(--muted2); font-weight: 800; }
.entry h3{ margin: 0; font-size: 1rem; }
.place{ margin: 5px 0 0; color: var(--muted2); font-weight: 700; }
.detail{ margin: 6px 0 0; color: var(--muted); }

.publication-groups{ display: grid; gap: 14px; margin-top: 12px; }
.pub-group{
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-soft);
}
.pub-group h3{ margin: 0 0 8px; font-size: 1rem; }
.pub-group ul,
.plain-list{ margin: 0; padding-left: 18px; color: var(--muted); }
.pub-group li + li,
.plain-list li + li{ margin-top: 8px; }
.pub-group a,
.note-link a{ color: var(--text); text-decoration: underline; text-underline-offset: 3px; }
.meta{ color: var(--muted2); font-weight: 700; }
.note-link{ margin-top: 12px; }

.project-grid{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 12px; }
.project{
  display: grid;
  gap: 4px;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-soft);
  text-decoration: none;
}
.project:hover{ background: #ffffff; text-decoration: none; }
.project span{ color: var(--muted2); font-weight: 800; font-size: 0.88rem; }
.project strong{ color: var(--text); }
.project small{ color: var(--muted); font-size: 0.94rem; }

.split{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }

@media (max-width: 900px){
  .summary-grid,
  .project-grid,
  .split{ grid-template-columns: 1fr; }
  .entry{ grid-template-columns: 1fr; }
}
</style>
