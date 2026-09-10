export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly USER: "USER";
    readonly GUEST: "GUEST";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const ProjectStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly ARCHIVED: "ARCHIVED";
};
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
export declare const ProjectCategory: {
    readonly FULLSTACK: "FULLSTACK";
    readonly BACKEND: "BACKEND";
    readonly FRONTEND: "FRONTEND";
    readonly MOBILE: "MOBILE";
    readonly DEVOPS: "DEVOPS";
    readonly AI_ML: "AI_ML";
    readonly SYSTEMS: "SYSTEMS";
    readonly OPEN_SOURCE: "OPEN_SOURCE";
};
export type ProjectCategory = (typeof ProjectCategory)[keyof typeof ProjectCategory];
export declare const SkillCategory: {
    readonly LANGUAGES: "LANGUAGES";
    readonly BACKEND_FRAMEWORKS: "BACKEND_FRAMEWORKS";
    readonly FRONTEND_FRAMEWORKS: "FRONTEND_FRAMEWORKS";
    readonly DATABASES: "DATABASES";
    readonly DEVOPS_CLOUD: "DEVOPS_CLOUD";
    readonly TOOLS_ARCHITECTURE: "TOOLS_ARCHITECTURE";
    readonly TESTING_SECURITY: "TESTING_SECURITY";
};
export type SkillCategory = (typeof SkillCategory)[keyof typeof SkillCategory];
export declare const EmploymentType: {
    readonly FULL_TIME: "FULL_TIME";
    readonly PART_TIME: "PART_TIME";
    readonly CONTRACT: "CONTRACT";
    readonly FREELANCE: "FREELANCE";
    readonly INTERNSHIP: "INTERNSHIP";
    readonly SELF_EMPLOYED: "SELF_EMPLOYED";
};
export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType];
export declare const ContactStatus: {
    readonly UNREAD: "UNREAD";
    readonly READ: "READ";
    readonly REPLIED: "REPLIED";
    readonly ARCHIVED: "ARCHIVED";
    readonly SPAM: "SPAM";
};
export type ContactStatus = (typeof ContactStatus)[keyof typeof ContactStatus];
export declare const MetricType: {
    readonly PAGE_VIEW: "PAGE_VIEW";
    readonly RESUME_DOWNLOAD: "RESUME_DOWNLOAD";
    readonly PROJECT_CLICK: "PROJECT_CLICK";
    readonly SOCIAL_CLICK: "SOCIAL_CLICK";
};
export type MetricType = (typeof MetricType)[keyof typeof MetricType];
