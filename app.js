(() => {
  const activities = window.NISL_ACTIVITIES || [];

  const ui = {
    en: {
      brandTag: "Start well. Learn together. Flourish.",
      beta: "NISL Staff Resource · Beta",
      eyebrow: "Flexible first lessons for whatever walks through the door",
      heroTitle: "What do you need today?",
      heroIntro: "Choose a class, a focus and the time you have. We will build a ready-to-teach lesson using simple equipment and age-appropriate activities.",
      pathKnowTitle: "Get to know them",
      pathKnowText: "Names, personalities, confidence and connection.",
      pathLearnTitle: "Learn something together",
      pathLearnText: "A zero-prior-knowledge subject or thinking challenge.",
      pathCultureTitle: "Build our classroom",
      pathCultureText: "Relationships, expectations, student voice and Flourish.",
      ageLabel: "Who have you got?",
      timeLabel: "How long have you got?",
      focusLabel: "What do you want to learn about the class?",
      subjectLabel: "Choose a subject",
      flourishLabel: "Include a Flourish moment",
      flourishHelp: "A light-touch connection to Ready, Respectful, Responsible or Safe.",
      lowPrepLabel: "Board, paper and pens only",
      lowPrepHelp: "Keep it usable without specialist equipment.",
      createLesson: "Create my lesson",
      quickNote: "<strong>Designed for timetable limbo.</strong> No class list, no prior knowledge and no specialist resources required.",
      changeChoices: "Change choices",
      anotherLesson: "Another lesson",
      lessonTwo: "Give me Lesson 2",
      studentView: "Student view",
      print: "Print",
      learnAbout: "You will learn about",
      youNeed: "You need",
      teacherLens: "Teacher lens",
      whatToNotice: "What to notice",
      ageAdaptation: "Age adaptation",
      adjustPrompt: "Need to tweak it on the fly?",
      makeEasier: "Make it easier",
      makeHarder: "Make it harder",
      teacherView: "Back to teacher view",
      footerText: "Built for flexible starts, cover, transition and tutor time.",
      focusNames: "Names",
      focusPersonalities: "Personalities",
      focusConfidence: "Confidence",
      focusTeamwork: "Teamwork",
      focusCommunication: "Communication",
      focusSubjectConfidence: "Subject confidence",
      focusCreativity: "Creativity",
      focusExpectations: "Classroom expectations",
      subjectSurprise: "Surprise me",
      starter: "Do now",
      connect: "Get moving",
      challenge: "Main challenge",
      flourish: "Flourish moment",
      extension: "Stretch it",
      exit: "Exit reflection",
      mins: "mins",
      lesson: "Lesson",
      lesson2: "Lesson 2",
      pathwayKnow: "Get to know them",
      pathwayLearn: "Learn something together",
      pathwayCulture: "Build our classroom",
      noEquipment: "No specialist equipment",
      simplify: "Simplify it: reduce the number of choices, model the first example, use pairs before whole-class sharing and accept drawings or keywords instead of full explanations.",
      stretch: "Stretch it: remove one scaffold, require stronger justification, introduce a constraint and ask students to evaluate another group’s approach before improving their own.",
      studentMode: "Student view is on. Use this on the board and keep the teacher notes private.",
      ageTitles: {
        eyfs: "KG / EYFS",
        "y1-2": "Years 1–2",
        "y3-4": "Years 3–4",
        "y5-6": "Years 5–6",
        "y7-9": "Years 7–9",
        "y10-12": "Years 10–12"
      },
      ageNotes: {
        eyfs: "Read instructions aloud, demonstrate rather than explain, keep turns short, use drawing and movement, and prioritise names, safety and belonging over written output.",
        "y1-2": "Model each step, use concrete examples, keep groups small and allow drawing or oral answers where writing would slow the activity down.",
        "y3-4": "Give a clear model, use short timed stages and ask for one reason behind choices rather than long written explanations.",
        "y5-6": "Expect students to justify choices, share roles in groups and begin evaluating which approaches work best and why.",
        "y7-9": "Keep the pace brisk, avoid forced personal disclosure, ask for evidence and use the activity to notice group dynamics as much as final answers.",
        "y10-12": "Treat students as emerging adults: increase ambiguity, justification and critique, and give them greater ownership of how they present or organise the task."
      },
      subjects: {
        surprise: "Surprise me",
        english: "English",
        maths: "Maths",
        science: "Science",
        humanities: "Humanities",
        computing: "Computing",
        languages: "Languages",
        art: "Art & Design",
        pe: "PE"
      }
    },
    ar: {
      brandTag: "ابدأ جيداً. تعلموا معاً. ازدهروا.",
      beta: "مورد لموظفي NISL · نسخة تجريبية",
      eyebrow: "حصص أولى مرنة لأي صف يدخل من الباب",
      heroTitle: "ماذا تحتاج اليوم؟",
      heroIntro: "اختر المرحلة والهدف والوقت المتاح. سنبني حصة جاهزة للتدريس باستخدام أدوات بسيطة وأنشطة مناسبة للعمر.",
      pathKnowTitle: "تعرّف إليهم",
      pathKnowText: "الأسماء والشخصيات والثقة وبناء الروابط.",
      pathLearnTitle: "تعلّموا شيئاً معاً",
      pathLearnText: "تحدٍ في مادة أو تفكير لا يحتاج إلى معرفة سابقة.",
      pathCultureTitle: "ابنوا صفنا",
      pathCultureText: "العلاقات والتوقعات وصوت الطالب وقيم الازدهار.",
      ageLabel: "من أمامك؟",
      timeLabel: "كم لديك من الوقت؟",
      focusLabel: "ماذا تريد أن تعرف عن الصف؟",
      subjectLabel: "اختر مادة",
      flourishLabel: "أضف لحظة ازدهار",
      flourishHelp: "ربط خفيف بقيم مستعد أو محترم أو مسؤول أو آمن.",
      lowPrepLabel: "سبورة وورق وأقلام فقط",
      lowPrepHelp: "اجعل الحصة قابلة للتنفيذ دون أدوات متخصصة.",
      createLesson: "أنشئ حصتي",
      quickNote: "<strong>مصمم لفترة عدم وضوح الجدول.</strong> لا تحتاج إلى قائمة صف أو معرفة سابقة أو موارد متخصصة.",
      changeChoices: "غيّر الاختيارات",
      anotherLesson: "حصة أخرى",
      lessonTwo: "أعطني الحصة الثانية",
      studentView: "عرض الطالب",
      print: "طباعة",
      learnAbout: "ستتعرف إلى",
      youNeed: "تحتاج إلى",
      teacherLens: "عدسة المعلم",
      whatToNotice: "ما الذي تلاحظه",
      ageAdaptation: "تكييف حسب العمر",
      adjustPrompt: "تحتاج إلى تعديل سريع؟",
      makeEasier: "اجعلها أسهل",
      makeHarder: "اجعلها أصعب",
      teacherView: "العودة إلى عرض المعلم",
      footerText: "مصمم للبدايات المرنة وحصص التغطية والانتقال ووقت الإرشاد.",
      focusNames: "الأسماء",
      focusPersonalities: "الشخصيات",
      focusConfidence: "الثقة",
      focusTeamwork: "العمل الجماعي",
      focusCommunication: "التواصل",
      focusSubjectConfidence: "الثقة في المادة",
      focusCreativity: "الإبداع",
      focusExpectations: "توقعات الصف",
      subjectSurprise: "فاجئني",
      starter: "ابدأ الآن",
      connect: "ابدأ النشاط",
      challenge: "التحدي الرئيسي",
      flourish: "لحظة ازدهار",
      extension: "تحدٍ إضافي",
      exit: "تأمل ختامي",
      mins: "دقائق",
      lesson: "الحصة",
      lesson2: "الحصة الثانية",
      pathwayKnow: "تعرّف إليهم",
      pathwayLearn: "تعلّموا شيئاً معاً",
      pathwayCulture: "ابنوا صفنا",
      noEquipment: "لا توجد أدوات متخصصة",
      simplify: "بسّط النشاط: قلّل عدد الاختيارات، اعرض مثالاً أولاً، استخدم الأزواج قبل المشاركة أمام الصف، واقبل الرسوم أو الكلمات المفتاحية بدلاً من الشرح الكامل.",
      stretch: "ارفع مستوى التحدي: احذف أحد أشكال الدعم، اطلب تبريراً أقوى، أضف قيداً جديداً واطلب من الطلاب تقييم نهج مجموعة أخرى قبل تحسين نهجهم.",
      studentMode: "عرض الطالب مفعّل. استخدمه على الشاشة واحتفظ بملاحظات المعلم خاصة.",
      ageTitles: {
        eyfs: "الروضة / السنوات المبكرة",
        "y1-2": "الصفان 1–2",
        "y3-4": "الصفان 3–4",
        "y5-6": "الصفان 5–6",
        "y7-9": "الصفوف 7–9",
        "y10-12": "الصفوف 10–12"
      },
      ageNotes: {
        eyfs: "اقرأ التعليمات بصوت واضح واعرض ما تريد بدلاً من الشرح الطويل. اجعل الأدوار قصيرة واستخدم الرسم والحركة وركز على الأسماء والأمان والانتماء أكثر من الكتابة.",
        "y1-2": "اعرض نموذجاً لكل خطوة واستخدم أمثلة ملموسة ومجموعات صغيرة. اسمح بالرسم أو الإجابات الشفهية عندما تبطئ الكتابة النشاط.",
        "y3-4": "قدم نموذجاً واضحاً واستخدم مراحل قصيرة محددة بالوقت واطلب سبباً واحداً للاختيارات بدلاً من شروحات كتابية طويلة.",
        "y5-6": "توقع من الطلاب تبرير الاختيارات وتقاسم الأدوار داخل المجموعة والبدء في تقييم أي الأساليب يعمل بشكل أفضل ولماذا.",
        "y7-9": "حافظ على إيقاع سريع وتجنب إجبار الطلاب على مشاركة معلومات شخصية. اطلب الأدلة واستخدم النشاط لملاحظة ديناميكيات المجموعة بقدر النتيجة النهائية.",
        "y10-12": "عامل الطلاب كراشدين ناشئين: زد الغموض والتبرير والنقد وامنحهم ملكية أكبر لطريقة تقديم المهمة وتنظيمها."
      },
      subjects: {
        surprise: "فاجئني",
        english: "اللغة الإنجليزية",
        maths: "الرياضيات",
        science: "العلوم",
        humanities: "الإنسانيات",
        computing: "الحوسبة",
        languages: "اللغات",
        art: "الفنون والتصميم",
        pe: "التربية البدنية"
      }
    }
  };

  let language = "en";
  let currentActivity = null;
  let currentLessonNumber = 1;
  let studentMode = false;

  const $ = (id) => document.getElementById(id);
  const lessonForm = $("lessonForm");
  const builder = $("builder");
  const resultSection = $("resultSection");
  const pathwayInput = $("pathway");
  const subjectField = $("subjectField");
  const focusField = $("focusField");

  function t(key) {
    return ui[language][key] ?? ui.en[key] ?? key;
  }

  function local(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[language] || value.en || "";
  }

  function updateLanguage() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dir = document.documentElement.dir;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = t(key);
      if (key === "quickNote") el.innerHTML = value;
      else el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-option]").forEach((el) => {
      el.textContent = t(el.dataset.i18nOption);
    });

    const ageOptions = $("age").options;
    [...ageOptions].forEach((option) => {
      option.textContent = ui[language].ageTitles[option.value];
    });

    [...$("duration").options].forEach((option) => {
      option.textContent = `${option.value} ${language === "ar" ? "دقيقة" : "minutes"}`;
    });

    [...$("subject").options].forEach((option) => {
      option.textContent = ui[language].subjects[option.value] || option.textContent;
    });

    document.querySelector(".language-en").hidden = language === "ar";
    document.querySelector(".language-ar").hidden = language !== "ar";

    if (currentActivity && !resultSection.classList.contains("hidden")) {
      renderLesson(currentActivity, currentLessonNumber);
    }
  }

  function setPathway(pathway) {
    pathwayInput.value = pathway;
    document.querySelectorAll(".pathway-card").forEach((card) => {
      card.classList.toggle("active", card.dataset.pathway === pathway);
    });
    subjectField.classList.toggle("hidden", pathway !== "learn");
    focusField.classList.remove("hidden");
  }

  function getCandidates(excludeId = null) {
    const pathway = pathwayInput.value;
    const age = $("age").value;
    const focus = $("focus").value;
    const subject = $("subject").value;

    let candidates = activities.filter((a) =>
      a.pathway === pathway &&
      a.ages.includes(age) &&
      a.id !== excludeId
    );

    if (pathway === "learn" && subject !== "surprise") {
      const subjectMatches = candidates.filter((a) => (a.subjects || []).includes(subject));
      if (subjectMatches.length) candidates = subjectMatches;
    }

    const focusMatches = candidates.filter((a) => (a.focuses || []).includes(focus));
    if (focusMatches.length) candidates = focusMatches;

    if (!candidates.length) {
      candidates = activities.filter((a) => a.pathway === pathway && a.ages.includes(age) && a.id !== excludeId);
    }
    if (!candidates.length) {
      candidates = activities.filter((a) => a.pathway === pathway && a.id !== excludeId);
    }
    return candidates;
  }

  function pickActivity(excludeId = null) {
    const candidates = getCandidates(excludeId);
    return candidates[Math.floor(Math.random() * candidates.length)] || activities[0];
  }

  function getTimings(duration, includeFlourish) {
    const d = Number(duration);
    let times;
    if (d <= 20) times = { starter: 3, activity: 6, challenge: 7, flourish: 2, exit: 2, extension: 0 };
    else if (d <= 40) times = { starter: 5, activity: 10, challenge: 15, flourish: 5, exit: 5, extension: 0 };
    else if (d <= 60) times = { starter: 8, activity: 15, challenge: 20, flourish: 7, extension: 5, exit: 5 };
    else times = { starter: 10, activity: 20, challenge: 25, flourish: 10, extension: 10, exit: 5 };

    if (!includeFlourish) {
      times.challenge += times.flourish;
      times.flourish = 0;
    }
    return times;
  }

  function stageCard(label, minutes, text, className = "") {
    if (!minutes || !text) return "";
    return `
      <section class="stage-card ${className}">
        <div class="stage-time"><strong>${minutes}</strong><span>${t("mins")}</span></div>
        <div class="stage-copy">
          <h3>${label}</h3>
          <p>${text}</p>
        </div>
      </section>`;
  }

  function pathwayLabel(pathway) {
    if (pathway === "learn") return t("pathwayLearn");
    if (pathway === "culture") return t("pathwayCulture");
    return t("pathwayKnow");
  }

  function renderLesson(activity, lessonNumber = 1) {
    const age = $("age").value;
    const duration = $("duration").value;
    const includeFlourish = $("flourishToggle").checked;
    const subject = $("subject").value;
    const timings = getTimings(duration, includeFlourish);

    $("lessonKicker").textContent = `${pathwayLabel(activity.pathway)} · ${lessonNumber === 2 ? t("lesson2") : `${t("lesson")} 1`}`;
    $("lessonTitle").textContent = local(activity.title);
    $("lessonSummary").textContent = local(activity.summary);
    $("lessonLearning").textContent = local(activity.learning);
    $("lessonEquipment").textContent = $("lowPrepToggle").checked ? local(activity.equipment) : `${local(activity.equipment)} · ${t("noEquipment")}`;

    const meta = [
      ui[language].ageTitles[age],
      `${duration} ${language === "ar" ? "دقيقة" : "minutes"}`,
      pathwayLabel(activity.pathway)
    ];
    if (activity.pathway === "learn") {
      const actualSubject = subject === "surprise" ? (activity.subjects?.[0] || "surprise") : subject;
      meta.push(ui[language].subjects[actualSubject] || actualSubject);
    }
    $("lessonMeta").innerHTML = meta.map((m) => `<span class="meta-pill">${m}</span>`).join("");

    const stages = [];
    stages.push(stageCard(t("starter"), timings.starter, local(activity.starter)));
    stages.push(stageCard(t("connect"), timings.activity, local(activity.activity)));
    stages.push(stageCard(t("challenge"), timings.challenge, local(activity.challenge)));
    if (includeFlourish) stages.push(stageCard(t("flourish"), timings.flourish, local(activity.flourish), "flourish"));
    if (timings.extension) stages.push(stageCard(t("extension"), timings.extension, local(activity.extension)));
    stages.push(stageCard(t("exit"), timings.exit, local(activity.exit), "exit"));
    $("lessonStages").innerHTML = stages.join("");

    $("teacherLens").textContent = local(activity.teacherLens);
    $("ageAdaptationTitle").textContent = ui[language].ageTitles[age];
    $("ageAdaptation").textContent = ui[language].ageNotes[age];
    $("adjustNote").classList.add("hidden");

    if (studentMode) applyStudentMode(true);
  }

  function generateLesson({ lessonTwo = false } = {}) {
    const next = pickActivity(currentActivity?.id || null);
    currentActivity = next;
    currentLessonNumber = lessonTwo ? 2 : 1;
    renderLesson(next, currentLessonNumber);
    builder.classList.add("hidden");
    resultSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function applyStudentMode(on) {
    studentMode = on;
    resultSection.classList.toggle("student-mode", on);
    $("exitStudentView").classList.toggle("hidden", !on);
    document.querySelector(".result-toolbar").classList.toggle("hidden", on);
  }

  document.querySelectorAll(".pathway-card").forEach((card) => {
    card.addEventListener("click", () => setPathway(card.dataset.pathway));
  });

  lessonForm.addEventListener("submit", (event) => {
    event.preventDefault();
    currentActivity = null;
    currentLessonNumber = 1;
    generateLesson();
  });

  $("languageToggle").addEventListener("click", () => {
    language = language === "en" ? "ar" : "en";
    updateLanguage();
  });

  $("backToBuilder").addEventListener("click", () => {
    applyStudentMode(false);
    resultSection.classList.add("hidden");
    builder.classList.remove("hidden");
    builder.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("newLesson").addEventListener("click", () => generateLesson({ lessonTwo: false }));
  $("lessonTwo").addEventListener("click", () => generateLesson({ lessonTwo: true }));
  $("studentView").addEventListener("click", () => {
    applyStudentMode(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("exitStudentView").addEventListener("click", () => applyStudentMode(false));
  $("printLesson").addEventListener("click", () => window.print());

  $("simplifyLesson").addEventListener("click", () => {
    $("adjustNote").textContent = t("simplify");
    $("adjustNote").classList.remove("hidden");
  });
  $("stretchLesson").addEventListener("click", () => {
    $("adjustNote").textContent = t("stretch");
    $("adjustNote").classList.remove("hidden");
  });

  setPathway("know");
  updateLanguage();
})();
