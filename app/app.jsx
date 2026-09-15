const { useState, useMemo, useEffect } = React;

/* ------------------------------------------------------------------ */
/* Sample research corpus — the MVP research loop works fully offline. */
/* ------------------------------------------------------------------ */
const RESEARCH_ITEMS = [
  {
    id: 'r1',
    title: 'The Griot Tradition: Oral Archives of West Africa',
    region: 'West Africa',
    era: '13th century — present',
    type: 'Oral tradition',
    summary:
      'Griots (jeli) are hereditary historians, praise-singers and archivists who preserve genealogies, treaties and epics across generations. Their practice demonstrates that rigorous archival discipline exists outside written institutions.',
    body: 'In the Mande world, the griot is a living archive. Trained from childhood, a jeli memorises centuries of lineage, law and literature, reciting the Epic of Sundiata not as performance alone but as constitutional memory. The tradition carries built-in mechanisms of verification: multiple griot lineages cross-check recitations, and public recitation allows community correction. For a research platform, the griot tradition is a founding proof that provenance, peer review and citation are not Western inventions — they are African scholarly infrastructure, centuries old.',
    sources: [
      { label: 'D.T. Niane, "Sundiata: An Epic of Old Mali" (1965)', kind: 'Primary transcription' },
      { label: 'J.W. Johnson, "Yes, Virginia, There Is an Epic in Africa" (1980)', kind: 'Scholarly review' },
      { label: 'UNESCO Intangible Cultural Heritage listing, Mandem Charter', kind: 'Institutional record' }
    ]
  },
  {
    id: 'r2',
    title: 'Great Zimbabwe: Stone Architecture Without Mortar',
    region: 'Southern Africa',
    era: '11th — 15th century',
    type: 'Archaeology',
    summary:
      'The Great Enclosure of Great Zimbabwe was built with precisely fitted granite blocks without mortar — a trade hub linking the interior to the Swahili coast and the Indian Ocean world.',
    body: 'Between the 11th and 15th centuries, Great Zimbabwe was the capital of a Shona kingdom whose wealth flowed from gold, ivory and cattle. Its dry-stone walls — up to 11 metres high — curve with an engineering confidence that colonial-era archaeologists refused to attribute to Africans, producing a century of pseudohistory that modern scholarship has fully dismantled. Excavated Chinese porcelain, Persian glass and Arab coins prove integration into Indian Ocean trade networks. Great Zimbabwe is a case study in how evidence corrects politically motivated narratives.',
    sources: [
      { label: 'P. Garlake, "Great Zimbabwe" (1973)', kind: 'Archaeological survey' },
      { label: 'S. Chirikure et al., "Great Zimbabwe: Reclaiming a Confiscated Past" (2021)', kind: 'Peer-reviewed reassessment' },
      { label: 'UNESCO World Heritage List, ref. 364', kind: 'Institutional record' }
    ]
  },
  {
    id: 'r3',
    title: 'The Libraries of Timbuktu and the Manuscript Trade',
    region: 'West Africa (Sahel)',
    era: '14th — 17th century',
    type: 'Manuscript culture',
    summary:
      'At its peak, Timbuktu hosted hundreds of thousands of manuscripts covering astronomy, medicine, law and mathematics — evidence of a literate scholarly economy, later preserved from destruction by local families.',
    body: 'Under the Mali and Songhai empires, Timbuktu was a university city: Sankore, Djinguereber and Sidi Yahya drew scholars from across the Islamic world. Book production was so central that "salt comes from the north, gold from the south, and silver from the country of the white men, but the word of God and the treasures of wisdom are only to be found in Timbuktu." In 2012, when armed groups occupied the city, librarian Abdel Kader Haidara and hundreds of families smuggled roughly 350,000 manuscripts to safety in rice sacks and footlockers — a modern act of archival heroism.',
    sources: [
      { label: 'A. Haidara, "The Smuggler of Timbuktu" (2018)', kind: 'First-person account' },
      { label: 'Tombouctou Manuscripts Project, University of Cape Town', kind: 'Digital archive' },
      { label: 'Ahmed Baba Institute catalogues', kind: 'Institutional record' }
    ]
  },
  {
    id: 'r4',
    title: 'Kingdom of Kush and the Nubian Pyramids',
    region: 'Nile Valley (Sudan)',
    era: '2500 BCE — 350 CE',
    type: 'Archaeology',
    summary:
      'Sudan holds more pyramids than Egypt — over 200 at Meroë alone — built by Kushite kings who ruled Egypt as the 25th Dynasty and developed their own Meroitic script.',
    body: 'The Kingdom of Kush flourished along the Nile in what is now Sudan. At its height, Kushite pharaohs ruled both Nubia and Egypt. The Meroitic period produced one of Africa\'s earliest indigenous writing systems — still only partially deciphered — plus iron-working centres that earned Meroë the nickname "the Birmingham of Africa" among early excavators. Kush challenges the habit of treating Egyptian civilisation as an isolated miracle: the Nile corridor was a zone of exchange in which African states taught as much as they learned.',
    sources: [
      { label: 'L. Török, "The Kingdom of Kush" (1997)', kind: 'Scholarly synthesis' },
      { label: 'British Museum Sudan excavations archive', kind: 'Institutional record' },
      { label: 'UNESCO World Heritage, "Island of Meroe", ref. 1336', kind: 'Institutional record' }
    ]
  },
  {
    id: 'r5',
    title: 'Adinkra Symbols: A Visual Language of Philosophy',
    region: 'West Africa (Ghana)',
    era: '19th century — present',
    type: 'Visual culture',
    summary:
      'Adinkra cloth from the Akan peoples encodes proverbs and philosophical concepts in a systematic symbol set — a design language with semantics, not decoration.',
    body: 'Each Adinkra symbol carries a named concept: "Sankofa" (return and fetch it) encodes the duty to learn from the past; "Gye Nyame" expresses the supremacy of the divine; "Dwennimmen" pairs strength with humility. Stamped onto cloth with calabash dye, the symbols turn textiles into arguments. For designers and educators, Adinkra is a working example of a semantic visual system — an African design grammar with rules, meanings and authorship, predating and influencing modern iconographic design.',
    sources: [
      { label: 'W. Bruce Willis, "The Adinkra Dictionary" (1998)', kind: 'Reference work' },
      { label: 'Asante traditional council records on cloth production', kind: 'Institutional record' },
      { label: 'National Museum of Ghana collection notes', kind: 'Museum catalogue' }
    ]
  },
  {
    id: 'r6',
    title: 'The Ethiopian Manuscript Tradition of Geez',
    region: 'Horn of Africa',
    era: '4th century — present',
    type: 'Manuscript culture',
    summary:
      'Written in Geez on parchment and bound in the world\'s oldest continuous bookbinding tradition, Ethiopian manuscripts preserve theology, astronomy and medicine in a living scribal culture.',
    body: 'Ethiopia developed an indigenous script, Geez, in the first millennium and never stopped using it. Monastic scribes still copy codices on prepared goatskin, using binding techniques unchanged since Late Antiquity — making Ethiopian collections the closest living relatives of the earliest Christian books. The Garima Gospels, carbon-dated to between 390 and 660 CE, may be the world\'s oldest complete illuminated Christian manuscript, and it was never lost: it stayed in the monastery that wrote it for over fifteen centuries.',
    sources: [
      { label: 'Garima Gospels conservation report, Ethiopian Heritage Fund (2010)', kind: 'Technical report' },
      { label: 'S. Uhlig, "Encyclopaedia Aethiopica"', kind: 'Reference work' },
      { label: 'EMML microfilm archive, Hill Museum & Manuscript Library', kind: 'Digital archive' }
    ]
  }
];

