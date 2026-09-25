import { EducationItem, SkillCategory, CertificationCategory, StrengthItem } from '../types';

export const PERSONAL_INFO = {
  name: 'PALLAVI RATHOD',
  displayName: 'Pallavi Rathod',
  title: 'MBA Student | Finance & HR',
  subheading: 'Finance & HR Specialist · Fresher',
  objective:
    'To secure a position that allows me to apply and enhance my technical skills as a fresher while seeking personal growth and professional development in an organization that values innovation and fosters a dynamic learning environment.',
  email: 'rathodpallavi63@gmail.com',
  phone: '+91 8380884217',
  location: 'Nagpur, Maharashtra, India',
  about: [
    'I am an MBA candidate specializing in Finance and Human Resources at Suryodaya Engineering and Management Technology, Nagpur, backed by a strong foundation in commerce.',
    'As a proactive fresher, I am committed to continuous improvement, rigorous problem-solving, and building collaborative team environments. My academic journey has prepared me to analyze financial frameworks, support strategic HR operations, and adapt swiftly to modern organizational practices.',
    'I seek an innovative corporate environment where I can contribute dedication, ethical leadership, and fresh perspectives while actively engaging in professional development.'
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Master of Business Administration (MBA) – Finance and HR',
    period: '2024 - 2026',
    institution: 'Suryodaya Engineering and Management Technology, Nagpur',
    statusOrScore: 'Completed',
    type: 'degree'
  },
  {
    degree: 'Bachelor of Commerce (B.Com)',
    period: '2020 - 2023',
    institution: 'SPM Gilani, Nagpur',
    statusOrScore: 'Completed',
    type: 'degree'
  },
  {
    degree: 'Higher School Certificate (State Board)',
    period: 'Jul 2018 - Feb 2019',
    institution: 'SPM Gilani Junior College, Ghatanji',
    statusOrScore: 'Percentage: 78.85%',
    type: 'school'
  },
  {
    degree: 'Secondary School Certificate (State Board)',
    period: 'Jul 2016 - Feb 2017',
    institution: 'Dr. Shama Prasad Mukarji Vidyalay, Ghoti',
    statusOrScore: 'Percentage: 72.83%',
    type: 'school'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Professional Skills',
    description: 'Core competencies developed through academic governance and collaborative projects.',
    skills: [
      'Leadership',
      'Problem Solving',
      'Time Management',
      'Team Work',
      'Good Communication'
    ]
  },
  {
    title: 'Work Skills',
    description: 'Applied management execution and analytical project focus.',
    skills: [
      'Ability to Handle Work Pressure',
      'Finance Project'
    ]
  },
  {
    title: 'Additional Skills',
    description: 'Digital literacy, financial accounting software, and business presentation tools.',
    skills: [
      'Tally GST',
      'MS Word',
      'MS PowerPoint'
    ]
  }
];

export const STRENGTHS_DATA: StrengthItem[] = [
  {
    title: 'Team Collaboration',
    description: 'Thrives in cross-functional group efforts, fostering positive alignment, mutual respect, and shared mission success.',
    iconName: 'users'
  },
  {
    title: 'Communication Skill',
    description: 'Articulates corporate information, reports, and interpersonal correspondence with clarity, empathy, and professionalism.',
    iconName: 'message-square'
  },
  {
    title: 'Quick Learner',
    description: 'Rapidly absorbs new industry tools, regulatory processes, accounting workflows, and organizational cultures.',
    iconName: 'zap'
  },
  {
    title: 'Continuous Improvement',
    description: 'Driven by constructive curiosity, self-refinement, and an eagerness to upgrade knowledge through real-world mentorship.',
    iconName: 'trending-up'
  }
];

export const CERTIFICATIONS_DATA: CertificationCategory[] = [
  {
    title: 'Data Analytic Workshops & Participation',
    items: [
      'Softskill Development',
      'Internal Conference Participation',
      'Paper Presentation'
    ]
  },
  {
    title: 'Professional Certification',
    items: [
      'MS CIT',
      'Tally GST',
      'Power BI',
      'Soft Skill Management'
    ]
  },
  {
    title: 'Additional Certifications',
    items: [
      'Environmental Studies',
      'World Peace and Economic Development'
    ]
  }
];

export const PROJECT_DATA = {
  title: 'Finance Project',
  summary: 'Academic & Applied Financial Analysis',
  status: 'Details available on request.',
  description:
    'Comprehensive finance project conducted in accordance with MBA curriculum requirements, emphasizing financial analysis, structured evaluation, and strategic business assessment.'
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
];
