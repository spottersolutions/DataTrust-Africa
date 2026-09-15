const {
  useState,
  useMemo,
  useEffect
} = React;

/* ------------------------------------------------------------------ */
/* Sample research corpus — the MVP research loop works fully offline. */
/* ------------------------------------------------------------------ */
const RESEARCH_ITEMS = [{
  id: 'r1',
  title: 'The Griot Tradition: Oral Archives of West Africa',
  region: 'West Africa',
  era: '13th century — present',
  type: 'Oral tradition',
  summary: 'Griots (jeli) are hereditary historians, praise-singers and archivists who preserve genealogies, treaties and epics across generations. Their practice demonstrates that rigorous archival discipline exists outside written institutions.',
  body: 'In the Mande world, the griot is a living archive. Trained from childhood, a jeli memorises centuries of lineage, law and literature, reciting the Epic of Sundiata not as performance alone but as constitutional memory. The tradition carries built-in mechanisms of verification: multiple griot lineages cross-check recitations, and public recitation allows community correction. For a research platform, the griot tradition is a founding proof that provenance, peer review and citation are not Western inventions — they are African scholarly infrastructure, centuries old.',
  sources: [{
    label: 'D.T. Niane, "Sundiata: An Epic of Old Mali" (1965)',
    kind: 'Primary transcription'
  }, {
    label: 'J.W. Johnson, "Yes, Virginia, There Is an Epic in Africa" (1980)',
    kind: 'Scholarly review'
  }, {
    label: 'UNESCO Intangible Cultural Heritage listing, Mandem Charter',
    kind: 'Institutional record'
  }]
}, {
  id: 'r2',
  title: 'Great Zimbabwe: Stone Architecture Without Mortar',
  region: 'Southern Africa',
  era: '11th — 15th century',
  type: 'Archaeology',
  summary: 'The Great Enclosure of Great Zimbabwe was built with precisely fitted granite blocks without mortar — a trade hub linking the interior to the Swahili coast and the Indian Ocean world.',
  body: 'Between the 11th and 15th centuries, Great Zimbabwe was the capital of a Shona kingdom whose wealth flowed from gold, ivory and cattle. Its dry-stone walls — up to 11 metres high — curve with an engineering confidence that colonial-era archaeologists refused to attribute to Africans, producing a century of pseudohistory that modern scholarship has fully dismantled. Excavated Chinese porcelain, Persian glass and Arab coins prove integration into Indian Ocean trade networks. Great Zimbabwe is a case study in how evidence corrects politically motivated narratives.',
  sources: [{
    label: 'P. Garlake, "Great Zimbabwe" (1973)',
    kind: 'Archaeological survey'
  }, {
    label: 'S. Chirikure et al., "Great Zimbabwe: Reclaiming a Confiscated Past" (2021)',
    kind: 'Peer-reviewed reassessment'
  }, {
    label: 'UNESCO World Heritage List, ref. 364',
    kind: 'Institutional record'
  }]
}, {
  id: 'r3',
  title: 'The Libraries of Timbuktu and the Manuscript Trade',
  region: 'West Africa (Sahel)',
  era: '14th — 17th century',
  type: 'Manuscript culture',
  summary: 'At its peak, Timbuktu hosted hundreds of thousands of manuscripts covering astronomy, medicine, law and mathematics — evidence of a literate scholarly economy, later preserved from destruction by local families.',
  body: 'Under the Mali and Songhai empires, Timbuktu was a university city: Sankore, Djinguereber and Sidi Yahya drew scholars from across the Islamic world. Book production was so central that "salt comes from the north, gold from the south, and silver from the country of the white men, but the word of God and the treasures of wisdom are only to be found in Timbuktu." In 2012, when armed groups occupied the city, librarian Abdel Kader Haidara and hundreds of families smuggled roughly 350,000 manuscripts to safety in rice sacks and footlockers — a modern act of archival heroism.',
  sources: [{
    label: 'A. Haidara, "The Smuggler of Timbuktu" (2018)',
    kind: 'First-person account'
  }, {
    label: 'Tombouctou Manuscripts Project, University of Cape Town',
    kind: 'Digital archive'
  }, {
    label: 'Ahmed Baba Institute catalogues',
    kind: 'Institutional record'
  }]
}, {
  id: 'r4',
  title: 'Kingdom of Kush and the Nubian Pyramids',
  region: 'Nile Valley (Sudan)',
  era: '2500 BCE — 350 CE',
  type: 'Archaeology',
  summary: 'Sudan holds more pyramids than Egypt — over 200 at Meroë alone — built by Kushite kings who ruled Egypt as the 25th Dynasty and developed their own Meroitic script.',
  body: 'The Kingdom of Kush flourished along the Nile in what is now Sudan. At its height, Kushite pharaohs ruled both Nubia and Egypt. The Meroitic period produced one of Africa\'s earliest indigenous writing systems — still only partially deciphered — plus iron-working centres that earned Meroë the nickname "the Birmingham of Africa" among early excavators. Kush challenges the habit of treating Egyptian civilisation as an isolated miracle: the Nile corridor was a zone of exchange in which African states taught as much as they learned.',
  sources: [{
    label: 'L. Török, "The Kingdom of Kush" (1997)',
    kind: 'Scholarly synthesis'
  }, {
    label: 'British Museum Sudan excavations archive',
    kind: 'Institutional record'
  }, {
    label: 'UNESCO World Heritage, "Island of Meroe", ref. 1336',
    kind: 'Institutional record'
  }]
}, {
  id: 'r5',
  title: 'Adinkra Symbols: A Visual Language of Philosophy',
  region: 'West Africa (Ghana)',
  era: '19th century — present',
  type: 'Visual culture',
  summary: 'Adinkra cloth from the Akan peoples encodes proverbs and philosophical concepts in a systematic symbol set — a design language with semantics, not decoration.',
  body: 'Each Adinkra symbol carries a named concept: "Sankofa" (return and fetch it) encodes the duty to learn from the past; "Gye Nyame" expresses the supremacy of the divine; "Dwennimmen" pairs strength with humility. Stamped onto cloth with calabash dye, the symbols turn textiles into arguments. For designers and educators, Adinkra is a working example of a semantic visual system — an African design grammar with rules, meanings and authorship, predating and influencing modern iconographic design.',
  sources: [{
    label: 'W. Bruce Willis, "The Adinkra Dictionary" (1998)',
    kind: 'Reference work'
  }, {
    label: 'Asante traditional council records on cloth production',
    kind: 'Institutional record'
  }, {
    label: 'National Museum of Ghana collection notes',
    kind: 'Museum catalogue'
  }]
}, {
  id: 'r6',
  title: 'The Ethiopian Manuscript Tradition of Geez',
  region: 'Horn of Africa',
  era: '4th century — present',
  type: 'Manuscript culture',
  summary: 'Written in Geez on parchment and bound in the world\'s oldest continuous bookbinding tradition, Ethiopian manuscripts preserve theology, astronomy and medicine in a living scribal culture.',
  body: 'Ethiopia developed an indigenous script, Geez, in the first millennium and never stopped using it. Monastic scribes still copy codices on prepared goatskin, using binding techniques unchanged since Late Antiquity — making Ethiopian collections the closest living relatives of the earliest Christian books. The Garima Gospels, carbon-dated to between 390 and 660 CE, may be the world\'s oldest complete illuminated Christian manuscript, and it was never lost: it stayed in the monastery that wrote it for over fifteen centuries.',
  sources: [{
    label: 'Garima Gospels conservation report, Ethiopian Heritage Fund (2010)',
    kind: 'Technical report'
  }, {
    label: 'S. Uhlig, "Encyclopaedia Aethiopica"',
    kind: 'Reference work'
  }, {
    label: 'EMML microfilm archive, Hill Museum & Manuscript Library',
    kind: 'Digital archive'
  }]
}];
const PERMISSIONS_DATA = [{
  id: 'p1',
  name: 'Research reading history',
  purpose: 'Resume your workspace and suggest related sources',
  status: true
}, {
  id: 'p2',
  name: 'Saved Research Packs',
  purpose: 'Store and sync your packs across devices',
  status: true
}, {
  id: 'p3',
  name: 'Audio progress',
  purpose: 'Resume narration where you stopped',
  status: false
}, {
  id: 'p4',
  name: 'Contribution earnings record',
  purpose: 'Attribute marketplace earnings to you',
  status: false
}];

