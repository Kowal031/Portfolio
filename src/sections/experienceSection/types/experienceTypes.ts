export interface SubDescriptionType {
  mainProjectSkill: string;
  description: string;
}

export interface ExperienceType {
  title: string;
  company: string;
  date: string;
  description: string;
  subDescription?: SubDescriptionType[];
}
