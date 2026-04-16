<template>
  <div class="container">
    <section class="card box">
      <div class="paper-hero">
        <div class="hero-copy">
          <div class="badge">AISTATS quick links</div>
          <h1 class="h1">
            Process-Tensor Tomography of SGD
          </h1>
          <p class="subtitle">Measuring non-Markovian memory via back-flow of distinguishability</p>
          <p class="authors">Vasileios Sevetlidis and George Pavlidis</p>
          <p class="lead">
            A measurement-first view of training dynamics: use controlled
            interventions to test whether a fixed second SGD segment depends only
            on the current observable state, or still remembers how that state was
            reached.
          </p>

          <div class="row">
            <a class="btn primary" :href="paperUrl" target="_blank" rel="noreferrer">Paper PDF</a>
            <a class="btn" :href="projectUrl" target="_blank" rel="noreferrer">Project page</a>
            <a class="btn" :href="codeUrl" target="_blank" rel="noreferrer">Code</a>
            <a class="btn" :href="openReviewUrl" target="_blank" rel="noreferrer">OpenReview</a>
            <a class="btn" :href="mailtoUrl">Ask me about it</a>
          </div>
        </div>

        <figure class="figure-card">
          <img :src="breakScatterUrl" alt="Scatter plot comparing no-break and break TV effects" />
          <figcaption>
            Resetting optimizer state changes the measured memory effect: many
            setups move toward attenuation or cross sign after the causal break.
          </figcaption>
        </figure>
      </div>

      <div class="divider"></div>

      <div class="grid">
        <article class="col-7 narrative">
          <h2 class="h2">The question</h2>
          <p class="p">
            Analyses of SGD often become Markovian once we augment the state with
            parameters and optimizer buffers. But practitioners usually observe
            something coarser: predictions, representations, losses, and validation
            behavior.
          </p>
          <p class="p">
            This paper asks whether short training segments are memoryless at that
            observable level. If two first-step histories produce different probe
            predictions, can the same second intervention be described by one
            history-independent channel, or does recent training history still
            shape what happens next?
          </p>
        </article>

        <aside class="col-5 key-card">
          <h2 class="h2">Core intuition</h2>
          <p class="p">
            If a common second intervention increases the distinguishability
            between two histories, then the observable dynamics cannot be explained
            by a memoryless map at that scale.
          </p>
        </aside>
      </div>

      <div class="divider"></div>

      <h2 class="h2">The diagnostic in three steps</h2>
      <div class="steps">
        <div class="step">
          <span class="num">01</span>
          <h3>Branch training</h3>
          <p>
            Start from the same checkpoint and apply two alternative first
            interventions, A and A-prime, such as different augmentations.
          </p>
        </div>
        <div class="step">
          <span class="num">02</span>
          <h3>Apply the same B</h3>
          <p>
            Continue both branches with the same second intervention B, either
            carrying optimizer state or resetting it with a causal break.
          </p>
        </div>
        <div class="step">
          <span class="num">03</span>
          <h3>Measure back-flow</h3>
          <p>
            Compare probe-prediction distances before and after B. Positive
            Delta_BF means distinguishability flowed back into the observable.
          </p>
        </div>
      </div>

      <div class="divider"></div>

      <h2 class="h2">What the paper contributes</h2>
      <div class="contribs">
        <div class="contrib">
          <span class="num">01</span>
          <h3>Operational witness</h3>
          <p>
            A two-step intervention protocol with TV, Jensen-Shannon, and
            Hellinger divergences on held-out predictive distributions.
          </p>
        </div>
        <div class="contrib">
          <span class="num">02</span>
          <h3>Causal break</h3>
          <p>
            Resetting optimizer state before B tests whether momentum buffers
            mediate the observed memory effect.
          </p>
        </div>
        <div class="contrib">
          <span class="num">03</span>
          <h3>Evidence</h3>
          <p>
            CIFAR-100 and Imagenette experiments across CNNs, ResNets, VGG,
            MobileNetV2, and ViT-B/16 show robust short-horizon memory effects.
          </p>
        </div>
      </div>

      <div class="divider"></div>

      <div class="grid">
        <figure class="col-6 result-figure tall">
          <img :src="cifarRegimeUrl" alt="CIFAR-100 TV effect by regime and optimizer condition" />
          <figcaption>
            CIFAR-100 regime summary: high-momentum and overlap regimes tend to
            amplify without a break and move toward attenuation with a break.
          </figcaption>
        </figure>

        <figure class="col-6 result-figure tall">
          <img :src="imagenetteRegimeUrl" alt="Imagenette TV effect by regime and optimizer condition" />
          <figcaption>
            Imagenette shows the same operational pattern on a second dataset,
            with confidence intervals summarizing repeat variability.
          </figcaption>
        </figure>

        <figure class="col-12 result-figure">
          <img :src="momentumEvidenceUrl" alt="Scatter plot linking back-flow to momentum alignment" />
          <figcaption>
            Mechanism check: stronger alignment between the momentum buffer and
            the upcoming B gradient predicts larger measured back-flow.
          </figcaption>
        </figure>
      </div>

      <div class="divider"></div>

      <h2 class="h2">Why it is useful</h2>
      <div class="reading-list">
        <div>
          <span class="kicker">Optimizer memory</span>
          <p class="p">It gives a direct observable test for when optimizer carryover matters.</p>
        </div>
        <div>
          <span class="kicker">Schedule design</span>
          <p class="p">It can reveal when switching regimes should preserve or reset buffers.</p>
        </div>
        <div>
          <span class="kicker">Order sensitivity</span>
          <p class="p">It connects short-horizon history dependence to non-commuting training interventions.</p>
        </div>
      </div>

      <div class="divider"></div>

      <h2 class="h2">BibTeX</h2>
      <pre class="bib"><code>@inproceedings{sevetlidis2026process,
  title = {Process-Tensor Tomography of SGD: Measuring Non-Markovian Memory via Back-Flow of Distinguishability},
  author = {Sevetlidis, Vasileios and Pavlidis, George},
  booktitle = {International Conference on Artificial Intelligence and Statistics},
  year = {2026}
}</code></pre>

      <div class="divider"></div>

      <h2 class="h2">Contact</h2>
      <p class="p">
        Best way to reach me:
        <a class="inline-link" :href="mailtoUrl">vasiseve [at] athenarc [dot] gr</a>
      </p>
    </section>
  </div>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL;
