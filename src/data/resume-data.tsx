import { LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Firas KSONTINI",
  initials: "FK",
  location: "Issy-les-Moulineaux, France",
  locationLink: "https://www.google.com/maps/place/Issy-les-Moulineaux",
  about:
    "Consultant Sénior (+10 ans EXP), Chef de projet Technique spécialisé en Microsoft 365, SharePoint et Power Platform.",
  summary: (
    <>
      Expert en Microsoft 365, SharePoint, et Power Platform, avec une forte expérience en gestion de projet technique, avant-vente, et digital workplace.
    </>
  ),
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "firasksontini@gmail.com",
    tel: "+33(0) 7 83 88 74 73",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fksontini/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "ESPRIT, Tunisia",
      degree: "Ingénieur Informatique (Génie Logiciel) en cours du soir",
      start: "09/2014",
      end: "08/2018",
    },
    {
      school: "ISI, Tunisia",
      degree: "Licence en Informatique Appliquée",
      start: "09/2013",
      end: "08/2014",
    },
  ],
  work: [
    {
      company: "CAT Group",
      link: "",
      badges: ["Formateur", "SharePoint Online", "Power Platform"],
      title: "Formateur SharePoint Online / PowerPlatform",
      start: "11/2024",
      end: "Present",
      description: (
        <>
          - Formation des équipes sur les fondamentaux de SharePoint Online.
          <ul>
            <li>Animation d’ateliers et accompagnement sur la gestion d’intranets.</li>
            <li>Mise en place de bonnes pratiques pour la gouvernance et collaboration.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Deloitte",
      link: "",
      badges: ["Lead Dev", "SharePoint Online", "PowerPlatform"],
      title: "Lead Dev SharePoint Online / PowerPlatform",
      start: "04/2024",
      end: "Present",
      description: (
        <>
          - Développement d’une application SharePoint Online pour audits juridiques.
          <ul>
            <li>Conception et implémentation d’interfaces PowerApps.</li>
            <li>Automatisation des processus avec Power Automate.</li>
          </ul>
        </>
      ),
    },
    {
      company: "TDF",
      link: "",
      badges: ["Consultant Sénior", "GED", "Power Platform"],
      title: "Consultant senior",
      start: "02/2024",
      end: "Present",
      description: (
        <>
          - Mise en place d’une gestion électronique des documents (GED) pour les équipes Achats.
          <ul>
            <li>Synchronisation avec Oracle Cloud via Power Automate.</li>
            <li>Développement d’interfaces PowerApps pour une meilleure ergonomie.</li>
            <li>Animation d’ateliers et cadrage du projet.</li>
          </ul>
        </>
      ),
    },
  ],
  certifications: [
    "MS 900: Microsoft 365 Fundamentals",
    "AZ 900: Microsoft Azure Fundamentals",
    "PL 900: Power Platform Fundamentals",
    "MS 600: Teams Application Developer Associate",
    "PL 400: Power Platform Developer Associate",
    "EXAM 331: Core Solutions of Microsoft SharePoint 2013",
    "EXAM 339: Managing Microsoft SharePoint Server 2016",
    "PSM1: Professional Scrum Master 1",
    "PSM2: Professional Scrum Master 2 (02/2024)",
  ],
  skills: [
    "Microsoft Power Platform",
    "Microsoft SharePoint Online",
    "Microsoft SharePoint Server",
    "Power Apps, Power Automate",
    ".NET, TypeScript, React.js",
    "Workflow Automation & Digital Transformation",
    "Gestion de projet, Scrum, ITIL",
    "Avant-vente et suivi de projet",
    "Architecture de données et administration système",
    "JIRA, Git, Jenkins, PNP PowerShell, Nintex, AvePoint DocAve",
  ],
  projects: [
    {
      title: "Formation & Coaching SharePoint Online",
      techStack: ["Power Platform", "SharePoint", "Microsoft 365"],
      description:
        "Accompagnement des entreprises dans l’adoption de SharePoint Online et Power Platform, incluant formations et coaching personnalisé.",
      link: {
        label: "Formation",
        href: "",
      },
    },
  ],
  languages: [
    "Arabe: Langue Maternelle",
    "Anglais: Bilingue",
    "Français: Bilingue",
  ],
} as const;
