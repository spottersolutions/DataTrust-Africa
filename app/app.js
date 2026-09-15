
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
   App shell: nav, badges, components — new design system (CSS)
   ================================================================ */
(function () {
  const {
    useState
  } = React;
  const h = React.createElement;
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
  CC.STATUS_TAG = {
    'Source-backed': 'moss',
    'Primary source available': 'moss',
    'Institutionally verified': 'green',
    'Community reviewed': 'sky',
    'AI synthesized': 'indigo',
    'Requires further verification': 'amber'
  };
  CC.Tag = function Tag({
    children,
    color
  }) {
    return h('span', {
      className: 'tag' + (color ? ' ' + color : '')
    }, children);
  };
  CC.Status = function Status({
    s
  }) {
    return h(CC.Tag, {
      color: CC.STATUS_TAG[s] || null
    }, s);
  };
  CC.Header = function Header({
    page,
    go,
    onSearch
  }) {
    const [open, setOpen] = useState(false);
    return h('header', {
      className: 'nav'
    }, h('div', {
      className: 'brand',
      onClick: () => go('home'),
      role: 'button',
      tabIndex: 0,
      onKeyDown: e => e.key === 'Enter' && go('home')
    }, 'DataTrust ', h('b', null, '& CultureCommons')), h('nav', {
      className: 'links' + (open ? ' mobile-open' : ''),
      'aria-label': 'Main'
    }, CC.NAV.map(n => h('button', {
      key: n.id,
      className: page === n.id ? 'active' : '',
      onClick: () => {
        go(n.id);
        setOpen(false);
      },
      'aria-current': page === n.id ? 'page' : undefined
    }, n.label))), h('div', {
      className: 'actions'
    }, h('button', {
      className: 'btn small',
      onClick: onSearch,
      'aria-label': 'Search (Ctrl+K)'
    }, '⌕ Search'), h('span', {
      className: 'muted small',
      title: 'Prototype — accounts are simulated'
    }, 'EN ⌄'), h('button', {
      className: 'btn small',
      onClick: () => go('datatrust')
    }, 'Sign in'), h('button', {
      className: 'btn dark small',
      onClick: () => go('research')
    }, 'Create account')), h('button', {
      className: 'mobile-menu',
      onClick: () => setOpen(!open),
      'aria-expanded': open,
      'aria-label': 'Menu'
    }, '☰'));
  };
  CC.Footer = function Footer() {
    return h('footer', {
      className: 'page',
      style: {
        paddingTop: '10px',
        paddingBottom: '40px'
      }
    }, h('hr', {
      className: 'hr'
    }), h('div', {
      className: 'flex between'
    }, h('div', null, h('p', {
      className: 'serif',
      style: {
        fontWeight: 700,
        margin: '0 0 6px'
      }
    }, 'DataTrust & CultureCommons'), h('p', {
      className: 'muted small',
      style: {
        margin: 0,
        maxWidth: '420px'
      }
    }, 'Open research infrastructure for culture, history and the arts — with a privacy-first personal-data ecosystem.')), h('div', {
      className: 'muted small',
      style: {
        maxWidth: '380px'
      }
    }, 'Prototype build. AI answers, earnings and privacy metrics are simulations — never production guarantees.', h('br', null), 'Research deeply. Learn openly. Control your data.')));
  };
  CC.SectionTitle = function SectionTitle({
    children,
    link,
    onLink
  }) {
    return h('h2', {
      className: 'section-title flex between'
    }, h('span', null, children), link && h('button', {
      onClick: onLink,
      className: 'ai',
      style: {
        fontSize: '14px'
      }
    }, link + ' →'));
  };

  /* Citations */
  CC.cite = function (d, style) {
    const year = '2026';
    if (style === 'APA') return 'CultureCommons Research Collective. (' + year + '). ' + d.title + ' [Research dossier]. DataTrust & CultureCommons. https://spottersolutions.github.io/DataTrust-Africa/app/';
    if (style === 'MLA') return 'CultureCommons Research Collective. "' + d.title + '." DataTrust & CultureCommons, ' + year + ', spottersolutions.github.io/DataTrust-Africa/app/.';
    return 'CultureCommons Research Collective. "' + d.title + '." Research dossier. DataTrust & CultureCommons, ' + year + '. https://spottersolutions.github.io/DataTrust-Africa/app/.';
  };
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

  /* Card images per dossier (same set the design uses) */
  CC.IMAGES = {
    d5: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=500&q=80',
    d2: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=500&q=80',
    d1: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80',
    d4: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=500&q=80',
    d3: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=500&q=80'
  };
  CC.REGIONS = [['Africa', 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=500&q=80'], ['Asia', 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=500&q=80'], ['Europe', 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=500&q=80'], ['Middle East', 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=500&q=80'], ['Americas', 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=500&q=80'], ['Oceania', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80']];

  /* Dossier card — new design */
  CC.DossierCard = function DossierCard({
    d,
    go,
    i
  }) {
    const srcCount = d.primarySources.length + d.academicSources.length + d.institutionalSources.length;
    return h('article', {
      className: 'card',
      onClick: () => go('dossier', {
        id: d.id
      }),
      role: 'button',
      tabIndex: 0,
      onKeyDown: e => e.key === 'Enter' && go('dossier', {
        id: d.id
      })
    }, h('img', {
      src: CC.IMAGES[d.id],
      alt: '',
      loading: 'lazy'
    }), h('div', {
      className: 'card-body'
    }, h(CC.Tag, null, d.category), h('h3', null, d.title), h('p', null, d.overview.slice(0, 90) + '…'), h('div', {
      className: 'meta'
    }, h('span', null, '◷ ' + d.readingTime + ' min'), h('span', null, '▧ ' + srcCount + ' sources'), h('span', {
      title: 'Audio available'
    }, '🎧'))));
  };
})();
/* ===== 03-home.jsx ===== */
/* ================================================================
   Home page — matches the approved design mock
   ================================================================ */