/* ------------------------------------------------------------------ */
/* Small semantic components                                           */
/* ------------------------------------------------------------------ */
function Badge({
  type,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: type === 'planned' ? 'planned-badge' : 'prototype-badge'
  }, children);
}
function SectionHeader({
  eyebrow,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto text-center mb-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-ochre font-sans text-xs font-bold tracking-[0.2em] uppercase mb-3"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-3xl md:text-4xl font-bold mb-4"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "text-stone-600 leading-relaxed"
  }, children));
}
function SourceList({
  sources
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: "mt-4 space-y-2"
  }, sources.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "flex gap-2 text-sm text-stone-600"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mt-1 h-1.5 w-1.5 rounded-full bg-ochre shrink-0",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "font-medium text-stone-800"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-400"
  }, " · ", s.kind)))));
}

/* ------------------------------------------------------------------ */
/* Pages                                                               */
/* ------------------------------------------------------------------ */
function HomePage({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    className: "relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-br from-ink via-stone-900 to-terra opacity-95",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center text-paper"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-ochrelite text-xs font-bold tracking-[0.3em] uppercase mb-6"
  }, "DataTrust Africa · CultureCommons"), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-4xl md:text-6xl font-bold leading-tight mb-6"
  }, "Research African culture with evidence, sources and AI — on your terms."), /*#__PURE__*/React.createElement("p", {
    className: "max-w-2xl mx-auto text-stone-300 text-lg leading-relaxed mb-10"
  }, "CultureCommons is an open research platform for culture, history and the arts. Every answer is paired with sources and provenance. Alongside it, DataTrust is a separate, privacy-first ecosystem that puts you in control of your data. This is not just an AI chatbot — it is research infrastructure."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('research'),
    className: "bg-ochre hover:bg-ochrelite text-white font-semibold px-8 py-3 rounded-full transition"
  }, "Start researching"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('datatrust'),
    className: "border border-stone-500 hover:border-paper text-paper font-semibold px-8 py-3 rounded-full transition"
  }, "Explore DataTrust ", /*#__PURE__*/React.createElement(Badge, {
    type: "prototype"
  }, "Prototype"))))), /*#__PURE__*/React.createElement("section", {
    className: "max-w-6xl mx-auto px-6 py-20"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "How it works",
    title: "A research loop, not a feed"
  }, "Discovery feels like an archive or museum — calm, sourced, and reviewable — not a social feed."), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-6"
  }, [{
    n: '01',
    t: 'Read with evidence',
    d: 'Editorial research entries with visible sources and provenance. AI output is never automatically authoritative.',
    go: 'research',
    cta: 'Open the library'
  }, {
    n: '02',
    t: 'Ask the copilot',
    d: 'The AI synthesizer drafts answers with citations and an uncertainty indicator, so you can judge confidence at a glance.',
    go: 'copilot',
    cta: 'Try the copilot'
  }, {
    n: '03',
    t: 'Build Research Packs',
    d: 'Save entries and sources into a persistent workspace — your signature study tool, kept between visits.',
    go: 'workspace',
    cta: 'Open workspace'
  }].map(c => /*#__PURE__*/React.createElement("article", {
    key: c.n,
    className: "bg-white rounded-2xl border border-stone-200 p-8 flex flex-col shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-serif text-4xl text-parchment font-bold mb-4",
    "aria-hidden": "true"
  }, c.n), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold mb-2"
  }, c.t), /*#__PURE__*/React.createElement("p", {
    className: "text-stone-600 text-sm leading-relaxed mb-6 flex-1"
  }, c.d), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(c.go),
    className: "text-ochre font-semibold text-sm hover:underline self-start"
  }, c.cta, " →"))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-parchment/60 border-y border-stone-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-ochre text-xs font-bold tracking-[0.2em] uppercase mb-3"
  }, "CultureCommons"), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold mb-3"
  }, "The research experience"), /*#__PURE__*/React.createElement("p", {
    className: "text-stone-600 leading-relaxed mb-4"
  }, "The centre of the product. Editorial layouts, evidence, visuals and source metadata — with exploration across timelines, maps and comparisons. Community quality is driven by evidence and review, not social-media popularity."), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('explore'),
    className: "text-ochre font-semibold text-sm hover:underline"
  }, "Explore →")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-indigo text-xs font-bold tracking-[0.2em] uppercase mb-3"
  }, "DataTrust ", /*#__PURE__*/React.createElement(Badge, {
    type: "prototype"
  }, "Prototype")), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold mb-3"
  }, "The data-control ecosystem"), /*#__PURE__*/React.createElement("p", {
    className: "text-stone-600 leading-relaxed mb-4"
  }, "Connected but conceptually distinct: personal-data permissions, a provenance-first marketplace, and a transparency centre. Advanced cryptography and payouts belong to later phases — prototype indicators are always shown as such, never as production guarantees."), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('datatrust'),
    className: "text-indigo font-semibold text-sm hover:underline"
  }, "See DataTrust →")))));
}
function ResearchPage({
  addToPack,
  pack
}) {
  const [open, setOpen] = useState(RESEARCH_ITEMS[0].id);
  const item = RESEARCH_ITEMS.find(r => r.id === open);
  const inPack = pack.some(p => p.id === item.id);
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-6 py-12"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "CultureCommons Library",
    title: "Research entries"
  }, "Editorial entries with visible provenance. Select an entry to read it; add it to a Research Pack to keep it."), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-5 gap-8"
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Research entries",
    className: "md:col-span-2 space-y-3"
  }, RESEARCH_ITEMS.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    onClick: () => setOpen(r.id),
    className: 'w-full text-left rounded-xl border p-4 transition ' + (r.id === open ? 'border-ochre bg-white shadow-sm' : 'border-stone-200 bg-white/60 hover:border-stone-400')
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-serif font-bold leading-snug"
  }, r.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500 mt-1"
  }, r.region, " · ", r.era)))), /*#__PURE__*/React.createElement("article", {
    className: "md:col-span-3 bg-white rounded-2xl border border-stone-200 p-8 shadow-sm"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500 mb-2"
  }, r2type(item), " · ", item.region, " · ", item.era), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold mb-4"
  }, item.title), /*#__PURE__*/React.createElement("p", {
    className: "text-stone-700 leading-relaxed mb-4 font-medium"
  }, item.summary), /*#__PURE__*/React.createElement("p", {
    className: "text-stone-600 leading-relaxed"
  }, item.body), /*#__PURE__*/React.createElement("h4", {
    className: "font-serif font-bold mt-8 text-sm tracking-wide uppercase text-stone-500"
  }, "Sources & provenance"), /*#__PURE__*/React.createElement(SourceList, {
    sources: item.sources
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => addToPack(item),
    disabled: inPack,
    className: 'font-semibold px-6 py-2.5 rounded-full transition ' + (inPack ? 'bg-stone-200 text-stone-500 cursor-default' : 'bg-ochre hover:bg-ochrelite text-white')
  }, inPack ? 'In your Research Pack' : 'Add to Research Pack'), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-stone-400"
  }, "Provenance visible · ", item.sources.length, " sources")))));
}
function r2type(item) {
  return item.type;
}
function CopilotPage() {
  const [q, setQ] = useState('');
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  function ask() {
    if (!q.trim()) return;
    setLoading(true);
    setAnswer(null);
    // Simulation: match query against the local corpus.
    setTimeout(() => {
      const words = q.toLowerCase().split(/\W+/).filter(w => w.length > 3);
      const scored = RESEARCH_ITEMS.map(r => {
        const hay = (r.title + ' ' + r.summary + ' ' + r.body + ' ' + r.region).toLowerCase();
        const score = words.reduce((acc, w) => acc + (hay.includes(w) ? 1 : 0), 0);
        return {
          r,
          score
        };
      }).sort((a, b) => b.score - a.score);
      const best = scored.filter(s => s.score > 0).slice(0, 2).map(s => s.r);
      setAnswer({
        best,
        uncertain: best.length === 0
      });
      setLoading(false);
    }, 900);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto px-6 py-12"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "AI Research Synthesizer",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Copilot ", /*#__PURE__*/React.createElement(Badge, {
      type: "prototype"
    }, "Simulation"))
  }, "Draft answers are paired with sources and an uncertainty indicator. In this prototype the copilot searches the built-in sample corpus — it does not call a live model, and its output is not automatically authoritative."), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-stone-200 p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "copilot-q",
    className: "block text-sm font-semibold mb-2"
  }, "Ask a research question"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("input", {
    id: "copilot-q",
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: e => e.key === 'Enter' && ask(),
    placeholder: "e.g. What are the oldest written traditions in Africa?",
    className: "flex-1 rounded-full border border-stone-300 px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-ochre"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: ask,
    className: "bg-ochre hover:bg-ochrelite text-white font-semibold px-6 py-2.5 rounded-full transition"
  }, "Ask")), loading && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-500 mt-4"
  }, "Searching the sample corpus…"), answer && /*#__PURE__*/React.createElement("div", {
    className: "mt-6 border-t border-stone-200 pt-6",
    "aria-live": "polite"
  }, answer.uncertain ? /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-amber-50 border border-amber-200 p-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-amber-900 mb-1"
  }, "Low confidence"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-amber-800"
  }, "The sample corpus has no strong match for this question. In the production copilot this is exactly what the uncertainty indicator would surface, rather than inventing an answer.")) : /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-500"
  }, "Confidence: ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-moss"
  }, "moderate"), " — based on ", answer.best.length, " matching entr", answer.best.length > 1 ? 'ies' : 'y', " in the sample corpus. Always check the sources."), answer.best.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    className: "rounded-xl border border-stone-200 p-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-serif font-bold mb-2"
  }, r.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-600 leading-relaxed"
  }, r.summary), /*#__PURE__*/React.createElement(SourceList, {
    sources: r.sources
  })))))));
}
function ExplorePage() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All');
  const regions = ['All', ...Array.from(new Set(RESEARCH_ITEMS.map(r => r.region)))];
  const results = useMemo(() => RESEARCH_ITEMS.filter(r => (region === 'All' || r.region === region) && (r.title + r.summary + r.type).toLowerCase().includes(query.toLowerCase())), [query, region]);
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto px-6 py-12"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Explore",
    title: "Search, compare, timeline & maps"
  }, "Discovery is an archive: filter the collection by region and search across titles, themes and types. Timelines and maps are visualised simply in this MVP."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row gap-4 mb-10"
  }, /*#__PURE__*/React.createElement("input", {
    "aria-label": "Search the collection",
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search the collection…",
    className: "flex-1 rounded-full border border-stone-300 px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-ochre"
  }), /*#__PURE__*/React.createElement("select", {
    "aria-label": "Filter by region",
    value: region,
    onChange: e => setRegion(e.target.value),
    className: "rounded-full border border-stone-300 px-5 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-ochre"
  }, regions.map(r => /*#__PURE__*/React.createElement("option", {
    key: r
  }, r)))), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold mb-6"
  }, "Timeline"), /*#__PURE__*/React.createElement("ol", {
    className: "relative border-l-2 border-stone-300 ml-3 mb-14 space-y-8"
  }, results.slice().sort((a, b) => a.era.localeCompare(b.era)).map(r => /*#__PURE__*/React.createElement("li", {
    key: r.id,
    className: "ml-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-ochre border-2 border-paper",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500"
  }, r.era), /*#__PURE__*/React.createElement("p", {
    className: "font-serif font-bold"
  }, r.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-600"
  }, r.region, " · ", r.type))), results.length === 0 && /*#__PURE__*/React.createElement("li", {
    className: "ml-6 text-stone-500"
  }, "No entries match your search.")), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold mb-6"
  }, "Collection map ", /*#__PURE__*/React.createElement(Badge, {
    type: "planned"
  }, "Planned: interactive map")), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
  }, results.map(r => /*#__PURE__*/React.createElement("article", {
    key: r.id,
    className: "bg-white rounded-2xl border border-stone-200 p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-ochre font-bold uppercase tracking-wider mb-2"
  }, r.region), /*#__PURE__*/React.createElement("h4", {
    className: "font-serif font-bold mb-2 leading-snug"
  }, r.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-600 leading-relaxed"
  }, r.summary)))));
}
function WorkspacePage({
  pack,
  removeFromPack
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto px-6 py-12"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Research Workspace",
    title: "Your Research Pack"
  }, "Your pack persists in this browser between visits — a signature study tool and the heart of the workspace."), pack.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center bg-white rounded-2xl border border-dashed border-stone-300 p-12"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-xl font-bold mb-2"
  }, "Your pack is empty"), /*#__PURE__*/React.createElement("p", {
    className: "text-stone-600 text-sm"
  }, "Add entries from the Library to start building your research pack.")) : /*#__PURE__*/React.createElement("ul", {
    className: "space-y-4"
  }, pack.map(r => /*#__PURE__*/React.createElement("li", {
    key: r.id,
    className: "bg-white rounded-2xl border border-stone-200 p-6 shadow-sm flex gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-serif font-bold mb-1"
  }, r.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-600 mb-3"
  }, r.summary), /*#__PURE__*/React.createElement(SourceList, {
    sources: r.sources
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => removeFromPack(r.id),
    className: "text-stone-400 hover:text-terra text-sm self-start",
    "aria-label": 'Remove ' + r.title
  }, "Remove")))));
}
function DataTrustPage() {
  const [perms, setPerms] = useState(PERMISSIONS_DATA);
  const toggle = id => setPerms(perms.map(p => p.id === id ? {
    ...p,
    status: !p.status
  } : p));
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto px-6 py-12"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "DataTrust",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Your data, your decisions ", /*#__PURE__*/React.createElement(Badge, {
      type: "prototype"
    }, "Prototype"))
  }, "DataTrust is connected to CultureCommons but conceptually distinct. Everything on this page is a working interface prototype — controls function locally, but advanced privacy guarantees are visualised only and are not yet production systems."), /*#__PURE__*/React.createElement("section", {
    className: "bg-white rounded-2xl border border-stone-200 p-8 shadow-sm mb-10"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold mb-1"
  }, "Personal data & permissions"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-500 mb-6"
  }, "Every category explains its purpose. Nothing is collected without an explicit switch."), /*#__PURE__*/React.createElement("ul", {
    className: "divide-y divide-stone-200"
  }, perms.map(p => /*#__PURE__*/React.createElement("li", {
    key: p.id,
    className: "py-4 flex items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-500"
  }, p.purpose)), /*#__PURE__*/React.createElement("button", {
    role: "switch",
    "aria-checked": p.status,
    onClick: () => toggle(p.id),
    className: 'relative h-7 w-12 rounded-full transition ' + (p.status ? 'bg-moss' : 'bg-stone-300')
  }, /*#__PURE__*/React.createElement("span", {
    className: 'absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ' + (p.status ? 'left-[1.4rem]' : 'left-0.5')
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-white rounded-2xl border border-stone-200 p-8 shadow-sm mb-10"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold mb-1"
  }, "Marketplace & earnings ", /*#__PURE__*/React.createElement(Badge, {
    type: "planned"
  }, "Planned")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-500 mb-6"
  }, "The marketplace emphasises provenance and contributor fairness — not crypto aesthetics. Payout mechanics belong to a later phase; below is the intended provenance model."), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-3 gap-4"
  }, [{
    t: 'Contribution recorded',
    d: 'Your datasets or annotations enter the commons with your authorship attached.'
  }, {
    t: 'Usage traced',
    d: 'Every downstream use is logged against the contribution — provenance first.'
  }, {
    t: 'Fair earnings',
    d: 'Attribution feeds an earnings ledger. Payouts are planned, not yet active.'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rounded-xl bg-parchment/70 p-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold mb-1"
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-600"
  }, s.d))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-ink text-paper rounded-2xl p-8"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold mb-1"
  }, "Transparency & trust centre"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-400 mb-6"
  }, "We never claim guarantees we have not implemented and verified. Status of advanced techniques:"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-4"
  }, [{
    name: 'zk-SNARK proofs of contribution',
    status: 'Planned',
    note: 'Not implemented. Will ship only with published verification.'
  }, {
    name: 'Differential privacy on aggregate statistics',
    status: 'Planned',
    note: 'Not implemented. Current prototype performs no statistical release.'
  }, {
    name: 'Re-identification risk metrics',
    status: 'Planned',
    note: 'Not implemented. No personal data is processed in this prototype.'
  }].map(row => /*#__PURE__*/React.createElement("li", {
    key: row.name,
    className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-stone-700 pb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold flex-1"
  }, row.name), /*#__PURE__*/React.createElement(Badge, {
    type: "planned"
  }, row.status), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-stone-400 sm:w-72"
  }, row.note))))));
}

