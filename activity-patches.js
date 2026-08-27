(() => {
  const activities = window.NISL_ACTIVITIES || [];
  const activity = activities.find((item) => item?.title?.en === "Where Do You Stand?");
  if (!activity) return;

  activity.activity = {
    en: "Use these statements one at a time. Students stand anywhere on the agree–disagree spectrum, then briefly explain their position to someone nearby and someone farther away: • I learn better when I can talk an idea through with someone. • I like seeing a clear example before I start. • I would rather start a task straight away than listen to a long explanation. • I prefer choosing my own partner or group. • I find it easier to ask for help privately than in front of the class. • I enjoy tasks where there can be more than one good answer. • I would rather present an idea as part of a group than on my own. • I participate more when I have thinking time before I am asked to answer. • I learn more from correcting a mistake than from getting it right first time. • I prefer a quiet classroom to one with lots of discussion.",
    ar: "استخدم العبارات التالية واحدة في كل مرة. يقف الطلاب في أي مكان على مقياس الموافقة وعدم الموافقة، ثم يشرحون موقفهم بإيجاز لشخص قريب وآخر أبعد: • أتعلم بشكل أفضل عندما أستطيع مناقشة الفكرة مع شخص آخر. • أحب أن أرى مثالاً واضحاً قبل أن أبدأ. • أفضل أن أبدأ المهمة مباشرة بدلاً من الاستماع إلى شرح طويل. • أفضل اختيار شريكي أو مجموعتي بنفسي. • أجد طلب المساعدة على انفراد أسهل من طلبها أمام الصف. • أستمتع بالمهام التي يمكن أن يكون لها أكثر من إجابة جيدة. • أفضل تقديم فكرة ضمن مجموعة بدلاً من تقديمها بمفردي. • أشارك أكثر عندما أحصل على وقت للتفكير قبل أن يُطلب مني الإجابة. • أتعلم أكثر من تصحيح الخطأ مقارنة بالحصول على الإجابة الصحيحة من المرة الأولى. • أفضل الصف الهادئ على الصف الذي تكثر فيه المناقشات."
  };

  activity.teacherLens = {
    en: "Notice which preferences cluster together, where students disagree respectfully, who changes position after hearing another view, and which statements reveal useful information about how this class likes to learn.",
    ar: "لاحظ التفضيلات التي تتجمع معاً، وأين يختلف الطلاب باحترام، ومن يغيّر موقفه بعد سماع وجهة نظر أخرى، وأي العبارات تكشف معلومات مفيدة عن الطريقة التي يفضل بها هذا الصف التعلم."
  };
})();