(function () {
  const {
    useState
  } = React;
  const h = React.createElement;
  CC.CHIPS = [['🎨', 'Art'], ['🏛', 'History'], ['🏺', 'Archaeology'], ['📖', 'Literature'], ['🌿', 'Materials'], ['🔺', 'Civilizations'], ['🎭', 'Cultures'], ['🌍', 'Maps'], ['◷', 'Timelines']];
  CC.HomePage = function HomePage({
    go
  }) {
    const [q, setQ] = useState('');
    function research() {
      go('research', {
        synthesize: q || true
      });
    }
    return h('div', null, /* hero */
    h('section', {
      className: 'hero'
    }, h('div', {
      className: 'hero-inner'
    }, h('div', {
      className: 'eyebrow'
    }, 'Culture × Knowledge × People × A Fairer Data Future'), h('h1', null, 'Explore the past.', h('br', null), 'Build a ', h('span', {
      className: 'orange'
    }, 'brighter future.')), h('p', null, 'Discover structured cultural research, listen to academic articles, create citation-ready projects, and contribute to an open community — while keeping control of your personal data.'), h('div', {
      className: 'hero-buttons'
    }, h('button', {
      className: 'btn orangebtn',
      onClick: () => go('explore')
    }, 'Start Exploring →'), h('button', {
      className: 'btn',
      onClick: () => go('audio'),
      style: {
        color: '#fff'
      }
    }, '▶  Listen to research')))), /* search */
    h('div', {
      className: 'search-wrap'
    }, h('div', {
      className: 'search'
    }, h('span', {
      'aria-hidden': 'true'
    }, '⌕'), h('input', {
      id: 'q',
      value: q,
      onChange: e => setQ(e.target.value),
      onKeyDown: e => e.key === 'Enter' && research(),
      placeholder: 'Search anything… e.g. Maya astronomy, Renaissance pigments, West African oral traditions',
      'aria-label': 'Search'
    }), h('button', {
      className: 'ai',
      onClick: research
    }, '✦ Try AI Research'), h('button', {
      className: 'arrow',
      onClick: research,
      'aria-label': 'Go'
    }, '→'))), /* content */
    h('main', {
      className: 'page'
    }, h('div', {
      className: 'chips'
    }, CC.CHIPS.map(([icon, label]) => h('button', {
      key: label,
      className: 'chip',
      onClick: () => go('explore', {
        q: label
      })
    }, icon + ' ' + label))), h('div', {
      className: 'grid'
    }, h('section', null, h(CC.SectionTitle, {
      link: 'All research',
      onLink: () => go('research')
    }, 'Featured Research'), h('div', {
      className: 'cards'
    }, CC.DOSSIERS.map((d, i) => h(CC.DossierCard, {
      key: d.id,
      d,
      go,
      i
    }))), h('section', {
      className: 'regions'
    }, h(CC.SectionTitle, {
      link: 'Explore',
      onLink: () => go('explore')
    }, 'Explore by Region'), h('div', {
      className: 'region-grid'
    }, CC.REGIONS.map(([name, img]) => h('button', {
      key: name,
      className: 'region',
      onClick: () => go('explore', {
        region: name
      })
    }, h('img', {
      src: img,
      alt: '',
      loading: 'lazy'
    }), h('span', null, name)))))), h('aside', {
      className: 'side'
    }, h('div', {
      className: 'promo'
    }, h('h3', null, 'Research with AI'), h('p', null, 'Enter any topic and get a structured dossier with sources, visuals, a timeline and audio.'), h('button', {
      className: 'btn small',
      style: {
        background: '#fff',
        color: '#111',
        border: 0
      },
      onClick: () => go('research', {
        synthesize: true
      })
    }, 'Try Research Synthesizer →')), h('div', {
      className: 'promo light'
    }, h('h3', null, 'Your data. Your choice.'), h('p', null, 'Keep it private, support educational research, or monetize it transparently.'), h('button', {
      className: 'btn small',
      onClick: () => go('datatrust')
    }, 'Explore DataTrust →')), h('div', {
      className: 'promo light'
    }, h('h3', null, 'Join a global community'), h('p', null, 'Students, teachers, researchers and institutions sharing knowledge openly.'), h('button', {
      className: 'btn small',
      onClick: () => go('commons')
    }, 'Visit the Commons →'))))));
  };
})();
/* ===== 03-research.jsx ===== */
/* ================================================================
   Research: dossier view + AI synthesizer (new design)
   ================================================================ */