const asset = (path) => `${baseUrl}${path}`;

const paperUrl = asset("aistats/process-tensor-tomography-of-sgd.pdf");
const projectUrl = "https://vasiseve.github.io/Process-Tensor-Tomography-SGD/";
const codeUrl =
  "https://github.com/vasiseve/Process-Tensor-Tomography-of-SGD-Measuring-Non-Markovian-Memory-via-Back-Flow-of-Distinguishability";
const openReviewUrl = "https://openreview.net/forum?id=TonOzlbE3k";
const breakScatterUrl = asset("aistats/tv_break_scatter.png");
const cifarRegimeUrl = asset("aistats/tv_regime_summary_ci_cifar100.png");
const imagenetteRegimeUrl = asset("aistats/tv_regime_summary_ci_imagenette.png");
const momentumEvidenceUrl = asset("aistats/evidence_scatter_delta_vs_momalign.png");
const mailtoUrl =
  "mailto:vasiseve@athenarc.gr?subject=Question%20about%20Process-Tensor%20Tomography%20of%20SGD";
</script>

<style scoped>
.box{ padding: 18px; }
.paper-hero{ display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 18px; align-items: start; }
.hero-copy{ min-width: 0; }
.subtitle{ margin: 8px 0 0; color: var(--muted); font-size: 1.15rem; font-weight: 700; }
.authors{ margin: 10px 0 0; color: var(--muted2); font-weight: 700; }
.lead{ margin: 12px 0 0; color: var(--muted); font-size: 1.08rem; max-width: 68ch; }
.row{ display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; }
.divider{ height: 1px; background: var(--rule); margin: 18px 0; }
.narrative .p + .p{ margin-top: 12px; }

.figure-card,
.result-figure{
  margin: 0;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-soft);
}
.figure-card img,
.result-figure img{
  display: block;
  width: 100%;
  border-radius: var(--radius);
  background: #ffffff;
}
.tall img{ max-height: 430px; object-fit: contain; }
figcaption{
  margin-top: 10px;
  color: var(--muted);
  font-size: 0.93rem;
}

.key-card{
  padding: 14px;
  border: 1px solid var(--accent-border);
  border-radius: var(--radius);
  background: var(--accent-soft);
}

.steps,
.contribs{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 12px; }
.step,
.contrib{
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-soft);
}
.num{ color: var(--muted2); font-size: 0.85rem; font-weight: 800; }
.step h3,
.contrib h3{ margin: 6px 0 6px; font-size: 1rem; }
.step p,
.contrib p{ margin: 0; color: var(--muted); }

.reading-list{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 12px; }
.kicker{
  display: block;
  margin-bottom: 6px;
  color: var(--muted2);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.bib{
  margin: 12px 0 0;
  padding: 14px;
  overflow: auto;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--code-bg);
}
.bib code{
  color: var(--code-text);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
}
.inline-link{ text-decoration: underline; text-underline-offset: 3px; }

@media (max-width: 900px){
  .paper-hero,
  .steps,
  .contribs,
  .reading-list{ grid-template-columns: 1fr; }
}
</style>
