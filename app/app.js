
/* ===== 01-data.js ===== */
/* ================================================================
   DataTrust & CultureCommons — shared data (step 1)
   Research corpus based on the product knowledge base spec.
   ================================================================ */
var CC = window.CC = window.CC || {};
CC.DOSSIERS = [{
  id: 'd1',
  title: 'West African Oral Epics',
  category: 'Oral tradition',
  region: 'West Africa',
  period: '13th century — present',
  readingTime: 12,
  audioMinutes: 14,
  reviewStatus: 'Community reviewed',
  overview: 'West African oral epics — above all the Epic of Sundiata — are structured historical archives carried by memory. Griots (jeli) preserve genealogies, treaties and law through disciplined recitation, with built-in verification through cross-lineage performance.',
  context: 'The tradition crystallized with the Mali Empire (13th century), when the Mande world organized history around hereditary griot families attached to royal lineages.',
  chronology: [['1235', 'Battle of Krina; foundations of the Mali Empire and the Sundiata epic cycle'], ['14th century', 'Mande expansion spreads griot institutions across West Africa'], ['20th century', 'First major written transcriptions (Niane 1965) bring the epics to print'], ['2008', 'UNESCO recognition of Manden intangible heritage']],
  materials: 'Spoken word, kora (21-string harp-lute), balafon, ritual performance contexts.',
  cultural: 'The epic functions as constitutional memory: law, legitimacy and identity are carried by performance rather than archives on paper.',
  claims: [{
    text: 'Griots are hereditary historians who preserve genealogies and law through trained recitation.',
    status: 'Source-backed',
    evidence: 3
  }, {
    text: 'Cross-lineage recitation acts as a verification mechanism for historical content.',
    status: 'Primary source available',
    evidence: 2
  }, {
    text: 'The Epic of Sundiata dates to the founding events of the Mali Empire in the 13th century.',
    status: 'Institutionally verified',
    evidence: 4
  }],
  primarySources: ['D.T. Niane, "Sundiata: An Epic of Old Mali" (1965 transcription)', 'Manden Charter oral corpus'],
  academicSources: ['J.W. Johnson, "Yes, Virginia, There Is an Epic in Africa" (1980)'],
  institutionalSources: ['UNESCO Intangible Cultural Heritage listing'],
  glossary: [['Griot / jeli', 'Hereditary historian, praise-singer and archivist in Mande society'], ['Kora', '21-string harp-lute used in epic accompaniment'], ['Manden', 'Heartland of the Mali Empire']],
  related: ['d3', 'd5'],
  audioText: 'West African oral epics are living archives. For centuries, griots have carried the history of the Mali Empire in trained memory. The Epic of Sundiata tells of the founder of Mali, and its recitation is an act of scholarship, not entertainment alone. Multiple griot lineages cross-check each performance, so the tradition verifies itself. When you listen to an epic, you are hearing a library that never needed paper.'
}, {
  id: 'd2',
  title: 'Renaissance Tempera Chemistry',
  category: 'Material science',
  region: 'Southern Europe',
  period: '13th — 16th century',
  readingTime: 11,
  audioMinutes: 12,
  reviewStatus: 'Institutionally verified',
  overview: 'Renaissance panel painting depended on egg tempera: pigment bound in egg yolk, applied in fine cross-hatched layers on gesso-prepared poplar. The chemistry of the binder explains both the luminosity of the works and their exceptional survival.',
  context: 'Before oil painting dominated, Italian workshops from Cimabue to Botticelli perfected tempera on panel, codified in Cennini\'s early-15th-century craftsman handbook.',
  chronology: [['c. 1300', 'Giotto and the Florentine school mature panel tempera technique'], ['c. 1437', 'Cennino Cennini writes "Il Libro dell\'Arte", documenting workshop practice'], ['1470s', 'Botticelli\'s major tempera panels produced in Florence'], ['16th century', 'Oil technique gradually displaces tempera for large works']],
  materials: 'Egg yolk binder, mineral and organic pigments, gesso ground, poplar panels, gold leaf.',
  cultural: 'Tempera panels were central to altarpieces and civic devotion; their materials linked theology, trade (pigment routes) and craft guilds.',
  claims: [{
    text: 'Renaissance tempera commonly used egg-based binders.',
    status: 'Source-backed',
    evidence: 3
  }, {
    text: 'Panels were prepared with a gesso ground before painting.',
    status: 'Primary source available',
    evidence: 2
  }, {
    text: 'The binder chemistry contributes to the paintings\' long-term color stability.',
    status: 'Requires further verification',
    evidence: 1
  }],
  primarySources: ['C. Cennini, "Il Libro dell\'Arte" (c. 1437)'],
  academicSources: ['National Gallery Technical Bulletin studies on Italian tempera'],
  institutionalSources: ['National Gallery, London; Opificio delle Pietre Dure, Florence'],
  glossary: [['Tempera', 'Pigment bound in a water-soluble medium, typically egg yolk'], ['Gesso', 'Chalk or gypsum ground used to prepare panels'], ['Cross-hatching', 'Layered fine strokes used to model form in tempera']],
  related: ['d4'],
  audioText: 'Renaissance tempera is chemistry as art. Artists ground mineral pigments and bound them with egg yolk, painting in fine hatched strokes on chalk-white gesso. The egg binder dried quickly and held color with remarkable stability, which is why Botticelli panels still glow after five centuries. Cennini\'s workshop handbook records the recipe almost exactly as museums now confirm it in the laboratory.'
}, {
  id: 'd3',
  title: 'Maya Astronomical Codices',
  category: 'Historical text',
  region: 'Mesoamerica',
  period: '11th — 16th century',
  readingTime: 13,
  audioMinutes: 15,
  reviewStatus: 'Community reviewed',
  overview: 'Maya codices are screenfold books of bark paper recording astronomical tables, calendars and ritual cycles. The Dresden Codex contains Venus tables accurate enough to predict the planet\'s appearances over centuries.',
  context: 'Postclassic Maya scribes maintained sophisticated calendrical astronomy; only four pre-conquest codices survived colonial destruction.',
  chronology: [['11th–12th century', 'Dresden Codex compiled in the Yucatán'], ['1520s', 'Spanish conquest; systematic destruction of Maya books'], ['1739', 'Dresden Codex surfaces in Vienna, later reaches Dresden'], ['20th century', 'Venus and eclipse tables decoded and verified against modern astronomy']],
  materials: 'Ficus bark paper (amate), mineral and plant pigments, lime coating.',
  cultural: 'Astronomy structured agriculture, ritual and kingship; the codices are instruments of timekeeping as much as texts.',
  claims: [{
    text: 'The Dresden Codex Venus table tracks the planet\'s synodic cycle with high accuracy.',
    status: 'Source-backed',
    evidence: 4
  }, {
    text: 'Only four pre-conquest Maya codices are known to survive.',
    status: 'Institutionally verified',
    evidence: 3
  }, {
    text: 'Codex tables were used to schedule ritual and agricultural events.',
    status: 'Primary source available',
    evidence: 2
  }],
  primarySources: ['Dresden Codex (Sächsische Landesbibliothek)'],
  academicSources: ['H. Bricker & V. Bricker, studies of Maya calendrical astronomy'],
  institutionalSources: ['SLUB Dresden; Foundation for the Advancement of Mesoamerican Studies'],
  glossary: [['Codex', 'A screenfold manuscript book'], ['Synodic cycle', 'The period between successive identical configurations of a planet and the Sun'], ['Tzolk\'in', '260-day Maya ritual calendar']],
  related: ['d1'],
  audioText: 'Maya astronomers wrote in books of bark paper, and they measured the sky with astonishing precision. The Dresden Codex tracks Venus across its 584-day cycle, letting priests predict its first morning appearance years ahead. Only four of these books escaped the bonfires of the conquest. Each surviving page is both a scientific instrument and a library rescued from destruction.'
}, {
  id: 'd4',
  title: 'Edo Woodblock Registration',
  category: 'Technique',
  region: 'Japan',
  period: '17th — 19th century',
  readingTime: 10,
  audioMinutes: 11,
  reviewStatus: 'Source-backed',
  overview: 'Japanese ukiyo-e prints achieved multi-color precision through kentō registration: carved notches that align each sheet against successive blocks, one per color. The system enabled mass production of complex images like Hokusai\'s Thirty-six Views of Mount Fuji.',
  context: 'In Edo-period Japan, a division of labor — artist, carver, printer, publisher — turned woodblock printing into a sophisticated color industry.',
  chronology: [['1765', 'Suzuki Harunobu pioneers full-color nishiki-e printing'], ['c. 1830', 'Hokusai\'s "Great Wave" printed with imported Prussian blue'], ['1850s', 'Ukiyo-e exports influence European artists (Japonisme)']],
  materials: 'Cherry wood blocks, washi paper, water-based pigments, baren (printing pad), kentō registration notches.',
  cultural: 'Prints democratized art in Edo Japan — theater, landscape and beauty became affordable images for ordinary townspeople.',
  claims: [{
    text: 'Kentō notches carved in each block align successive color impressions.',
    status: 'Source-backed',
    evidence: 3
  }, {
    text: 'Prussian blue imports enabled the vivid blue of late Hokusai prints.',
    status: 'Primary source available',
    evidence: 2
  }],
  primarySources: ['Surviving Edo-period blocks and workshop records'],
  academicSources: ['M. Narazaki, studies of ukiyo-e production'],
  institutionalSources: ['Tokyo National Museum; British Museum Japanese prints collection'],
  glossary: [['Kentō', 'Registration marks carved into a woodblock to align paper'], ['Nishiki-e', 'Full-color "brocade" printing with many blocks'], ['Baren', 'Hand pad used to press paper against the inked block']],
  related: ['d2'],
  audioText: 'Every color in a Japanese woodblock print is a separate carved block, and every sheet must land in exactly the same place each time. The solution was kentō: a carved corner notch and a straight edge that lock the paper in position. With this simple mechanism, printers produced tens of thousands of perfectly registered color images, from Harunobu\'s first brocade prints to Hokusai\'s Great Wave.'
}, {
  id: 'd5',
  title: 'Mesopotamian Epigraphy',
  category: 'Writing systems',
  region: 'Mesopotamia',
  period: 'c. 3400 BCE — 1st century CE',
  readingTime: 12,
  audioMinutes: 13,
  reviewStatus: 'Institutionally verified',
  overview: 'Cuneiform is humanity\'s earliest known writing system: wedge-shaped impressions in clay, invented for accounting and expanded to literature, law and science. Over half a million tablets survive, from grocery lists to the Epic of Gilgamesh.',
  context: 'Writing emerged in Uruk around 3400 BCE as an administrative technology, then was adapted to Sumerian, Akkadian and many other languages over three millennia.',
  chronology: [['c. 3400 BCE', 'Earliest proto-cuneiform tablets at Uruk'], ['c. 2600 BCE', 'Writing used for literature (Kesh temple hymn)'], ['c. 1754 BCE', 'Law Code of Hammurabi inscribed on stone'], ['1st century CE', 'Last datable cuneiform tablets (astronomical texts)']],
  materials: 'Clay tablets, reed styli; monumental inscriptions in stone.',
  cultural: 'Cuneiform created the first scribal class, the first libraries, and the first archives — the template for all later record-keeping civilizations.',
  claims: [{
    text: 'Cuneiform tablets were made by pressing a reed stylus into wet clay.',
    status: 'Source-backed',
    evidence: 4
  }, {
    text: 'Writing began as an accounting technology before literature.',
    status: 'Institutionally verified',
    evidence: 3
  }, {
    text: 'Over half a million cuneiform tablets survive in collections today.',
    status: 'Source-backed',
    evidence: 2
  }],
  primarySources: ['Cuneiform Digital Library Initiative tablet corpus'],
  academicSources: ['D. Englund, studies of proto-cuneiform administration'],
  institutionalSources: ['British Museum; Vorderasiatisches Museum Berlin; CDLI'],
  glossary: [['Cuneiform', 'Wedge-shaped writing impressed in clay'], ['Stylus', 'Cut reed used to impress signs'], ['Lexical list', 'Ancient sign-and-word lists used to train scribes']],
  related: ['d1'],
  audioText: 'Writing began not with poetry but with accounting. In the city of Uruk, five and a half thousand years ago, administrators pressed reed styli into wet clay to count grain and livestock. From those tallies grew literature, law and astronomy. Today more than half a million tablets sit in museum storerooms, and most have never been read by modern eyes. The world\'s first archive is still waiting to be opened.'
}];
CC.DATASETS = [{
  id: 'ds1',
  name: 'Higher-Education Reading Habits',
  category: 'Education',
  contributors: 12840,
  records: '≈ 2.1M observations',
  period: 'Jan – Aug 2026',
  privacyMechanism: 'Aggregation + differential privacy',
  privacyBudget: 'ε = 1.5 (configured target)',
  reidentRisk: 'Low (estimated)',
  royalty: 85,
  price: '$1,900 / license',
  queries: 183,
  status: 'Community reviewed',
  description: 'Anonymized reading-behavior telemetry from university students using CultureCommons: session lengths, topic sequences, audio usage.'
}, {
  id: 'ds2',
  name: 'Museum Repatriation Sentiment',
  category: 'Cultural Research',
  contributors: 4210,
  records: '≈ 380K observations',
  period: 'Mar – Aug 2026',
  privacyMechanism: 'Aggregation, k ≥ 100',
  privacyBudget: 'ε = 2.0 (configured target)',
  reidentRisk: 'Low (estimated)',
  royalty: 85,
  price: '$1,200 / license',
  queries: 72,
  status: 'AI synthesized',
  description: 'Aggregated, opt-in survey and interaction signals about attitudes toward artifact repatriation in museum contexts.'
}, {
  id: 'ds3',
  name: 'Multilingual Audio Learning Patterns',
  category: 'Language & Learning',
  contributors: 8690,
  records: '≈ 1.4M observations',
  period: 'Feb – Aug 2026',
  privacyMechanism: 'Aggregation + differential privacy',
  privacyBudget: 'ε = 1.8 (configured target)',
  reidentRisk: 'Low (estimated)',
  royalty: 85,
  price: '$1,600 / license',
  queries: 119,
  status: 'Community reviewed',
  description: 'How learners use spoken articles across languages: completion rates, replay behavior, study-mode outcomes.'
}, {
  id: 'ds4',
  name: 'Media Literacy Telemetry',
  category: 'News & Media',
  contributors: 3120,
  records: '≈ 210K observations',
  period: 'Jun – Aug 2026',
  privacyMechanism: 'Aggregation',
  privacyBudget: 'Not applied (aggregation only)',
  reidentRisk: 'Medium (estimated)',
  royalty: 85,
  price: '$900 / license',
  queries: 31,
  status: 'Requires further verification',
  description: 'Opt-in interaction data on how users engage with source-verification UI while reading news-related research.'
}];
CC.PERMISSIONS = [{
  id: 'educational',
  label: 'Educational research',
  desc: 'Anonymized learning activity supports non-commercial education research.',
  on: true
}, {
  id: 'academic',
  label: 'Academic analytics',
  desc: 'Aggregated statistics for university research partners.',
  on: true
}, {
  id: 'news',
  label: 'News analytics',
  desc: 'Reading-pattern aggregates for media-literacy studies.',
  on: true
}, {
  id: 'commercial',
  label: 'Commercial analytics',
  desc: 'Eligible telemetry joins monetized datasets. Earnings apply.',
  on: false
}, {
  id: 'ai',
  label: 'AI research',
  desc: 'Behavioral data may be used to improve research AI systems.',
  on: false
}];
CC.EARNINGS_LEDGER = [{
  date: '2026-09-10',
  dataset: 'Higher-Education Reading Habits',
  uses: 42,
  share: 0.85,
  change: 6.10,
  status: 'Available'
}, {
  date: '2026-09-06',
  dataset: 'Multilingual Audio Learning Patterns',
  uses: 27,
  share: 0.85,
  change: 3.90,
  status: 'Available'
}, {
  date: '2026-08-30',
  dataset: 'Higher-Education Reading Habits',
  uses: 38,
  share: 0.85,
  change: 5.50,
  status: 'Available'
}, {
  date: '2026-08-24',
  dataset: 'Museum Repatriation Sentiment',
  uses: 19,
  share: 0.85,
  change: 2.75,
  status: 'Paid'
}, {
  date: '2026-08-15',
  dataset: 'Higher-Education Reading Habits',
  uses: 31,
  share: 0.85,
  change: 4.55,
  status: 'Paid'
}, {
  date: '2026-08-02',
  dataset: 'Research donation — Literacy study',
  uses: 31,
  share: 0,
  change: 0,
  status: 'Donated'
}];
CC.TIMELINE = [{
  year: 'c. 3400 BCE',
  label: 'Proto-cuneiform tablets at Uruk',
  dossier: 'd5',
  region: 'Mesopotamia'
}, {
  year: 'c. 1754 BCE',
  label: 'Law Code of Hammurabi inscribed',
  dossier: 'd5',
  region: 'Mesopotamia'
}, {
  year: '11th–12th c.',
  label: 'Dresden Codex compiled in Yucatán',
  dossier: 'd3',
  region: 'Mesoamerica'
}, {
  year: '1235',
  'label': 'Battle of Krina; Sundiata epic cycle begins',
  dossier: 'd1',
  region: 'West Africa'
}, {
  year: 'c. 1300',
  label: 'Florentine tempera school matures',
  dossier: 'd2',
  region: 'Southern Europe'
}, {
  year: 'c. 1437',
  label: 'Cennini writes Il Libro dell\'Arte',
  dossier: 'd2',
  region: 'Southern Europe'
}, {
  year: '1765',
  label: 'Harunobu pioneers full-color nishiki-e',
  dossier: 'd4',
  region: 'Japan'
}, {
  year: 'c. 1830',
  label: 'Hokusai prints the Great Wave',
  dossier: 'd4',
  region: 'Japan'
}, {
  year: '2008',
  label: 'UNESCO recognizes Manden heritage',
  dossier: 'd1',
  region: 'West Africa'
}];
CC.QUIZ = {
  d1: [{
    q: 'Who carries the historical archive in Mande society?',
    options: ['Royal scribes', 'Griots (jeli)', 'Village elders only', 'Merchants'],
    answer: 1
  }, {
    q: 'How does the tradition verify its content?',
    options: ['Written ledgers', 'Cross-lineage recitation', 'Annual festivals', 'Royal decree'],
    answer: 1
  }, {
    q: 'The Epic of Sundiata is tied to which state?',
    options: ['Songhai', 'Ghana Empire', 'Mali Empire', 'Kanem-Bornu'],
    answer: 2
  }, {
    q: 'Which instrument accompanies epic recitation?',
    options: ['Kora', 'Oud', 'Shamisen', 'Sitar'],
    answer: 0
  }, {
    q: 'When was the epic first transcribed at scale?',
    options: ['13th century', '18th century', '20th century', 'It never was'],
    answer: 2
  }],
  default: [{
    q: 'What kind of source is the strongest evidence in a dossier?',
    options: ['AI synthesis', 'Primary sources', 'Social media', 'Anonymous blogs'],
    answer: 1
  }, {
    q: 'What does the evidence layer show?',
    options: ['Popularity', 'Strength and origin of evidence', 'Ad revenue', 'Read time only'],
    answer: 1
  }, {
    q: 'What should you do when a claim is marked "Requires further verification"?',
    options: ['Trust it fully', 'Ignore it', 'Check sources before using it', 'Delete it'],
    answer: 2
  }, {
    q: 'Which citation styles are supported?',
    options: ['APA only', 'APA, MLA, Chicago', 'None', 'IEEE only'],
    answer: 1
  }, {
    q: 'What is a Research Pack?',
    options: ['An ad', 'A bundled dossier export with sources and citations', 'A coin', 'A chat log'],
    answer: 1
  }]
};
/* ===== 02-shell.jsx ===== */
/* ================================================================
   App shell: navigation, badges, shared UI components (step 2)
   ================================================================ */