(function () {
  const {
    useState
  } = React;
  const h = React.createElement;
  const HL_COLORS = {
    Important: '#fde68a',
    Evidence: '#bbf7d0',
    Quote: '#bfdbfe',
    Question: '#fbcfe8',
    Counterargument: '#fecaca',
    'Need verification': '#fed7aa'
  };

  /* --------------------------- DOSSIER --------------------------- */
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
    const srcCount = d.primarySources.length + d.academicSources.length + d.institutionalSources.length;
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
    function downloadPack() {
      const pack = '# Research Pack: ' + d.title + '\n\n## Overview\n' + d.overview + '\n\n## Historical context\n' + d.context + '\n\n## Chronology\n' + d.chronology.map(c => '- ' + c[0] + ': ' + c[1]).join('\n') + '\n\n## Key claims & evidence\n' + d.claims.map(c => '- ' + c.text + ' [' + c.status + ', ' + c.evidence + ' sources]').join('\n') + '\n\n## Sources\nPrimary: ' + d.primarySources.join('; ') + '\nAcademic: ' + d.academicSources.join('; ') + '\nInstitutional: ' + d.institutionalSources.join('; ') + '\n\n## Citation (' + citeStyle + ')\n' + CC.cite(d, citeStyle) + '\n';
      const blob = new Blob([pack], {
        type: 'text/markdown'
      });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = d.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-research-pack.md';
      a.click();
    }
    return h('div', {
      className: 'page narrow'
    }, h('button', {
      onClick: () => go('research'),
      className: 'ai small muted',
      style: {
        marginBottom: '18px'
      }
    }, '← All research'), /* dossier header (section 72) */
    h('header', {
      className: 'panel mb'
    }, h('div', {
      className: 'flex mb'
    }, h(CC.Tag, null, d.category), h(CC.Tag, null, d.region), h(CC.Tag, null, d.period), h(CC.Status, {
      s: d.reviewStatus
    })), h('h1', {
      style: {
        fontSize: '42px',
        margin: '0 0 10px'
      }
    }, d.title), h('p', {
      className: 'muted',
      style: {
        fontSize: '16px',
        lineHeight: 1.5,
        maxWidth: '640px'
      }
    }, d.overview.slice(0, 140) + '…'), h('div', {
      className: 'meta mb',
      style: {
        fontSize: '13px'
      }
    }, h('span', null, '◷ ' + d.readingTime + ' min read'), h('span', null, '▧ ' + srcCount + ' sources'), h('span', null, '🎧 Audio available'), h('span', null, '✓ ' + d.reviewStatus)), h('div', {
      className: 'flex'
    }, h('button', {
      className: 'btn orangebtn small',
      onClick: () => go('audio', {
        id: d.id
      })
    }, '▶ Listen'), h('button', {
      className: 'btn small ' + (ws.saved ? 'dark' : ''),
      onClick: () => update({
        saved: !ws.saved
      })
    }, ws.saved ? 'Saved ✓' : 'Save'), h('button', {
      className: 'btn small',
      onClick: addHighlight
    }, 'Highlight selection'), h('button', {
      className: 'btn small',
      onClick: () => document.getElementById('cite-box').scrollIntoView({
        behavior: 'smooth'
      })
    }, 'Cite'), h('button', {
      className: 'btn dark small',
      onClick: downloadPack
    }, 'Generate Research Pack'))), /* body sections */
    h('section', {
      className: 'panel mb'
    }, h('h2', null, 'Overview'), h('p', {
      style: {
        fontSize: '17px',
        lineHeight: 1.7
      }
    }, d.overview), h('h2', {
      className: 'mt'
    }, 'Historical context'), h('p', {
      className: 'muted',
      style: {
        lineHeight: 1.7
      }
    }, d.context)), h('section', {
      className: 'panel mb'
    }, h('h2', null, 'Chronology'), h('ol', {
      className: 'timeline'
    }, d.chronology.map((c, i) => h('li', {
      key: i
    }, h('p', {
      className: 'muted small',
      style: {
        margin: 0
      }
    }, c[0]), h('p', {
      style: {
        margin: 0,
        fontWeight: 600
      }
    }, c[1])))), h('h2', {
      className: 'mt'
    }, 'Materials & techniques'), h('p', {
      className: 'muted'
    }, d.materials), h('h2', {
      className: 'mt'
    }, 'Cultural context'), h('p', {
      className: 'muted'
    }, d.cultural)), /* evidence layer */
    h('section', {
      className: 'panel mb'
    }, h('h2', null, 'Evidence layer'), h('p', {
      className: 'muted small mb'
    }, 'Every significant claim is traceable. Status shows the strength and origin of the evidence — never an "AI verified" label.'), d.claims.map((c, i) => h('div', {
      key: i,
      className: 'panel',
      style: {
        padding: '16px',
        marginBottom: '10px'
      }
    }, h('p', {
      style: {
        margin: '0 0 8px',
        fontWeight: 600
      }
    }, c.text), h('div', {
      className: 'flex'
    }, h(CC.Status, {
      s: c.status
    }), h('span', {
      className: 'muted small'
    }, c.evidence + ' supporting source' + (c.evidence > 1 ? 's' : '')))))), /* source panel */
    h('section', {
      className: 'panel mb'
    }, h('h2', null, 'Sources'), [['Primary sources', d.primarySources, 'moss'], ['Academic sources', d.academicSources, 'sky'], ['Institutional sources', d.institutionalSources, 'green']].map(([label, list, color]) => h('div', {
      key: label,
      className: 'mb'
    }, h('p', {
      className: 'muted small',
      style: {
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.06em'
      }
    }, label), h('ol', {
      style: {
        margin: 0,
        paddingLeft: '18px'
      }
    }, list.map((s, i) => h('li', {
      key: i,
      className: 'small',
      style: {
        marginBottom: '4px'
      }
    }, s)))))), /* glossary */
    h('section', {
      className: 'panel mb'
    }, h('h2', null, 'Glossary'), h('dl', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '12px',
        margin: 0
      }
    }, d.glossary.map((g, i) => h('div', {
      key: i,
      className: 'panel',
      style: {
        padding: '14px'
      }
    }, h('dt', {
      style: {
        fontWeight: 700
      }
    }, g[0]), h('dd', {
      className: 'muted small',
      style: {
        margin: 0
      }
    }, g[1]))))), /* citations */
    h('section', {
      className: 'panel mb',
      id: 'cite-box'
    }, h('h2', null, 'Cite this dossier'), h('div', {
      className: 'chips',
      style: {
        padding: '0 0 14px'
      }
    }, ['APA', 'MLA', 'Chicago'].map(s => h('button', {
      key: s,
      className: 'chip' + (citeStyle === s ? ' active' : ''),
      onClick: () => setCiteStyle(s)
    }, s))), h('p', {
      className: 'mono'
    }, CC.cite(d, citeStyle)), h('button', {
      className: 'btn small mt',
      onClick: () => {
        navigator.clipboard && navigator.clipboard.writeText(CC.cite(d, citeStyle));
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    }, copied ? 'Copied ✓' : 'Copy citation')), /* highlights & notes */
    h('section', {
      className: 'panel mb'
    }, h('h2', null, 'Your highlights & notes'), ws.highlights.length === 0 && h('p', {
      className: 'muted small mb'
    }, 'Select any text in this dossier and click "Highlight selection" to annotate it.'), ws.highlights.map((hl, i) => h('div', {
      key: i,
      style: {
        background: HL_COLORS[hl.cat] || '#eee',
        borderRadius: '10px',
        padding: '10px 14px',
        marginBottom: '8px',
        fontSize: '14px'
      }
    }, h('strong', {
      style: {
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '.06em',
        marginRight: '8px'
      }
    }, hl.cat), hl.text)), h('div', {
      className: 'flex mt'
    }, h('input', {
      className: 'input',
      style: {
        flex: 1
      },
      value: note,
      onChange: e => setNote(e.target.value),
      placeholder: 'Add a private note…'
    }), h('button', {
      className: 'btn orangebtn small',
      onClick: () => {
        if (note.trim()) {
          update({
            notes: ws.notes.concat([note.trim()])
          });
          setNote('');
        }
      }
    }, 'Add')), ws.notes.map((n, i) => h('div', {
      key: i,
      className: 'small mt',
      style: {
        background: '#f6f5f2',
        borderRadius: '10px',
        padding: '10px 14px'
      }
    }, n))), /* related */
    h('section', null, h('h2', null, 'Related topics'), h('div', {
      className: 'flex'
    }, d.related.map(rid => {
      const r = CC.DOSSIERS.find(x => x.id === rid);
      return r ? h('button', {
        key: rid,
        className: 'chip',
        onClick: () => go('dossier', {
          id: rid
        })
      }, r.title) : null;
    }))));
  };

  /* ---------------------- RESEARCH INDEX + SYNTHESIZER ---------------------- */
  CC.ResearchIndex = function ResearchIndex({
    go
  }) {
    return h('div', {
      className: 'page'
    }, h(CC.SectionTitle, null, 'Research'), h('p', {
      className: 'muted mb',
      style: {
        maxWidth: '640px'
      }
    }, 'Browse curated dossiers, or ask the AI Research Synthesizer for a structured entry on any cultural or historical topic.'), h('div', {
      className: 'mb'
    }, h('button', {
      className: 'btn dark',
      onClick: () => go('research', {
        synthesize: true
      })
    }, '✦ Open the Research Synthesizer')), h('div', {
      className: 'cards c3'
    }, CC.DOSSIERS.map((d, i) => h(CC.DossierCard, {
      key: d.id,
      d,
      go,
      i
    }))));
  };
  CC.SynthesizerPage = function SynthesizerPage({
    go,
    preset
  }) {
    const [q, setQ] = useState(preset || '');
    const [state, setState] = useState('idle');
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
      className: 'page narrow'
    }, h(CC.SectionTitle, null, '✦ AI Research Synthesizer'), h('p', {
      className: 'muted mb'
    }, 'Enter any cultural or historical topic. The synthesizer works against the sample corpus in this prototype and always shows its confidence — AI output is never automatically authoritative.'), h('div', {
      className: 'panel'
    }, h('div', {
      className: 'flex mb'
    }, h('input', {
      className: 'input',
      style: {
        flex: 1
      },
      value: q,
      onChange: e => setQ(e.target.value),
      onKeyDown: e => e.key === 'Enter' && synthesize(),
      placeholder: 'e.g. How did Maya astronomers record celestial cycles?'
    }), h('button', {
      className: 'btn orangebtn',
      onClick: synthesize
    }, 'Synthesize')), h('div', {
      className: 'chips',
      style: {
        padding: 0
      }
    }, ['Renaissance tempera', 'Cuneiform tablets', 'Maya astronomy', 'Woodblock registration'].map(s => h('button', {
      key: s,
      className: 'chip',
      onClick: () => setQ(s)
    }, s))), state === 'working' && h('p', {
      className: 'muted small mt',
      role: 'status'
    }, 'Structuring the research… pairing answers with sources and a confidence estimate.'), state === 'done' && result && h('div', {
      className: 'mt',
      'aria-live': 'polite'
    }, result.uncertain ? h('div', {
      className: 'notice amber'
    }, h('strong', null, 'Limited source evidence. '), 'The sample corpus has no strong match. In the production system this is the uncertainty signal you would see — the AI declines rather than inventing an answer.') : h('div', null, h('p', {
      className: 'small muted mb'
    }, 'Confidence: ', h('strong', {
      style: {
        color: '#166534'
      }
    }, 'moderate'), ' — synthesized from ' + result.hits.length + ' matching dossier' + (result.hits.length > 1 ? 's' : '') + '. Verify against sources before citing.'), result.hits.map(d => h('div', {
      key: d.id,
      className: 'panel',
      style: {
        padding: '18px',
        marginBottom: '12px'
      }
    }, h('div', {
      className: 'flex mb'
    }, h(CC.Status, {
      s: 'AI synthesized'
    }), h(CC.Status, {
      s: d.reviewStatus
    })), h('h3', {
      style: {
        margin: '0 0 8px'
      }
    }, d.title), h('p', {
      className: 'muted small',
      style: {
        lineHeight: 1.6
      }
    }, d.overview), h('div', {
      className: 'flex mt'
    }, h('button', {
      className: 'ai',
      onClick: () => go('dossier', {
        id: d.id
      })
    }, 'Open full dossier →'), h('button', {
      className: 'ai',
      onClick: () => go('audio', {
        id: d.id
      })
    }, 'Listen →'))))))));
  };
})();
/* ===== 04-audio.jsx ===== */
/* ================================================================
   Audio: AI speaker, study mode, episodes (new design)
   Uses the device's real speech synthesis.
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
    const [mode, setMode] = useState('listen');
    const supported = typeof speechSynthesis !== 'undefined';
    useEffect(() => {
      if (!supported) return;
      function load() {
        setVoices(speechSynthesis.getVoices());
      }
      load();
      speechSynthesis.onvoiceschanged = load;
      return () => speechSynthesis.cancel();
    }, []);
    useEffect(() => {
      if (supported) speechSynthesis.cancel();
      setIdx(-1);
      setPlaying(false);
      setMode('listen');
    }, [dId]);
    function speak(from) {
      if (!supported) return;
      speechSynthesis.cancel();
      setPlaying(true);
      let i = from;
      (function next() {
        if (i >= sentences.length) {
          setPlaying(false);
          setIdx(-1);
          return;
        }
        const u = new SpeechSynthesisUtterance(sentences[i]);
        u.rate = rate;
        if (voice) u.voice = voice;
        setIdx(i);
        u.onend = () => {
          i++;
          next();
        };
        u.onerror = () => setPlaying(false);
        speechSynthesis.speak(u);
      })();
    }
    function pause() {
      if (supported) speechSynthesis.cancel();
      setPlaying(false);
    }
    return h('div', {
      className: 'page narrow'
    }, h(CC.SectionTitle, null, 'Audio articles'), h('p', {
      className: 'muted mb'
    }, 'Every dossier becomes a spoken article with sentence-by-sentence highlighting. Speech is generated by your device — a real accessibility feature, not a simulation.'), h('div', {
      className: 'chips'
    }, CC.DOSSIERS.map(x => h('button', {
      key: x.id,
      className: 'chip' + (x.id === dId ? ' active' : ''),
      onClick: () => setDId(x.id)
    }, x.title))), h('div', {
      className: 'player mb'
    }, h('p', {
      className: 'eyebrow',
      style: {
        color: '#ed8a34',
        margin: '0 0 4px'
      }
    }, 'Now playing'), h('h3', {
      style: {
        margin: '0 0 16px',
        fontSize: '24px'
      }
    }, d.title), h('div', {
      className: 'flex'
    }, h('button', {
      className: 'playbtn',
      onClick: () => playing ? pause() : speak(idx >= 0 ? idx : 0),
      'aria-label': playing ? 'Pause' : 'Play'
    }, playing ? '❚❚' : '▶'), [0.8, 1, 1.25, 1.5].map(r => h('button', {
      key: r,
      className: 'spd' + (rate === r ? ' on' : ''),
      onClick: () => {
        setRate(r);
        if (playing) speak(idx >= 0 ? idx : 0);
      }
    }, r + 'x')), voices.length > 0 && h('select', {
      className: 'input',
      style: {
        padding: '8px 14px',
        maxWidth: '180px',
        fontSize: '12px'
      },
      value: voice ? voice.name : '',
      onChange: e => setVoice(voices.find(v => v.name === e.target.value) || null),
      'aria-label': 'Voice'
    }, h('option', {
      value: ''
    }, 'Default voice'), voices.slice(0, 12).map(v => h('option', {
      key: v.name,
      value: v.name
    }, v.name)))), !supported && h('p', {
      className: 'notice amber mt',
      style: {
        margin: '14px 0 0'
      }
    }, 'Your browser does not support speech synthesis — the transcript below remains fully available.')), h('div', {
      className: 'chips'
    }, h('button', {
      className: 'chip' + (mode === 'listen' ? ' active' : ''),
      onClick: () => setMode('listen')
    }, 'Transcript'), h('button', {
      className: 'chip' + (mode === 'study' ? ' active' : ''),
      onClick: () => {
        pause();
        setMode('study');
      }
    }, 'Study this article')), mode === 'listen' ? h('article', {
      className: 'panel',
      style: {
        fontSize: '18px',
        lineHeight: 1.8
      }
    }, sentences.map((s, i) => h('span', {
      key: i,
      className: 'sentence' + (i === idx ? ' now' : ''),
      onClick: () => speak(i)
    }, s + ' '))) : h(CC.StudyMode, {
      d
    }), h('section', {
      className: 'mt'
    }, h(CC.SectionTitle, null, 'Research episodes'), h('p', {
      className: 'muted small mb'
    }, 'Connected audio lessons built from multiple dossiers. Select chapters and play them as one journey.'), h(CC.EpisodePlayer, null)));
  };
  CC.StudyMode = function StudyMode({
    d
  }) {
    const quiz = CC.QUIZ[d.id] || CC.QUIZ.default;
    const [answers, setAnswers] = useState({});
    const [done, setDone] = useState(false);
    const score = Object.keys(answers).filter(i => answers[i] === quiz[i].answer).length;
    return h('div', {
      className: 'panel'
    }, h('h3', {
      style: {
        marginTop: 0
      }
    }, 'Study: ' + d.title), h('p', {
      className: 'muted small mb'
    }, '5-question review. Turns listening into learning.'), h('ol', {
      style: {
        paddingLeft: '18px'
      }
    }, quiz.map((item, qi) => h('li', {
      key: qi,
      className: 'mb'
    }, h('p', {
      style: {
        fontWeight: 600
      }
    }, item.q), h('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '8px'
      }
    }, item.options.map((opt, oi) => {
      const chosen = answers[qi] === oi;
      const correct = item.answer === oi;
      let cls = 'chip';
      let style = {
        textAlign: 'left',
        whiteSpace: 'normal'
      };
      if (done && correct) style = Object.assign(style, {
        background: '#dcfce7',
        color: '#166534',
        fontWeight: 700
      });else if (done && chosen) style = Object.assign(style, {
        background: '#fee2e2',
        color: '#b91c1c'
      });else if (chosen) style = Object.assign(style, {
        background: '#171816',
        color: '#fff'
      });
      return h('button', {
        key: oi,
        disabled: done,
        className: cls,
        style,
        onClick: () => setAnswers(a => Object.assign({}, a, {
          [qi]: oi
        }))
      }, opt);
    }))))), !done ? h('button', {
      className: 'btn orangebtn',
      disabled: Object.keys(answers).length < quiz.length,
      onClick: () => setDone(true)
    }, 'Check answers') : h('div', {
      className: 'notice green mt'
    }, h('strong', null, 'Score: ' + score + ' / ' + quiz.length + '. '), score === quiz.length ? 'Excellent recall. Try another dossier or build a Research Pack.' : score >= 3 ? 'Good progress — re-listen to the highlighted sections and retry the missed questions.' : 'Re-listen to the article, then review the missed questions above.'));
  };
  CC.EpisodePlayer = function EpisodePlayer() {
    const [selected, setSelected] = useState(['d5', 'd1']);
    const [playing, setPlaying] = useState(false);
    const supported = typeof speechSynthesis !== 'undefined';
    const chapters = selected.map(id => CC.DOSSIERS.find(d => d.id === id)).filter(Boolean);
    function playEpisode() {
      if (!supported || chapters.length === 0) return;
      speechSynthesis.cancel();
      setPlaying(true);
      const queue = [new SpeechSynthesisUtterance('Research episode. ' + chapters.map(c => c.title).join('. Then. ') + '.')];
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
      className: 'panel'
    }, h('p', {
      className: 'muted small',
      style: {
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.06em'
      }
    }, 'Build your episode'), h('div', {
      className: 'chips'
    }, CC.DOSSIERS.map(d => h('button', {
      key: d.id,
      className: 'chip' + (selected.includes(d.id) ? ' active' : ''),
      onClick: () => setSelected(s => s.includes(d.id) ? s.filter(x => x !== d.id) : s.concat([d.id]))
    }, d.title))), chapters.length > 0 && h('ol', {
      className: 'mb',
      style: {
        paddingLeft: '18px'
      }
    }, chapters.map((c, i) => h('li', {
      key: c.id,
      className: 'small mb'
    }, h('strong', {
      style: {
        color: '#d86d16',
        marginRight: '8px'
      }
    }, 'Ch. ' + (i + 1)), c.title, h('span', {
      className: 'muted'
    }, ' · ' + c.audioMinutes + ' min')))), h('button', {
      className: 'btn dark',
      disabled: chapters.length === 0,
      onClick: () => playing ? (speechSynthesis.cancel(), setPlaying(false)) : playEpisode()
    }, playing ? 'Stop episode' : 'Play episode (' + chapters.reduce((a, c) => a + c.audioMinutes, 0) + ' min)'));
  };
})();
/* ===== 05-datatrust.jsx ===== */
/* ================================================================
   DataTrust: marketplace, earnings, permissions, trust (new design)
   ================================================================ */
