const STORAGE_KEY = "gujarat-vidya-setu-progress";

const videoFallbacks = {
  "10-gujarati": "7TfvyP45bZo",
  "7-math": "EHy1ocB0ZT0",
  default: "EHy1ocB0ZT0",
};

const exactChapterVideos = {
  // Add exact chapter videos here as they are curated.
  // Key format: "standard-subject-chapterIndex"
  // Example:
  // "10-math-0": {
  //   title: "ધોરણ 10 ગણિત પાઠ 1 - યુક્લિડની ભાગવિધિ",
  //   url: "https://www.youtube.com/watch?v=VIDEO_ID"
  // }
};

const standards = [
  {
    id: "10",
    label: "ધોરણ 10",
    subjects: [
      {
        id: "math",
        label: "ગણિત",
        video: videoFallbacks.default,
        chapters: [
          "યુક્લિડની ભાગવિધિ અને વાસ્તવિક સંખ્યાઓ",
          "બહુપદીઓ",
          "દ્વિચલ સુરેખ સમીકરણ યુગ્મ",
          "દ્વિઘાત સમીકરણ",
          "સમાંતર શ્રેણી",
          "ત્રિકોણોની સમરૂપતા",
          "સમરૂપતા અને પાયથાગોરસ પ્રમેય",
          "યામભૂમિતિ",
          "ત્રિકોણમિતિ",
          "અંતર અને ઊંચાઈ",
          "વર્તુળ",
          "રચના",
          "વર્તુળ સંબંધિત ક્ષેત્રફળ",
          "પૃષ્ઠફળ અને ઘનફળ",
          "આંકડાશાસ્ત્ર",
          "સંભાવના",
        ],
      },
      {
        id: "science",
        label: "વિજ્ઞાન",
        video: videoFallbacks.default,
        chapters: [
          "નેનો ટેકનોલોજીનો પરિચય",
          "પ્રકાશ - પરાવર્તન અને વક્રીભવન",
          "પ્રકાશનું વિભાજન અને કુદરતી પ્રકાશીય ઘટનાઓ",
          "વિદ્યુત",
          "વિદ્યુતપ્રવાહની ચુંબકીય અસરો",
          "બ્રહ્માંડ",
          "એસિડ, બેઝ અને ક્ષાર",
          "ધાતુઓ",
          "અધાતુઓ",
          "ખનિજ કોલસો અને ખનિજ તેલ",
          "કાર્બનિક સંયોજનો",
          "પોષણ અને શ્વસન",
          "સજીવોમાં વહન, પરિવહન અને ઉત્સર્જન",
          "સજીવોમાં નિયંત્રણ અને સંકલન",
          "સજીવોમાં પ્રજનન",
          "આનુવંશિકતા અને ઉત્ક્રાંતિ",
          "આપણું પર્યાવરણ",
          "નૈસર્ગિક સ્રોતોની જાળવણી",
        ],
      },
      {
        id: "social",
        label: "સામાજિક વિજ્ઞાન",
        video: videoFallbacks["10-gujarati"],
        chapters: [
          "વારસા અને રાષ્ટ્રભાવના",
          "ભારતનો સાંસ્કૃતિક વારસો",
          "સ્વાતંત્ર્ય ચળવળ",
          "ભારતનું બંધારણ",
          "લોકશાહી અને ચૂંટણી",
          "આર્થિક વિકાસ",
          "કૃષિ અને ઉદ્યોગ",
          "પર્યાવરણ અને આપત્તિ વ્યવસ્થાપન",
        ],
      },
      {
        id: "gujarati",
        label: "ગુજરાતી",
        video: videoFallbacks["10-gujarati"],
        chapters: [
          "વૈષ્ણવજન",
          "ગદ્ય પાઠ વાંચન",
          "પદ્ય પાઠ સમજણ",
          "વ્યાકરણ અભ્યાસ",
          "નિબંધ લેખન",
          "પત્ર લેખન",
          "અહેવાલ અને સંવાદ",
        ],
      },
      {
        id: "english",
        label: "અંગ્રેજી",
        video: videoFallbacks["10-gujarati"],
        chapters: [
          "વાંચન સમજ",
          "વ્યાકરણનો આધાર",
          "લેખન કૌશલ્ય",
          "કવિતાની સમજ",
          "ગદ્ય પાઠ",
          "બોર્ડ લેખન અભ્યાસ",
        ],
      },
    ],
  },
  {
    id: "7",
    label: "ધોરણ 7",
    subjects: [
      {
        id: "math",
        label: "ગણિત",
        video: videoFallbacks["7-math"],
        chapters: [
          "વર્તુળ આલેખ",
          "પૂર્ણાંક સંખ્યા",
          "વર્ગ અને વર્ગમૂળ",
          "નફો-ખોટ",
          "સમાંતર રેખાઓ",
          "બહુપદી",
          "ઘાત અને ઘાતાંક",
          "સાદું વ્યાજ",
          "કૌંસ",
          "સમીકરણ",
          "ઘનફળ",
          "ત્રિકોણની રચના",
          "કમ્પ્યુટર પરિચય - 2",
        ],
      },
      {
        id: "science",
        label: "વિજ્ઞાન",
        video: videoFallbacks["7-math"],
        chapters: [
          "ચુંબકના ગુણધર્મો",
          "આહારના ઘટકો",
          "વનસ્પતિના અંગો",
          "પાણીના ગુણધર્મો",
          "જમીનની ફળદ્રુપતા",
          "સજીવનો એકમ - કોષ",
          "ગતિ, બળ અને ઝડપ",
          "પાચનતંત્ર, શ્વસનતંત્ર અને રુધિરાભિસરણતંત્ર",
          "ઊર્જાના સ્રોતો",
          "વિદ્યુત",
          "ઉચ્ચાલન",
          "પદાર્થોનું અલગીકરણ",
          "માપન",
          "અરીસા અને પરાવર્તન",
          "વક્ર અરીસા",
          "તત્વ, સંયોજન અને મિશ્રણ",
          "સ્નાયુ-કંકાલ તંત્ર",
          "ઉષ્મા અને તાપમાન",
          "હવાનું પ્રદૂષણ",
          "આપણું સૂર્યમંડળ",
          "પોષણ શૃંખલા - આહારકડી",
          "પર્યાવરણીય સંતુલન",
        ],
      },
      {
        id: "social",
        label: "સામાજિક વિજ્ઞાન",
        video: videoFallbacks["7-math"],
        chapters: [
          "બે મહારાજ્યો",
          "પૃથ્વી ફરે છે",
          "સરકાર",
          "રાજપૂત યુગ",
          "સ્થળ અને સમય",
          "મધ્યયુગીન શાસનવ્યવસ્થા અને સ્થાપત્ય",
          "ભારત: સ્થાન, સીમા, વિસ્તાર અને ભૂપૃષ્ઠ",
          "મધ્યયુગનું દિલ્હી દર્શન",
          "રાજ્યની શાસન વ્યવસ્થા",
          "મધ્યયુગીન ગુજરાત",
          "ભારત: આબોહવા અને કુદરતી સંસાધનો",
          "અદાલતો શા માટે?",
          "મુઘલ સામ્રાજ્ય: સ્થાપના અને વિસ્તાર",
          "ભારત: ખેતી, ઉદ્યોગ અને પરિવહન",
          "મુઘલ સામ્રાજ્ય: સુવર્ણયુગ અને અસ્ત",
          "બજારમાં ગ્રાહકો",
          "મધ્યકાલીન સ્થાપત્યો",
          "ભારત: લોકજીવન",
          "જાહેર મિલકત",
          "ઈશ્વર સાથે અનુરાગ",
          "ખંડ પરિચય: ઉત્તર અમેરિકા, દક્ષિણ અમેરિકા અને યુરોપ",
        ],
      },
      {
        id: "gujarati",
        label: "ગુજરાતી",
        video: videoFallbacks["10-gujarati"],
        chapters: [
          "મેળામાં",
          "આજની ઘડી રળિયામણી",
          "પરીક્ષા",
          "બે ખાનાનો પરિગ્રહ",
          "રણમાં",
          "ભીખુ",
          "જીવન પાથેય",
          "માલમ હાલેસા માર",
          "બાનો વાગડો",
          "વલયની અવકાશી સફર",
          "અખબારી નોંધ",
          "જન્ની",
          "હાઈસ્કૂલમાં",
          "ભમીએ ગુજરાત: દક્ષિણ ભણી",
          "આવ, ભાણા આવ!",
          "ગ્રામમાતા",
          "સિંહની દોસ્તી",
          "જીવરામ ભટ્ટ",
          "સોના જેવી સવાર",
          "પાંચ દાણા",
          "સુભાષિતો",
        ],
      },
      {
        id: "english",
        label: "અંગ્રેજી",
        video: videoFallbacks["10-gujarati"],
        chapters: [
          "વિનીનું સ્મિત",
          "તમે કેટલા કર્યા?",
          "હા, હું કરીશ",
          "લાંબું, ટૂંકું, સારું",
          "મેળા - આપણી સંસ્કૃતિ",
          "ચૂનો ચોપડવાની કળા",
          "પ્રવાસનો સમય",
          "જંગલી પ્રાણીઓ",
          "પાણી આસપાસ",
          "મૂવી મેજિક",
        ],
      },
    ],
  },
];