(function () {
  const {
    useState,
    useEffect
  } = React;
  CC.NAV = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'explore',
    label: 'Explore'
  }, {
    id: 'research',
    label: 'Research'
  }, {
    id: 'compare',
    label: 'Compare'
  }, {
    id: 'commons',
    label: 'Commons'
  }, {
    id: 'audio',
    label: 'Audio'
  }, {
    id: 'datatrust',
    label: 'DataTrust'
  }];
  CC.STATUS_COLORS = {
    'Source-backed': 'bg-moss/10 text-moss',
    'Primary source available': 'bg-moss/10 text-moss',
    'Institutionally verified': 'bg-emerald-100 text-emerald-800',
    'Community reviewed': 'bg-sky-100 text-sky-800',
    'AI synthesized': 'bg-indigo-100 text-indigo-800',
    'Requires further verification': 'bg-amber-100 text-amber-800'
  };
  CC.Badge = function Badge({
    status,
    className
  }) {
    const color = CC.STATUS_COLORS[status] || 'bg-stone-100 text-stone-600';
    return React.createElement('span', {
      className: 'inline-block text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ' + color + (className ? ' ' + className : '')
    }, status);
  };
  CC.Tag = function Tag({
    children,
    color
  }) {
    return React.createElement('span', {
      className: 'inline-block text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ' + (color || 'bg-parchment text-stone-600')
    }, children);
  };
  CC.Header = function Header({
    page,
    go,
    packCount
  }) {
    const [open, setOpen] = useState(false);
    return React.createElement('nav', {
      className: 'sticky top-0 z-30 bg-paper/95 backdrop-blur border-b border-stone-200',
      'aria-label': 'Main'
    }, React.createElement('div', {
      className: 'max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-3'
    }, React.createElement('button', {
      onClick: () => go('home'),
      className: 'font-serif text-lg font-bold tracking-tight shrink-0'
    }, 'DataTrust ', React.createElement('span', {
      className: 'text-ochre'
    }, 'Africa')), React.createElement('div', {
      className: 'hidden md:flex items-center gap-1'
    }, CC.NAV.map(n => React.createElement('button', {
      key: n.id,
      onClick: () => go(n.id),
      'aria-current': page === n.id ? 'page' : undefined,
      className: 'px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ' + (page === n.id ? 'bg-ink text-paper' : 'text-stone-600 hover:bg-parchment')
    }, n.label, n.id === 'research' && packCount > 0 ? React.createElement('span', {
      className: 'ml-1.5 inline-flex items-center justify-center h-5 w-5 rounded-full bg-ochre text-white text-[0.65rem] font-bold'
    }, packCount) : null))), React.createElement('button', {
      className: 'md:hidden px-3 py-2 rounded-full bg-parchment text-sm font-semibold',
      onClick: () => setOpen(!open),
      'aria-expanded': open
    }, 'Menu')), open ? React.createElement('div', {
      className: 'md:hidden border-t border-stone-200 bg-paper px-4 py-3 flex flex-wrap gap-2'
    }, CC.NAV.map(n => React.createElement('button', {
      key: n.id,
      onClick: () => {
        go(n.id);
        setOpen(false);
      },
      className: 'px-3 py-2 rounded-full text-sm font-medium ' + (page === n.id ? 'bg-ink text-paper' : 'text-stone-600 bg-parchment')
    }, n.label))) : null);
  };
  CC.Footer = function Footer() {
    return React.createElement('footer', {
      className: 'border-t border-stone-200 bg-parchment/50 mt-auto'
    }, React.createElement('div', {
      className: 'max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 text-sm text-stone-600'
    }, React.createElement('div', null, React.createElement('p', {
      className: 'font-serif font-bold text-ink mb-2'
    }, 'DataTrust & CultureCommons'), React.createElement('p', null, 'Open research infrastructure for culture, history and the arts — with a privacy-first personal-data ecosystem.')), React.createElement('div', {
      className: 'md:text-right'
    }, React.createElement('p', {
      className: 'mb-1'
    }, 'Prototype build. AI answers, earnings and privacy metrics are simulations — never production guarantees.'), React.createElement('p', {
      className: 'text-stone-400'
    }, 'Research deeply. Learn openly. Control your data.'))));
  };
  CC.Section = function Section({
    eyebrow,
    title,
    children,
    center
  }) {
    return React.createElement('div', {
      className: (center ? 'max-w-3xl mx-auto text-center ' : '') + 'mb-10'
    }, eyebrow ? React.createElement('p', {
      className: 'text-ochre text-xs font-bold tracking-[0.2em] uppercase mb-3'
    }, eyebrow) : null, React.createElement('h2', {
      className: 'font-serif text-3xl md:text-4xl font-bold mb-4'
    }, title), children ? React.createElement('p', {
      className: 'text-stone-600 leading-relaxed'
    }, children) : null);
  };

  /* Citations: generate APA / MLA / Chicago for a dossier */
  CC.cite = function (d, style) {
    const year = '2026';
    if (style === 'APA') return 'CultureCommons Research Collective. (' + year + '). ' + d.title + ' [Research dossier]. DataTrust & CultureCommons. https://spottersolutions.github.io/DataTrust-Africa/app/';
    if (style === 'MLA') return 'CultureCommons Research Collective. "' + d.title + '." DataTrust & CultureCommons, ' + year + ', spottersolutions.github.io/DataTrust-Africa/app/.';
    return 'CultureCommons Research Collective. "' + d.title + '." Research dossier. DataTrust & CultureCommons, ' + year + '. https://spottersolutions.github.io/DataTrust-Africa/app/.';
  };

  /* Persistent local state helpers */
  CC.store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem('cc-' + key);
        return v ? JSON.parse(v) : fallback;
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem('cc-' + key, JSON.stringify(value));
      } catch (e) {}
    }
  };
})();
/* ===== 03-research.jsx ===== */
/* ================================================================
   Home + Research (dossier view, synthesizer) — step 3
   ================================================================ */
