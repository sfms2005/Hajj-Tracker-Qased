export interface Stage {
  id: number;
  title: string;
}

export const stages: Stage[] = [
  { id: 1, title: "ما قبل اليوم الثامن" },
  { id: 2, title: "اليوم الثامن (يوم التروية)" },
  { id: 3, title: "اليوم التاسع (يوم عرفة)" },
  { id: 4, title: "اليوم العاشر (يوم النحر)" },
  { id: 5, title: "أيام التشريق (11 - 13)" },
  { id: 6, title: "طواف الوداع" },
];

export function getStageById(id: number): Stage | undefined {
  return stages.find((s) => s.id === id);
}
