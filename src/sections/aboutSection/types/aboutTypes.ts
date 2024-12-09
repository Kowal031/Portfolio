export type LanguageType = {
  name: string;
  lvl: string;
};

export type DegreeType = {
  name: string;
  university: string;
};

export type InfoType = {
  languages: LanguageType[];
  hobbies: string[];
  degree: DegreeType[];
};

export type InfoBoxType = {
  data: InfoType;
};