(function () {
  const {
    useState,
    useMemo
  } = React;
  const h = React.createElement;

  /* ------------------------------ HOME ------------------------------ */
  CC.HomePage = function HomePage({
    go
  }) {
    return h('div', null, /* Hero */
    h('header', {
      className: 'relative overflow-hidden'
    }, h('div', {
      className: 'absolute inset-0 bg-gradient-to-br from-ink via-stone-900 to-terra opacity-95',
      'aria-hidden': 'true'
    }), h('div', {
      className: 'relative max-w-5xl mx-auto px-6 py-24 md:py-28 text-center text-paper'
    }, h('p', {
      className: 'text-ochrelite text-xs font-bold tracking-[0.3em] uppercase mb-6'
    }, 'DataTrust & CultureCommons'), h('h1', {
      className: 'font-serif text-4xl md:text-6xl font-bold leading-tight mb-6'
    }, 'Research culture. Discover knowledge. Own your data.'), h('p', {
      className: 'max-w-2xl mx-auto text-stone-300 text-lg leading-relaxed mb-10'
    }, 'Explore structured cultural research, listen to academic articles, build citation-ready projects, and contribute to an open community — while keeping control of your personal data.'), h('div', {
      className: 'flex flex-wrap justify-center gap-4'
    }, h('button', {
      onClick: () => go('research'),
      className: 'bg-ochre hover:bg-ochrelite text-white font-semibold px-8 py-3 rounded-full transition'
    }, 'Start Researching'), h('button', {
      onClick: () => go('commons'),
      className: 'border border-stone-500 hover:border-paper text-paper font-semibold px-8 py-3 rounded-full transition'
    }, 'Explore the Commons'), h('button', {
      onClick: () => go('datatrust'),
      className: 'border border-indigo-400 text-indigo-200 hover:border-indigo-200 font-semibold px-8 py-3 rounded-full transition'
    }, 'Explore DataTrust')))), /* Featured research */
    h('section', {
      className: 'max-w-6xl mx-auto px-6 py-20'
    }, h(CC.Section, {
      eyebrow: 'Featured research',
      title: 'Curated dossiers',
      center: true
    }, 'High-quality digital reference entries with visible evidence, sources and audio.'), h('div', {
      className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
    }, CC.DOSSIERS.map(d => h(CC.DossierCard, {
      key: d.id,
      d,
      go
    })))), /* Research with AI */
    h('section', {
      className: 'bg-parchment/60 border-y border-stone-200'
    }, h('div', {
      className: 'max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center'
    }, h('div', null, h('p', {
      className: 'text-ochre text-xs font-bold tracking-[0.2em] uppercase mb-3'
    }, 'Research with AI'), h('h3', {
      className: 'font-serif text-2xl font-bold mb-3'
    }, 'The Research Synthesizer'), h('p', {
      className: 'text-stone-600 leading-relaxed mb-4'
    }, 'Enter a cultural tradition, historical artifact, ancient text, artist, technology, or historical question. The synthesizer produces a structured dossier — with evidence context and an honest uncertainty indicator, never implied infallibility.'), h('button', {
      onClick: () => go('research', {
        synthesize: true
      }),
      className: 'bg-ochre hover:bg-ochrelite text-white font-semibold px-6 py-2.5 rounded-full transition text-sm'
    }, 'Try Research Synthesizer')), h('div', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 text-sm text-stone-500 space-y-2 shadow-sm'
    }, h('p', {
      className: 'font-semibold text-stone-700 mb-2'
    }, 'Example searches'), ['How was Renaissance tempera manufactured?', 'What were cuneiform tablets made from?', 'How did Maya astronomers record celestial cycles?', 'Explain Edo woodblock registration techniques.'].map(q => h('button', {
      key: q,
      onClick: () => go('research', {
        synthesize: q
      }),
      className: 'block w-full text-left rounded-lg border border-stone-200 px-4 py-2.5 hover:border-ochre hover:text-ochre transition'
    }, '"' + q + '"'))))), /* Two ecosystems */
    h('section', {
      className: 'max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10'
    }, h('div', null, h('p', {
      className: 'text-ochre text-xs font-bold tracking-[0.2em] uppercase mb-3'
    }, 'CultureCommons'), h('h3', {
      className: 'font-serif text-2xl font-bold mb-3'
    }, 'The research ecosystem'), h('p', {
      className: 'text-stone-600 leading-relaxed mb-4'
    }, 'Discover → Understand → Verify → Save → Research → Use → Share → Contribute. The loop is visible everywhere: dossiers, evidence layers, citations, audio articles, research packs and the community Commons.'), h('button', {
      onClick: () => go('explore'),
      className: 'text-ochre font-semibold text-sm hover:underline'
    }, 'Explore →')), h('div', null, h('p', {
      className: 'text-indigo text-xs font-bold tracking-[0.2em] uppercase mb-3'
    }, 'DataTrust'), h('h3', {
      className: 'font-serif text-2xl font-bold mb-3'
    }, 'The data-control ecosystem'), h('p', {
      className: 'text-stone-600 leading-relaxed mb-4'
    }, 'Keep your data private, donate it to education, or monetize eligible telemetry — with transparent provenance, an 85% contributor royalty pool, and a full earnings ledger. Simulated in this prototype.'), h('button', {
      onClick: () => go('datatrust'),
      className: 'text-indigo font-semibold text-sm hover:underline'
    }, 'Open DataTrust →'))));
  };

  /* Dossier card (used on Home, Explore, Commons) */
  CC.DossierCard = function DossierCard({
    d,
    go
  }) {
    return h('article', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm flex flex-col'
    }, h('div', {
      className: 'flex items-center gap-2 mb-3 flex-wrap'
    }, h(CC.Tag, {
      color: 'bg-parchment text-stone-600'
    }, d.category), h(CC.Badge, {
      status: d.reviewStatus
    })), h('h3', {
      className: 'font-serif text-xl font-bold mb-2 leading-snug'
    }, d.title), h('p', {
      className: 'text-sm text-stone-600 leading-relaxed mb-4 flex-1'
    }, d.overview.slice(0, 150) + '…'), h('div', {
      className: 'flex items-center gap-3 text-xs text-stone-400 mb-4'
    }, h('span', null, d.readingTime + ' min read'), h('span', {
      'aria-hidden': 'true'
    }, '·'), h('span', null, 'Audio ' + d.audioMinutes + ' min'), h('span', {
      'aria-hidden': 'true'
    }, '·'), h('span', null, d.primarySources.length + d.academicSources.length + d.institutionalSources.length + ' sources')), h('button', {
      onClick: () => go('dossier', {
        id: d.id
      }),
      className: 'text-ochre font-semibold text-sm hover:underline self-start'
    }, 'Open dossier →'));
  };

  /* --------------------------- DOSSIER VIEW --------------------------- */
  const HL_COLORS = {
    Important: '#fde68a',
    Evidence: '#bbf7d0',
    Quote: '#bfdbfe',
    Question: '#fbcfe8',
    Counterargument: '#fecaca',
    'Need verification': '#fed7aa'
  };
  CC.DossierPage = function DossierPage({
    id,
    go,
    workspace,
    setWorkspace
  }) {
    const d = CC.DOSSIERS.find(x => x.id === id) || CC.DOSSIERS[0];
    const [citeStyle, setCiteStyle] = useState('APA');
    const [copied, setCopied] = useState(false);
    const [note, setNote] = useState('');
    const ws = workspace[d.id] || {
      highlights: [],
      notes: [],
      saved: false
    };
    function update(patch) {
      setWorkspace(w => Object.assign({}, w, {
        [d.id]: Object.assign({}, ws, patch)
      }));
    }
    function addHighlight() {
      const sel = window.getSelection();
      const text = sel ? String(sel).trim() : '';
      if (!text) return;
      const cat = prompt('Highlight category: Important, Evidence, Quote, Question, Counterargument, Need verification', 'Important');
      if (!cat) return;
      update({
        highlights: ws.highlights.concat([{
          text: text.slice(0, 300),
          cat
        }])
      });
      sel.removeAllRanges();
    }
    return h('div', {
      className: 'max-w-4xl mx-auto px-6 py-12'
    }, h('button', {
      onClick: () => go('research'),
      className: 'text-sm text-stone-500 hover:text-ochre mb-6'
    }, '← All research'), h('div', {
      className: 'flex items-center gap-2 mb-3 flex-wrap'
    }, h(CC.Tag, null, d.category), h(CC.Tag, null, d.region), h(CC.Tag, null, d.period), h(CC.Badge, {
      status: d.reviewStatus
    })), h('h1', {
      className: 'font-serif text-3xl md:text-4xl font-bold mb-6'
    }, d.title), /* action bar */
    h('div', {
      className: 'flex flex-wrap gap-3 mb-10'
    }, h('button', {
      onClick: () => update({
        saved: !ws.saved
      }),
      className: (ws.saved ? 'bg-stone-300 text-stone-700 ' : 'bg-ochre hover:bg-ochrelite text-white ') + 'font-semibold px-5 py-2 rounded-full text-sm transition'
    }, ws.saved ? 'Saved to workspace' : 'Save to workspace'), h('button', {
      onClick: () => go('audio', {
        id: d.id
      }),
      className: 'bg-ink text-paper font-semibold px-5 py-2 rounded-full text-sm hover:bg-stone-700 transition'
    }, 'Listen (' + d.audioMinutes + ' min)'), h('button', {
      onClick: addHighlight,
      className: 'border border-stone-300 text-stone-600 font-semibold px-5 py-2 rounded-full text-sm hover:border-ochre hover:text-ochre transition'
    }, 'Highlight selection'), h('button', {
      onClick: () => {
        const pack = '# Research Pack: ' + d.title + '\n\n' + '## Overview\n' + d.overview + '\n\n## Historical context\n' + d.context + '\n\n## Chronology\n' + d.chronology.map(c => '- ' + c[0] + ': ' + c[1]).join('\n') + '\n\n## Key claims & evidence\n' + d.claims.map(c => '- ' + c.text + ' [' + c.status + ', ' + c.evidence + ' sources]').join('\n') + '\n\n## Sources\nPrimary: ' + d.primarySources.join('; ') + '\nAcademic: ' + d.academicSources.join('; ') + '\nInstitutional: ' + d.institutionalSources.join('; ') + '\n\n## Citation (' + citeStyle + ')\n' + CC.cite(d, citeStyle) + '\n';
        const blob = new Blob([pack], {
          type: 'text/markdown'
        });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = d.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-research-pack.md';
        a.click();
      },
      className: 'bg-moss text-white font-semibold px-5 py-2 rounded-full text-sm hover:opacity-90 transition'
    }, 'Generate Research Pack')), h('div', {
      className: 'grid gap-8'
    }, section('Overview', h('p', {
      className: 'text-stone-700 leading-relaxed text-lg'
    }, d.overview)), section('Historical context', h('p', {
      className: 'text-stone-600 leading-relaxed'
    }, d.context)), section('Chronology', h('ol', {
      className: 'relative border-l-2 border-stone-300 ml-3 space-y-4'
    }, d.chronology.map((c, i) => h('li', {
      key: i,
      className: 'ml-6'
    }, h('span', {
      className: 'absolute -left-2 mt-1 h-4 w-4 rounded-full bg-ochre border-2 border-paper',
      'aria-hidden': 'true'
    }), h('p', {
      className: 'text-xs text-stone-500'
    }, c[0]), h('p', {
      className: 'font-medium'
    }, c[1]))))), section('Materials & techniques', h('p', {
      className: 'text-stone-600 leading-relaxed'
    }, d.materials)), section('Cultural context', h('p', {
      className: 'text-stone-600 leading-relaxed'
    }, d.cultural)), /* Evidence layer */
    h('section', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
    }, h('h2', {
      className: 'font-serif text-xl font-bold mb-1'
    }, 'Evidence layer'), h('p', {
      className: 'text-sm text-stone-500 mb-5'
    }, 'Every significant claim is traceable. Status shows the strength and origin of the evidence.'), h('ul', {
      className: 'space-y-4'
    }, d.claims.map((c, i) => h('li', {
      key: i,
      className: 'rounded-xl border border-stone-200 p-4'
    }, h('p', {
      className: 'font-medium mb-2'
    }, c.text), h('div', {
      className: 'flex items-center gap-3 flex-wrap'
    }, h(CC.Badge, {
      status: c.status
    }), h('span', {
      className: 'text-xs text-stone-500'
    }, c.evidence + ' supporting source' + (c.evidence > 1 ? 's' : ''))))))), /* Sources */
    h('section', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
    }, h('h2', {
      className: 'font-serif text-xl font-bold mb-5'
    }, 'Sources'), [['Primary sources', d.primarySources, 'bg-moss/10 text-moss'], ['Academic sources', d.academicSources, 'bg-sky-100 text-sky-800'], ['Institutional sources', d.institutionalSources, 'bg-emerald-100 text-emerald-800']].map(([label, list, color]) => h('div', {
      key: label,
      className: 'mb-4 last:mb-0'
    }, h('p', {
      className: 'text-xs font-bold uppercase tracking-wider text-stone-500 mb-2'
    }, label), h('ul', {
      className: 'space-y-1.5'
    }, list.map((s, i) => h('li', {
      key: i,
      className: 'text-sm text-stone-700 flex gap-2'
    }, h('span', {
      className: 'mt-1.5 h-1.5 w-1.5 rounded-full bg-ochre shrink-0'
    }), s)))))), /* Glossary */
    section('Glossary', h('dl', {
      className: 'grid sm:grid-cols-2 gap-4'
    }, d.glossary.map((g, i) => h('div', {
      key: i,
      className: 'bg-white rounded-xl border border-stone-200 p-4'
    }, h('dt', {
      className: 'font-semibold'
    }, g[0]), h('dd', {
      className: 'text-sm text-stone-600'
    }, g[1]))))), /* Citations */
    h('section', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
    }, h('h2', {
      className: 'font-serif text-xl font-bold mb-4'
    }, 'Cite this dossier'), h('div', {
      className: 'flex gap-2 mb-4'
    }, ['APA', 'MLA', 'Chicago'].map(s => h('button', {
      key: s,
      onClick: () => setCiteStyle(s),
      className: 'px-4 py-1.5 rounded-full text-sm font-semibold transition ' + (citeStyle === s ? 'bg-ink text-paper' : 'bg-parchment text-stone-600 hover:bg-stone-200')
    }, s))), h('p', {
      className: 'text-sm text-stone-700 bg-parchment/70 rounded-xl p-4 mb-4 font-mono'
    }, CC.cite(d, citeStyle)), h('button', {
      onClick: () => {
        navigator.clipboard && navigator.clipboard.writeText(CC.cite(d, citeStyle));
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      className: 'border border-stone-300 text-stone-600 font-semibold px-5 py-2 rounded-full text-sm hover:border-ochre hover:text-ochre transition'
    }, copied ? 'Copied!' : 'Copy citation')), /* Highlights & notes */
    h('section', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
    }, h('h2', {
      className: 'font-serif text-xl font-bold mb-4'
    }, 'Your highlights & notes'), ws.highlights.length === 0 && h('p', {
      className: 'text-sm text-stone-500 mb-4'
    }, 'Select any text in this dossier and click "Highlight selection" to annotate it.'), h('ul', {
      className: 'space-y-2 mb-6'
    }, ws.highlights.map((hl, i) => h('li', {
      key: i,
      className: 'rounded-lg p-3 text-sm',
      style: {
        background: HL_COLORS[hl.cat] || '#eee'
      }
    }, h('span', {
      className: 'font-bold text-xs uppercase tracking-wider mr-2'
    }, hl.cat), hl.text))), h('div', {
      className: 'flex gap-3'
    }, h('input', {
      value: note,
      onChange: e => setNote(e.target.value),
      placeholder: 'Add a private note…',
      className: 'flex-1 rounded-full border border-stone-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ochre'
    }), h('button', {
      onClick: () => {
        if (note.trim()) {
          update({
            notes: ws.notes.concat([note.trim()])
          });
          setNote('');
        }
      },
      className: 'bg-ochre text-white font-semibold px-5 py-2 rounded-full text-sm'
    }, 'Add')), h('ul', {
      className: 'mt-4 space-y-2'
    }, ws.notes.map((n, i) => h('li', {
      key: i,
      className: 'text-sm text-stone-700 bg-parchment/70 rounded-lg p-3'
    }, n)))), /* Related */
    h('section', null, h('h2', {
      className: 'font-serif text-xl font-bold mb-4'
    }, 'Related topics'), h('div', {
      className: 'flex flex-wrap gap-3'
    }, d.related.map(rid => {
      const r = CC.DOSSIERS.find(x => x.id === rid);
      return r ? h('button', {
        key: rid,
        onClick: () => go('dossier', {
          id: rid
        }),
        className: 'bg-white border border-stone-200 rounded-full px-5 py-2 text-sm font-medium hover:border-ochre hover:text-ochre transition'
      }, r.title) : null;
    })))));
    function section(title, body) {
      return h('section', null, h('h2', {
        className: 'font-serif text-xl font-bold mb-3'
      }, title), body);
    }
  };

  /* ---------------------- AI RESEARCH SYNTHESIZER ---------------------- */
  CC.SynthesizerPage = function SynthesizerPage({
    go,
    preset
  }) {
    const [q, setQ] = useState(preset || '');
    const [state, setState] = useState('idle'); // idle | working | done
    const [result, setResult] = useState(null);
    function synthesize() {
      if (!q.trim()) return;
      setState('working');
      setResult(null);
      setTimeout(() => {
        const words = q.toLowerCase().split(/\W+/).filter(w => w.length > 3);
        const scored = CC.DOSSIERS.map(d => {
          const hay = (d.title + ' ' + d.overview + ' ' + d.context + ' ' + d.materials + ' ' + d.category + ' ' + d.region).toLowerCase();
          return {
            d,
            score: words.reduce((a, w) => a + (hay.includes(w) ? 1 : 0), 0)
          };
        }).sort((a, b) => b.score - a.score);
        const hits = scored.filter(s => s.score > 0);
        setResult({
          hits: hits.slice(0, 2).map(x => x.d),
          uncertain: hits.length === 0
        });
        setState('done');
      }, 1200);
    }
    return h('div', {
      className: 'max-w-3xl mx-auto px-6 py-12'
    }, h(CC.Section, {
      eyebrow: 'AI Research Synthesizer',
      title: 'Generate a research dossier',
      center: true
    }, 'Enter any cultural or historical topic. In this prototype the synthesizer works against the built-in sample corpus and always shows its confidence — AI output is never automatically authoritative.'), h('div', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
    }, h('div', {
      className: 'flex gap-3 mb-2'
    }, h('input', {
      value: q,
      onChange: e => setQ(e.target.value),
      onKeyDown: e => e.key === 'Enter' && synthesize(),
      placeholder: 'e.g. How did Maya astronomers record celestial cycles?',
      className: 'flex-1 rounded-full border border-stone-300 px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-ochre'
    }), h('button', {
      onClick: synthesize,
      className: 'bg-ochre hover:bg-ochrelite text-white font-semibold px-6 py-2.5 rounded-full transition'
    }, 'Synthesize')), h('div', {
      className: 'flex flex-wrap gap-2 mt-3'
    }, ['Renaissance tempera', 'Cuneiform tablets', 'Maya astronomy', 'Woodblock registration'].map(s => h('button', {
      key: s,
      onClick: () => setQ(s),
      className: 'text-xs bg-parchment rounded-full px-3 py-1.5 text-stone-600 hover:text-ochre'
    }, s))), state === 'working' && h(CC.LoadingNote, {
      text: 'Structuring the research… pairing answers with sources and a confidence estimate.'
    }), state === 'done' && result && h('div', {
      className: 'mt-6 border-t border-stone-200 pt-6',
      'aria-live': 'polite'
    }, result.uncertain ? h('div', {
      className: 'rounded-xl bg-amber-50 border border-amber-200 p-4'
    }, h('p', {
      className: 'font-semibold text-amber-900 mb-1'
    }, 'Limited source evidence'), h('p', {
      className: 'text-sm text-amber-800'
    }, 'The sample corpus has no strong match. In the production system this is the uncertainty signal you would see — the AI declines rather than inventing an answer. The full corpus grows as the community publishes dossiers.')) : h('div', null, h('p', {
      className: 'text-sm text-stone-500 mb-4'
    }, 'Confidence: ', h('span', {
      className: 'font-semibold text-moss'
    }, 'moderate'), ' — synthesized from ' + result.hits.length + ' matching dossier' + (result.hits.length > 1 ? 's' : '') + '. Verify against sources before citing.'), h('div', {
      className: 'space-y-4'
    }, result.hits.map(d => h('div', {
      key: d.id,
      className: 'rounded-xl border border-stone-200 p-5'
    }, h('div', {
      className: 'flex items-center gap-2 mb-2 flex-wrap'
    }, h(CC.Badge, {
      status: 'AI synthesized'
    }), h(CC.Badge, {
      status: d.reviewStatus
    })), h('p', {
      className: 'font-serif font-bold mb-2'
    }, d.title), h('p', {
      className: 'text-sm text-stone-600 leading-relaxed mb-3'
    }, d.overview), h('div', {
      className: 'flex gap-3'
    }, h('button', {
      onClick: () => go('dossier', {
        id: d.id
      }),
      className: 'text-ochre text-sm font-semibold hover:underline'
    }, 'Open full dossier →'), h('button', {
      onClick: () => go('audio', {
        id: d.id
      }),
      className: 'text-ink text-sm font-semibold hover:underline'
    }, 'Listen →')))))))));
  };
})();
/* ===== 04-audio.jsx ===== */
/* ================================================================
   Audio articles: AI speaker, study mode, episodes — step 4
   Uses the browser's built-in speech synthesis (real TTS).
   ================================================================ */
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const h = React.createElement;
  function splitSentences(text) {
    return text.match(/[^.!?]+[.!?]+/g) || [text];
  }
  CC.AudioPage = function AudioPage({
    go,
    presetId
  }) {
    const [dId, setDId] = useState(presetId || CC.DOSSIERS[0].id);
    const d = CC.DOSSIERS.find(x => x.id === dId) || CC.DOSSIERS[0];
    const sentences = splitSentences(d.audioText);
    const [playing, setPlaying] = useState(false);
    const [idx, setIdx] = useState(-1);
    const [rate, setRate] = useState(1);
    const [voice, setVoice] = useState(null);
    const [voices, setVoices] = useState([]);
    const [mode, setMode] = useState('listen'); // listen | study
    const utterRef = useRef(null);
    const supported = typeof speechSynthesis !== 'undefined';
    useEffect(() => {
      if (!supported) return;
      function load() {
        setVoices(speechSynthesis.getVoices());
      }
      load();
      speechSynthesis.onvoiceschanged = load;
      return () => {
        stopAll();
      };
    }, []);
    useEffect(() => {
      stopAll();
      setIdx(-1);
      setPlaying(false);
      setMode('listen');
    }, [dId]);
    function stopAll() {
      if (supported) speechSynthesis.cancel();
    }
    function speak(from) {
      if (!supported) return;
      stopAll();
      setPlaying(true);
      let i = from;
      function next() {
        if (i >= sentences.length) {
          setPlaying(false);
          setIdx(-1);
          return;
        }
        const u = new SpeechSynthesisUtterance(sentences[i]);
        u.rate = rate;
        if (voice) u.voice = voice;
        setIdx(i);
        utterRef.current = u;
        u.onend = () => {
          i++;
          next();
        };
        u.onerror = () => {
          setPlaying(false);
        };
        speechSynthesis.speak(u);
      }
      next();
    }
    function pause() {
      if (supported) {
        speechSynthesis.cancel();
      }
      setPlaying(false);
    }
    return h('div', {
      className: 'max-w-3xl mx-auto px-6 py-12'
    }, h(CC.Section, {
      eyebrow: 'Audio articles',
      title: 'Listen to research',
      center: true
    }, 'Every dossier can become a spoken article with sentence-by-sentence highlighting. Speech is generated by your device — a real accessibility feature, not a simulated one.'), /* selector */
    h('div', {
      className: 'flex gap-2 flex-wrap mb-8 justify-center'
    }, CC.DOSSIERS.map(x => h('button', {
      key: x.id,
      onClick: () => setDId(x.id),
      className: 'px-4 py-2 rounded-full text-sm font-medium transition ' + (x.id === dId ? 'bg-ink text-paper' : 'bg-parchment text-stone-600 hover:bg-stone-200')
    }, x.title))), /* player */
    h('div', {
      className: 'bg-ink text-paper rounded-2xl p-6 mb-8'
    }, h('p', {
      className: 'text-ochrelite text-xs font-bold uppercase tracking-wider mb-1'
    }, 'Now playing'), h('h3', {
      className: 'font-serif text-xl font-bold mb-4'
    }, d.title), h('div', {
      className: 'flex items-center gap-3 flex-wrap'
    }, h('button', {
      onClick: () => playing ? pause() : speak(idx >= 0 ? idx : 0),
      className: 'bg-ochre hover:bg-ochrelite text-white font-bold w-12 h-12 rounded-full transition text-lg',
      'aria-label': playing ? 'Pause' : 'Play'
    }, playing ? '❚❚' : '▶'), h('div', {
      className: 'flex items-center gap-1'
    }, [0.8, 1, 1.25, 1.5].map(r => h('button', {
      key: r,
      onClick: () => {
        setRate(r);
        if (playing) speak(idx >= 0 ? idx : 0);
      },
      className: 'px-3 py-1.5 rounded-full text-xs font-bold transition ' + (rate === r ? 'bg-paper text-ink' : 'bg-stone-700 text-stone-300 hover:bg-stone-600')
    }, r + 'x'))), voices.length > 0 && h('select', {
      value: voice ? voice.name : '',
      onChange: e => setVoice(voices.find(v => v.name === e.target.value) || null),
      className: 'bg-stone-700 text-stone-200 text-xs rounded-full px-3 py-1.5 max-w-[10rem]',
      'aria-label': 'Voice'
    }, h('option', {
      value: ''
    }, 'Default voice'), voices.slice(0, 12).map(v => h('option', {
      key: v.name,
      value: v.name
    }, v.name)))), !supported && h('p', {
      className: 'text-amber-300 text-sm mt-3'
    }, 'Your browser does not support speech synthesis — the transcript below remains fully available.')), /* mode toggle */
    h('div', {
      className: 'flex gap-2 mb-6'
    }, h('button', {
      onClick: () => setMode('listen'),
      className: 'px-5 py-2 rounded-full text-sm font-semibold transition ' + (mode === 'listen' ? 'bg-ink text-paper' : 'bg-parchment text-stone-600')
    }, 'Transcript'), h('button', {
      onClick: () => {
        pause();
        setMode('study');
      },
      className: 'px-5 py-2 rounded-full text-sm font-semibold transition ' + (mode === 'study' ? 'bg-ochre text-white' : 'bg-parchment text-stone-600')
    }, 'Study this article')), mode === 'listen' ? h('article', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm leading-relaxed text-lg'
    }, sentences.map((s, i) => h('span', {
      key: i,
      className: 'transition-colors cursor-pointer rounded ' + (i === idx ? 'bg-amber-200' : 'hover:bg-parchment'),
      onClick: () => speak(i)
    }, s + ' '))) : h(CC.StudyMode, {
      d
    }), /* episodes */
    h('section', {
      className: 'mt-14'
    }, h('h2', {
      className: 'font-serif text-2xl font-bold mb-2'
    }, 'Research episodes'), h('p', {
      className: 'text-sm text-stone-500 mb-6'
    }, 'Connected audio lessons built from multiple dossiers. Select chapters and play them as one journey.'), h(CC.EpisodePlayer, {
      go
    })));
  };

  /* ---------------- Study mode quiz ---------------- */
  CC.StudyMode = function StudyMode({
    d
  }) {
    const quiz = CC.QUIZ[d.id] || CC.QUIZ.default;
    const [answers, setAnswers] = useState({});
    const [done, setDone] = useState(false);
    const score = Object.keys(answers).filter(i => answers[i] === quiz[i].answer).length;
    return h('div', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
    }, h('h3', {
      className: 'font-serif text-xl font-bold mb-1'
    }, 'Study: ' + d.title), h('p', {
      className: 'text-sm text-stone-500 mb-6'
    }, '5-question review. Turns listening into learning.'), h('ol', {
      className: 'space-y-6'
    }, quiz.map((item, qi) => h('li', {
      key: qi
    }, h('p', {
      className: 'font-medium mb-3'
    }, qi + 1 + '. ' + item.q), h('div', {
      className: 'grid sm:grid-cols-2 gap-2'
    }, item.options.map((opt, oi) => {
      const chosen = answers[qi] === oi;
      const showResult = done;
      const correct = item.answer === oi;
      return h('button', {
        key: oi,
        disabled: done,
        onClick: () => setAnswers(a => Object.assign({}, a, {
          [qi]: oi
        })),
        className: 'text-left text-sm rounded-xl border px-4 py-2.5 transition ' + (showResult ? correct ? 'border-moss bg-moss/10 text-moss font-semibold' : chosen ? 'border-red-300 bg-red-50 text-red-700' : 'border-stone-200 text-stone-500' : chosen ? 'border-ochre bg-ochre/10 text-ochre font-semibold' : 'border-stone-200 hover:border-ochre')
      }, opt);
    }))))), !done ? h('button', {
      onClick: () => setDone(true),
      disabled: Object.keys(answers).length < quiz.length,
      className: 'mt-6 bg-ochre text-white font-semibold px-6 py-2.5 rounded-full text-sm disabled:opacity-40'
    }, 'Check answers') : h('div', {
      className: 'mt-6 rounded-xl bg-parchment p-4'
    }, h('p', {
      className: 'font-bold mb-1'
    }, 'Score: ' + score + ' / ' + quiz.length), h('p', {
      className: 'text-sm text-stone-600'
    }, score === quiz.length ? 'Excellent recall. Try a harder dossier or build a Research Pack.' : score >= 3 ? 'Good progress — re-listen to the highlighted sections and retry the missed questions.' : 'Re-listen to the article, then review the missed questions above.')));
  };

  /* ---------------- Episode player ---------------- */
  CC.EpisodePlayer = function EpisodePlayer({
    go
  }) {
    const [selected, setSelected] = useState(['d5', 'd1']);
    const [playing, setPlaying] = useState(false);
    const supported = typeof speechSynthesis !== 'undefined';
    const chapters = selected.map(id => CC.DOSSIERS.find(d => d.id === id)).filter(Boolean);
    function toggle(id) {
      setSelected(s => s.includes(id) ? s.filter(x => x !== id) : s.concat([id]));
    }
    function playEpisode() {
      if (!supported || chapters.length === 0) return;
      speechSynthesis.cancel();
      setPlaying(true);
      const intro = new SpeechSynthesisUtterance('Research episode. ' + chapters.map(c => c.title).join('. Then. ') + '.');
      const queue = [intro];
      chapters.forEach((c, i) => {
        queue.push(new SpeechSynthesisUtterance('Chapter ' + (i + 1) + '. ' + c.title + '.'));
        queue.push(new SpeechSynthesisUtterance(c.audioText));
      });
      queue.forEach((u, i) => {
        if (i === queue.length - 1) u.onend = () => setPlaying(false);
        speechSynthesis.speak(u);
      });
    }
    return h('div', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
    }, h('p', {
      className: 'text-xs font-bold uppercase tracking-wider text-stone-500 mb-3'
    }, 'Build your episode'), h('div', {
      className: 'flex flex-wrap gap-2 mb-6'
    }, CC.DOSSIERS.map(d => h('button', {
      key: d.id,
      onClick: () => toggle(d.id),
      className: 'px-4 py-2 rounded-full text-sm font-medium transition ' + (selected.includes(d.id) ? 'bg-ochre text-white' : 'bg-parchment text-stone-600 hover:bg-stone-200')
    }, d.title))), chapters.length > 0 && h('ol', {
      className: 'mb-6 space-y-2'
    }, chapters.map((c, i) => h('li', {
      key: c.id,
      className: 'text-sm text-stone-600 flex gap-3'
    }, h('span', {
      className: 'font-bold text-ochre'
    }, 'Ch. ' + (i + 1)), h('span', null, c.title, h('span', {
      className: 'text-stone-400'
    }, ' · ' + c.audioMinutes + ' min'))))), h('button', {
      onClick: () => playing ? (speechSynthesis.cancel(), setPlaying(false)) : playEpisode(),
      disabled: chapters.length === 0,
      className: 'bg-ink text-paper font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-stone-700 transition disabled:opacity-40'
    }, playing ? 'Stop episode' : 'Play episode (' + chapters.reduce((a, c) => a + c.audioMinutes, 0) + ' min)'));
  };
})();
/* ===== 05-datatrust.jsx ===== */
/* ================================================================
   DataTrust: marketplace, earnings, permissions, trust — step 5
   All financial/privacy values are configured simulations.
   ================================================================ */
