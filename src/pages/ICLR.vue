<template>
  <div class="container">
    <section class="card box">
      <div class="paper-hero">
        <div class="hero-copy">
          <div class="badge">ICLR quick links</div>
          <h1 class="h1">Gauge-invariant representation holonomy</h1>
          <p class="authors">Vasileios Sevetlidis and George Pavlidis</p>
          <p class="lead">
            A geometric diagnostic for learned representations. Instead of only
            asking whether two activation clouds overlap, we ask what happens when
            features are transported along a closed path.
          </p>

          <div class="row">
            <a class="btn primary" :href="paperUrl" target="_blank" rel="noreferrer">Paper PDF</a>
            <a class="btn" :href="mailtoUrl">Ask me about it</a>
          </div>
        </div>

        <figure class="figure-card">
          <img :src="schematicUrl" alt="Schematic of holonomy as path-dependent feature rotation" />
          <figcaption>
            Holonomy composes local feature rotations around a loop and reports the
            remaining net twist.
          </figcaption>
        </figure>
      </div>

      <div class="divider"></div>

      <div class="grid">
        <article class="col-7 narrative">
          <h2 class="h2">The question</h2>
          <p class="p">
            Standard representation similarities such as CKA and SVCCA compare
            activation sets at fixed inputs, but they miss how features move along
            input paths. Two models may look almost identical under these metrics
            and still respond differently to perturbations because their internal
            features rotate differently as the input changes.
          </p>
          <p class="p">
            This paper studies that missing pathwise geometry. We treat a layer as
            a feature field over input space and measure the net rotation that
            remains after locally transporting feature neighborhoods around a
            small closed loop.
          </p>
        </article>

        <aside class="col-5 key-card">
          <h2 class="h2">Core intuition</h2>
          <p class="p">
            A flat representation comes back to itself. A curved representation
            comes back twisted. That residual twist is the holonomy signal.
          </p>
        </aside>
      </div>

      <div class="divider"></div>

      <h2 class="h2">The idea in three steps</h2>
      <div class="steps">
        <div class="step">
          <span class="num">01</span>
          <h3>Draw a small loop</h3>
          <p>
            Around an input, sample a closed path in a local plane, such as a
            small circle through nearby natural variations.
          </p>
        </div>
        <div class="step">
          <span class="num">02</span>
          <h3>Transport features</h3>
          <p>
            For each edge of the loop, align nearby feature clouds with a
            rotation-only Procrustes map in a shared subspace.
          </p>
        </div>
        <div class="step">
          <span class="num">03</span>
          <h3>Close the loop</h3>
          <p>
            Compose the local rotations. If the final transport is not the
            identity, the representation accumulated path-dependent twist.
          </p>
        </div>
      </div>

      <div class="divider"></div>

      <h2 class="h2">What the paper contributes</h2>
      <div class="contribs">
        <div class="contrib">
          <span class="num">01</span>
          <h3>Estimator</h3>
          <p>
            Global whitening, shared-neighbor subspaces, and SO(q) Procrustes
            transports embedded back into the full representation space.
          </p>
        </div>
        <div class="contrib">
          <span class="num">02</span>
          <h3>Theory</h3>
          <p>
            Orthogonal and post-whitening affine invariance, a linear null, and
            small-radius behavior where holonomy vanishes with loop radius.
          </p>
        </div>
        <div class="contrib">
          <span class="num">03</span>
          <h3>Evidence</h3>
          <p>
            MNIST and CIFAR experiments show radius/depth trends, training-regime
            differences, robustness associations, and stability checks.
          </p>
        </div>
      </div>

      <div class="divider"></div>

      <div class="grid">
        <figure class="col-6 result-figure">
          <img :src="smallRadiusUrl" alt="Small-radius holonomy behavior on CIFAR-10 layer2" />
          <figcaption>
            Small-radius CIFAR-10 probe: holonomy stays near the predicted local
            regime and the self-loop bias floor is close to zero.
          </figcaption>
        </figure>

        <figure class="col-6 result-figure">
          <img :src="mnistUrl" alt="MNIST translation loop illustrating holonomy" />
          <figcaption>
            A loop around a digit exposes when feature transport closes cleanly
            and when aliasing leaves a measurable residual twist.
          </figcaption>
        </figure>
      </div>

      <div class="divider"></div>

      <h2 class="h2">Why it is useful</h2>
      <div class="reading-list">
        <div>
          <span class="kicker">Beyond similarity</span>
          <p class="p">Holonomy can separate representations that are highly aligned under pointwise metrics.</p>
        </div>
        <div>
          <span class="kicker">Layer-wise diagnosis</span>
          <p class="p">The signal localizes where a network introduces path dependence as radius or depth changes.</p>
        </div>
        <div>
          <span class="kicker">Robustness probes</span>
          <p class="p">Small fixed-radius measurements track differences across training regimes and stress tests.</p>
        </div>
      </div>

      <div class="divider"></div>

      <h2 class="h2">BibTeX</h2>
      <pre class="bib"><code>@inproceedings{sevetlidis2025holonomy,
  title = {Gauge-invariant representation holonomy},
  author = {Sevetlidis, Vasileios and Pavlidis, George},
  booktitle = {International Conference on Learning Representations},
  year = {2025}
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

const paperUrl = asset("iclr/gauge-invariant-representation-holonomy.pdf");
const schematicUrl = asset("iclr/holonomy_schematic.png");
const mnistUrl = asset("iclr/holonomy_mnist.png");
const smallRadiusUrl = asset("iclr/small_radius_layer2.png");
const mailtoUrl =
  "mailto:vasiseve@athenarc.gr?subject=Question%20about%20Gauge-invariant%20representation%20holonomy";
</script>

<style scoped>
.box{ padding: 18px; }
.paper-hero{ display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 18px; align-items: start; }
.hero-copy{ min-width: 0; }
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