(function () {
  const {
    useState
  } = React;
  const h = React.createElement;
  CC.DataTrustPage = function DataTrustPage() {
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
      className: 'page'
    }, h('div', {
      className: 'hero',
      style: {
        minHeight: '240px',
        borderRadius: '22px',
        marginBottom: '24px',
        background: 'linear-gradient(90deg,#17133aee,#3730a3aa),url(https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1400&q=80) center/cover'
      }
    }, h('div', {
      className: 'hero-inner',
      style: {
        padding: '40px'
      }
    }, h('div', {
      className: 'eyebrow',
      style: {
        color: '#c7d2fe'
      }
    }, 'DataTrust'), h('h1', {
      style: {
        fontSize: '44px'
      }
    }, 'Your data. ', h('span', {
      className: 'orange'
    }, 'Your choice.')), h('p', {
      style: {
        fontSize: '15px'
      }
    }, 'Keep it private, donate it to education, or monetize eligible telemetry — with transparent provenance and an 85% contributor royalty pool. Prototype: financial and privacy values are configured simulations.'))), h('div', {
      className: 'chips',
      style: {
        justifyContent: 'center'
      }
    }, TABS.map(([id, label]) => h('button', {
      key: id,
      className: 'chip' + (tab === id ? ' active' : ''),
      onClick: () => setTab(id)
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
  function Dashboard({
    balance,
    setTab,
    perms
  }) {
    const active = perms.filter(p => p.on).length;
    const cards = [['Your data', '4 categories', 'Learning, reading, media, anonymized telemetry', 'permissions'], ['Active permissions', active + ' of ' + perms.length, 'Granular controls with explained consequences', 'permissions'], ['Data earnings', '$' + balance.toFixed(2), '85% contributor royalty pool (configured)', 'earnings'], ['Research donations', '31 contributions', 'Educational, non-commercial by policy', 'earnings']];
    return h('div', null, h('div', {
      className: 'stat-grid mb'
    }, cards.map(([label, value, note, tab]) => h('button', {
      key: label,
      className: 'stat',
      onClick: () => setTab(tab)
    }, h('b', null, value), h('span', null, label), h('p', {
      className: 'muted small',
      style: {
        margin: '8px 0 0',
        fontSize: '11px'
      }
    }, note)))), h('div', {
      className: 'panel'
    }, h('h2', null, 'Personal data vault'), h('p', {
      className: 'small'
    }, 'Encryption status: ', h('strong', {
      style: {
        color: '#166534'
      }
    }, 'Protected (prototype indicator)'), ' — concept: AES-256-GCM with encryption before upload where the architecture permits. This claim depends on real implementation and is not a production guarantee.'), h('div', {
      className: 'stat-grid',
      style: {
        gridTemplateColumns: 'repeat(3,1fr)'
      }
    }, ['Records', 'Permissions', 'Usage history'].map(s => h('div', {
      key: s,
      className: 'stat'
    }, h('b', {
      style: {
        fontSize: '18px'
      }
    }, s), h('p', {
      className: 'muted small',
      style: {
        margin: '6px 0 0'
      }
    }, 'Inspect and manage. Withdrawal and deletion controls included.'))))));
  }
  function Marketplace() {
    const [openDs, setOpenDs] = useState(null);
    return h('div', null, h('div', {
      className: 'notice indigo mb'
    }, h('strong', null, 'Prototype marketplace. '), 'Datasets, prices and royalty percentages are a configured economic model — no real buyers or payouts exist yet. Provenance and fairness come first.'), h('div', {
      className: 'cards c2'
    }, CC.DATASETS.map(ds => h('article', {
      key: ds.id,
      className: 'panel',
      style: {
        cursor: 'default'
      }
    }, h('div', {
      className: 'flex mb'
    }, h(CC.Tag, null, ds.category), h(CC.Status, {
      s: ds.status
    })), h('h3', {
      style: {
        margin: '0 0 8px'
      }
    }, ds.name), h('p', {
      className: 'muted small mb'
    }, ds.description), h('dl', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6px 20px',
        fontSize: '13px',
        margin: '0 0 14px'
      }
    }, [['Contributors', ds.contributors.toLocaleString()], ['Records', ds.records], ['Period', ds.period], ['Privacy mechanism', ds.privacyMechanism], ['Privacy budget', ds.privacyBudget], ['Re-identification risk', ds.reidentRisk], ['Contributor share', ds.royalty + '%'], ['Buyer price', ds.price]].map(([k, v]) => h('div', {
      key: k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px'
      }
    }, h('dt', {
      className: 'muted'
    }, k), h('dd', {
      style: {
        margin: 0,
        fontWeight: 600,
        textAlign: 'right'
      }
    }, v)))), h('div', {
      className: 'flex between'
    }, h('button', {
      className: 'ai',
      onClick: () => setOpenDs(openDs === ds.id ? null : ds.id)
    }, openDs === ds.id ? 'Hide provenance' : 'View provenance'), h('span', {
      className: 'muted small'
    }, ds.queries + ' queries this month')), openDs === ds.id && h('div', {
      className: 'mt',
      style: {
        borderTop: '1px solid var(--line)',
        paddingTop: '14px'
      }
    }, h('p', {
      className: 'muted small',
      style: {
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.06em'
      }
    }, 'Dataset provenance'), h('ol', {
      style: {
        paddingLeft: '18px',
        fontSize: '13px',
        lineHeight: 1.7
      }
    }, h('li', null, h('strong', null, 'Origin: '), 'Opt-in CultureCommons users, ' + ds.contributors.toLocaleString() + ' contributors.'), h('li', null, h('strong', null, 'Collection method: '), 'Consent-gated telemetry and survey interactions.'), h('li', null, h('strong', null, 'Transformation: '), 'Raw events cleaned, anonymized, then aggregated.'), h('li', null, h('strong', null, 'Privacy: '), ds.privacyMechanism + ' — ' + ds.privacyBudget + '.'), h('li', null, h('strong', null, 'Licensing: '), 'Research use; redistribution prohibited; no re-identification attempts.'), h('li', null, h('strong', null, 'Revenue: '), ds.royalty + '% contributor pool / ' + (100 - ds.royalty) + '% platform (configured).')))))));
  }
  function Earnings({
    balance
  }) {
    return h('div', {
      className: 'page narrow',
      style: {
        padding: 0
      }
    }, h('div', {
      className: 'player mb',
      style: {
        textAlign: 'center',
        background: 'linear-gradient(135deg,#3730a3,#171816)'
      }
    }, h('p', {
      className: 'eyebrow',
      style: {
        color: '#c7d2fe',
        margin: 0
      }
    }, 'Your data earnings'), h('p', {
      style: {
        font: '700 52px Georgia',
        margin: '8px 0'
      }
    }, '$' + balance.toFixed(2)), h('p', {
      className: 'small',
      style: {
        color: '#c7d2fe',
        margin: 0
      }
    }, 'Royalty split: 85% contributor pool · 15% platform allocation (configured, simulated)')), h('div', {
      className: 'panel',
      style: {
        padding: 0,
        overflow: 'hidden'
      }
    }, h('table', {
      className: 'ledger'
    }, h('thead', null, h('tr', null, h('th', null, 'Date'), h('th', null, 'Dataset'), h('th', {
      className: 'num'
    }, 'Uses'), h('th', {
      className: 'num'
    }, 'Change'), h('th', {
      className: 'num'
    }, 'Status'))), h('tbody', null, CC.EARNINGS_LEDGER.map((r, i) => h('tr', {
      key: i
    }, h('td', {
      className: 'muted'
    }, r.date), h('td', {
      style: {
        fontWeight: 600
      }
    }, r.dataset), h('td', {
      className: 'num'
    }, r.uses), h('td', {
      className: 'num',
      style: {
        fontWeight: 700,
        color: r.change > 0 ? '#166534' : '#999'
      }
    }, r.change > 0 ? '+$' + r.change.toFixed(2) : '—'), h('td', {
      className: 'num'
    }, h('span', {
      className: 'tag ' + (r.status === 'Available' ? 'moss' : r.status === 'Paid' ? 'sky' : '')
    }, r.status))))))), h('p', {
      className: 'muted small mt',
      style: {
        textAlign: 'center'
      }
    }, 'Ledger rows are simulated to demonstrate the intended transparency model.'));
  }
  function Permissions({
    perms,
    togglePerm
  }) {
    return h('div', {
      className: 'page narrow',
      style: {
        padding: 0
      }
    }, h('div', {
      className: 'panel mb'
    }, h('h2', null, 'Data permission center'), h('p', {
      className: 'muted small mb'
    }, 'Each switch explains its purpose before you change it; choices are saved to your workspace.'), perms.map(p => h('div', {
      key: p.id,
      className: 'flex between',
      style: {
        padding: '14px 0',
        borderTop: '1px solid #f0eee8'
      }
    }, h('div', null, h('p', {
      style: {
        margin: 0,
        fontWeight: 600
      }
    }, p.label), h('p', {
      className: 'muted small',
      style: {
        margin: '4px 0 0'
      }
    }, p.desc)), h('button', {
      className: 'switch ' + (p.on ? 'on' : 'off'),
      role: 'switch',
      'aria-checked': p.on,
      onClick: () => togglePerm(p.id),
      'aria-label': p.label
    }, h('i', null))))), h('div', {
      className: 'notice green'
    }, h('strong', null, 'Three standing choices: '), 'keep data Private, Donate to educational research, or Monetize eligible telemetry (85% royalty pool). Change anytime here.'));
  }
  function TrustCenter() {
    const rows = [['zk-SNARK proof of contribution', 'Planned', 'Not implemented. Would let you verify a claim without exposing underlying private information.'], ['Differential privacy on datasets', 'Planned', 'Marketplace ε values are configured targets, not measured guarantees.'], ['Re-identification risk metrics', 'Planned', 'Indicators are estimates in this prototype, not audited measurements.'], ['Client-side encryption (AES-256-GCM)', 'Planned', 'The vault shows the concept; no real encryption is applied to prototype data.'], ['AI methodology', 'Documented', 'Synthesizer output is always labeled, paired with sources, and carries an uncertainty signal.'], ['Source methodology', 'Documented', 'Evidence statuses distinguish primary, institutional, academic, community and AI-synthesized material.']];
    return h('div', {
      className: 'player'
    }, h('h2', {
      style: {
        marginTop: 0
      }
    }, 'Trust & Transparency Center'), h('p', {
      className: 'small',
      style: {
        color: '#aaa'
      }
    }, 'This platform makes unusually strong trust claims — so every claim carries a status. Decorative numbers are never presented as cryptographic guarantees.'), rows.map(([name, status, note]) => h('div', {
      key: name,
      style: {
        borderTop: '1px solid #333230',
        padding: '14px 0'
      }
    }, h('div', {
      className: 'flex mb'
    }, h('strong', null, name), h('span', {
      className: 'tag ' + (status === 'Documented' ? 'moss' : 'amber')
    }, status)), h('p', {
      className: 'small',
      style: {
        color: '#aaa',
        margin: 0
      }
    }, note))));
  }
})();
/* ===== 06-explore-commons.jsx ===== */
/* ================================================================
   Explore + Community Commons (new design)
   ================================================================ */
(function () {
  const {
    useState,
    useMemo
  } = React;
  const h = React.createElement;
  CC.ExplorePage = function ExplorePage({
    go,
    preset
  }) {
    const [q, setQ] = useState(preset && preset.q || '');
    const [region, setRegion] = useState('All');
    const regions = ['All'].concat(Array.from(new Set(CC.DOSSIERS.map(d => d.region))));
    const results = useMemo(() => CC.DOSSIERS.filter(d => (region === 'All' || d.region === region) && (d.title + ' ' + d.overview + ' ' + d.category + ' ' + d.materials).toLowerCase().includes(q.toLowerCase())), [q, region]);
    return h('div', {
      className: 'page'
    }, h(CC.SectionTitle, null, 'Explore'), h('div', {
      className: 'search mb',
      style: {
        maxWidth: '700px',
        margin: '0 0 20px'
      }
    }, h('span', {
      'aria-hidden': 'true'
    }, '⌕'), h('input', {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: 'Try "ancient methods of producing blue pigments"…',
      'aria-label': 'Search'
    })), h('div', {
      className: 'chips'
    }, regions.map(r => h('button', {
      key: r,
      className: 'chip' + (region === r ? ' active' : ''),
      onClick: () => setRegion(r)
    }, r))), h('h3', {
      className: 'serif',
      style: {
        fontSize: '22px'
      }
    }, 'Timeline explorer'), h('ol', {
      className: 'timeline mb'
    }, CC.TIMELINE.filter(t => region === 'All' || t.region === region).map((t, i) => h('li', {
      key: i
    }, h('p', {
      className: 'muted small',
      style: {
        margin: 0
      }
    }, t.year), h('p', {
      style: {
        margin: '2px 0',
        fontWeight: 600
      }
    }, t.label), h('button', {
      className: 'ai small',
      onClick: () => go('dossier', {
        id: t.dossier
      })
    }, 'Open connected dossier →')))), h('h3', {
      className: 'serif',
      style: {
        fontSize: '22px'
      }
    }, 'Cultural map ', h(CC.Tag, {
      color: 'amber'
    }, 'Planned: interactive')), h('p', {
      className: 'muted small mb'
    }, 'Regional cards stand in for the interactive map in this prototype; each card opens connected research.'), h('div', {
      className: 'region-grid mb'
    }, CC.REGIONS.map(([name, img]) => h('button', {
      key: name,
      className: 'region',
      onClick: () => setRegion(regions.includes(name) || name === 'All' ? name : 'All')
    }, h('img', {
      src: img,
      alt: '',
      loading: 'lazy'
    }), h('span', null, name)))), h('div', {
      className: 'cards c3'
    }, results.map((d, i) => h(CC.DossierCard, {
      key: d.id,
      d,
      go,
      i
    }))), results.length === 0 && h(CC.EmptyState, {
      title: 'No matching dossiers',
      body: 'The sample corpus holds five demo dossiers. Try a broader search, or contribute your own research in the Commons.',
      cta: 'Visit the Commons',
      onAction: () => go('commons')
    }));
  };
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
    const [draft, setDraft] = useState(false);
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
      setDraft(false);
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
      className: 'page narrow'
    }, h(CC.SectionTitle, null, 'Community Commons'), h('p', {
      className: 'muted mb'
    }, 'The public knowledge layer. Members publish dossiers, collections and curated sources. Quality is driven by evidence and review — never by likes.'), h('div', {
      className: 'mb'
    }, h('button', {
      className: 'btn orangebtn',
      onClick: () => setDraft(true)
    }, 'Contribute a dossier')), draft && h('form', {
      onSubmit: publish,
      className: 'panel mb'
    }, h('h3', {
      style: {
        marginTop: 0
      }
    }, 'New contribution'), h('div', {
      className: 'flex mb'
    }, h('input', {
      className: 'input',
      name: 'title',
      required: true,
      placeholder: 'Dossier title',
      style: {
        flex: 2
      }
    }), h('input', {
      className: 'input',
      name: 'topic',
      required: true,
      placeholder: 'Topic',
      style: {
        flex: 1
      }
    }), h('label', {
      className: 'small muted'
    }, 'Sources ', h('input', {
      className: 'input',
      name: 'sources',
      type: 'number',
      min: '1',
      defaultValue: '3',
      style: {
        width: '70px',
        marginLeft: '6px'
      }
    }))), h('p', {
      className: 'muted small'
    }, 'Flow: Create → Add sources → Review → Publish → Community feedback. New contributions start as "Submitted".'), h('div', {
      className: 'flex'
    }, h('button', {
      type: 'submit',
      className: 'btn orangebtn small'
    }, 'Submit for review'), h('button', {
      type: 'button',
      className: 'btn small',
      onClick: () => setDraft(false)
    }, 'Cancel'))), contributions.map(c => h('article', {
      key: c.id,
      className: 'panel mb'
    }, h('div', {
      className: 'flex between mb'
    }, h('div', {
      className: 'flex'
    }, h(CC.Tag, null, c.topic), h(CC.Status, {
      s: c.status
    })), c.author !== 'You' && h('button', {
      className: 'ai small',
      onClick: () => setReviewFor(reviewFor === c.id ? null : c.id)
    }, 'Review')), h('h3', {
      style: {
        margin: '0 0 6px'
      }
    }, c.title), h('p', {
      className: 'muted small',
      style: {
        margin: 0
      }
    }, 'By ' + c.author + ' · ' + c.date + ' · ' + c.sources + ' sources'), c.reviews && h('div', {
      className: 'flex mt'
    }, [['Accuracy', c.reviews.accuracy], ['Sources', c.reviews.sources], ['Clarity', c.reviews.clarity], ['Complete', c.reviews.completeness], ['Context', c.reviews.context]].map(([k, v]) => h('span', {
      key: k,
      className: 'tag'
    }, k + ' ', h('strong', null, v + '/5')))), reviewFor === c.id && h('form', {
      onSubmit: submitReview,
      className: 'mt',
      style: {
        borderTop: '1px solid var(--line)',
        paddingTop: '14px'
      }
    }, h('p', {
      className: 'muted small',
      style: {
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.06em'
      }
    }, 'Peer review (1–5 each)'), h('div', {
      className: 'flex mb'
    }, [['accuracy', 'Accuracy'], ['sources_q', 'Sources'], ['clarity', 'Clarity'], ['completeness', 'Complete'], ['context', 'Context']].map(([name, label]) => h('label', {
      key: name,
      className: 'small muted'
    }, label, h('input', {
      className: 'input',
      name,
      type: 'number',
      min: '1',
      max: '5',
      defaultValue: '4',
      required: true,
      style: {
        width: '60px',
        marginLeft: '6px',
        padding: '6px 10px'
      }
    })))), h('div', {
      className: 'flex'
    }, h('button', {
      type: 'submit',
      className: 'btn orangebtn small'
    }, 'Submit review'), h('button', {
      type: 'button',
      className: 'btn small',
      onClick: () => setReviewFor(null)
    }, 'Cancel'))))), h('div', {
      className: 'notice green'
    }, h('strong', null, 'Reputation: '), 'contributors build standing through high-quality, source-backed work — Contributor → Trusted → Verified → Institutional. No popularity contests.'));
  };
})();
/* ===== 08-ux-spec.jsx ===== */
/* ================================================================
   Spec 65-100 additions (new design): companion, onboarding,
   global search, compare, empty states, loading notes
   ================================================================ */