/* ------------------------------------------------------------------ */
/* App shell                                                           */
/* ------------------------------------------------------------------ */
const NAV = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'research',
  label: 'Research'
}, {
  id: 'copilot',
  label: 'AI Copilot'
}, {
  id: 'explore',
  label: 'Explore'
}, {
  id: 'workspace',
  label: 'Workspace'
}, {
  id: 'datatrust',
  label: 'DataTrust'
}];
function App() {
  const [page, setPage] = useState('home');
  const [pack, setPack] = useState(() => {
    try {
      const saved = localStorage.getItem('cc-research-pack');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem('cc-research-pack', JSON.stringify(pack));
    } catch (e) {/* storage unavailable — pack stays in memory */}
  }, [pack]);
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [page]);
  const addToPack = item => setPack(p => p.some(x => x.id === item.id) ? p : [...p, item]);
  const removeFromPack = id => setPack(p => p.filter(x => x.id !== id));
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col font-sans"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "sticky top-0 z-20 bg-paper/90 backdrop-blur border-b border-stone-200",
    "aria-label": "Main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('home'),
    className: "font-serif text-lg font-bold tracking-tight"
  }, "DataTrust ", /*#__PURE__*/React.createElement("span", {
    className: "text-ochre"
  }, "Africa")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 overflow-x-auto"
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => setPage(n.id),
    "aria-current": page === n.id ? 'page' : undefined,
    className: 'px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ' + (page === n.id ? 'bg-ink text-paper' : 'text-stone-600 hover:bg-parchment')
  }, n.label, n.id === 'workspace' && pack.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "ml-1.5 inline-flex items-center justify-center h-5 w-5 rounded-full bg-ochre text-white text-[0.65rem] font-bold"
  }, pack.length)))))), /*#__PURE__*/React.createElement("main", {
    className: "flex-1"
  }, page === 'home' && /*#__PURE__*/React.createElement(HomePage, {
    go: setPage
  }), page === 'research' && /*#__PURE__*/React.createElement(ResearchPage, {
    addToPack: addToPack,
    pack: pack
  }), page === 'copilot' && /*#__PURE__*/React.createElement(CopilotPage, null), page === 'explore' && /*#__PURE__*/React.createElement(ExplorePage, null), page === 'workspace' && /*#__PURE__*/React.createElement(WorkspacePage, {
    pack: pack,
    removeFromPack: removeFromPack
  }), page === 'datatrust' && /*#__PURE__*/React.createElement(DataTrustPage, null)), /*#__PURE__*/React.createElement("footer", {
    className: "border-t border-stone-200 bg-parchment/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 text-sm text-stone-600"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-serif font-bold text-ink mb-2"
  }, "DataTrust Africa · CultureCommons"), /*#__PURE__*/React.createElement("p", null, "Open research infrastructure for culture, history and the arts — with a privacy-first personal-data ecosystem.")), /*#__PURE__*/React.createElement("div", {
    className: "md:text-right"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-1"
  }, "Prototype build. AI answers are simulations; privacy features are visualised, not production guarantees."), /*#__PURE__*/React.createElement("p", {
    className: "text-stone-400"
  }, "Content corpus syncs from the Notion knowledge base via n8n.")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));