(function () {
  const {
    useState
  } = React;
  const h = React.createElement;
  CC.DataTrustPage = function DataTrustPage({
    go
  }) {
    const [tab, setTab] = useState('dashboard');
    const [perms, setPerms] = useState(() => CC.store.get('permissions', CC.PERMISSIONS));
    const balance = CC.EARNINGS_LEDGER.filter(r => r.status !== 'Donated').reduce((a, r) => a + r.change, 0);
    function togglePerm(id) {
      setPerms(p => {
        const next = p.map(x => x.id === id ? Object.assign({}, x, {
          on: !x.on
        }) : x);
        CC.store.set('permissions', next);
        return next;
      });
    }
    const TABS = [['dashboard', 'Dashboard'], ['marketplace', 'Marketplace'], ['earnings', 'Earnings'], ['permissions', 'Permissions'], ['trust', 'Trust Center']];
    return h('div', {
      className: 'max-w-6xl mx-auto px-6 py-12'
    }, h('div', {
      className: 'text-center mb-10'
    }, h('p', {
      className: 'text-indigo text-xs font-bold tracking-[0.2em] uppercase mb-3'
    }, 'DataTrust'), h('h1', {
      className: 'font-serif text-3xl md:text-4xl font-bold mb-4'
    }, 'Your data, your decisions'), h('p', {
      className: 'max-w-2xl mx-auto text-stone-600'
    }, 'Understand what data exists about you, how it is used, who benefits, and what choices you have. Keep it private, donate it to education, or monetize eligible telemetry. Prototype: financial and privacy values are configured simulations, never guarantees.')), h('div', {
      className: 'flex justify-center gap-2 mb-10 flex-wrap'
    }, TABS.map(([id, label]) => h('button', {
      key: id,
      onClick: () => setTab(id),
      className: 'px-5 py-2 rounded-full text-sm font-semibold transition ' + (tab === id ? 'bg-indigo text-white' : 'bg-parchment text-stone-600 hover:bg-stone-200')
    }, label))), tab === 'dashboard' && h(Dashboard, {
      balance,
      setTab,
      perms
    }), tab === 'marketplace' && h(Marketplace, null), tab === 'earnings' && h(Earnings, {
      balance
    }), tab === 'permissions' && h(Permissions, {
      perms,
      togglePerm
    }), tab === 'trust' && h(TrustCenter, null));
  };

  /* ---------------- Dashboard ---------------- */
  function Dashboard({
    balance,
    setTab,
    perms
  }) {
    const active = perms.filter(p => p.on).length;
    const cards = [{
      label: 'Your data',
      value: '4 categories',
      note: 'Learning activity, reading behavior, media interaction, anonymized telemetry',
      tab: 'permissions'
    }, {
      label: 'Active permissions',
      value: active + ' of ' + perms.length,
      note: 'Granular controls — consequences explained before changes',
      tab: 'permissions'
    }, {
      label: 'Data earnings',
      value: '$' + balance.toFixed(2),
      note: '85% contributor royalty pool (configured model)',
      tab: 'earnings'
    }, {
      label: 'Research donations',
      value: '31 contributions',
      note: 'Educational, non-commercial by policy',
      tab: 'earnings'
    }];
    return h('div', null, h('div', {
      className: 'grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'
    }, cards.map(c => h('button', {
      key: c.label,
      onClick: () => setTab(c.tab),
      className: 'text-left bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:border-indigo transition'
    }, h('p', {
      className: 'text-xs font-bold uppercase tracking-wider text-stone-500 mb-2'
    }, c.label), h('p', {
      className: 'font-serif text-2xl font-bold mb-1'
    }, c.value), h('p', {
      className: 'text-xs text-stone-500'
    }, c.note)))), h('div', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
    }, h('h3', {
      className: 'font-serif text-xl font-bold mb-1'
    }, 'Personal data vault'), h('p', {
      className: 'text-sm text-stone-500 mb-5'
    }, 'Encryption status: ', h('span', {
      className: 'font-semibold text-moss'
    }, 'Protected (prototype indicator)'), ' — concept: AES-256-GCM with encryption before upload where the architecture permits. This UI claim depends on real implementation and is not a production guarantee.'), h('div', {
      className: 'grid sm:grid-cols-3 gap-4 text-sm'
    }, ['Records', 'Permissions', 'Usage history'].map(s => h('div', {
      key: s,
      className: 'rounded-xl bg-parchment/70 p-4'
    }, h('p', {
      className: 'font-semibold mb-1'
    }, s), h('p', {
      className: 'text-stone-500'
    }, 'Inspect and manage your ' + s.toLowerCase() + '. Withdrawal and deletion controls included.'))))));
  }

  /* ---------------- Marketplace ---------------- */
  function Marketplace() {
    const [openDs, setOpenDs] = useState(null);
    return h('div', null, h('div', {
      className: 'rounded-xl bg-indigo/5 border border-indigo/20 p-4 mb-8 text-sm text-indigo-900'
    }, h('strong', null, 'Prototype marketplace. '), 'Datasets, prices and royalty percentages are a configured economic model — no real buyers or payouts exist yet. Provenance and fairness come first; no crypto aesthetics.'), h('div', {
      className: 'grid md:grid-cols-2 gap-6'
    }, CC.DATASETS.map(ds => h('article', {
      key: ds.id,
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
    }, h('div', {
      className: 'flex items-center gap-2 mb-3 flex-wrap'
    }, h(CC.Tag, null, ds.category), h(CC.Badge, {
      status: ds.status
    })), h('h3', {
      className: 'font-serif text-xl font-bold mb-2'
    }, ds.name), h('p', {
      className: 'text-sm text-stone-600 mb-4'
    }, ds.description), h('dl', {
      className: 'grid grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4'
    }, row('Contributors', ds.contributors.toLocaleString()), row('Records', ds.records), row('Collection period', ds.period), row('Privacy mechanism', ds.privacyMechanism), row('Privacy budget', ds.privacyBudget), row('Re-identification risk', ds.reidentRisk), row('Contributor share', ds.royalty + '%'), row('Buyer price', ds.price)), h('div', {
      className: 'flex gap-3'
    }, h('button', {
      onClick: () => setOpenDs(openDs === ds.id ? null : ds.id),
      className: 'text-indigo font-semibold text-sm hover:underline'
    }, openDs === ds.id ? 'Hide provenance' : 'View provenance'), h('span', {
      className: 'text-xs text-stone-400 self-center'
    }, ds.queries + ' queries this month')), openDs === ds.id && h('div', {
      className: 'mt-4 border-t border-stone-200 pt-4'
    }, h('h4', {
      className: 'text-xs font-bold uppercase tracking-wider text-stone-500 mb-3'
    }, 'Dataset provenance'), h('ol', {
      className: 'space-y-2 text-sm text-stone-600'
    }, h('li', null, h('strong', null, 'Origin: '), 'Opt-in CultureCommons users, ' + ds.contributors.toLocaleString() + ' contributors.'), h('li', null, h('strong', null, 'Collection method: '), 'Consent-gated telemetry and survey interactions.'), h('li', null, h('strong', null, 'Transformation: '), 'Raw events cleaned, anonymized, then aggregated.'), h('li', null, h('strong', null, 'Privacy: '), ds.privacyMechanism + ' — ' + ds.privacyBudget + '.'), h('li', null, h('strong', null, 'Licensing: '), 'Research use; redistribution prohibited; no re-identification attempts.'), h('li', null, h('strong', null, 'Revenue distribution: '), ds.royalty + '% contributor pool / ' + (100 - ds.royalty) + '% platform allocation (configured).')))))));
    function row(k, v) {
      return [h('dt', {
        key: k + '-k',
        className: 'text-stone-500'
      }, k), h('dd', {
        key: k + '-v',
        className: 'font-medium'
      }, v)];
    }
  }

  /* ---------------- Earnings ---------------- */
  function Earnings({
    balance
  }) {
    return h('div', {
      className: 'max-w-3xl mx-auto'
    }, h('div', {
      className: 'bg-gradient-to-br from-indigo to-stone-900 text-paper rounded-2xl p-8 mb-8 text-center'
    }, h('p', {
      className: 'text-indigo-200 text-xs font-bold uppercase tracking-wider mb-2'
    }, 'Your data earnings'), h('p', {
      className: 'font-serif text-5xl font-bold mb-2'
    }, '$' + balance.toFixed(2)), h('p', {
      className: 'text-sm text-indigo-200'
    }, 'Royalty split: 85% contributor pool · 15% platform allocation (configured percentages, simulated balances)')), h('div', {
      className: 'bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden'
    }, h('table', {
      className: 'w-full text-sm'
    }, h('thead', null, h('tr', {
      className: 'bg-parchment/70 text-left text-xs uppercase tracking-wider text-stone-500'
    }, h('th', {
      className: 'px-4 py-3'
    }, 'Date'), h('th', {
      className: 'px-4 py-3'
    }, 'Dataset'), h('th', {
      className: 'px-4 py-3 text-right'
    }, 'Uses'), h('th', {
      className: 'px-4 py-3 text-right'
    }, 'Change'), h('th', {
      className: 'px-4 py-3 text-right'
    }, 'Status'))), h('tbody', null, CC.EARNINGS_LEDGER.map((r, i) => h('tr', {
      key: i,
      className: 'border-t border-stone-100'
    }, h('td', {
      className: 'px-4 py-3 text-stone-500'
    }, r.date), h('td', {
      className: 'px-4 py-3 font-medium'
    }, r.dataset), h('td', {
      className: 'px-4 py-3 text-right'
    }, r.uses), h('td', {
      className: 'px-4 py-3 text-right font-semibold ' + (r.change > 0 ? 'text-moss' : 'text-stone-400')
    }, r.change > 0 ? '+$' + r.change.toFixed(2) : '—'), h('td', {
      className: 'px-4 py-3 text-right'
    }, h('span', {
      className: 'text-xs font-bold uppercase tracking-wider ' + (r.status === 'Available' ? 'text-moss' : r.status === 'Paid' ? 'text-sky-700' : 'text-stone-400')
    }, r.status))))))), h('p', {
      className: 'text-xs text-stone-400 mt-4 text-center'
    }, 'Ledger rows are simulated to demonstrate the intended transparency model.'));
  }

  /* ---------------- Permissions ---------------- */
  function Permissions({
    perms,
    togglePerm
  }) {
    return h('div', {
      className: 'max-w-2xl mx-auto'
    }, h('div', {
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
    }, h('h3', {
      className: 'font-serif text-xl font-bold mb-1'
    }, 'Data permission center'), h('p', {
      className: 'text-sm text-stone-500 mb-6'
    }, 'Granular controls. Each switch explains its purpose before you change it; choices are saved to your workspace.'), h('ul', {
      className: 'divide-y divide-stone-200'
    }, perms.map(p => h('li', {
      key: p.id,
      className: 'py-4 flex items-center justify-between gap-6'
    }, h('div', null, h('p', {
      className: 'font-semibold'
    }, p.label), h('p', {
      className: 'text-sm text-stone-500'
    }, p.desc)), h('button', {
      role: 'switch',
      'aria-checked': p.on,
      onClick: () => togglePerm(p.id),
      className: 'relative h-7 w-12 rounded-full transition shrink-0 ' + (p.on ? 'bg-moss' : 'bg-stone-300')
    }, h('span', {
      className: 'absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ' + (p.on ? 'left-[1.4rem]' : 'left-0.5')
    })))))), h('div', {
      className: 'mt-6 rounded-xl bg-parchment/70 p-5 text-sm text-stone-600'
    }, h('strong', null, 'Three standing choices: '), 'keep data Private (nothing leaves your account), Donate to educational research (non-commercial by policy), or Monetize eligible telemetry (joins the 85% royalty pool). You can change these anytime here.'));
  }

  /* ---------------- Trust center ---------------- */
  function TrustCenter() {
    const rows = [{
      name: 'zk-SNARK proof of contribution',
      status: 'Planned',
      note: 'Not implemented. Will ship only with published verification — a proof token would let you verify a claim without exposing underlying private information.'
    }, {
      name: 'Differential privacy on datasets',
      status: 'Planned',
      note: 'Budget values shown in the marketplace (ε targets) are configured goals, not measured guarantees.'
    }, {
      name: 'Re-identification risk metrics',
      status: 'Planned',
      note: 'Indicators are estimates in this prototype, not audited measurements.'
    }, {
      name: 'Client-side encryption (AES-256-GCM)',
      status: 'Planned',
      note: 'The vault UI shows the concept; no real encryption is applied to prototype data.'
    }, {
      name: 'AI methodology',
      status: 'Documented',
      note: 'AI is an enabling layer: synthesizer output is always labeled, paired with sources, and carries an uncertainty signal.'
    }, {
      name: 'Source methodology',
      status: 'Documented',
      note: 'Evidence statuses distinguish primary, institutional, academic, community and AI-synthesized material.'
    }];
    return h('div', {
      className: 'max-w-3xl mx-auto'
    }, h('div', {
      className: 'bg-ink text-paper rounded-2xl p-8'
    }, h('h3', {
      className: 'font-serif text-2xl font-bold mb-2'
    }, 'Trust & Transparency Center'), h('p', {
      className: 'text-sm text-stone-400 mb-6'
    }, 'This platform makes unusually strong trust claims — so every claim carries a status. Decorative numbers are never presented as cryptographic guarantees.'), h('ul', {
      className: 'space-y-4'
    }, rows.map(r => h('li', {
      key: r.name,
      className: 'border-b border-stone-700 pb-4'
    }, h('div', {
      className: 'flex items-center gap-3 flex-wrap mb-1'
    }, h('span', {
      className: 'font-semibold'
    }, r.name), h('span', {
      className: 'text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ' + (r.status === 'Documented' ? 'bg-emerald-900 text-emerald-200' : 'bg-amber-900/60 text-amber-200')
    }, r.status)), h('p', {
      className: 'text-sm text-stone-400'
    }, r.note))))));
  }
})();
/* ===== 06-explore-commons.jsx ===== */
/* ================================================================
   Explore (search/timeline/map) + Community Commons — step 6
   ================================================================ */