(function () {
  const {
    useState,
    useEffect,
    useMemo
  } = React;
  const h = React.createElement;
  CC.Companion = function Companion({
    message
  }) {
    return h('div', {
      className: 'flex',
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
      fill: '#d86d16',
      opacity: '0.15'
    }), h('rect', {
      x: '12',
      y: '12',
      width: '20',
      height: '20',
      rx: '2',
      transform: 'rotate(45 22 22)',
      stroke: '#d86d16',
      strokeWidth: '1.5'
    }), h('circle', {
      cx: '22',
      cy: '22',
      r: '4',
      fill: '#11130f'
    }), h('path', {
      d: 'M22 4v6M22 34v6M4 22h6M34 22h6',
      stroke: '#d86d16',
      strokeWidth: '1.5',
      strokeLinecap: 'round'
    })), message ? h('p', {
      className: 'muted small',
      style: {
        fontStyle: 'italic',
        margin: 0
      }
    }, message) : null);
  };
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
      className: 'overlay',
      role: 'dialog',
      'aria-modal': 'true'
    }, h('div', {
      className: 'sheet'
    }, h(CC.Companion, {
      message: step === 0 ? 'Welcome. One quick question to make this useful — or skip and explore right away.' : 'Good. Anything in particular you care about?'
    }), step === 0 ? h('div', {
      className: 'mt'
    }, h('h2', null, 'What brings you here?'), h('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px'
      },
      className: 'mb'
    }, purposes.map(p => h('button', {
      key: p,
      className: 'chip',
      style: {
        textAlign: 'center',
        whiteSpace: 'normal'
      },
      style: {
        textAlign: 'center',
        whiteSpace: 'normal',
        background: purpose === p ? '#171816' : '#ebe9e3',
        color: purpose === p ? '#fff' : '#34332f'
      },
      onClick: () => setPurpose(p)
    }, p))), h('div', {
      className: 'flex between'
    }, h('button', {
      className: 'ai small',
      onClick: finish
    }, 'Skip — just let me explore'), h('button', {
      className: 'btn orangebtn small',
      disabled: !purpose,
      onClick: () => setStep(1)
    }, 'Continue'))) : h('div', {
      className: 'mt'
    }, h('h2', null, 'What are you interested in?'), h('div', {
      className: 'chips',
      style: {
        padding: 0
      }
    }, interests.map(i => h('button', {
      key: i,
      className: 'chip' + (picked.includes(i) ? ' active' : ''),
      onClick: () => setPicked(s => s.includes(i) ? s.filter(x => x !== i) : s.concat([i]))
    }, i))), h('div', {
      className: 'flex between mt'
    }, h('button', {
      className: 'ai small',
      onClick: finish
    }, 'Skip'), h('button', {
      className: 'btn orangebtn small',
      onClick: finish
    }, 'Start researching')))));
  };
  CC.GlobalSearch = function GlobalSearch({
    open,
    onClose,
    go
  }) {
    const [q, setQ] = useState('');
    useEffect(() => {
      if (!open) setQ('');
    }, [open]);
    useEffect(() => {
      function onKey(e) {
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
      className: 'overlay',
      onClick: onClose,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'Global search'
    }, h('div', {
      className: 'sheet search-sheet',
      onClick: e => e.stopPropagation()
    }, h('div', {
      className: 'flex',
      style: {
        padding: '0 18px',
        borderBottom: '1px solid var(--line)'
      }
    }, h('span', {
      'aria-hidden': 'true',
      className: 'muted'
    }, '⌕'), h('input', {
      className: 'gs',
      autoFocus: true,
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: 'Search dossiers, datasets, pages…',
      'aria-label': 'Search everything'
    }), h('kbd', null, 'Esc')), h('div', {
      style: {
        maxHeight: '320px',
        overflowY: 'auto',
        padding: '8px'
      }
    }, !q.trim() && h('p', {
      className: 'muted small',
      style: {
        padding: '10px'
      }
    }, 'Try "Maya astronomy", "Renaissance pigments", "permissions"…'), results.dossiers.map(d => row('Dossier', d.title, d.category, () => {
      go('dossier', {
        id: d.id
      });
      onClose();
    })), results.datasets.map(d => row('Dataset', d.name, d.category + ' · DataTrust', () => {
      go('datatrust');
      onClose();
    })), results.pages.map(p => row('Page', p.label, 'Navigate', () => {
      go(p.id);
      onClose();
    })), q.trim() && results.dossiers.length + results.datasets.length + results.pages.length === 0 && h('p', {
      className: 'muted small',
      style: {
        padding: '10px'
      }
    }, 'No matches in the sample corpus.'))));
    function row(type, title, meta, onClick) {
      return h('button', {
        key: type + title,
        className: 'gs-row',
        onClick
      }, h(CC.Tag, null, type), h('span', null, h('span', {
        style: {
          display: 'block',
          fontWeight: 600
        }
      }, title), h('span', {
        className: 'muted small'
      }, meta)));
    }
  };
  CC.ComparePage = function ComparePage({
    go
  }) {
    const [a, setA] = useState('d2');
    const [b, setB] = useState('d4');
    const da = CC.DOSSIERS.find(d => d.id === a);
    const db = CC.DOSSIERS.find(d => d.id === b);
    const fields = [['Period', d => d.period], ['Geography', d => d.region], ['Materials', d => d.materials], ['Technique', d => d.overview.split('.')[1] || d.overview], ['Cultural purpose', d => d.cultural]];
    return h('div', {
      className: 'page'
    }, h(CC.SectionTitle, null, 'Compare'), h('p', {
      className: 'muted mb'
    }, 'Select two dossiers to compare chronology, geography, materials, technique and cultural purpose.'), h('div', {
      className: 'flex mb',
      style: {
        justifyContent: 'center'
      }
    }, [[a, setA], [b, setB]].map(([val, set], i) => h('select', {
      key: i,
      className: 'input',
      value: val,
      onChange: e => set(e.target.value),
      'aria-label': 'Subject ' + (i + 1)
    }, CC.DOSSIERS.map(x => h('option', {
      key: x.id,
      value: x.id
    }, x.title))))), fields.map(([label, get]) => h('div', {
      key: label,
      className: 'mb',
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(90px,10rem) 1fr 1fr',
        gap: '14px',
        alignItems: 'start'
      }
    }, h('p', {
      className: 'muted small',
      style: {
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.06em',
        paddingTop: '18px'
      }
    }, label), [da, db].map((d, i) => h('div', {
      key: d.id + i,
      className: 'panel',
      style: {
        padding: '16px'
      }
    }, h('p', {
      className: 'small',
      style: {
        fontWeight: 700,
        color: '#d86d16',
        margin: '0 0 6px'
      }
    }, d.title), h('p', {
      className: 'muted small',
      style: {
        margin: 0,
        lineHeight: 1.6
      }
    }, get(d)))))));
  };
  CC.EmptyState = function EmptyState({
    title,
    body,
    cta,
    onAction
  }) {
    return h('div', {
      className: 'panel',
      style: {
        textAlign: 'center',
        padding: '48px 24px',
        borderStyle: 'dashed'
      }
    }, h('div', {
      className: 'flex',
      style: {
        justifyContent: 'center'
      }
    }, h(CC.Companion, null)), h('p', {
      className: 'serif',
      style: {
        fontSize: '22px',
        fontWeight: 700,
        margin: '12px 0 6px'
      }
    }, title), h('p', {
      className: 'muted small mb',
      style: {
        maxWidth: '420px',
        margin: '0 auto 18px'
      }
    }, body), cta && h('button', {
      className: 'btn orangebtn small',
      onClick: onAction
    }, cta));
  };
})();
/* ===== 07-main.jsx ===== */
/* ================================================================
   Main App + workspace dashboard (new design)
   ================================================================ */
