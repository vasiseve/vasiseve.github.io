<template>
  <div class="container">
    <section class="card box">
      <div class="head">
        <div>
          <div class="badge">Research map</div>
          <h1 class="h1">Research</h1>
          <p class="lead">
            I study machine learning as a dynamical process: how representations
            form, how optimization preserves traces of history, and how models
            behave when supervision is incomplete or biased.
          </p>
        </div>
      </div>

      <div class="divider"></div>

      <section
        v-for="group in researchGroups"
        :key="group.title"
        class="group"
      >
        <div class="group-head">
          <p class="kicker">{{ group.label }}</p>
          <h2 class="h2">{{ group.title }}</h2>
          <p class="p">{{ group.description }}</p>
        </div>

        <div class="topics">
          <article
            v-for="topic in group.topics"
            :key="topic.title"
            class="topic-card"
          >
            <div class="topic-head">
              <h3>{{ topic.title }}</h3>
              <p>{{ topic.description }}</p>
            </div>

            <div class="papers">
              <article
                v-for="paper in topic.papers"
                :key="paper.title"
                class="paper"
              >
                <div class="paper-main">
                  <h4>
                    <a
                      v-if="paper.href"
                      :href="paper.href"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {{ paper.title }}
                    </a>
                    <span v-else>{{ paper.title }}</span>
                  </h4>
                  <p class="venue">{{ paper.venue }} · {{ paper.year }}</p>
                  <p v-if="paper.note" class="note">{{ paper.note }}</p>
                </div>
                <div v-if="paper.tags?.length" class="tags">
                  <span v-for="tag in paper.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <div v-if="paper.links?.length" class="paper-links">
                  <a
                    v-for="link in paper.links"
                    :key="paper.title + link.label"
                    class="btn small"
                    :href="link.href"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {{ link.label }}
                  </a>
                </div>
              </article>
            </div>
          </article>
        </div>

        <div class="divider"></div>
      </section>

      <section class="open-questions">
        <h2 class="h2">Questions I keep returning to</h2>
        <div class="question-grid">
          <p v-for="question in questions" :key="question" class="question">
            {{ question }}
          </p>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