(function () {
  const {
    useState,
    useMemo
  } = React;
  const h = React.createElement;

  /* --------------------------- EXPLORE --------------------------- */
  CC.ExplorePage = function ExplorePage({
    go
  }) {
    const [q, setQ] = useState('');
    const [region, setRegion] = useState('All');
    const regions = ['All'].concat(Array.from(new Set(CC.DOSSIERS.map(d => d.region))));
    const results = useMemo(() => CC.DOSSIERS.filter(d => (region === 'All' || d.region === region) && (d.title + ' ' + d.overview + ' ' + d.category + ' ' + d.materials).toLowerCase().includes(q.toLowerCase())), [q, region]);
    return h('div', {
      className: 'max-w-5xl mx-auto px-6 py-12'
    }, h(CC.Section, {
      eyebrow: 'Explore',
      title: 'Discover the commons',
      center: true
    }, 'Search across dossiers, browse the timeline, and explore by region. Discovery feels like an archive — calm, sourced, reviewable.'), h('div', {
      className: 'flex flex-col md:flex-row gap-4 mb-12'
    }, h('input', {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: 'Try "ancient methods of producing blue pigments"…',
      'aria-label': 'Search the collection',
      className: 'flex-1 rounded-full border border-stone-300 px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-ochre'
    }), h('select', {
      value: region,
      onChange: e => setRegion(e.target.value),
      'aria-label': 'Filter by region',
      className: 'rounded-full border border-stone-300 px-5 py-2.5 bg-white'
    }, regions.map(r => h('option', {
      key: r
    }, r)))), h('h3', {
      className: 'font-serif text-xl font-bold mb-6'
    }, 'Timeline explorer'), h('div', {
      className: 'flex gap-2 flex-wrap mb-6'
    }, ['All'].concat(Array.from(new Set(CC.TIMELINE.map(t => t.region)))).map(r => h('button', {
      key: r,
      onClick: () => setRegion(r === 'All' ? 'All' : r),
      className: 'px-3 py-1.5 rounded-full text-xs font-bold transition ' + (region === r ? 'bg-ink text-paper' : 'bg-parchment text-stone-600')
    }, r))), h('ol', {
      className: 'relative border-l-2 border-stone-300 ml-3 mb-14 space-y-8'
    }, CC.TIMELINE.filter(t => region === 'All' || t.region === region).map((t, i) => h('li', {
      key: i,
      className: 'ml-6'
    }, h('span', {
      className: 'absolute -left-2 mt-1 h-4 w-4 rounded-full bg-ochre border-2 border-paper',
      'aria-hidden': 'true'
    }), h('p', {
      className: 'text-xs text-stone-500'
    }, t.year), h('p', {
      className: 'font-medium'
    }, t.label), h('button', {
      onClick: () => go('dossier', {
        id: t.dossier
      }),
      className: 'text-ochre text-sm font-semibold hover:underline'
    }, 'Open connected dossier →')))), h('h3', {
      className: 'font-serif text-xl font-bold mb-2'
    }, 'Cultural map ', h(CC.Tag, {
      color: 'bg-amber-100 text-amber-800'
    }, 'Planned: interactive map')), h('p', {
      className: 'text-sm text-stone-500 mb-6'
    }, 'Regional cards stand in for the interactive map in this prototype; clicking a card opens connected research.'), h('div', {
      className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
    }, results.map(d => h(CC.DossierCard, {
      key: d.id,
      d,
      go
    }))), results.length === 0 && h('p', {
      className: 'text-stone-500'
    }, 'No dossiers match your search in the sample corpus.'));
  };

  /* --------------------------- COMMONS --------------------------- */
  CC.CommonsPage = function CommonsPage({
    go
  }) {
    const [contributions, setContributions] = useState(() => CC.store.get('contributions', [{
      id: 'c1',
      title: 'Indigo Dye Traditions of the Sahel',
      author: 'A. Diallo',
      topic: 'Material culture',
      sources: 6,
      status: 'Community reviewed',
      reviews: {
        accuracy: 4,
        sources: 4,
        clarity: 5,
        completeness: 3,
        context: 4
      },
      date: '2026-08-22'
    }, {
      id: 'c2',
      title: 'Early Print Workshops of Fez',
      author: 'S. El Amrani',
      topic: 'Technique',
      sources: 4,
      status: 'Under review',
      reviews: null,
      date: '2026-09-08'
    }, {
      id: 'c3',
      title: 'Salt Roads and Manuscript Trade',
      author: 'K. Traoré',
      topic: 'Trade history',
      sources: 9,
      status: 'Published',
      reviews: {
        accuracy: 5,
        sources: 4,
        clarity: 4,
        completeness: 4,
        context: 5
      },
      date: '2026-07-30'
    }]));
    const [draft, setDraft] = useState(null);
    const [reviewFor, setReviewFor] = useState(null);
    function publish(e) {
      e.preventDefault();
      const fd = new FormData(e.target);
      const item = {
        id: 'c' + Date.now(),
        title: fd.get('title'),
        author: 'You',
        topic: fd.get('topic'),
        sources: Number(fd.get('sources') || 0),
        status: 'Submitted',
        reviews: null,
        date: new Date().toISOString().slice(0, 10)
      };
      const next = contributions.concat([item]);
      setContributions(next);
      CC.store.set('contributions', next);
      setDraft(null);
    }
    function submitReview(e) {
      e.preventDefault();
      const fd = new FormData(e.target);
      const next = contributions.map(c => c.id === reviewFor ? Object.assign({}, c, {
        status: 'Community reviewed',
        reviews: {
          accuracy: +fd.get('accuracy'),
          sources: +fd.get('sources_q'),
          clarity: +fd.get('clarity'),
          completeness: +fd.get('completeness'),
          context: +fd.get('context')
        }
      }) : c);
      setContributions(next);
      CC.store.set('contributions', next);
      setReviewFor(null);
    }
    return h('div', {
      className: 'max-w-4xl mx-auto px-6 py-12'
    }, h(CC.Section, {
      eyebrow: 'Community Commons',
      title: 'The public knowledge layer',
      center: true
    }, 'Members publish dossiers, collections and curated sources. Quality is driven by evidence and review — never by likes.'), h('div', {
      className: 'flex justify-center mb-8'
    }, h('button', {
      onClick: () => setDraft(true),
      className: 'bg-ochre hover:bg-ochrelite text-white font-semibold px-6 py-2.5 rounded-full transition'
    }, 'Contribute a dossier')), draft && h('form', {
      onSubmit: publish,
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm mb-10'
    }, h('h3', {
      className: 'font-serif text-xl font-bold mb-4'
    }, 'New contribution'), h('div', {
      className: 'grid sm:grid-cols-3 gap-4 mb-4'
    }, h('input', {
      name: 'title',
      required: true,
      placeholder: 'Dossier title',
      className: 'rounded-full border border-stone-300 px-4 py-2 text-sm sm:col-span-2'
    }), h('input', {
      name: 'topic',
      required: true,
      placeholder: 'Topic',
      className: 'rounded-full border border-stone-300 px-4 py-2 text-sm'
    })), h('div', {
      className: 'flex items-center gap-4 mb-4'
    }, h('label', {
      className: 'text-sm text-stone-600'
    }, 'Sources cited: ', h('input', {
      name: 'sources',
      type: 'number',
      min: '1',
      defaultValue: '3',
      className: 'w-16 rounded-lg border border-stone-300 px-2 py-1 ml-2'
    }))), h('p', {
      className: 'text-xs text-stone-400 mb-4'
    }, 'Flow: Create → Add sources → Review → Publish → Community feedback. New contributions start as "Submitted".'), h('div', {
      className: 'flex gap-3'
    }, h('button', {
      type: 'submit',
      className: 'bg-ochre text-white font-semibold px-5 py-2 rounded-full text-sm'
    }, 'Submit for review'), h('button', {
      type: 'button',
      onClick: () => setDraft(null),
      className: 'text-stone-500 text-sm'
    }, 'Cancel'))), h('ul', {
      className: 'space-y-4'
    }, contributions.map(c => h('li', {
      key: c.id,
      className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
    }, h('div', {
      className: 'flex items-start justify-between gap-4 flex-wrap'
    }, h('div', null, h('div', {
      className: 'flex items-center gap-2 mb-2 flex-wrap'
    }, h(CC.Tag, null, c.topic), h(CC.Badge, {
      status: c.status
    })), h('h3', {
      className: 'font-serif text-lg font-bold'
    }, c.title), h('p', {
      className: 'text-sm text-stone-500'
    }, 'By ' + c.author + ' · ' + c.date + ' · ' + c.sources + ' sources')), c.author !== 'You' && h('button', {
      onClick: () => setReviewFor(c.id),
      className: 'text-ochre font-semibold text-sm hover:underline'
    }, 'Review')), c.reviews && h('div', {
      className: 'mt-4 flex gap-2 flex-wrap'
    }, [['Accuracy', c.reviews.accuracy], ['Sources', c.reviews.sources], ['Clarity', c.reviews.clarity], ['Completeness', c.reviews.completeness], ['Context', c.reviews.context]].map(([k, v]) => h('span', {
      key: k,
      className: 'text-xs bg-parchment rounded-full px-3 py-1.5 text-stone-600'
    }, k + ' ', h('strong', null, v + '/5')))), reviewFor === c.id && h('form', {
      onSubmit: submitReview,
      className: 'mt-4 border-t border-stone-200 pt-4'
    }, h('p', {
      className: 'text-xs font-bold uppercase tracking-wider text-stone-500 mb-3'
    }, 'Peer review (1–5 each)'), h('div', {
      className: 'grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4'
    }, [['accuracy', 'Accuracy'], ['sources_q', 'Sources'], ['clarity', 'Clarity'], ['completeness', 'Complete'], ['context', 'Context']].map(([name, label]) => h('label', {
      key: name,
      className: 'text-xs text-stone-600'
    }, label, h('input', {
      name,
      type: 'number',
      min: '1',
      max: '5',
      defaultValue: '4',
      required: true,
      className: 'mt-1 w-full rounded-lg border border-stone-300 px-2 py-1'
    })))), h('div', {
      className: 'flex gap-3'
    }, h('button', {
      type: 'submit',
      className: 'bg-ochre text-white font-semibold px-5 py-2 rounded-full text-sm'
    }, 'Submit review'), h('button', {
      type: 'button',
      onClick: () => setReviewFor(null),
      className: 'text-stone-500 text-sm'
    }, 'Cancel')))))), h('div', {
      className: 'mt-10 rounded-xl bg-parchment/70 p-5 text-sm text-stone-600'
    }, h('strong', null, 'Reputation: '), 'contributors build standing through high-quality, source-backed work — Contributor → Trusted → Verified → Institutional. No meaningless gamification, no popularity contests.'));
  };
})();
/* ===== 08-ux-spec.jsx ===== */
/* ================================================================
   Spec sections 65-100 additions: onboarding, global search (Ctrl+K),
   Compare mode, empty states, loading labels, Research Companion.
   ================================================================ */