(function () {
  const {
    useState,
    useEffect
  } = React;
  const h = React.createElement;
  CC.WorkspacePage = function WorkspacePage({
    workspace,
    go
  }) {
    const savedIds = Object.keys(workspace).filter(id => workspace[id].saved);
    const saved = savedIds.map(id => CC.DOSSIERS.find(d => d.id === id)).filter(Boolean);
    const totalNotes = Object.values(workspace).reduce((a, w) => a + (w.notes ? w.notes.length : 0), 0);
    const totalHl = Object.values(workspace).reduce((a, w) => a + (w.highlights ? w.highlights.length : 0), 0);
    return h('div', {
      className: 'page narrow'
    }, h(CC.SectionTitle, null, 'My research'), h('p', {
      className: 'muted mb'
    }, 'Your persistent research environment: saved dossiers, highlights, notes and citations — kept in this browser between visits.'), h('div', {
      className: 'stat-grid mb',
      style: {
        gridTemplateColumns: 'repeat(3,1fr)'
      }
    }, [['Saved dossiers', saved.length], ['Highlights', totalHl], ['Notes', totalNotes]].map(([k, v]) => h('div', {
      key: k,
      className: 'stat'
    }, h('b', null, v), h('span', null, k)))), saved.length === 0 ? h(CC.EmptyState, {
      title: 'No research projects yet',
      body: 'Start a project to collect dossiers, sources, notes, highlights, and citations in one workspace.',
      cta: 'Explore research',
      onAction: () => go('research')
    }) : saved.map(d => {
      const w = workspace[d.id];
      return h('article', {
        key: d.id,
        className: 'panel mb'
      }, h('div', {
        className: 'flex between'
      }, h('div', null, h('h3', {
        style: {
          margin: '0 0 6px'
        }
      }, d.title), h('p', {
        className: 'muted small',
        style: {
          margin: 0
        }
      }, d.category + ' · ' + w.highlights.length + ' highlights · ' + w.notes.length + ' notes')), h('div', {
        className: 'flex'
      }, h('button', {
        className: 'ai',
        onClick: () => go('dossier', {
          id: d.id
        })
      }, 'Continue research →'), h('button', {
        className: 'ai',
        onClick: () => go('audio', {
          id: d.id
        })
      }, 'Listen'))));
    }));
  };
  function App() {
    const [page, setPage] = useState('home');
    const [params, setParams] = useState({});
    const [workspace, setWorkspace] = useState(() => CC.store.get('workspace', {}));
    const [showOnboarding, setShowOnboarding] = useState(() => !CC.store.get('onboarding', null));
    const [searchOpen, setSearchOpen] = useState(false);
    useEffect(() => {
      CC.store.set('workspace', workspace);
    }, [workspace]);
    useEffect(() => {
      window.scrollTo({
        top: 0
      });
    }, [page, params]);
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
    function go(p, opts) {
      setParams(opts || {});
      setPage(p);
    }
    let content;
    switch (page) {
      case 'home':
        content = h(CC.HomePage, {
          go
        });
        break;
      case 'explore':
        content = h(CC.ExplorePage, {
          go,
          preset: params
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
      case 'compare':
        content = h(CC.ComparePage, {
          go
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
      case 'audio':
        content = h(CC.AudioPage, {
          go,
          presetId: params.id
        });
        break;
      case 'datatrust':
        content = h(CC.DataTrustPage, null);
        break;
      default:
        content = h(CC.HomePage, {
          go
        });
    }
    return h('div', null, h(CC.Header, {
      page,
      go,
      onSearch: () => setSearchOpen(true)
    }), showOnboarding && h(CC.Onboarding, {
      onDone: () => setShowOnboarding(false)
    }), h(CC.GlobalSearch, {
      open: searchOpen,
      onClose: () => setSearchOpen(false),
      go
    }), h('main', null, content), h(FooterBar, {
      go
    }));
  }
  function FooterBar({
    go
  }) {
    return h('footer', {
      style: {
        background: '#171816',
        color: '#aaa',
        marginTop: '40px'
      }
    }, h('div', {
      className: 'page',
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '30px',
        flexWrap: 'wrap'
      }
    }, h('div', null, h('p', {
      className: 'serif',
      style: {
        color: '#fff',
        fontWeight: 700,
        fontSize: '20px',
        margin: '0 0 8px'
      }
    }, 'DataTrust ', h('span', {
      style: {
        color: '#ed8a34'
      }
    }, '& CultureCommons')), h('p', {
      className: 'small',
      style: {
        maxWidth: '420px',
        margin: 0
      }
    }, 'Open research infrastructure for culture, history and the arts — with a privacy-first personal-data ecosystem.'), h('div', {
      className: 'flex mt'
    }, CC.NAV.map(n => h('button', {
      key: n.id,
      className: 'ai small',
      style: {
        color: '#aaa'
      },
      onClick: () => go(n.id)
    }, n.label)), h('button', {
      className: 'ai small',
      style: {
        color: '#aaa'
      },
      onClick: () => go('workspace')
    }, 'My research'))), h('div', {
      className: 'small',
      style: {
        maxWidth: '380px'
      }
    }, h('p', null, 'Prototype build. AI answers, earnings and privacy metrics are simulations — never production guarantees.'), h('p', {
      className: 'muted'
    }, 'Explore. Verify. Listen. Cite. Build.'))));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(h(App));
})();