const researchGroups = [
  {
    label: "Current research",
    title: "Geometry, Dynamics, and Weak Supervision",
    description:
      "These are the themes that currently organize my research program: learning as motion, representation geometry, training memory, and reliable learning from incomplete supervision.",
    topics: [
      {
        title: "Learning Dynamics, Geometry, and Training Memory",
        description:
          "How do representations move, twist, remember training history, and develop path-dependent behavior through optimization?",
        papers: [
          {
            title: "Process-Tensor Tomography of SGD: Measuring Non-Markovian Memory via Back-Flow of Distinguishability",
            venue: "AISTATS",
            year: "2026",
            href: "https://openreview.net/forum?id=TonOzlbE3k",
            note: "An intervention-based diagnostic for observable training memory in SGD.",
            tags: ["training memory", "optimization", "dynamics"],
          },
          {
            title: "Gauge-invariant representation holonomy",
            venue: "ICLR",
            year: "2026",
            href: "https://vasiseve.github.io/Gauge-Invariant-Representation-Holonomy",
            note: "A path-sensitive statistic for curvature-like structure in learned representations.",
            tags: ["representation geometry", "holonomy", "diagnostics"],
            links: [
              { label: "Project", href: "https://vasiseve.github.io/Gauge-Invariant-Representation-Holonomy" },
              { label: "Code", href: "https://github.com/vasiseve/gauge-invariant-representation-holonomy-code" },
              { label: "OpenReview", href: "https://openreview.net/forum?id=czJqKToDGq" },
            ],
          },
          {
            title: "Training Memory in Deep Neural Networks: Mechanisms, Evidence, and Measurement Gaps",
            venue: "arXiv",
            year: "2026",
            href: "https://arxiv.org/abs/2601.21624",
            note: "A broader synthesis of memory mechanisms and measurement challenges in deep learning.",
            tags: ["survey", "memory", "optimization"],
          },
        ],
      },
      {
        title: "Weak Supervision and Positive-Unlabeled Learning",
        description:
          "Methods for learning when negative examples are missing, labels are incomplete, or supervision is biased by data collection.",
        papers: [
          {
            title: "Angular Regularization for Positive-Unlabeled Learning on the Hypersphere",
            venue: "Transactions on Machine Learning Research",
            year: "2025",
            href: "https://openreview.net/forum?id=XQhO0Ly6el",
            note: "A geometric regularization view of PU learning.",
            tags: ["PU learning", "geometry", "regularization"],
          },
          {
            title: "Two-Stage Angular Alignment for Positive-Unlabeled Learning",
            venue: "International Conference on Pattern Recognition Applications and Methods (ICPRAM)",
            year: "2026",
            href: "https://www.scitepress.org/Papers/2026/139641/139641.pdf",
            note: "A two-stage angular alignment strategy for PU settings.",
            tags: ["PU learning", "alignment"],
          },
          {
            title: "Dense-PU: Learning a density-based boundary for positive and unlabeled learning",
            venue: "IEEE Access",
            year: "2024",
            href: "https://doi.org/10.1109/ACCESS.2024.3420453",
            note: "A density-based decision boundary for positive-unlabeled data.",
            tags: ["PU learning", "density", "classification"],
          },
          {
            title: "Leveraging positive-unlabeled learning for enhanced black spot accident identification on Greek road networks",
            venue: "Computers",
            year: "2024",
            href: "https://doi.org/10.3390/computers13020049",
            note: "A PU learning formulation for road-safety black spot identification.",
            tags: ["PU learning", "road safety"],
          },
          {
            title: "Positive and unlabelled learning with data approximation for photovoltaic defect detection",
            venue: "IEEE International Conference on Imaging Systems and Techniques",
            year: "2024",
            href: "https://doi.org/10.1109/IST63414.2024.10759214",
            note: "PU learning for defect detection under limited annotation.",
            tags: ["PU learning", "defect detection"],
          },
          {
            title: "Detecting Media Clones in Cultural Repositories Using a Positive Unlabeled Learning Approach",
            venue: "arXiv",
            year: "2026",
            href: "https://arxiv.org/abs/2604.04071",
            note: "PU learning for media-clone detection in cultural repositories.",
            tags: ["PU learning", "cultural repositories"],
          },
          {
            title: "Learning from positive and unlabeled data for imbalanced datasets: theory and real-world applications",
            venue: "PhD thesis",
            year: "2024",
            href: "https://repo.lib.duth.gr/jspui/handle/123456789/19964",
            note: "Theory and applications of PU learning for imbalanced data.",
            tags: ["PU learning", "thesis"],
          },
        ],
      },
      {
        title: "Weakly Supervised Vision and Dataset Bias",
        description:
          "Practical vision systems where data collection, weak labels, anomaly signals, and dataset bias strongly shape model behavior.",
        papers: [
          {
            title: "Enhancing Weakly Supervised Defect Detection Through Anomaly-Informed Weighted Training",
            venue: "IEEE Transactions on Instrumentation and Measurement",
            year: "2024",
            href: "https://ieeexplore.ieee.org/document/10716729/",
            note: "A weakly supervised training strategy guided by anomaly information.",
            tags: ["weak supervision", "defect detection"],
          },
          {
            title: "Defect detection using weakly supervised learning",
            venue: "IEEE International Conference on Imaging Systems and Techniques",
            year: "2023",
            href: "https://arxiv.org/abs/2303.15092",
            note: "Weak-supervision methods for industrial defect detection.",
            tags: ["weak supervision", "vision"],
          },
          {
            title: "Tackling dataset bias with an automated collection of real-world samples",
            venue: "IEEE Access",
            year: "2022",
            href: "https://doi.org/10.1109/ACCESS.2022.3226517",
            note: "A pipeline for reducing dataset bias through real-world sample collection.",
            tags: ["dataset bias", "data collection"],
          },
          {
            title: "Web acquired image datasets need curation: An exemplar pipeline evaluated on Greek food images",
            venue: "IEEE International Conference on Imaging Systems and Techniques",
            year: "2021",
            href: "https://ieeexplore.ieee.org/abstract/document/9651419",
            note: "A curation pipeline for noisy web-acquired image datasets.",
            tags: ["dataset curation", "vision"],
          },
          {
            title: "AUGMENTING EXISTING FOOD IMAGE DATASETS WITH GREEK DISHES",
            venue: "Big Data in Archaeology",
            year: "2021",
            href: "https://d1wqtxts1xzle7.cloudfront.net/114375870/S02-1_20-_20Sevetlidis_20-_20Augmenting_20existing_20food_20image_20datasets_20with_20Greek_20dishes-libre.pdf?1715329583=&response-content-disposition=inline%3B+filename%3DAugmenting_existing_food_image_datasets.pdf&Expires=1776255459&Signature=KvlnuZqIBscbzMV-cDxdvPmstOW96QT717EvoEkjHRVw~5cVM7-Ine2rWVbMQ~-eHLxRWnGqfyJFxuSgrJwdBsXax0QB36WxEA5G05a-Ptq-xhGAMyF7w8jlI7D~XyoK~cezaKAyXoy77l95LSW0Iu1oiZoFbsQ4fSYYlp06TV6-7sm~tokhgceSARrQ-VgFSG-BAwrfPhqWrutmZaSRsh4BaMClrgQb30ZSjUobKymKM3RPh6KB9Wqy61R0uaAZ-agLVmecnS7De8Wu177ODd1tzuK7IUjIr1pHyeJoHke9XUmHuEcKpMq~gjsqxBkx0yvOWDHA4BlDL4kwuyIIyA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
            note: "Dataset augmentation for Greek food image recognition.",
            tags: ["datasets", "food images"],
          },
          {
            title: "Machine Vision in Human-Centric Manufacturing: A Review from the Perspective of the Frozen Dough Industry",
            venue: "Electronics",
            year: "2025",
            href: "https://doi.org/10.3390/electronics14173361",
            note: "A review of machine vision for human-centric manufacturing settings.",
            tags: ["machine vision", "review"],
          },
        ],
      },
    ],
  },
  {
    label: "Applied and collaborative research",
    title: "Measurement, Cultural Heritage, and Human-Centric Systems",
    description:
      "A large part of my work is collaborative and domain-facing: applying machine learning, data modeling, and digital systems to measurement-heavy or human-centered settings.",
    topics: [
      {
        title: "Infrastructure, Safety, and Scientific Measurements",
        description:
          "Applied machine learning and pattern recognition in domains where reliability, measurement, and domain constraints matter.",
        papers: [
          {
            title: "Deep learning-based black spot identification on Greek road networks",
            venue: "Data",
            year: "2023",
            href: "https://doi.org/10.3390/data8060110",
            note: "Deep learning for road accident black spot identification.",
            tags: ["road safety", "deep learning"],
          },
          {
            title: "Effective Raman spectra identification with tree-based methods",
            venue: "Journal of Cultural Heritage",
            year: "2019",
            href: "https://doi.org/10.1016/j.culher.2018.10.016",
            note: "Tree-based machine learning for Raman spectra identification.",
            tags: ["Raman spectroscopy", "tree models"],
          },
          {
            title: "Hierarchical classification for improved compound identification in Raman spectroscopy",
            venue: "CAA-GR",
            year: "2018",
            href: "https://sites.caa-international.org/gr/wp-content/uploads/sites/26/2019/04/CAA-GR-2018-proceedings.pdf",
            note: "Hierarchical classification for compound identification.",
            tags: ["Raman spectroscopy", "classification"],
          },
          {
            title: "A machine learning approach to analysis and classification of measurements in cultural heritage",
            venue: "Thesis / early work",
            year: "2018",
            href: "https://www.openarchives.gr/aggregator-openarchives/edm/hellanicus/000100-11610_19962?language=en",
            note: "Machine learning for measurement analysis in cultural heritage.",
            tags: ["measurement", "cultural heritage"],
          },
          {
            title: "Efficient colour sorting of Chios mastiha",
            venue: "IEEE International Conference on Imaging Systems and Techniques",
            year: "2014",
            href: "https://ieeexplore.ieee.org/abstract/document/6958510",
            note: "Machine vision for color sorting in an agricultural product pipeline.",
            tags: ["machine vision", "sorting"],
          },
          {
            title: "BK tree indexing for active vision-based loop-closure detection in autonomous navigation",
            venue: "MED",
            year: "2022",
            href: "https://ieeexplore.ieee.org/document/9837138/",
            note: "Indexing for visual loop-closure detection in navigation.",
            tags: ["robotics", "active vision"],
          },
        ],
      },
      {
        title: "Cultural Heritage, Digital Twins, and Cultural Repositories",
        description:
          "Collaborative work on digital twins, cultural asset management, preservation, metaverse systems, and cultural repositories.",
        papers: [
          {
            title: "PANOPTES: A Digital Twin Ontology for Cultural Asset Management",
            venue: "IEEE-CH",
            year: "2025",
            href: "https://doi.org/10.5281/zenodo.16633603",
            note: "An ontology for cultural asset digital twins.",
            tags: ["digital twins", "ontology"],
          },
          {
            title: "Defining a New Digital Twin Ontology for Cultural Heritage Preservation-the Case of ARGUS",
            venue: "Eurographics",
            year: "2025",
            href: "https://zenodo.org/records/17276771",
            note: "A digital twin ontology for cultural heritage preservation.",
            tags: ["digital twins", "ARGUS"],
          },
          {
            title: "Towards Evolving Actor-Network Ontologies: Enabling Reflexive Digital Twins for Cultural Heritage",
            venue: "Information",
            year: "2025",
            href: "https://doi.org/10.3390/info16100892",
            note: "Actor-network ontology design for reflexive cultural heritage digital twins.",
            tags: ["ontology", "digital twins"],
          },
          {
            title: "Future-Proofing Heritage with ARGUS: A Multimodal Digital Twin Approach for Sustainable Preservation",
            venue: "CAA Proceedings",
            year: "2025",
            href: "https://doi.org/10.5281/zenodo.17755550",
            note: "A multimodal digital twin approach to sustainable preservation.",
            tags: ["ARGUS", "preservation"],
          },
          {
            title: "Sensor-Driven Preventive Preservation in Remote Built Heritage: A Threat-to-Sensor Approach",
            venue: "IEEE-CH",
            year: "2025",
            href: "https://ieeexplore.ieee.org/abstract/document/11279543",
            note: "Sensor mapping for preventive preservation of remote built heritage.",
            tags: ["sensors", "preservation"],
          },
          {
            title: "Towards complete digital twins in cultural heritage with ART3mis 3D artifacts annotator",
            venue: "arXiv",
            year: "2026",
            href: "https://arxiv.org/abs/2602.12761",
            note: "A 3D artifact annotation route toward richer cultural heritage digital twins.",
            tags: ["3D annotation", "digital twins"],
          },
          {
            title: "Art3mis: ray-based textual annotation on 3D cultural objects",
            venue: "arXiv",
            year: "2026",
            href: "https://arxiv.org/abs/2602.12725",
            note: "Ray-based textual annotation for 3D cultural artifacts.",
            tags: ["3D annotation", "cultural objects"],
          },
          {
            title: "Museatopia: A Cultural Metaverse",
            venue: "CAA-GR",
            year: "2026",
            href: "https://doi.org/10.1007/978-3-032-06389-2_18",
            note: "A cultural metaverse concept and system.",
            tags: ["metaverse", "cultural heritage"],
          },
          {
            title: "Demystifying publishing to Europeana: A practical workflow for content providers",
            venue: "Scientific Culture",
            year: "2015",
            href: "https://www.sci-cult.com/demystifying-publishing-to-europeana-a-practical-workflow-for-content-providers/",
            note: "A practical workflow for publishing cultural content to Europeana.",
            tags: ["Europeana", "workflow"],
          },
          {
            title: "Sustainability through digital transition: the case of small cultural stakeholders",
            venue: "Conference / proceedings",
            year: "2024",
            href: "https://doi.org/10.12681/elrie.7138",
            note: "Digital transition and sustainability for small cultural stakeholders.",
            tags: ["sustainability", "digital transition"],
          },
        ],
      },
      {
        title: "Language, Human-Centric Interaction, and Society",
        description:
          "Collaborations using AI, NLP, immersive systems, and data technologies in human-centered cultural and societal contexts.",
        papers: [
          {
            title: "ASR pipeline for low-resourced languages: A case study on Pomak",
            venue: "NLP Applications to Field Linguistics",
            year: "2023",
            href: "https://aclanthology.org/2023.fieldmatters-1.5/",
            note: "An ASR pipeline for a low-resourced language setting.",
            tags: ["ASR", "low-resource NLP"],
          },
          {
            title: "Morphologically annotated corpora of Pomak",
            venue: "Computational Methods in the Study of Endangered Languages",
            year: "2022",
            href: "https://aclanthology.org/2022.computel-1.22/",
            note: "Morphological resources for Pomak language documentation.",
            tags: ["Pomak", "corpora"],
          },
          {
            title: "Philotis: NLP Informed Language Documentation of Under-Resourced Languages-The Case of Pomak",
            venue: "HCSTG",
            year: "2022",
            href: "https://doi.org/10.5281/zenodo.7598116",
            note: "NLP-informed documentation for under-resourced languages.",
            tags: ["NLP", "language documentation"],
          },
          {
            title: "Human-Centric Emotion Recognition in VR for Humanities Research",
            venue: "CAA-GR",
            year: "2026",
            href: "https://doi.org/10.1007/978-3-032-06389-2_21",
            note: "Human-centric emotion recognition for humanities research contexts.",
            tags: ["emotion recognition", "human-centric AI"],
          },
          {
            title: "Towards reshaping children’s habits: vitalia’s AR-Gamified approach",
            venue: "Information",
            year: "2025",
            href: "https://doi.org/10.3390/info16070606",
            note: "An AR-gamified approach for habit change.",
            tags: ["AR", "gamification"],
          },
          {
            title: "Sustainable ecotourism through cutting-edge technologies",
            venue: "Sustainability",
            year: "2022",
            href: "https://doi.org/10.3390/su14020800",
            note: "Technology-supported sustainable ecotourism.",
            tags: ["ecotourism", "sustainability"],
          },
          {
            title: "AI in gastronomic tourism",
            venue: "Signal Processing and Information Technology",
            year: "2020",
            href: "https://doi.org/10.5281/zenodo.3862543",
            note: "AI applications in gastronomic tourism.",
            tags: ["tourism", "AI"],
          },
        ],
      },
    ],
  },
  {
    label: "Earlier work",
    title: "Synthesis, Reinforcement Learning, and Early Systems",
    description:
      "Earlier work that shaped my interest in learning systems, generative modeling, and adaptive behavior.",
    topics: [
      {
        title: "Deep Learning, Synthesis, and Adaptive Behavior",
        description:
          "Early explorations of deep neural synthesis and reinforcement-learning behavior.",
        papers: [
          {
            title: "Whole image synthesis using a deep encoder-decoder network",
            venue: "Simulation and Synthesis in Medical Imaging",
            year: "2016",
            href: "https://doi.org/10.1007/978-3-319-46630-9_13",
            note: "A deep encoder-decoder approach to whole image synthesis.",
            tags: ["image synthesis", "deep learning"],
          },
          {
            title: "Shaping the behavior of reinforcement learning agents",
            venue: "Pan-Hellenic Conference on Informatics",
            year: "2021",
            href: "https://doi.org/10.1145/3503823.3503905",
            note: "A study on shaping behavior in reinforcement-learning agents.",
            tags: ["reinforcement learning", "behavior"],
          },
        ],
      },
    ],
  },
];