(function () {
  const {
    useState,
    useEffect,
    useMemo
  } = React;
  const h = React.createElement;

  /* ---------------- Research Companion (secondary brand layer) ---------------- */
  CC.Companion = function Companion({
    message
  }) {
    /* Abstract archival-geometric mark: layered diamond + circle, no robot clichés */
    return h('div', {
      className: 'flex items-center gap-4',
      role: 'img',
      'aria-label': 'Research Companion'
    }, h('svg', {
      width: '44',
      height: '44',
      viewBox: '0 0 44 44',
      fill: 'none',
      'aria-hidden': 'true'
    }, h('rect', {
      x: '8',
      y: '8',
      width: '28',
      height: '28',
      rx: '3',
      transform: 'rotate(45 22 22)',
      fill: '#b45309',
      opacity: '0.15'
    }), h('rect', {
      x: '12',
      y: '12',
      width: '20',
      height: '20',
      rx: '2',
      transform: 'rotate(45 22 22)',
      stroke: '#b45309',
      strokeWidth: '1.5'
    }), h('circle', {
      cx: '22',
      cy: '22',
      r: '4',
      fill: '#1a1712'
    }), h('path', {
      d: 'M22 4v6M22 34v6M4 22h6M34 22h6',
      stroke: '#b45309',
      strokeWidth: '1.5',
      strokeLinecap: 'round'
    })), message ? h('p', {
      className: 'text-sm text-stone-500 italic'
    }, message) : null);
  };

  /* ---------------- Onboarding (section 79-80) ---------------- */
  CC.Onboarding = function Onboarding({
    onDone
  }) {
    const [step, setStep] = useState(0);
    const purposes = ['Research', 'Study', 'Teaching', 'Explore culture', 'Contribute knowledge', 'Manage my data'];
    const interests = ['Art', 'History', 'Archaeology', 'Literature', 'Materials', 'Cultural traditions', 'Museums', 'Ancient civilizations', 'Languages'];
    const [purpose, setPurpose] = useState(null);
    const [picked, setPicked] = useState([]);
    function finish() {
      CC.store.set('onboarding', {
        purpose,
        interests: picked
      });
      onDone();
    }
    return h('div', {
      className: 'fixed inset-0 z-50 bg-ink/60 flex items-center justify-center p-4',
      role: 'dialog',
      'aria-modal': 'true'
    }, h('div', {
      className: 'bg-paper rounded-3xl max-w-lg w-full p-8 shadow-xl'
    }, h(CC.Companion, {
      message: step === 0 ? 'Welcome. One quick question to make this useful — or skip and explore right away.' : 'Good. Anything in particular you care about?'
    }), step === 0 ? h('div', {
      className: 'mt-6'
    }, h('h2', {
      className: 'font-serif text-2xl font-bold mb-4'
    }, 'What brings you here?'), h('div', {
      className: 'grid grid-cols-2 gap-2 mb-6'
    }, purposes.map(p => h('button', {
      key: p,
      onClick: () => setPurpose(p),
      className: 'rounded-xl border px-4 py-3 text-sm font-medium transition ' + (purpose === p ? 'border-ochre bg-ochre/10 text-ochre' : 'border-stone-200 hover:border-ochre')
    }, p))), h('div', {
      className: 'flex justify-between items-center'
    }, h('button', {
      onClick: finish,
      className: 'text-sm text-stone-500 hover:text-ochre'
    }, 'Skip — just let me explore'), h('button', {
      onClick: () => setStep(1),
      disabled: !purpose,
      className: 'bg-ochre text-white font-semibold px-6 py-2.5 rounded-full text-sm disabled:opacity-40'
    }, 'Continue'))) : h('div', {
      className: 'mt-6'
    }, h('h2', {
      className: 'font-serif text-2xl font-bold mb-4'
    }, 'What are you interested in?'), h('div', {
      className: 'flex flex-wrap gap-2 mb-6'
    }, interests.map(i => h('button', {
      key: i,
      onClick: () => setPicked(s => s.includes(i) ? s.filter(x => x !== i) : s.concat([i])),
      className: 'rounded-full px-4 py-2 text-sm font-medium transition ' + (picked.includes(i) ? 'bg-ochre text-white' : 'bg-parchment text-stone-600 hover:bg-stone-200')
    }, i))), h('div', {
      className: 'flex justify-between items-center'
    }, h('button', {
      onClick: finish,
      className: 'text-sm text-stone-500 hover:text-ochre'
    }, 'Skip'), h('button', {
      onClick: finish,
      className: 'bg-ochre text-white font-semibold px-6 py-2.5 rounded-full text-sm'
    }, 'Start researching')))));
  };

  /* ---------------- Global search overlay (Ctrl/Cmd+K, sections 82-84) ---------------- */
  CC.GlobalSearch = function GlobalSearch({
    open,
    onClose,
    go
  }) {
    const [q, setQ] = useState('');
    useEffect(() => {
      function onKey(e) {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          onClose === null ? null : open ? onClose() : null;
        }
        if (e.key === 'Escape' && open) onClose();
      }
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }, [open]);
    const results = useMemo(() => {
      if (!q.trim()) return {
        dossiers: [],
        datasets: [],
        pages: []
      };
      const needle = q.toLowerCase();
      return {
        dossiers: CC.DOSSIERS.filter(d => (d.title + d.overview + d.category + d.region).toLowerCase().includes(needle)).slice(0, 4),
        datasets: CC.DATASETS.filter(d => (d.name + d.category).toLowerCase().includes(needle)).slice(0, 2),
        pages: CC.NAV.filter(n => n.label.toLowerCase().includes(needle))
      };
    }, [q]);
    if (!open) return null;
    return h('div', {
      className: 'fixed inset-0 z-50 bg-ink/60 flex items-start justify-center pt-24 p-4',
      onClick: onClose,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'Global search'
    }, h('div', {
      className: 'bg-paper rounded-2xl max-w-xl w-full shadow-xl overflow-hidden',
      onClick: e => e.stopPropagation()
    }, h('div', {
      className: 'flex items-center gap-3 px-5 py-4 border-b border-stone-200'
    }, h('span', {
      'aria-hidden': 'true',
      className: 'text-stone-400'
    }, '⌕'), h('input', {
      autoFocus: true,
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: 'Search dossiers, datasets, pages… (Esc to close)',
      className: 'flex-1 bg-transparent focus:outline-none text-lg',
      'aria-label': 'Search everything'
    }), h('kbd', {
      className: 'text-xs bg-parchment rounded px-2 py-1 text-stone-500'
    }, 'Esc')), h('div', {
      className: 'max-h-80 overflow-y-auto p-3'
    }, !q.trim() && h('p', {
      className: 'text-sm text-stone-400 p-3'
    }, 'Try "Maya astronomy", "Renaissance pigments", "permissions"…'), results.dossiers.map(d => resultRow('Dossier', d.title, d.category, () => {
      go('dossier', {
        id: d.id
      });
      onClose();
    })), results.datasets.map(d => resultRow('Dataset', d.name, d.category + ' · DataTrust', () => {
      go('datatrust');
      onClose();
    })), results.pages.map(p => resultRow('Page', p.label, 'Navigate', () => {
      go(p.id);
      onClose();
    })), q.trim() && results.dossiers.length + results.datasets.length + results.pages.length === 0 && h('p', {
      className: 'text-sm text-stone-400 p-3'
    }, 'No matches in the sample corpus.'))));
    function resultRow(type, title, meta, onClick) {
      return h('button', {
        key: type + title,
        onClick,
        className: 'w-full text-left rounded-xl px-4 py-3 hover:bg-parchment flex items-center gap-3 transition'
      }, h(CC.Tag, null, type), h('span', {
        className: 'flex-1'
      }, h('span', {
        className: 'block font-medium'
      }, title), h('span', {
        className: 'block text-xs text-stone-500'
      }, meta)));
    }
  };

  /* ---------------- Compare mode (section 21) ---------------- */
  CC.ComparePage = function ComparePage({
    go
  }) {
    const [a, setA] = useState('d2');
    const [b, setB] = useState('d4');
    const da = CC.DOSSIERS.find(d => d.id === a);
    const db = CC.DOSSIERS.find(d => d.id === b);
    const fields = [['Period / chronology', d => d.period], ['Geography', d => d.region], ['Materials', d => d.materials], ['Technique / production', d => d.overview.split('.')[1] || d.overview], ['Cultural purpose', d => d.cultural]];
    return h('div', {
      className: 'max-w-5xl mx-auto px-6 py-12'
    }, h(CC.Section, {
      eyebrow: 'Compare mode',
      title: 'Compare two subjects',
      center: true
    }, 'Select two dossiers to compare chronology, geography, materials, technique and cultural purpose — readable and academic.'), h('div', {
      className: 'flex gap-4 justify-center mb-10 flex-wrap'
    }, [da, db].map((d, i) => h('select', {
      key: i,
      value: i === 0 ? a : b,
      onChange: e => i === 0 ? setA(e.target.value) : setB(e.target.value),
      className: 'rounded-full border border-stone-300 px-5 py-2.5 bg-white',
      'aria-label': 'Subject ' + (i + 1)
    }, CC.DOSSIERS.map(x => h('option', {
      key: x.id,
      value: x.id
    }, x.title))))), h('div', {
      className: 'space-y-6'
    }, fields.map(([label, get]) => h('div', {
      key: label,
      className: 'grid md:grid-cols-[10rem_1fr_1fr] gap-4 items-start'
    }, h('p', {
      className: 'text-xs font-bold uppercase tracking-wider text-stone-500 pt-4'
    }, label), [da, db].map((d, i) => h('div', {
      key: d.id + i,
      className: 'bg-white rounded-2xl border border-stone-200 p-5 shadow-sm'
    }, i === 0 && h('p', {
      className: 'md:hidden text-xs font-bold text-ochre mb-2'
    }, d.title), h('p', {
      className: 'text-sm text-stone-600 leading-relaxed'
    }, get(d))))))), h('div', {
      className: 'text-center mt-10'
    }, h('button', {
      onClick: () => go('dossier', {
        id: a
      }),
      className: 'text-ochre font-semibold text-sm hover:underline mr-6'
    }, 'Open ' + da.title + ' →'), h('button', {
      onClick: () => go('dossier', {
        id: b
      }),
      className: 'text-ochre font-semibold text-sm hover:underline'
    }, 'Open ' + db.title + ' →')));
  };

  /* ---------------- Honest loading labels (section 78) ---------------- */
  CC.LoadingNote = function LoadingNote({
    text
  }) {
    return h('p', {
      className: 'text-sm text-stone-500 mt-4',
      role: 'status'
    }, text || 'Structuring the research…');
  };

  /* ---------------- Helpful empty state (section 77) ---------------- */
  CC.EmptyState = function EmptyState({
    title,
    body,
    cta,
    onAction
  }) {
    return h('div', {
      className: 'text-center bg-white rounded-2xl border border-dashed border-stone-300 p-12'
    }, h('div', {
      className: 'flex justify-center mb-4'
    }, h(CC.Companion, null)), h('p', {
      className: 'font-serif text-xl font-bold mb-2'
    }, title), h('p', {
      className: 'text-stone-600 text-sm mb-5 max-w-md mx-auto'
    }, body), cta && h('button', {
      onClick: onAction,
      className: 'bg-ochre text-white font-semibold px-6 py-2.5 rounded-full text-sm'
    }, cta));
  };
})();
/* ===== 07-main.jsx ===== */
/* ================================================================
   Main App component + Research workspace dashboard — step 6
   ================================================================ */
