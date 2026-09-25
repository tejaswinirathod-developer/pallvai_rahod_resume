export interface EducationItem {
  degree: string;
  period: string;
  institution: string;
  statusOrScore: string;
  type: 'degree' | 'school';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface CertificationCategory {
  title: string;
  items: string[];
}

export interface StrengthItem {
  title: string;
  description: string;
  iconName: 'users' | 'message-square' | 'zap' | 'trending-up';
}