const questions = [
  "How can we measure representation geometry without depending on arbitrary feature bases?",
  "When does optimizer state act as a memory channel rather than a harmless implementation detail?",
  "Can training schedules be designed around measured memory and path dependence?",
  "How can weak supervision remain reliable when labels and sampling processes are biased?",
  "What geometric diagnostics are useful for diffusion and score-based models?",
];
</script>

<style scoped>
.box{ padding: 18px; }
.head{ display: flex; align-items: flex-end; justify-content: space-between; gap: 14px; flex-wrap: wrap; }
.lead{ margin: 10px 0 0; color: var(--muted); font-size: 1.06rem; max-width: 72ch; }
.divider{ height: 1px; background: var(--rule); margin: 22px 0; }

.group:last-of-type .divider{ display: none; }
.group-head{ max-width: 78ch; margin-bottom: 14px; }
.kicker{
  margin: 0 0 6px;
  color: var(--muted2);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.topics{ display: grid; gap: 14px; }
.topic-card{
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-soft);
}
.topic-head{ max-width: 78ch; }
.topic-head h3{ margin: 0 0 6px; font-size: 1.05rem; }
.topic-head p{ margin: 0; color: var(--muted); }

.papers{ display: grid; gap: 10px; margin-top: 14px; }
.paper{
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: start;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #ffffff;
}
.paper h4{ margin: 0; font-size: 1rem; line-height: 1.35; }
.paper h4 a{ color: var(--text); text-decoration: none; }
.paper h4 a:hover{ color: var(--accent-strong); text-decoration: underline; text-underline-offset: 3px; }
.venue{ margin: 5px 0 0; color: var(--muted2); font-weight: 700; font-size: 0.92rem; }
.note{ margin: 6px 0 0; color: var(--muted); font-size: 0.95rem; }
.tags{ display: flex; justify-content: flex-end; gap: 6px; flex-wrap: wrap; max-width: 280px; }
.paper-links{
  grid-column: 1 / -1;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: -2px;
}
.tag{
  padding: 5px 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-soft);
  color: var(--muted);
  font-size: 0.82rem;
  white-space: nowrap;
}

.open-questions{ margin-top: 22px; }
.question-grid{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 12px; }
.question{
  margin: 0;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-soft);
  color: var(--muted);
}

@media (max-width: 900px){
  .paper{ grid-template-columns: 1fr; }
  .tags{ justify-content: flex-start; max-width: none; }
  .question-grid{ grid-template-columns: 1fr; }
}
</style>