(function () {
  const {
    useState,
    useEffect
  } = React;
  const h = React.createElement;

  /* Research workspace dashboard: projects, saved dossiers, notes */
  CC.WorkspacePage = function WorkspacePage({
    workspace,
    go
  }) {
    const savedIds = Object.keys(workspace).filter(id => workspace[id].saved);
    const saved = savedIds.map(id => CC.DOSSIERS.find(d => d.id === id)).filter(Boolean);
    const totalNotes = Object.values(workspace).reduce((a, w) => a + (w.notes ? w.notes.length : 0), 0);
    const totalHl = Object.values(workspace).reduce((a, w) => a + (w.highlights ? w.highlights.length : 0), 0);
    return h('div', {
      className: 'max-w-4xl mx-auto px-6 py-12'
    }, h(CC.Section, {
      eyebrow: 'Research workspace',
      title: 'My research',
      center: true
    }, 'Your persistent research environment: saved dossiers, highlights, notes and citations — kept in this browser between visits.'), h('div', {
      className: 'grid sm:grid-cols-3 gap-4 mb-10'
    }, [['Saved dossiers', saved.length], ['Highlights', totalHl], ['Notes', totalNotes]].map(([k, v]) => h('div', {
      key: k,
      className: 'bg-white rounded-2xl border border-stone-200 p-6 text-center shadow-sm'
    }, h('p', {
      className: 'font-serif text-3xl font-bold'
    }, v), h('p', {
      className: 'text-xs uppercase tracking-wider text-stone-500 font-bold mt-1'
    }, k)))), saved.length === 0 ? h(CC.EmptyState, {
      title: 'No research projects yet',
      body: 'Start a project to collect dossiers, sources, notes, highlights, and citations in one workspace.',
      cta: 'Explore research',
      onAction: () => go('research')
    }) : h('ul', {
      className: 'space-y-4'
    }, saved.map(d => {
      const w = workspace[d.id];
      return h('li', {
        key: d.id,
        className: 'bg-white rounded-2xl border border-stone-200 p-6 shadow-sm'
      }, h('div', {
        className: 'flex items-start justify-between gap-4 flex-wrap'
      }, h('div', null, h('h3', {
        className: 'font-serif text-lg font-bold'
      }, d.title), h('p', {
        className: 'text-sm text-stone-500'
      }, d.category + ' · ' + w.highlights.length + ' highlights · ' + w.notes.length + ' notes')), h('div', {
        className: 'flex gap-3'
      }, h('button', {
        onClick: () => go('dossier', {
          id: d.id
        }),
        className: 'text-ochre font-semibold text-sm hover:underline'
      }, 'Continue research'), h('button', {
        onClick: () => go('audio', {
          id: d.id
        }),
        className: 'text-ink font-semibold text-sm hover:underline'
      }, 'Listen'))));
    })));
  };

  /* ------------------------------- APP ------------------------------- */
  function App() {
    const [page, setPage] = useState('home');
    const [params, setParams] = useState({});
    const [workspace, setWorkspace] = useState(() => CC.store.get('workspace', {}));
    const [showOnboarding, setShowOnboarding] = useState(() => !CC.store.get('onboarding', null));
    const [searchOpen, setSearchOpen] = useState(false);
    useEffect(() => {
      function onKey(e) {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          setSearchOpen(s => !s);
        }
      }
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }, []);
    useEffect(() => {
      CC.store.set('workspace', workspace);
    }, [workspace]);
    useEffect(() => {
      window.scrollTo({
        top: 0
      });
    }, [page, params]);
    function go(p, opts) {
      setParams(opts || {});
      setPage(p);
    }
    const packCount = Object.values(workspace).filter(w => w.saved).length;
    let content;
    switch (page) {
      case 'home':
        content = h(CC.HomePage, {
          go
        });
        break;
      case 'explore':
        content = h(CC.ExplorePage, {
          go
        });
        break;
      case 'research':
        content = params.synthesize ? h(CC.SynthesizerPage, {
          go,
          preset: typeof params.synthesize === 'string' ? params.synthesize : ''
        }) : h(CC.ResearchIndex, {
          go
        });
        break;
      case 'synthesizer':
        content = h(CC.SynthesizerPage, {
          go,
          preset: ''
        });
        break;
      case 'dossier':
        content = h(CC.DossierPage, {
          id: params.id,
          go,
          workspace,
          setWorkspace
        });
        break;
      case 'workspace':
        content = h(CC.WorkspacePage, {
          workspace,
          go
        });
        break;
      case 'commons':
        content = h(CC.CommonsPage, {
          go
        });
        break;
      case 'compare':
        content = h(CC.ComparePage, {
          go
        });
        break;
      case 'audio':
        content = h(CC.AudioPage, {
          go,
          presetId: params.id
        });
        break;
      case 'datatrust':
        content = h(CC.DataTrustPage, {
          go
        });
        break;
      default:
        content = h(CC.HomePage, {
          go
        });
    }
    return h('div', {
      className: 'min-h-screen flex flex-col font-sans'
    }, h(CC.Header, {
      page,
      go,
      packCount
    }), showOnboarding && h(CC.Onboarding, {
      onDone: () => setShowOnboarding(false)
    }), h(CC.GlobalSearch, {
      open: searchOpen,
      onClose: () => setSearchOpen(false),
      go
    }), h('main', {
      className: 'flex-1'
    }, content, /* quick link to workspace from nav-less pages */
    page !== 'workspace' && h('div', {
      className: 'max-w-6xl mx-auto px-6 pb-10 text-center'
    }, h('button', {
      onClick: () => go('workspace'),
      className: 'text-sm text-stone-400 hover:text-ochre'
    }, 'Open my research workspace (' + packCount + ' saved)'))), h(CC.Footer, null));
  }

  /* Research index: list of dossiers + synthesizer entry */
  CC.ResearchIndex = function ResearchIndex({
    go
  }) {
    return h('div', {
      className: 'max-w-6xl mx-auto px-6 py-12'
    }, h(CC.Section, {
      eyebrow: 'Research',
      title: 'Dossiers & the synthesizer',
      center: true
    }, 'Browse curated dossiers, or ask the AI Research Synthesizer for a structured entry on any cultural or historical topic.'), h('div', {
      className: 'text-center mb-10'
    }, h('button', {
      onClick: () => go('research', {
        synthesize: true
      }),
      className: 'bg-ink text-paper font-semibold px-8 py-3 rounded-full hover:bg-stone-700 transition'
    }, 'Open the Research Synthesizer')), h('div', {
      className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
    }, CC.DOSSIERS.map(d => h(CC.DossierCard, {
      key: d.id,
      d,
      go
    }))));
  };
  ReactDOM.createRoot(document.getElementById('root')).render(h(App));
})();