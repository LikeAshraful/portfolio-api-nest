"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.AnalyticsMetricScalarFieldEnum = exports.ArticleScalarFieldEnum = exports.ContactMessageScalarFieldEnum = exports.EducationScalarFieldEnum = exports.ExperienceScalarFieldEnum = exports.ProjectSkillScalarFieldEnum = exports.SkillScalarFieldEnum = exports.ProjectScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Project: 'Project',
    Skill: 'Skill',
    ProjectSkill: 'ProjectSkill',
    Experience: 'Experience',
    Education: 'Education',
    ContactMessage: 'ContactMessage',
    Article: 'Article',
    AnalyticsMetric: 'AnalyticsMetric'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    title: 'title',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    location: 'location',
    githubUrl: 'githubUrl',
    linkedinUrl: 'linkedinUrl',
    twitterUrl: 'twitterUrl',
    websiteUrl: 'websiteUrl',
    resumeUrl: 'resumeUrl',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProjectScalarFieldEnum = {
    id: 'id',
    title: 'title',
    slug: 'slug',
    summary: 'summary',
    description: 'description',
    thumbnailUrl: 'thumbnailUrl',
    bannerUrl: 'bannerUrl',
    liveDemoUrl: 'liveDemoUrl',
    repoUrl: 'repoUrl',
    featured: 'featured',
    status: 'status',
    category: 'category',
    sortOrder: 'sortOrder',
    viewsCount: 'viewsCount',
    likesCount: 'likesCount',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SkillScalarFieldEnum = {
    id: 'id',
    name: 'name',
    category: 'category',
    proficiency: 'proficiency',
    yearsOfExperience: 'yearsOfExperience',
    iconUrl: 'iconUrl',
    isFeatured: 'isFeatured',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProjectSkillScalarFieldEnum = {
    projectId: 'projectId',
    skillId: 'skillId',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt'
};
exports.ExperienceScalarFieldEnum = {
    id: 'id',
    company: 'company',
    position: 'position',
    location: 'location',
    employmentType: 'employmentType',
    startDate: 'startDate',
    endDate: 'endDate',
    isCurrent: 'isCurrent',
    description: 'description',
    highlights: 'highlights',
    companyUrl: 'companyUrl',
    companyLogoUrl: 'companyLogoUrl',
    technologies: 'technologies',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.EducationScalarFieldEnum = {
    id: 'id',
    institution: 'institution',
    degree: 'degree',
    fieldOfStudy: 'fieldOfStudy',
    startDate: 'startDate',
    endDate: 'endDate',
    isCurrent: 'isCurrent',
    grade: 'grade',
    description: 'description',
    credentialUrl: 'credentialUrl',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ContactMessageScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ArticleScalarFieldEnum = {
    id: 'id',
    title: 'title',
    slug: 'slug',
    summary: 'summary',
    content: 'content',
    coverImageUrl: 'coverImageUrl',
    tags: 'tags',
    readingTimeMinutes: 'readingTimeMinutes',
    isPublished: 'isPublished',
    publishedAt: 'publishedAt',
    viewsCount: 'viewsCount',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AnalyticsMetricScalarFieldEnum = {
    id: 'id',
    type: 'type',
    identifier: 'identifier',
    referrer: 'referrer',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map