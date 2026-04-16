<template>
  <div class="container">
    <section class="hero card">
      <div class="grid">
        <div class="col-7">
          <div class="badges">
            <span class="badge">Geometry</span>
            <span class="badge">Dynamics</span>
            <span class="badge">Training memory</span>
            <span class="badge">Representation geometry</span>
            <span class="badge">PU learning</span>
            <span class="badge">Weak supervision</span>
            <span class="badge">Diffusion models</span>
          </div>

          <h1 class="h1">
            Vasileios Sevetlidis
          </h1>

          <div class="intro">
            <p class="lead">
              I am a machine learning researcher studying how learning systems evolve over time.
              My research asks how models organize information, retain memory of training, and
              develop path-dependent behavior through optimization.
            </p>

            <p class="lead">
              I work at the intersection of geometry, dynamics, and statistical learning. My
              interests include weak supervision, positive-unlabeled learning, representation
              geometry, training memory, and diffusion models. Across these areas, I seek methods
              that are both practically effective and theoretically illuminating.
            </p>

            <p class="lead">
              More broadly, I see machine learning as a dynamical process whose behavior cannot
              be understood only through final performance. I am interested in how representations
              form, how optimization preserves traces of history, and how generative models reflect
              the geometric structure of the fields they learn. My goal is to help build a view of
              machine learning in which geometry and dynamics clarify not only what models do, but
              why they do it.
            </p>
          </div>

          <div class="buttons">
            <RouterLink class="btn primary" to="/research">Start here: Research</RouterLink>
            <RouterLink class="btn" to="/code">Code</RouterLink>
            <RouterLink class="btn" to="/talks">Talks/Posters</RouterLink>
            <RouterLink class="btn" to="/cv">CV</RouterLink>
          </div>

          <div class="now">
            <span class="badge">Now</span>
            <span class="nowText">
              Attending ICLR & AISTATS. Say hi if you are working on representation geometry,
              training dynamics, weak supervision, or diffusion models.
            </span>
          </div>
        </div>

        <div class="col-5">
          <div class="panel">
            <h2 class="h2">Best of</h2>

            <div class="item">
              <div class="kicker">Representation geometry</div>
              <div class="title">Gauge-invariant representation holonomy</div>
              <div class="desc">
                A path-sensitive diagnostic for learned representations: measure the twist
                accumulated when features move around closed loops.
              </div>
              <div class="row">
                <a class="btn small" href="/#/iclr">Paper page</a>
                <a class="btn small" href="https://vasiseve.github.io/Gauge-Invariant-Representation-Holonomy" target="_blank" rel="noreferrer">Project</a>
                <a class="btn small" href="https://github.com/vasiseve/gauge-invariant-representation-holonomy-code" target="_blank" rel="noreferrer">Code</a>
                <a class="btn small" href="https://openreview.net/forum?id=czJqKToDGq" target="_blank" rel="noreferrer">OpenReview</a>
                <a class="btn small" href="/iclr/gauge-invariant-representation-holonomy.pdf" target="_blank" rel="noreferrer">PDF</a>
              </div>
            </div>

            <div class="divider"></div>

            <div class="item">
              <div class="kicker">Training dynamics</div>
              <div class="title">Process-Tensor Tomography of SGD</div>
              <div class="desc">
                A two-step intervention test for observable training memory, using
                back-flow of distinguishability to detect non-Markovian behavior.
              </div>
              <div class="row">
                <a class="btn small" href="/#/aistats">Paper page</a>
                <a class="btn small" href="https://vasiseve.github.io/Process-Tensor-Tomography-SGD/" target="_blank" rel="noreferrer">Project</a>
                <a class="btn small" href="https://github.com/vasiseve/Process-Tensor-Tomography-of-SGD-Measuring-Non-Markovian-Memory-via-Back-Flow-of-Distinguishability" target="_blank" rel="noreferrer">Code</a>
                <a class="btn small" href="https://openreview.net/forum?id=TonOzlbE3k" target="_blank" rel="noreferrer">OpenReview</a>
                <a class="btn small" href="/aistats/process-tensor-tomography-of-sgd.pdf" target="_blank" rel="noreferrer">PDF</a>
              </div>
            </div>

            <div class="divider"></div>

            <div class="item">
              <div class="kicker">Weak supervision</div>
              <div class="title">Positive-unlabeled learning</div>
              <div class="desc">
                Learning from incomplete supervision: angular regularization,
                density-based PU boundaries, and real-world defect/safety applications.
              </div>
              <div class="row">
                <RouterLink class="btn small" to="/research">Research</RouterLink>
                <a class="btn small" href="https://vasiseve.github.io/Angular-Regularization-PU-Hypersphere/#faq" target="_blank" rel="noreferrer">Project</a>
                <a class="btn small" href="https://openreview.net/forum?id=XQhO0Ly6el" target="_blank" rel="noreferrer">TMLR paper</a>
                <a class="btn small" href="https://doi.org/10.1109/ACCESS.2024.3420453" target="_blank" rel="noreferrer">Dense-PU</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="grid">
            <div class="col-6">
              <div class="mini card">
                <h2 class="h2">Open to</h2>
                <ul class="list">
                  <li>Research collaborations on geometry, dynamics, and statistical learning</li>
                  <li>Weak supervision, PU learning, training memory, and diffusion models</li>
                  <li>Speaking (reading groups, seminars)</li>
                </ul>
              </div>
            </div>
            <div class="col-6">
              <div class="mini card">
                <h2 class="h2">Find me</h2>
                <p class="p">Email is best. For conference follow-ups, use:</p>
                <div class="row">
                  <a class="btn small" href="/#/iclr">/iclr</a>
                  <a class="btn small" href="/#/aistats">/aistats</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.hero{ padding: 18px; }
.badges{ display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; }
.intro{ margin: 12px 0 16px; max-width: 72ch; }
.lead{ font-size: 1.04rem; color: var(--muted); margin: 0; }
.lead + .lead{ margin-top: 12px; }
.buttons{ display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; }
.panel{ padding: 16px; border-radius: var(--radius); background: var(--surface-soft); border: 1px solid var(--border); }
.item{ padding: 10px 0; }
.kicker{ font-size: 0.82rem; letter-spacing: 0.03em; text-transform: uppercase; color: var(--muted2); margin-bottom: 6px; }
.title{ font-weight: 700; margin-bottom: 4px; }
.desc{ color: var(--muted); font-size: 0.95rem; }
.row{ display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px; }
.small{ padding: 8px 10px; border-radius: var(--radius); font-size: 0.92rem; }
.divider{ height: 1px; background: var(--rule); margin: 10px 0; }
.now{ display: flex; align-items: center; gap: 10px; margin-top: 10px; }
.nowText{ color: var(--muted); }
.mini{ padding: 16px; }
.list{ margin: 8px 0 0; padding-left: 18px; color: var(--muted); }
</style>