let state = {
  standardId: "10",
  subjectId: "math",
  chapterIndex: 0,
  tab: "read",
  bookmarkOnly: false,
  progress: { completed: {}, bookmarked: {} },
};

const els = {
  standardSelect: document.querySelector("#standardSelect"),
  subjectSelect: document.querySelector("#subjectSelect"),
  searchInput: document.querySelector("#searchInput"),
  chapters: document.querySelector("#chapters"),
  chapterCount: document.querySelector("#chapterCount"),
  lessonKicker: document.querySelector("#lessonKicker"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonSummary: document.querySelector("#lessonSummary"),
  videoFrame: document.querySelector("#videoFrame"),
  videoTitle: document.querySelector("#videoTitle"),
  videoHint: document.querySelector("#videoHint"),
  videoOpen: document.querySelector("#videoOpen"),
  completeBtn: document.querySelector("#completeBtn"),
  bookmarkBtn: document.querySelector("#bookmarkBtn"),
  youtubeSearch: document.querySelector("#youtubeSearch"),
  tabPanel: document.querySelector("#tabPanel"),
  completedCount: document.querySelector("#completedCount"),
  bookmarkCount: document.querySelector("#bookmarkCount"),
  streakText: document.querySelector("#streakText"),
  heroDate: document.querySelector("#heroDate"),
  showBookmarks: document.querySelector("#showBookmarks"),
  resetProgress: document.querySelector("#resetProgress"),
  doubtInput: document.querySelector("#doubtInput"),
  doubtBtn: document.querySelector("#doubtBtn"),
  doubtAnswer: document.querySelector("#doubtAnswer"),
  practiceOutput: document.querySelector("#practiceOutput"),
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) state.progress = saved;
  } catch {
    state.progress = { completed: {}, bookmarked: {} };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function getStandard() {
  return standards.find((item) => item.id === state.standardId);
}

function getSubject() {
  return getStandard().subjects.find((item) => item.id === state.subjectId);
}

function getChapterKey(index = state.chapterIndex) {
  return `${state.standardId}-${state.subjectId}-${index}`;
}

function getChapterTitle(index = state.chapterIndex) {
  return getSubject().chapters[index];
}

function getExactVideo(index = state.chapterIndex) {
  return exactChapterVideos[getChapterKey(index)];
}

function makeSearchUrl(index = state.chapterIndex) {
  const query = [
    "GSEB",
    `Std ${state.standardId}`,
    getSubject().label,
    getChapterTitle(index),
    "ગુજરાતી માધ્યમ સંપૂર્ણ પાઠ -playlist",
  ].join(" ");
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&sp=EgIQAQ%253D%253D`;
}

function getChapterVideoUrl(index = state.chapterIndex) {
  const exactVideo = getExactVideo(index);
  return exactVideo?.url || makeSearchUrl(index);
}

function populateSelectors() {
  els.standardSelect.innerHTML = standards
    .map((standard) => `<option value="${standard.id}">${standard.label}</option>`)
    .join("");
  els.standardSelect.value = state.standardId;
  populateSubjects();
}

function populateSubjects() {
  els.subjectSelect.innerHTML = getStandard().subjects
    .map((subject) => `<option value="${subject.id}">${subject.label}</option>`)
    .join("");
  els.subjectSelect.value = state.subjectId;
}

function renderChapters() {
  const query = els.searchInput.value.trim().toLowerCase();
  const subject = getSubject();
  const rows = subject.chapters
    .map((title, index) => ({ title, index, key: getChapterKey(index) }))
    .filter((item) => {
      const matchesSearch = !query || item.title.toLowerCase().includes(query);
      const matchesBookmark = !state.bookmarkOnly || state.progress.bookmarked[item.key];
      return matchesSearch && matchesBookmark;
    });

  els.chapterCount.textContent = `${rows.length} પાઠ`;
  els.chapters.innerHTML = rows
    .map((item) => {
      const complete = state.progress.completed[item.key] ? "પૂર્ણ" : "બાકી";
      const active = item.index === state.chapterIndex ? "active" : "";
      return `
        <button class="chapter-button ${active}" type="button" data-index="${item.index}">
          <strong>${item.index + 1}. ${item.title}</strong>
          <span>${complete} • ${state.standardId === "10" ? "બોર્ડ તૈયારી" : "પાયો મજબૂત"}</span>
        </button>
      `;
    })
    .join("");

  if (!rows.some((item) => item.index === state.chapterIndex) && rows.length) {
    state.chapterIndex = rows[0].index;
  }
}

function renderLesson() {
  const subject = getSubject();
  const title = getChapterTitle();
  const key = getChapterKey();
  els.lessonKicker.textContent = `${getStandard().label} • ${subject.label}`;
  els.lessonTitle.textContent = title;
  els.lessonSummary.textContent =
    state.standardId === "10"
      ? "આ પાઠ માટે પહેલા વિચાર સમજો, પછી પાઠ્યપુસ્તકના ઉદાહરણ અને બોર્ડ પ્રકારના પ્રશ્નો ઉકેલો."
      : "આ પાઠ માટે રોજિંદા ઉદાહરણથી શરૂઆત કરો, પછી નાની પ્રેક્ટિસથી સમજ પક્કી કરો.";
  const exactVideo = getExactVideo();
  const videoUrl = getChapterVideoUrl();
  els.videoTitle.textContent = exactVideo?.title || `"${title}" માટે ચોક્કસ પાઠ વિડિયો`;
  els.videoHint.textContent = exactVideo
    ? "આ પાઠ માટે પસંદ કરેલો સીધો YouTube વિડિયો ખૂલશે."
    : "આ પાઠ માટે YouTube પર માત્ર વિડિયો પરિણામો ખૂલશે, playlist નહીં. ચોક્કસ શિક્ષકનો વિડિયો ઉમેરશો તો અહીં સીધો એ જ વિડિયો ખુલશે.";
  els.videoOpen.href = videoUrl;
  els.videoOpen.textContent = exactVideo ? "ચોક્કસ વિડિયો ખોલો" : "આ પાઠના વિડિયો શોધો";
  els.youtubeSearch.href = makeSearchUrl();
  els.completeBtn.textContent = state.progress.completed[key] ? "પૂર્ણ થયું" : "પૂર્ણ તરીકે નોંધો";
  els.bookmarkBtn.textContent = state.progress.bookmarked[key] ? "સાચવેલું" : "સાચવો";
  renderTabs();
}

function getReadingLesson() {
  const standard = getStandard().label;
  const subject = getSubject();
  const title = getChapterTitle();
  const lessonNumber = state.chapterIndex + 1;
  const base = {
    title,
    subtitle: `${standard} • ${subject.label} • પાઠ ${lessonNumber}`,
    overview: "",
    learn: [],
    explanation: [],
    example: "",
    keywords: [],
    writeAnswer: [],
    practice: [],
  };

  const lowerTitle = title.toLowerCase();
  const has = (word) => title.includes(word) || lowerTitle.includes(word.toLowerCase());

  if (subject.id === "math") {
    base.overview = `આ પાઠમાં "${title}"નો અર્થ સમજવો, નિયમ ઓળખવો અને પ્રશ્નને પગલાંમાં ઉકેલવો શીખીશું. ગણિતમાં પહેલા વિચાર સ્પષ્ટ કરવો, પછી ગણતરી કરવી.`;
    base.learn = [
      "પ્રશ્ન વાંચીને આપેલી માહિતી અને શોધવાની વસ્તુ અલગ લખવી.",
      "લાગુ પડતો નિયમ, સૂત્ર અથવા રીત ઓળખવી.",
      "નાનું ઉદાહરણ બનાવીને રીત ચકાસવી.",
      "છેલ્લે જવાબ એકમ, ચિહ્ન અને જરૂરી સમજાવટ સાથે લખવો.",
    ];
    base.explanation = [
      `"${title}"માં તમે માત્ર જવાબ મેળવતા નથી, પરંતુ કેમ તે જવાબ આવે છે તે સમજતા શીખો છો.`,
      "જો પાઠ સંખ્યા વિષયનો હોય તો સંખ્યાની કિંમત, ચિહ્ન અને ક્રમ મહત્વના બને છે. જો પાઠ ભૂમિતિનો હોય તો આકૃતિ, માપ અને ગુણધર્મ મુખ્ય બને છે.",
      "દરેક ઉદાહરણમાં એક જ રીત ફરી ફરી દેખાશે. એ રીત પકડી લો એટલે નવા પ્રશ્નો સરળ લાગે.",
    ];
    base.example = `માનો પ્રશ્નમાં "${title}"નો નિયમ લાગુ કરવો છે. પહેલા એક નાની સંખ્યા અથવા સરળ આકાર લો, નિયમ લાગુ કરો, પછી textbookના પ્રશ્નમાં એ જ પગલાં વાપરો.`;
    base.keywords = ["આપેલું", "શોધવાનું", "નિયમ", "સૂત્ર", "પગલું", "જવાબ"];
    base.writeAnswer = ["આપેલું લખો", "સૂત્ર અથવા નિયમ લખો", "ગણતરી પગલાંમાં કરો", "છેલ્લો જવાબ બોક્સમાં લખો"];
    base.practice = ["2 solved example વાંચો", "3 સરળ પ્રશ્ન જાતે કરો", "એક મુશ્કેલ પ્રશ્નમાં કયું પગલું અટકે છે તે લખો"];

    if (has("નફો") || has("ખોટ")) {
      base.overview = "આ પાઠ દુકાનદારી અને પૈસાની સમજ આપે છે. ખરીદ કિંમત, વેચાણ કિંમત, નફો અને ખોટ વચ્ચેનો સંબંધ સમજવો ખૂબ જરૂરી છે.";
      base.keywords = ["ખરીદ કિંમત", "વેચાણ કિંમત", "નફો", "ખોટ", "ટકા"];
      base.example = "વસ્તુ 100 રૂપિયામાં ખરીદી અને 120 રૂપિયામાં વેચી. વધારે મળેલા 20 રૂપિયા નફો છે. જો 90માં વેચી હોત તો 10 રૂપિયા ખોટ.";
    } else if (has("સાદું વ્યાજ")) {
      base.overview = "સાદું વ્યાજ એટલે મૂડી પર ચોક્કસ દરે ચોક્કસ સમય માટે મળતું વધારાનું પૈસું. અહીં મૂડી, દર અને સમયનો સંબંધ સમજવો છે.";
      base.keywords = ["મૂડી", "દર", "સમય", "વ્યાજ", "રકમ"];
      base.example = "1000 રૂપિયા પર 10% દરે 1 વર્ષનું સાદું વ્યાજ 100 રૂપિયા થાય. એટલે કુલ રકમ 1100 રૂપિયા.";
    } else if (has("ત્રિકોણ")) {
      base.overview = "આ પાઠમાં ત્રિકોણના માપ, બાજુઓ, ખૂણા અને રચના સમજવાની છે. આકૃતિ દોરવી એટલે અડધો પાઠ સમજાઈ ગયો.";
      base.keywords = ["બાજુ", "ખૂણો", "રચના", "માપ", "સર્વાંગસમતા"];
      base.example = "ત્રિકોણ બનાવવા માટે પહેલા આપેલી બાજુ માપો, પછી કંપાસથી બાકી માપ ગોઠવો, અને ખૂણાઓ ચકાસો.";
    } else if (has("ઘાત")) {
      base.overview = "ઘાત અને ઘાતાંક મોટી સંખ્યાઓને ટૂંકમાં લખવાની રીત છે. વારંવાર ગુણાકારને સરળ રીતે બતાવવા માટે તેનો ઉપયોગ થાય છે.";
      base.keywords = ["આધાર", "ઘાતાંક", "ગુણાકાર", "શક્તિ"];
      base.example = "2 × 2 × 2 ને 2³ લખી શકાય. અહીં 2 આધાર છે અને 3 બતાવે છે કે 2 ત્રણ વખત ગુણાય છે.";
    } else if (has("સમીકરણ")) {
      base.overview = "સમીકરણ એટલે બે બાજુ સમાન હોય તેવી ગણિતીય વાત. અજ્ઞાત સંખ્યાની કિંમત શોધવી એ મુખ્ય કામ છે.";
      base.keywords = ["અજ્ઞાત", "સમાન", "ડાબી બાજુ", "જમણી બાજુ", "ઉકેલ"];
      base.example = "x + 5 = 12 હોય તો x શોધવા 12 માંથી 5 કાઢો. એટલે x = 7.";
    }
    return base;
  }

  if (subject.id === "science") {
    base.overview = `આ પાઠ "${title}"માં કુદરત, શરીર, પદાર્થ અથવા ઊર્જાની કોઈ ઘટના સમજવાની છે. વિજ્ઞાનને યાદ કરતા પહેલાં જોવું અને કારણ પૂછવું.`;
    base.learn = [
      "મુખ્ય ઘટના અથવા પ્રક્રિયા ઓળખવી.",
      "તે ઘટના કેમ થાય છે તે કારણ સમજવું.",
      "દૈનિક જીવનમાંથી ઉદાહરણ શોધવું.",
      "આકૃતિ, કોષ્ટક અથવા ક્રમથી જવાબ ગોઠવવો.",
    ];
    base.explanation = [
      "વિજ્ઞાનમાં દરેક વાત પાછળ કારણ હોય છે. જો કારણ સમજાયું તો વ્યાખ્યા યાદ રાખવી સરળ બને છે.",
      `"${title}" વાંચતી વખતે નવા શબ્દો અલગ લખો અને દરેક શબ્દની સામે સરળ અર્થ લખો.`,
      "પ્રક્રિયા હોય તો તેને પહેલું પગલું, બીજું પગલું, ત્રીજું પગલું એમ ગોઠવો.",
    ];
    base.example = `ઘર કે શાળામાં "${title}" સાથે જોડાયેલું એક ઉદાહરણ શોધો. જે વસ્તુ આંખે દેખાય છે તેમાંથી વિજ્ઞાન ઝડપથી સમજાય છે.`;
    base.keywords = ["કારણ", "પરિણામ", "પ્રક્રિયા", "ઉદાહરણ", "આકૃતિ", "અવલોકન"];
    base.writeAnswer = ["વ્યાખ્યા લખો", "કારણ સમજાવો", "ઉદાહરણ આપો", "જરૂર હોય તો આકૃતિ દોરો"];
    base.practice = ["5 નવા શબ્દોના અર્થ લખો", "એક પ્રક્રિયા તીરવાળા ક્રમમાં લખો", "3 'શા માટે?' પ્રશ્નોના જવાબ આપો"];

    if (has("ચુંબક")) {
      base.overview = "ચુંબક કેટલીક ધાતુઓને પોતાની તરફ ખેંચે છે. આકર્ષણ, ધ્રુવ અને દિશા દર્શાવવાની ક્ષમતા આ પાઠનો આધાર છે.";
      base.keywords = ["ચુંબક", "ઉત્તર ધ્રુવ", "દક્ષિણ ધ્રુવ", "આકર્ષણ", "વિકર્ષણ"];
      base.example = "બે ચુંબકના સમાન ધ્રુવ નજીક લાવો તો દૂર ધકેલે છે, અને વિપરીત ધ્રુવ નજીક લાવો તો ખેંચે છે.";
    } else if (has("પાચન") || has("શ્વસન") || has("રુધિર")) {
      base.overview = "આ પાઠ શરીરની અંદરની વ્યવસ્થાઓ સમજાવે છે. ખોરાકમાંથી ઊર્જા મેળવવી, શ્વાસથી ઓક્સિજન લેવો અને રક્ત દ્વારા પદાર્થો પહોંચાડવા એ મુખ્ય વિચાર છે.";
      base.keywords = ["પાચન", "શ્વસન", "રક્ત", "અંગ", "તંત્ર"];
      base.example = "ખોરાક ખાધા પછી તે શરીરમાં તૂટે છે, ઉપયોગી ભાગ રક્તમાં જાય છે અને ઊર્જા માટે વપરાય છે.";
    } else if (has("વિદ્યુત")) {
      base.overview = "વિદ્યુત પ્રવાહ એટલે વિદ્યુત ઊર્જાનો વહેવાર. બંધ પરિપથ હોય ત્યારે જ બલ્બ, પંખો કે સાધન કામ કરે.";
      base.keywords = ["પરિપથ", "પ્રવાહ", "સ્વિચ", "ચાલક", "અચાલક"];
      base.example = "સ્વિચ ચાલુ કરીએ ત્યારે પરિપથ પૂર્ણ થાય છે અને બલ્બ પ્રકાશ આપે છે.";
    } else if (has("ઉષ્મા") || has("તાપમાન")) {
      base.overview = "ઉષ્મા ઊર્જા છે અને તાપમાન ગરમી-ઠંડકનું માપ છે. બંને એકસરખા નથી, પણ સંબંધિત છે.";
      base.keywords = ["ઉષ્મા", "તાપમાન", "થર્મોમીટર", "વહન", "સંવહન"];
      base.example = "ગરમ ચા કપને ગરમ કરે છે કારણ કે ઉષ્મા ચાથી કપમાં જાય છે.";
    } else if (has("સૂર્યમંડળ")) {
      base.overview = "સૂર્યમંડળમાં સૂર્ય, ગ્રહો, ઉપગ્રહો અને અન્ય ખગોળીય પદાર્થો છે. સૂર્ય કેન્દ્રમાં છે અને ગ્રહો તેની આસપાસ ફરે છે.";
      base.keywords = ["સૂર્ય", "ગ્રહ", "ઉપગ્રહ", "ભ્રમણ", "પરિક્રમા"];
      base.example = "પૃથ્વી પોતાની ધરી પર ફરે એટલે દિવસ-રાત થાય અને સૂર્યની પરિક્રમા કરે એટલે ઋતુઓનું ચક્ર બને.";
    }
    return base;
  }

  if (subject.id === "social") {
    base.overview = `"${title}" પાઠમાં સમાજ, ઇતિહાસ, ભૂગોળ અથવા નાગરિક જીવનની સમજ છે. અહીં યાદ કરવું પૂરતું નથી; કારણ અને અસર જોડવી જરૂરી છે.`;
    base.learn = [
      "કોણ, ક્યાં, ક્યારે અને કેમ - આ ચાર પ્રશ્ન પૂછવા.",
      "સ્થળ હોય તો નકશા સાથે સમજવું.",
      "ઘટના હોય તો કારણ, ઘટના અને પરિણામ ગોઠવવું.",
      "નાગરિક વિષય હોય તો પોતાના જીવનમાંથી ઉદાહરણ આપવું.",
    ];
    base.explanation = [
      "સામાજિક વિજ્ઞાન આપણને માણસો અને સમાજ કેવી રીતે બદલાય છે તે સમજાવે છે.",
      `"${title}" માટે નાની સમયરેખા, નકશો અથવા મુદ્દાવાર કોષ્ટક બનાવશો તો લાંબા જવાબ સરળ થશે.`,
      "જવાબ લખતી વખતે માત્ર નામો ન લખો; તેની પાછળનું કારણ અને અસર ઉમેરો.",
    ];
    base.example = `જો પાઠ શાસન વિશે હોય તો ગામ, તાલુકા અથવા રાજ્ય સરકારનું ઉદાહરણ લો. જો ભૂગોળ હોય તો ભારતના નકશામાં સ્થાન શોધો.`;
    base.keywords = ["કારણ", "અસર", "સ્થળ", "સમય", "શાસન", "સમાજ"];
    base.writeAnswer = ["પરિચય લખો", "મુખ્ય મુદ્દા ગોઠવો", "ઉદાહરણ અથવા નકશો ઉમેરો", "અંતે અસર લખો"];
    base.practice = ["5 મુદ્દાનો સાર લખો", "નકશો/સમયરેખા બનાવો", "એક લાંબા જવાબને 3 ભાગમાં લખો"];
    return base;
  }

  if (subject.id === "gujarati") {
    base.overview = `"${title}" પાઠ વાંચતી વખતે માત્ર કથા કે કવિતા નહીં, પરંતુ ભાવ, ભાષા અને સંદેશ સમજવો છે.`;
    base.learn = [
      "પાઠનો મુખ્ય ભાવ શોધવો.",
      "નવા શબ્દો અને તેમના અર્થ લખવા.",
      "લેખક/કવિ શું કહેવા માંગે છે તે સમજવું.",
      "પ્રશ્નનો જવાબ પોતાના શબ્દોમાં લખવો.",
    ];
    base.explanation = [
      "પાઠ એક વાર આનંદથી વાંચો, બીજી વાર પેન્સિલથી નવા શબ્દો નિશાન કરો, અને ત્રીજી વાર મુખ્ય વિચાર લખો.",
      "કવિતા હોય તો ભાવ, અલંકાર અને ચિત્રાત્મક ભાષા જુઓ. ગદ્ય હોય તો ઘટના, પાત્ર અને સંદેશ જુઓ.",
      "ગુજરાતીમાં સુંદર જવાબ માટે શુદ્ધલેખન, સરળ વાક્ય અને યોગ્ય ઉદાહરણ ખૂબ કામ આવે છે.",
    ];
    base.example = `"${title}"માંથી એક પ્રિય વાક્ય પસંદ કરો. તે વાક્ય કેમ ગમ્યું તે 2 વાક્યમાં લખો.`;
    base.keywords = ["ભાવ", "મુખ્ય વિચાર", "પાત્ર", "સંદેશ", "શુદ્ધલેખન"];
    base.writeAnswer = ["પ્રશ્ન શું પૂછે છે તે વાંચો", "2-3 મુખ્ય મુદ્દા વિચારો", "સરળ વાક્યમાં જવાબ લખો", "શુદ્ધલેખન તપાસો"];
    base.practice = ["5 શબ્દોના અર્થ લખો", "પાઠનો સાર 5 વાક્યમાં લખો", "એક પ્રશ્નનો જવાબ પોતાના શબ્દોમાં લખો"];
    return base;
  }

  base.overview = `"${title}" પાઠમાં અંગ્રેજી વાંચન, શબ્દભંડોળ અને વાક્ય બનાવવાની પ્રેક્ટિસ છે. ગુજરાતી અર્થ મદદરૂપ છે, પણ વાક્ય અંગ્રેજીમાં બનાવવાની ટેવ પાડવી.`;
  base.learn = [
    "નવા શબ્દો વાંચવા અને ઉચ્ચાર કરવા.",
    "દરેક શબ્દનો ગુજરાતી અર્થ સમજવો.",
    "સરળ અંગ્રેજી વાક્ય બનાવવું.",
    "પાઠનો નાનો સાર બોલવો.",
  ];
  base.explanation = [
    "પાઠ પહેલા ધીમે અવાજે વાંચો. જે શબ્દ અટકે તેને અલગ લખો.",
    "શબ્દનો અર્થ યાદ કર્યા પછી તરત વાક્ય બનાવો. માત્ર અર્થ યાદ કરવાથી ભાષા આવતી નથી.",
    "દરરોજ 5 મિનિટ અંગ્રેજી ઊંચે અવાજે વાંચવાથી fluency વધે છે.",
  ];
  base.example = `શબ્દ: school. વાક્ય: I go to school every day. આ રીતે "${title}"માંથી 5 શબ્દો પસંદ કરો.`;
  base.keywords = ["word", "meaning", "sentence", "reading", "speaking"];
  base.writeAnswer = ["પ્રશ્ન વાંચો", "મુખ્ય શબ્દ ઓળખો", "સરળ વાક્ય બનાવો", "spelling તપાસો"];
  base.practice = ["5 શબ્દોના અર્થ લખો", "5 અંગ્રેજી વાક્ય બોલો", "પાઠનો 3 વાક્યમાં સાર લખો"];
  return base;
}

function getTeachingContent() {
  const standard = getStandard().label;
  const subject = getSubject();
  const title = getChapterTitle();
  const commonIntro = `${standard}ના "${title}" પાઠને આપણે ડર વગર સમજવાનો છે. પહેલા શબ્દો સરળ બનાવીએ, પછી એક નાનું ઉદાહરણ લઈએ, અને છેલ્લે પ્રશ્ન કેવી રીતે લખવો તે શીખીએ.`;
  const chapterQuestions = {
    math: [
      `"${title}"માં કયો નિયમ અથવા સૂત્ર વારંવાર આવે છે?`,
      "પ્રશ્નમાં આપેલું અને શોધવાનું અલગ લખી શકાય છે?",
      "આ જ રીત નાની સંખ્યાઓ પર અજમાવીએ તો જવાબ સમજાય છે?",
    ],
    science: [
      `"${title}"માં મુખ્ય પ્રક્રિયા કે ઘટના કઈ છે?`,
      "આ બાબત ઘરમાં, ખેતરમાં, રસ્તા પર કે શરીરમાં ક્યાં જોવા મળે છે?",
      "કારણ, પરિણામ અને ઉદાહરણ અલગથી સમજાવી શકાય છે?",
    ],
    social: [
      `"${title}"માં મુખ્ય લોકો, સ્થળો અથવા સંસ્થાઓ કઈ છે?`,
      "આ ઘટના કેમ થઈ અને તેની સમાજ પર શું અસર પડી?",
      "આ પાઠને નકશો, સમયરેખા કે કોષ્ટકમાં ગોઠવી શકાય છે?",
    ],
    gujarati: [
      `"${title}"નો મુખ્ય ભાવ શું છે?`,
      "લેખક અથવા કવિ આપણને કઈ વાત સમજાવે છે?",
      "આ પાઠમાંથી 5 નવા શબ્દો અને 3 સુંદર વાક્યો કયા છે?",
    ],
    english: [
      `"${title}"માં 5 નવા શબ્દો કયા છે?`,
      "આ શબ્દોથી સરળ અંગ્રેજી વાક્ય બનાવી શકાય છે?",
      "આ પાઠનો અર્થ ગુજરાતીમાંથી અંગ્રેજીમાં ધીમે ધીમે કહી શકાય છે?",
    ],
  };

  const bySubject = {
    math: {
      idea: "ગણિતમાં જવાબ કરતાં રીત વધુ મહત્વની છે. દરેક પ્રશ્નમાં આપેલું શું છે, શું શોધવાનું છે, કયો નિયમ લાગશે, અને છેલ્લે જવાબ કયા એકમમાં લખવો છે તે ચાર પગલાં યાદ રાખો.",
      example: `જો પાઠ "${title}" છે, તો એક સરળ સંખ્યા લઈને નિયમ અજમાવો. નિયમ નાના ઉદાહરણમાં કામ કરે છે કે નહીં તે સમજાય પછી જ textbookનો મોટો પ્રશ્ન ઉકેલો.`,
      friend: "ભૂલ થાય તો ખરાબ ન માનતા. ગણિતમાં ભૂલ એટલે નકશો મળ્યો કે ક્યાં ધ્યાન આપવું.",
      mistakes: ["સૂત્ર યાદ કરીને અર્થ ભૂલી જવો", "પગલાં છોડીને સીધો જવાબ લખવો", "ચિહ્ન, એકમ અથવા દિશા ન લખવી"],
      practice: ["એક solved example ઢાંકી દો અને જાતે ઉકેલો", "3 સરળ, 2 મધ્યમ અને 1 મુશ્કેલ પ્રશ્ન કરો", "ભૂલવાળો પ્રશ્ન બીજા દિવસે ફરી ઉકેલો"],
    },
    science: {
      idea: "વિજ્ઞાનમાં દરેક પાઠ પાછળ 'શા માટે આવું થાય છે?' એવો પ્રશ્ન છે. વ્યાખ્યા, પ્રક્રિયા, કારણ અને ઉદાહરણ એમ ચાર ભાગમાં પાઠ ગોઠવો.",
      example: `"${title}" માટે ઘર, શાળા કે ગામમાંથી એક ઉદાહરણ શોધો. ઉદાહરણ મળ્યું એટલે પાઠ પુસ્તકની બહાર જીવતો લાગે છે.`,
      friend: "વિજ્ઞાન રટવાનું નથી; જોવાનું, પૂછવાનું અને કારણ શોધવાનું છે.",
      mistakes: ["વ્યાખ્યા યાદ રાખીને ઉદાહરણ ન આપવું", "આકૃતિમાં લેબલ ભૂલી જવું", "કારણ અને પરિણામ ભેળવી દેવું"],
      practice: ["પાઠની 5 વ્યાખ્યાઓ લખો", "એક પ્રક્રિયા તીરવાળા ચિત્રથી સમજાવો", "શા માટે/કેવી રીતે પ્રકારના 3 પ્રશ્નોના મૌખિક જવાબ આપો"],
    },
    social: {
      idea: "સામાજિક વિજ્ઞાનમાં ઘટના, સ્થળ, સમય, માણસ અને અસર જોડીને સમજવું. કોણે શું કર્યું એટલું પૂરતું નથી; કેમ થયું અને લોકો પર શું અસર પડી તે પણ લખવું.",
      example: `"${title}" વાંચતી વખતે નકશો, સમયરેખા અથવા કોષ્ટક બનાવો. ઇતિહાસમાં સમયરેખા, ભૂગોળમાં નકશો અને નાગરિકશાસ્ત્રમાં ઉદાહરણ બહુ મદદ કરે છે.`,
      friend: "આ વિષય સમાજને સમજવાનો ચશ્મો છે. જવાબમાં પોતાનો વિચાર પણ ગોઠવીને લખવો.",
      mistakes: ["વર્ષ અને ઘટના ગોટાળી દેવી", "નકશા વગર ભૂગોળ સમજવાનો પ્રયત્ન કરવો", "લાંબા જવાબમાં મુદ્દા ન પાડવા"],
      practice: ["5 મુદ્દાની સમયરેખા બનાવો", "એક નાનો નકશો અથવા કોષ્ટક દોરો", "એક પ્રશ્નનો જવાબ 'કારણ-ઘટના-અસર' પ્રમાણે લખો"],
    },
    gujarati: {
      idea: "ગુજરાતીમાં પાઠનો ભાવ, મુખ્ય વિચાર, નવા શબ્દો અને લેખક શું કહેવા માંગે છે તે સમજવું. ભાષા વિષયમાં સુંદર જવાબ માટે વાક્યરચના અને ઉદાહરણ બંને જરૂરી છે.",
      example: `"${title}" વાંચીને પહેલા 5 નવા શબ્દો લખો. પછી પાઠનો મુખ્ય ભાવ 3 વાક્યમાં તમારા શબ્દોમાં લખો.`,
      friend: "ગુજરાતી મજબૂત હોય તો બધા વિષયના જવાબ વધુ સારી રીતે લખાય છે.",
      mistakes: ["પાઠ યાદ કરીને ભાવ ન સમજવો", "શુદ્ધલેખન અવગણવું", "પ્રશ્ન જેટલું પૂછે છે તેની બહાર લખવું"],
      practice: ["મુખ્ય વિચાર 3 વાક્યમાં લખો", "5 નવા શબ્દોના વાક્ય બનાવો", "એક ટૂંકો અનુચ્છેદ શુદ્ધલેખન સાથે લખો"],
    },
    english: {
      idea: "અંગ્રેજીમાં પહેલા અર્થ સમજવો, પછી વાક્ય બનાવવું. ગુજરાતી અર્થ મદદરૂપ છે, પણ ધીમે ધીમે અંગ્રેજી વાક્ય પોતે બોલવાની ટેવ પાડવી.",
      example: `"${title}" માટે 5 શબ્દો લો. દરેક શબ્દનો ગુજરાતી અર્થ લખો અને પછી એક સરળ અંગ્રેજી વાક્ય બનાવો.`,
      friend: "અંગ્રેજી બોલતી વખતે ભૂલ થવી સામાન્ય છે. બોલશો તો જ સુધરશે.",
      mistakes: ["શબ્દનો અર્થ યાદ રાખીને વાક્ય ન બનાવવું", "કાલ બદલાય ત્યારે ક્રિયાપદ ન બદલવું", "વાંચતી વખતે ઉચ્ચાર પર ધ્યાન ન આપવું"],
      practice: ["5 નવા શબ્દોના અર્થ અને વાક્ય લખો", "પાઠમાંથી 4 વાક્ય ઊંચે અવાજે વાંચો", "એક નાનો પરિચય અથવા સંવાદ બોલો"],
    },
  };

  const content = bySubject[subject.id] || bySubject.gujarati;
  return { commonIntro, questions: chapterQuestions[subject.id] || chapterQuestions.gujarati, ...content };
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === state.tab);
  });
  const title = getChapterTitle();
  if (state.tab === "read") {
    const lesson = getReadingLesson();
    els.tabPanel.innerHTML = `
      <div class="read-panel">
        <div class="read-hero">
          <span>${lesson.subtitle}</span>
          <h3>${lesson.title}</h3>
          <p>${lesson.overview}</p>
        </div>
        <div class="concept-grid">
          <section class="concept-card">
            <h3>આ પાઠ શીખ્યા પછી તમે શું કરી શકશો?</h3>
            <ul>${lesson.learn.map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>
          <section class="concept-card">
            <h3>ધીમે ધીમે સમજીએ</h3>
            <ol>${lesson.explanation.map((item) => `<li>${item}</li>`).join("")}</ol>
          </section>
          <section class="concept-card">
            <h3>સરળ ઉદાહરણ</h3>
            <p>${lesson.example}</p>
          </section>
          <section class="concept-card">
            <h3>યાદ રાખવાના શબ્દો</h3>
            <div class="keyword-row">${lesson.keywords.map((item) => `<span>${item}</span>`).join("")}</div>
          </section>
          <section class="concept-card">
            <h3>જવાબ કેવી રીતે લખવો?</h3>
            <ol>${lesson.writeAnswer.map((item) => `<li>${item}</li>`).join("")}</ol>
          </section>
          <section class="concept-card">
            <h3>હવે પ્રેક્ટિસ</h3>
            <ul>${lesson.practice.map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>
        </div>
      </div>
    `;
    return;
  }
  if (state.tab === "teach") {
    const content = getTeachingContent();
    els.tabPanel.innerHTML = `
      <div class="teacher-panel">
        <h3>મિત્ર જેવી સમજાવટ</h3>
        <p>${content.commonIntro}</p>
        <h3>મૂળ વિચાર</h3>
        <p>${content.idea}</p>
        <h3>આ પાઠના મુખ્ય પ્રશ્નો</h3>
        <ul>${content.questions.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h3>સરળ ઉદાહરણ</h3>
        <p>${content.example}</p>
        <h3>મિત્ર ટીપ</h3>
        <p>${content.friend}</p>
        <h3>આ ભૂલો ટાળો</h3>
        <ul>${content.mistakes.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h3>હવે તરત કરો</h3>
        <ul>${content.practice.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    `;
    return;
  }
  if (state.tab === "steps") {
    els.tabPanel.innerHTML = `
      <ul>
        <li>પહેલા આખો વિડિયો ઝડપથી ન જુઓ. 10-12 મિનિટ પછી રોકીને મુદ્દો લખો.</li>
        <li>પુસ્તકમાં આ પાઠનાં મથાળાં અને વ્યાખ્યાઓ રેખાંકિત કરો.</li>
        <li>જે ઉદાહરણ સમજાયું હોય તે જાતે ફરી ઉકેલો.</li>
        <li>છેલ્લે YouTube શોધમાંથી બીજા શિક્ષકનો એક નાનો પુનરાવર્તન વિડિયો જુઓ.</li>
      </ul>
    `;
    return;
  }
  if (state.tab === "notes") {
    els.tabPanel.innerHTML = `
      <ul>
        <li><strong>મુખ્ય પાઠ:</strong> ${title}</li>
        <li><strong>નોટબુક રીત:</strong> વ્યાખ્યા, ઉદાહરણ, ભૂલ, પુનરાવર્તન એમ ચાર ખાના બનાવો.</li>
        <li><strong>બોર્ડ તૈયારી:</strong> લાંબા જવાબ પહેલાં 3 મુખ્ય શબ્દો લખવાની ટેવ પાડો.</li>
        <li><strong>ઘરે અભ્યાસ:</strong> 20 મિનિટ વાંચન, 15 મિનિટ પ્રશ્નો, 10 મિનિટ પુનરાવર્તન.</li>
      </ul>
    `;
    return;
  }
  els.tabPanel.innerHTML = `
    <div class="quiz-box">
      <strong>ઝડપી તપાસ: આ પાઠ પૂરો થયા પછી કઈ ટેવ સૌથી ઉપયોગી છે?</strong>
      <button class="quiz-option" type="button" data-correct="false">માત્ર વિડિયો જોવો અને બંધ કરી દેવું</button>
      <button class="quiz-option" type="button" data-correct="true">વિડિયો પછી 3 મુદ્દા લખીને 2 પ્રશ્નો ઉકેલવા</button>
      <button class="quiz-option" type="button" data-correct="false">મુશ્કેલ ભાગ છોડીને આગળ વધી જવું</button>
    </div>
  `;
}

function renderStats() {
  const completed = Object.keys(state.progress.completed).filter((key) => state.progress.completed[key]).length;
  const bookmarked = Object.keys(state.progress.bookmarked).filter((key) => state.progress.bookmarked[key]).length;
  els.completedCount.textContent = completed;
  els.bookmarkCount.textContent = bookmarked;
  els.streakText.textContent = completed > 0 ? "ચાલુ" : "શરૂ";
}

function renderAll() {
  renderChapters();
  renderLesson();
  renderStats();
}

function handleDoubt() {
  const value = els.doubtInput.value.trim();
  const chapter = getChapterTitle();
  if (!value) {
    els.doubtAnswer.innerHTML = `
      <strong>શરૂઆત અહીંથી કરો</strong>
      <p>હાલનો પાઠ "${chapter}" છે. વિડિયો 10 મિનિટ જુઓ અને એક ચોક્કસ પ્રશ્ન લખો: "મને કયો શબ્દ, સૂત્ર, અથવા પગલું સમજાતું નથી?"</p>
    `;
    return;
  }
  els.doubtAnswer.innerHTML = `
    <strong>અભ્યાસ માર્ગ</strong>
    <p>તમારો પ્રશ્ન: "${value}"</p>
    <p>1. આ મુદ્દા માટે પાઠમાં વ્યાખ્યા શોધો. 2. એક સરળ ઉદાહરણ લખો. 3. YouTube પર આ જ શબ્દ સાથે "ગુજરાતી માધ્યમ" ઉમેરો. 4. શિક્ષકને પૂછતી વખતે કહો: "મને પગલું કયા ભાગે બદલાય છે તે સમજાવો."</p>
  `;
}

function handlePractice(type) {
  const messages = {
    formula: "5 મિનિટમાં આ પાઠના બધા સૂત્રો અને વ્યાખ્યાઓ ખાલી કાગળ પર લખો. પછી પુસ્તક જોઈને ખૂટેલું અલગ રંગથી ઉમેરો.",
    oral: "ઘરે કોઈને 2 મિનિટમાં આ પાઠ સમજાવો. અટકો ત્યાં તમારી સમજ હજુ નબળી છે.",
    writing: "એક પાઠ્યપુસ્તકનો પ્રશ્ન સંપૂર્ણ રીતે લખો: આપેલું, સૂત્ર, ઉકેલ, જવાબ. રજૂઆતના ગુણ અહીંથી વધે છે.",
    exam: "15 મિનિટનો સમય રાખો. સરળ પ્રશ્ન પહેલા, પછી મધ્યમ, પછી મુશ્કેલ. બોર્ડ પેપરમાં આ ટેવ બહુ કામ આવે છે.",
  };
  els.practiceOutput.textContent = messages[type];
}

function bindEvents() {
  els.standardSelect.addEventListener("change", (event) => {
    state.standardId = event.target.value;
    state.subjectId = getStandard().subjects[0].id;
    state.chapterIndex = 0;
    populateSubjects();
    renderAll();
  });

  els.subjectSelect.addEventListener("change", (event) => {
    state.subjectId = event.target.value;
    state.chapterIndex = 0;
    renderAll();
  });

  els.searchInput.addEventListener("input", renderChapters);

  els.chapters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    state.chapterIndex = Number(button.dataset.index);
    renderAll();
  });

  els.completeBtn.addEventListener("click", () => {
    const key = getChapterKey();
    state.progress.completed[key] = !state.progress.completed[key];
    saveProgress();
    renderAll();
  });

  els.bookmarkBtn.addEventListener("click", () => {
    const key = getChapterKey();
    state.progress.bookmarked[key] = !state.progress.bookmarked[key];
    saveProgress();
    renderAll();
  });

  els.showBookmarks.addEventListener("click", () => {
    state.bookmarkOnly = !state.bookmarkOnly;
    els.showBookmarks.textContent = state.bookmarkOnly ? "બધા પાઠ" : "સાચવેલા";
    renderAll();
  });

  document.querySelector(".lesson-tabs").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-tab]");
    if (!tab) return;
    state.tab = tab.dataset.tab;
    renderTabs();
  });

  els.tabPanel.addEventListener("click", (event) => {
    const option = event.target.closest(".quiz-option");
    if (!option) return;
    document.querySelectorAll(".quiz-option").forEach((item) => item.classList.remove("correct", "wrong"));
    option.classList.add(option.dataset.correct === "true" ? "correct" : "wrong");
  });

  els.doubtBtn.addEventListener("click", handleDoubt);

  document.querySelectorAll("[data-practice]").forEach((button) => {
    button.addEventListener("click", () => handlePractice(button.dataset.practice));
  });

  els.resetProgress.addEventListener("click", () => {
    state.progress = { completed: {}, bookmarked: {} };
    saveProgress();
    renderAll();
  });
}

function init() {
  loadProgress();
  els.heroDate.textContent = new Date().toLocaleDateString("gu-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });
  populateSelectors();
  bindEvents();
  renderAll();
  handlePractice("formula");
}

init();