const PERMISSIONS_DATA = [
  { id: 'p1', name: 'Research reading history', purpose: 'Resume your workspace and suggest related sources', status: true },
  { id: 'p2', name: 'Saved Research Packs', purpose: 'Store and sync your packs across devices', status: true },
  { id: 'p3', name: 'Audio progress', purpose: 'Resume narration where you stopped', status: false },
  { id: 'p4', name: 'Contribution earnings record', purpose: 'Attribute marketplace earnings to you', status: false }
];

/* ------------------------------------------------------------------ */
/* Small semantic components                                           */
/* ------------------------------------------------------------------ */
function Badge({ type, children }) {
  return <span className={type === 'planned' ? 'planned-badge' : 'prototype-badge'}>{children}</span>;
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      <p className="text-ochre font-sans text-xs font-bold tracking-[0.2em] uppercase mb-3">{eyebrow}</p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {children && <p className="text-stone-600 leading-relaxed">{children}</p>}
    </div>
  );
}

function SourceList({ sources }) {
  return (
    <ul className="mt-4 space-y-2">
      {sources.map((s, i) => (
        <li key={i} className="flex gap-2 text-sm text-stone-600">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ochre shrink-0" aria-hidden="true"></span>
          <span>
            <span className="font-medium text-stone-800">{s.label}</span>
            <span className="text-stone-400"> · {s.kind}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Pages                                                               */
/* ------------------------------------------------------------------ */
function HomePage({ go }) {
  return (
    <div>
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-stone-900 to-terra opacity-95" aria-hidden="true"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center text-paper">
          <p className="text-ochrelite text-xs font-bold tracking-[0.3em] uppercase mb-6">DataTrust Africa · CultureCommons</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
            Research African culture with evidence, sources and AI — on your terms.
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-lg leading-relaxed mb-10">
            CultureCommons is an open research platform for culture, history and the arts. Every answer is paired with
            sources and provenance. Alongside it, DataTrust is a separate, privacy-first ecosystem that puts you in
            control of your data. This is not just an AI chatbot — it is research infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => go('research')} className="bg-ochre hover:bg-ochrelite text-white font-semibold px-8 py-3 rounded-full transition">
              Start researching
            </button>
            <button onClick={() => go('datatrust')} className="border border-stone-500 hover:border-paper text-paper font-semibold px-8 py-3 rounded-full transition">
              Explore DataTrust <Badge type="prototype">Prototype</Badge>
            </button>
          </div>
        </div>
      </header>

      {/* Three pillars */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader eyebrow="How it works" title="A research loop, not a feed">
          Discovery feels like an archive or museum — calm, sourced, and reviewable — not a social feed.
        </SectionHeader>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: '01', t: 'Read with evidence', d: 'Editorial research entries with visible sources and provenance. AI output is never automatically authoritative.', go: 'research', cta: 'Open the library' },
            { n: '02', t: 'Ask the copilot', d: 'The AI synthesizer drafts answers with citations and an uncertainty indicator, so you can judge confidence at a glance.', go: 'copilot', cta: 'Try the copilot' },
            { n: '03', t: 'Build Research Packs', d: 'Save entries and sources into a persistent workspace — your signature study tool, kept between visits.', go: 'workspace', cta: 'Open workspace' }
          ].map((c) => (
            <article key={c.n} className="bg-white rounded-2xl border border-stone-200 p-8 flex flex-col shadow-sm">
              <span className="font-serif text-4xl text-parchment font-bold mb-4" aria-hidden="true">{c.n}</span>
              <h3 className="font-serif text-xl font-bold mb-2">{c.t}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-1">{c.d}</p>
              <button onClick={() => go(c.go)} className="text-ochre font-semibold text-sm hover:underline self-start">{c.cta} →</button>
            </article>
          ))}
        </div>
      </section>

      {/* Two ecosystems */}
      <section className="bg-parchment/60 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-ochre text-xs font-bold tracking-[0.2em] uppercase mb-3">CultureCommons</p>
            <h3 className="font-serif text-2xl font-bold mb-3">The research experience</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The centre of the product. Editorial layouts, evidence, visuals and source metadata — with exploration
              across timelines, maps and comparisons. Community quality is driven by evidence and review, not
              social-media popularity.
            </p>
            <button onClick={() => go('explore')} className="text-ochre font-semibold text-sm hover:underline">Explore →</button>
          </div>
          <div>
            <p className="text-indigo text-xs font-bold tracking-[0.2em] uppercase mb-3">DataTrust <Badge type="prototype">Prototype</Badge></p>
            <h3 className="font-serif text-2xl font-bold mb-3">The data-control ecosystem</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Connected but conceptually distinct: personal-data permissions, a provenance-first marketplace, and a
              transparency centre. Advanced cryptography and payouts belong to later phases — prototype indicators
              are always shown as such, never as production guarantees.
            </p>
            <button onClick={() => go('datatrust')} className="text-indigo font-semibold text-sm hover:underline">See DataTrust →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResearchPage({ addToPack, pack }) {
  const [open, setOpen] = useState(RESEARCH_ITEMS[0].id);
  const item = RESEARCH_ITEMS.find((r) => r.id === open);
  const inPack = pack.some((p) => p.id === item.id);
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <SectionHeader eyebrow="CultureCommons Library" title="Research entries">
        Editorial entries with visible provenance. Select an entry to read it; add it to a Research Pack to keep it.
      </SectionHeader>
      <div className="grid md:grid-cols-5 gap-8">
        <nav aria-label="Research entries" className="md:col-span-2 space-y-3">
          {RESEARCH_ITEMS.map((r) => (
            <button
              key={r.id}
              onClick={() => setOpen(r.id)}
              className={
                'w-full text-left rounded-xl border p-4 transition ' +
                (r.id === open ? 'border-ochre bg-white shadow-sm' : 'border-stone-200 bg-white/60 hover:border-stone-400')
              }
            >
              <p className="font-serif font-bold leading-snug">{r.title}</p>
              <p className="text-xs text-stone-500 mt-1">{r.region} · {r.era}</p>
            </button>
          ))}
        </nav>
        <article className="md:col-span-3 bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
          <p className="text-xs text-stone-500 mb-2">{r2type(item)} · {item.region} · {item.era}</p>
          <h3 className="font-serif text-2xl font-bold mb-4">{item.title}</h3>
          <p className="text-stone-700 leading-relaxed mb-4 font-medium">{item.summary}</p>
          <p className="text-stone-600 leading-relaxed">{item.body}</p>
          <h4 className="font-serif font-bold mt-8 text-sm tracking-wide uppercase text-stone-500">Sources & provenance</h4>
          <SourceList sources={item.sources} />
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => addToPack(item)}
              disabled={inPack}
              className={
                'font-semibold px-6 py-2.5 rounded-full transition ' +
                (inPack ? 'bg-stone-200 text-stone-500 cursor-default' : 'bg-ochre hover:bg-ochrelite text-white')
              }
            >
              {inPack ? 'In your Research Pack' : 'Add to Research Pack'}
            </button>
            <span className="text-xs text-stone-400">Provenance visible · {item.sources.length} sources</span>
          </div>
        </article>
      </div>
    </div>
  );
}
function r2type(item) { return item.type; }

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
      const words = q.toLowerCase().split(/\W+/).filter((w) => w.length > 3);
      const scored = RESEARCH_ITEMS.map((r) => {
        const hay = (r.title + ' ' + r.summary + ' ' + r.body + ' ' + r.region).toLowerCase();
        const score = words.reduce((acc, w) => acc + (hay.includes(w) ? 1 : 0), 0);
        return { r, score };
      }).sort((a, b) => b.score - a.score);
      const best = scored.filter((s) => s.score > 0).slice(0, 2).map((s) => s.r);
      setAnswer({ best, uncertain: best.length === 0 });
      setLoading(false);
    }, 900);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <SectionHeader eyebrow="AI Research Synthesizer" title={<>Copilot <Badge type="prototype">Simulation</Badge></>}>
        Draft answers are paired with sources and an uncertainty indicator. In this prototype the copilot searches the
        built-in sample corpus — it does not call a live model, and its output is not automatically authoritative.
      </SectionHeader>
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
        <label htmlFor="copilot-q" className="block text-sm font-semibold mb-2">Ask a research question</label>
        <div className="flex gap-3">
          <input
            id="copilot-q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && ask()}
            placeholder="e.g. What are the oldest written traditions in Africa?"
            className="flex-1 rounded-full border border-stone-300 px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-ochre"
          />
          <button onClick={ask} className="bg-ochre hover:bg-ochrelite text-white font-semibold px-6 py-2.5 rounded-full transition">
            Ask
          </button>
        </div>
        {loading && <p className="text-sm text-stone-500 mt-4">Searching the sample corpus…</p>}
        {answer && (
          <div className="mt-6 border-t border-stone-200 pt-6" aria-live="polite">
            {answer.uncertain ? (
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                <p className="font-semibold text-amber-900 mb-1">Low confidence</p>
                <p className="text-sm text-amber-800">
                  The sample corpus has no strong match for this question. In the production copilot this is exactly
                  what the uncertainty indicator would surface, rather than inventing an answer.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-sm text-stone-500">
                  Confidence: <span className="font-semibold text-moss">moderate</span> — based on {answer.best.length} matching
                  entr{answer.best.length > 1 ? 'ies' : 'y'} in the sample corpus. Always check the sources.
                </p>
                {answer.best.map((r) => (
                  <div key={r.id} className="rounded-xl border border-stone-200 p-5">
                    <p className="font-serif font-bold mb-2">{r.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{r.summary}</p>
                    <SourceList sources={r.sources} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ExplorePage() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All');
  const regions = ['All', ...Array.from(new Set(RESEARCH_ITEMS.map((r) => r.region)))];
  const results = useMemo(
    () =>
      RESEARCH_ITEMS.filter(
        (r) =>
          (region === 'All' || r.region === region) &&
          (r.title + r.summary + r.type).toLowerCase().includes(query.toLowerCase())
      ),
    [query, region]
  );
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeader eyebrow="Explore" title="Search, compare, timeline & maps">
        Discovery is an archive: filter the collection by region and search across titles, themes and types.
        Timelines and maps are visualised simply in this MVP.
      </SectionHeader>
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <input
          aria-label="Search the collection"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the collection…"
          className="flex-1 rounded-full border border-stone-300 px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-ochre"
        />
        <select
          aria-label="Filter by region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="rounded-full border border-stone-300 px-5 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-ochre"
        >
          {regions.map((r) => <option key={r}>{r}</option>)}
        </select>
      </div>

      {/* Timeline */}
      <h3 className="font-serif text-xl font-bold mb-6">Timeline</h3>
      <ol className="relative border-l-2 border-stone-300 ml-3 mb-14 space-y-8">
        {results
          .slice()
          .sort((a, b) => a.era.localeCompare(b.era))
          .map((r) => (
            <li key={r.id} className="ml-6">
              <span className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-ochre border-2 border-paper" aria-hidden="true"></span>
              <p className="text-xs text-stone-500">{r.era}</p>
              <p className="font-serif font-bold">{r.title}</p>
              <p className="text-sm text-stone-600">{r.region} · {r.type}</p>
            </li>
          ))}
        {results.length === 0 && <li className="ml-6 text-stone-500">No entries match your search.</li>}
      </ol>

      {/* Cards grid (map placeholder) */}
      <h3 className="font-serif text-xl font-bold mb-6">Collection map <Badge type="planned">Planned: interactive map</Badge></h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((r) => (
          <article key={r.id} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
            <p className="text-xs text-ochre font-bold uppercase tracking-wider mb-2">{r.region}</p>
            <h4 className="font-serif font-bold mb-2 leading-snug">{r.title}</h4>
            <p className="text-sm text-stone-600 leading-relaxed">{r.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function WorkspacePage({ pack, removeFromPack }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <SectionHeader eyebrow="Research Workspace" title="Your Research Pack">
        Your pack persists in this browser between visits — a signature study tool and the heart of the workspace.
      </SectionHeader>
      {pack.length === 0 ? (
        <div className="text-center bg-white rounded-2xl border border-dashed border-stone-300 p-12">
          <p className="font-serif text-xl font-bold mb-2">Your pack is empty</p>
          <p className="text-stone-600 text-sm">Add entries from the Library to start building your research pack.</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {pack.map((r) => (
            <li key={r.id} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm flex gap-6">
              <div className="flex-1">
                <h4 className="font-serif font-bold mb-1">{r.title}</h4>
                <p className="text-sm text-stone-600 mb-3">{r.summary}</p>
                <SourceList sources={r.sources} />
              </div>
              <button onClick={() => removeFromPack(r.id)} className="text-stone-400 hover:text-terra text-sm self-start" aria-label={'Remove ' + r.title}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function DataTrustPage() {
  const [perms, setPerms] = useState(PERMISSIONS_DATA);
  const toggle = (id) => setPerms(perms.map((p) => (p.id === id ? { ...p, status: !p.status } : p)));
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeader eyebrow="DataTrust" title={<>Your data, your decisions <Badge type="prototype">Prototype</Badge></>}>
        DataTrust is connected to CultureCommons but conceptually distinct. Everything on this page is a working
        interface prototype — controls function locally, but advanced privacy guarantees are visualised only and are
        not yet production systems.
      </SectionHeader>

      {/* Permissions */}
      <section className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm mb-10">
        <h3 className="font-serif text-xl font-bold mb-1">Personal data & permissions</h3>
        <p className="text-sm text-stone-500 mb-6">Every category explains its purpose. Nothing is collected without an explicit switch.</p>
        <ul className="divide-y divide-stone-200">
          {perms.map((p) => (
            <li key={p.id} className="py-4 flex items-center justify-between gap-6">
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-stone-500">{p.purpose}</p>
              </div>
              <button
                role="switch"
                aria-checked={p.status}
                onClick={() => toggle(p.id)}
                className={'relative h-7 w-12 rounded-full transition ' + (p.status ? 'bg-moss' : 'bg-stone-300')}
              >
                <span
                  className={
                    'absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ' +
                    (p.status ? 'left-[1.4rem]' : 'left-0.5')
                  }
                ></span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Marketplace */}
      <section className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm mb-10">
        <h3 className="font-serif text-xl font-bold mb-1">Marketplace & earnings <Badge type="planned">Planned</Badge></h3>
        <p className="text-sm text-stone-500 mb-6">
          The marketplace emphasises provenance and contributor fairness — not crypto aesthetics. Payout mechanics
          belong to a later phase; below is the intended provenance model.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { t: 'Contribution recorded', d: 'Your datasets or annotations enter the commons with your authorship attached.' },
            { t: 'Usage traced', d: 'Every downstream use is logged against the contribution — provenance first.' },
            { t: 'Fair earnings', d: 'Attribution feeds an earnings ledger. Payouts are planned, not yet active.' }
          ].map((s, i) => (
            <div key={i} className="rounded-xl bg-parchment/70 p-5">
              <p className="font-semibold mb-1">{s.t}</p>
              <p className="text-sm text-stone-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust center */}
      <section className="bg-ink text-paper rounded-2xl p-8">
        <h3 className="font-serif text-xl font-bold mb-1">Transparency & trust centre</h3>
        <p className="text-sm text-stone-400 mb-6">
          We never claim guarantees we have not implemented and verified. Status of advanced techniques:
        </p>
        <ul className="space-y-4">
          {[
            { name: 'zk-SNARK proofs of contribution', status: 'Planned', note: 'Not implemented. Will ship only with published verification.' },
            { name: 'Differential privacy on aggregate statistics', status: 'Planned', note: 'Not implemented. Current prototype performs no statistical release.' },
            { name: 'Re-identification risk metrics', status: 'Planned', note: 'Not implemented. No personal data is processed in this prototype.' }
          ].map((row) => (
            <li key={row.name} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-stone-700 pb-4">
              <span className="font-semibold flex-1">{row.name}</span>
              <Badge type="planned">{row.status}</Badge>
              <span className="text-sm text-stone-400 sm:w-72">{row.note}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* App shell                                                           */
/* ------------------------------------------------------------------ */
const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'copilot', label: 'AI Copilot' },
  { id: 'explore', label: 'Explore' },
  { id: 'workspace', label: 'Workspace' },
  { id: 'datatrust', label: 'DataTrust' }
];

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
    } catch (e) { /* storage unavailable — pack stays in memory */ }
  }, [pack]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const addToPack = (item) => setPack((p) => (p.some((x) => x.id === item.id) ? p : [...p, item]));
  const removeFromPack = (id) => setPack((p) => p.filter((x) => x.id !== id));

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="sticky top-0 z-20 bg-paper/90 backdrop-blur border-b border-stone-200" aria-label="Main">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <button onClick={() => setPage('home')} className="font-serif text-lg font-bold tracking-tight">
            DataTrust <span className="text-ochre">Africa</span>
          </button>
          <div className="flex items-center gap-1 overflow-x-auto">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => setPage(n.id)}
                aria-current={page === n.id ? 'page' : undefined}
                className={
                  'px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ' +
                  (page === n.id ? 'bg-ink text-paper' : 'text-stone-600 hover:bg-parchment')
                }
              >
                {n.label}
                {n.id === 'workspace' && pack.length > 0 && (
                  <span className="ml-1.5 inline-flex items-center justify-center h-5 w-5 rounded-full bg-ochre text-white text-[0.65rem] font-bold">
                    {pack.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {page === 'home' && <HomePage go={setPage} />}
        {page === 'research' && <ResearchPage addToPack={addToPack} pack={pack} />}
        {page === 'copilot' && <CopilotPage />}
        {page === 'explore' && <ExplorePage />}
        {page === 'workspace' && <WorkspacePage pack={pack} removeFromPack={removeFromPack} />}
        {page === 'datatrust' && <DataTrustPage />}
      </main>

      <footer className="border-t border-stone-200 bg-parchment/50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 text-sm text-stone-600">
          <div>
            <p className="font-serif font-bold text-ink mb-2">DataTrust Africa · CultureCommons</p>
            <p>Open research infrastructure for culture, history and the arts — with a privacy-first personal-data ecosystem.</p>
          </div>
          <div className="md:text-right">
            <p className="mb-1">Prototype build. AI answers are simulations; privacy features are visualised, not production guarantees.</p>
            <p className="text-stone-400">Content corpus syncs from the Notion knowledge base via n8n.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
