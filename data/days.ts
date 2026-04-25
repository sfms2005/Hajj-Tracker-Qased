export interface HajjDay {
  date: string;
  stageId: number;
  title: string;
  progress: number;
  motivation: string;
}

export const days: HajjDay[] = [
  {
    date: "2026-05-23",
    stageId: 1,
    title: "ما قبل اليوم الثامن",
    progress: 1,
    motivation: "بداية مباركة، هيئ قلبك ونيتك، فالأعظم قادم بإذن الله",
  },
  {
    date: "2026-05-24",
    stageId: 1,
    title: "ما قبل اليوم الثامن",
    progress: 10,
    motivation: "بداية مباركة، هيئ قلبك ونيتك، فالأعظم قادم بإذن الله",
  },

  {
    date: "2026-05-25",
    stageId: 2,
    title: "اليوم الثامن",
    progress: 20,
    motivation: "أول خطوات الرحلة بدأت، ثبّت نيتك وامضِ بقلب حاضر",
  },

  {
    date: "2026-05-26",
    stageId: 3,
    title: "اليوم التاسع",
    progress: 40,
    motivation: "هذا يوم القرب العظيم، لا تضيع لحظة",
  },

  {
    date: "2026-05-27",
    stageId: 4,
    title: "اليوم العاشر",
    progress: 60,
    motivation: "أنجزت الكثير، وما تبقى بإذن الله يسير",
  },

  {
    date: "2026-05-28",
    stageId: 5,
    title: "أول أيام التشريق",
    progress: 75,
    motivation:
      "استمر بنفس العزيمة، فالثبات بعد الإنجاز هو القوة الحقيقية",
  },
  {
    date: "2026-05-29",
    stageId: 5,
    title: "ثاني أيام التشريق",
    progress: 85,
    motivation: "خطواتك ثابتة، وقلبك أقرب… استمر ولا تتراخى",
  },
  {
    date: "2026-05-30",
    stageId: 5,
    title: "ثالث أيام التشريق",
    progress: 100,
    motivation: "قاربت الرحلة على الاكتمال، فاجعل ختامها ذكرًا وشكرًا",
  },

  {
    date: "2026-05-31",
    stageId: 6,
    title: "طواف الوداع",
    progress: 100,
    motivation: "لحظات الوداع ثمينة… اختمها بقلب ممتلئ بالرضا والسكينة",
  },
  {
    date: "2026-06-01",
    stageId: 6,
    title: "ختام الرحلة",
    progress: 100,
    motivation: "انتهت الرحلة، لكن أثرها في قلبك يبدأ الآن… تقبل الله منك",
  },
];

export function getCurrentDay(): HajjDay {
  const today = new Date().toISOString().split("T")[0];
  return days.find((d) => d.date === today) || days[0];
}
