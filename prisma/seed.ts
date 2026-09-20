import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/database/generated/prisma/client';
import {
  ContactStatus,
  EmploymentType,
  MetricType,
  ProjectCategory,
  ProjectStatus,
  Role,
  SkillCategory,
} from '../src/database/generated/prisma/enums';

const databaseUrl =
  process.env.DATABASE_URL ||
  'postgresql://postgres:password@localhost:5432/nest_portfolio?schema=public';

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting database seeding for Md. Ashraful Islam...');

  // 1. Seed Owner / Admin User
  const passwordHash = await bcrypt.hash('AdminSecurePass123!', 12);
  const owner = await prisma.user.upsert({
    where: { email: 'maipalash35@gmail.com' },
    update: {
      name: 'Md. Ashraful Islam',
      title: 'Senior Backend & Full-Stack Engineer',
      bio: 'Senior Backend & Full-Stack Engineer with 7+ years of experience architecting high-throughput web applications, microservices, RESTful APIs, and enterprise ERP systems using PHP (Laravel), Node.js (NestJS/Express), Vue.js/Nuxt, and MySQL/PostgreSQL.',
      avatarUrl: '/images/portrait.jpg',
      location: 'Dhaka, Bangladesh',
      githubUrl: 'https://github.com/LikeAshraful',
      linkedinUrl: 'https://linkedin.com/in/LikeAshraful',
      twitterUrl: 'https://x.com/LikeAshraful',
      websiteUrl: 'https://likeashraful.com',
      resumeUrl: 'https://likeashraful.com/resume.pdf',
      role: Role.ADMIN,
      isActive: true,
    },
    create: {
      email: 'maipalash35@gmail.com',
      passwordHash,
      name: 'Md. Ashraful Islam',
      title: 'Senior Backend & Full-Stack Engineer',
      bio: 'Senior Backend & Full-Stack Engineer with 7+ years of experience architecting high-throughput web applications, microservices, RESTful APIs, and enterprise ERP systems using PHP (Laravel), Node.js (NestJS/Express), Vue.js/Nuxt, and MySQL/PostgreSQL.',
      avatarUrl: '/images/portrait.jpg',
      location: 'Dhaka, Bangladesh',
      githubUrl: 'https://github.com/LikeAshraful',
      linkedinUrl: 'https://linkedin.com/in/LikeAshraful',
      twitterUrl: 'https://x.com/LikeAshraful',
      websiteUrl: 'https://likeashraful.com',
      resumeUrl: 'https://likeashraful.com/resume.pdf',
      role: Role.ADMIN,
      isActive: true,
    },
  });
  console.log(
    `✅ Seeded owner user: ${owner.name} <${owner.email}> (${owner.id})`,
  );

  // 2. Seed Skills
  const skillsData = [
    // Languages
    {
      name: 'PHP',
      category: SkillCategory.LANGUAGES,
      proficiency: 98,
      yearsOfExperience: 7.0,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      name: 'JavaScript (ES6+)',
      category: SkillCategory.LANGUAGES,
      proficiency: 92,
      yearsOfExperience: 7.0,
      isFeatured: true,
      sortOrder: 2,
    },
    {
      name: 'TypeScript',
      category: SkillCategory.LANGUAGES,
      proficiency: 88,
      yearsOfExperience: 4.0,
      isFeatured: true,
      sortOrder: 3,
    },
    {
      name: 'SQL / PLpgSQL',
      category: SkillCategory.LANGUAGES,
      proficiency: 95,
      yearsOfExperience: 7.0,
      isFeatured: true,
      sortOrder: 4,
    },
    {
      name: 'HTML5 / CSS3',
      category: SkillCategory.LANGUAGES,
      proficiency: 90,
      yearsOfExperience: 7.0,
      isFeatured: false,
      sortOrder: 5,
    },

    // Backend Frameworks & APIs
    {
      name: 'Laravel',
      category: SkillCategory.BACKEND_FRAMEWORKS,
      proficiency: 98,
      yearsOfExperience: 7.0,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      name: 'Node.js / Express',
      category: SkillCategory.BACKEND_FRAMEWORKS,
      proficiency: 90,
      yearsOfExperience: 5.0,
      isFeatured: true,
      sortOrder: 2,
    },
    {
      name: 'NestJS',
      category: SkillCategory.BACKEND_FRAMEWORKS,
      proficiency: 88,
      yearsOfExperience: 3.5,
      isFeatured: true,
      sortOrder: 3,
    },
    {
      name: 'CodeIgniter',
      category: SkillCategory.BACKEND_FRAMEWORKS,
      proficiency: 85,
      yearsOfExperience: 4.0,
      isFeatured: false,
      sortOrder: 4,
    },
    {
      name: 'RESTful APIs',
      category: SkillCategory.BACKEND_FRAMEWORKS,
      proficiency: 98,
      yearsOfExperience: 7.0,
      isFeatured: true,
      sortOrder: 5,
    },
    {
      name: 'GraphQL',
      category: SkillCategory.BACKEND_FRAMEWORKS,
      proficiency: 80,
      yearsOfExperience: 2.5,
      isFeatured: false,
      sortOrder: 6,
    },

    // Frontend Frameworks
    {
      name: 'Vue.js',
      category: SkillCategory.FRONTEND_FRAMEWORKS,
      proficiency: 92,
      yearsOfExperience: 5.0,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      name: 'Nuxt.js',
      category: SkillCategory.FRONTEND_FRAMEWORKS,
      proficiency: 88,
      yearsOfExperience: 4.0,
      isFeatured: true,
      sortOrder: 2,
    },
    {
      name: 'Tailwind CSS',
      category: SkillCategory.FRONTEND_FRAMEWORKS,
      proficiency: 92,
      yearsOfExperience: 4.0,
      isFeatured: true,
      sortOrder: 3,
    },
    {
      name: 'Bootstrap',
      category: SkillCategory.FRONTEND_FRAMEWORKS,
      proficiency: 90,
      yearsOfExperience: 7.0,
      isFeatured: false,
      sortOrder: 4,
    },
    {
      name: 'jQuery',
      category: SkillCategory.FRONTEND_FRAMEWORKS,
      proficiency: 90,
      yearsOfExperience: 6.0,
      isFeatured: false,
      sortOrder: 5,
    },

    // Databases & Caching
    {
      name: 'MySQL',
      category: SkillCategory.DATABASES,
      proficiency: 96,
      yearsOfExperience: 7.0,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      name: 'PostgreSQL',
      category: SkillCategory.DATABASES,
      proficiency: 90,
      yearsOfExperience: 5.0,
      isFeatured: true,
      sortOrder: 2,
    },
    {
      name: 'Redis',
      category: SkillCategory.DATABASES,
      proficiency: 92,
      yearsOfExperience: 5.0,
      isFeatured: true,
      sortOrder: 3,
    },
    {
      name: 'Database Optimization & Indexing',
      category: SkillCategory.DATABASES,
      proficiency: 94,
      yearsOfExperience: 6.0,
      isFeatured: true,
      sortOrder: 4,
    },
    {
      name: 'Prisma ORM',
      category: SkillCategory.DATABASES,
      proficiency: 88,
      yearsOfExperience: 3.0,
      isFeatured: false,
      sortOrder: 5,
    },

    // DevOps & Cloud
    {
      name: 'Docker',
      category: SkillCategory.DEVOPS_CLOUD,
      proficiency: 90,
      yearsOfExperience: 4.5,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      name: 'Git / GitHub Actions',
      category: SkillCategory.DEVOPS_CLOUD,
      proficiency: 94,
      yearsOfExperience: 7.0,
      isFeatured: true,
      sortOrder: 2,
    },
    {
      name: 'Linux Server Management',
      category: SkillCategory.DEVOPS_CLOUD,
      proficiency: 88,
      yearsOfExperience: 6.0,
      isFeatured: true,
      sortOrder: 3,
    },
    {
      name: 'CI/CD Pipelines',
      category: SkillCategory.DEVOPS_CLOUD,
      proficiency: 86,
      yearsOfExperience: 4.0,
      isFeatured: false,
      sortOrder: 4,
    },
    {
      name: 'Nginx',
      category: SkillCategory.DEVOPS_CLOUD,
      proficiency: 85,
      yearsOfExperience: 5.0,
      isFeatured: false,
      sortOrder: 5,
    },

    // Tools & Architecture
    {
      name: 'OOP & SOLID Principles',
      category: SkillCategory.TOOLS_ARCHITECTURE,
      proficiency: 96,
      yearsOfExperience: 7.0,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      name: 'Microservices Architecture',
      category: SkillCategory.TOOLS_ARCHITECTURE,
      proficiency: 88,
      yearsOfExperience: 4.0,
      isFeatured: true,
      sortOrder: 2,
    },
    {
      name: 'Clean Architecture & MVC',
      category: SkillCategory.TOOLS_ARCHITECTURE,
      proficiency: 94,
      yearsOfExperience: 6.0,
      isFeatured: true,
      sortOrder: 3,
    },
    {
      name: 'Postman',
      category: SkillCategory.TOOLS_ARCHITECTURE,
      proficiency: 95,
      yearsOfExperience: 7.0,
      isFeatured: false,
      sortOrder: 4,
    },
    {
      name: 'Jira / Agile Scrum',
      category: SkillCategory.TOOLS_ARCHITECTURE,
      proficiency: 90,
      yearsOfExperience: 6.0,
      isFeatured: false,
      sortOrder: 5,
    },
    {
      name: 'Firebase',
      category: SkillCategory.TOOLS_ARCHITECTURE,
      proficiency: 84,
      yearsOfExperience: 3.5,
      isFeatured: false,
      sortOrder: 6,
    },
  ];

  const skillMap = new Map<string, string>();
  for (const s of skillsData) {
    const skill = await prisma.skill.upsert({
      where: { name: s.name },
      update: s,
      create: s,
    });
    skillMap.set(skill.name, skill.id);
  }
  console.log(`✅ Seeded ${skillsData.length} skills`);

  // 3. Seed Projects
  const projectsData = [
    {
      title: 'SellsERP - Enterprise Multi-Branch ERP & POS System',
      slug: 'sellserp-enterprise-pos-system',
      summary:
        'Comprehensive enterprise resource planning (ERP) platform featuring multi-branch inventory, point of sale (POS), automated billing, payroll, and real-time financial reporting.',
      description: `# SellsERP - Multi-Branch Enterprise ERP & POS System

SellsERP is an enterprise-grade ERP solution engineered to streamline complex business workflows across multi-branch retail, wholesale, and service enterprises.

### Core Features & Modules
- **Multi-Branch Inventory & Warehouse Management:** Real-time stock movement tracking, transfer orders, low-stock notifications, and barcode generation.
- **High-Speed Point of Sale (POS):** Fast checkout interface with offline cache synchronization and receipt printing.
- **Financial Accounting & Invoicing:** Double-entry ledger, automated balance sheets, profit/loss accounts, tax calculation, and multi-currency billing.
- **HR & Payroll Automation:** Employee attendance tracking, role-based access permissions, commission calculations, and payroll generation.

### Architecture & Performance
- **Framework:** Laravel & Vue.js SPA with RESTful backend architecture.
- **Database:** Optimized MySQL with index tuning and transaction isolation for ACID consistency.
- **Caching & Queues:** Redis caching for product catalog lookups and asynchronous job queues for ledger generation.`,
      thumbnailUrl:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      bannerUrl:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      liveDemoUrl: 'https://sellserp.likeashraful.com',
      repoUrl: 'https://github.com/LikeAshraful/sellserp-enterprise',
      featured: true,
      status: ProjectStatus.PUBLISHED,
      category: ProjectCategory.FULLSTACK,
      sortOrder: 1,
      viewsCount: 3200,
      likesCount: 185,
      skills: [
        'PHP',
        'Laravel',
        'Vue.js',
        'MySQL',
        'Redis',
        'Docker',
        'Database Optimization & Indexing',
      ],
    },
    {
      title: 'Barta24 - High-Traffic Digital News Portal & Media CMS',
      slug: 'barta24-digital-news-portal-cms',
      summary:
        'Scalable online news media publishing portal and headless CMS handling 1M+ monthly pageviews with sub-second response times using multi-tier Redis caching.',
      description: `# Barta24 - High-Throughput Digital News Portal

A mission-critical news and media broadcasting web platform designed to serve millions of readers with breaking news alerts, multimedia stories, and live video feeds.

### Key Highlights
- **High-Concurrency Traffic:** Engineered to sustain traffic spikes exceeding tens of thousands of concurrent readers during breaking news events.
- **Multi-Tier Caching:** Implemented Redis full-page and fragment caching alongside CDN edge caching, achieving sub-200ms page load times.
- **Dynamic Content Management System (CMS):** Custom editorial dashboard with draft revisions, rich media uploading, SEO schema markup, and automated social syndication.
- **Real-Time Push Notifications:** Web and mobile push notifications for instant breaking news distribution.`,
      thumbnailUrl:
        'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=80',
      bannerUrl:
        'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&auto=format&fit=crop&q=80',
      liveDemoUrl: 'https://barta24.com',
      repoUrl: 'https://github.com/LikeAshraful/news-portal-engine',
      featured: true,
      status: ProjectStatus.PUBLISHED,
      category: ProjectCategory.FULLSTACK,
      sortOrder: 2,
      viewsCount: 4500,
      likesCount: 240,
      skills: [
        'PHP',
        'Laravel',
        'MySQL',
        'Redis',
        'JavaScript (ES6+)',
        'Bootstrap',
        'Nginx',
      ],
    },
    {
      title: 'OTA Travel Booking & GDS Flight Ticketing Engine',
      slug: 'ota-gds-travel-booking-engine',
      summary:
        'Online Travel Agency (OTA) booking backend integrated with Global Distribution Systems (Amadeus & Sabre GDS) for real-time flight search, seat reservations, and payment processing.',
      description: `# OTA Travel & GDS Flight Ticketing Engine

An Online Travel Agency (OTA) backend solution designed for real-time flight inventory aggregation, dynamic fare rules, passenger PNR generation, and automated ticket issuance.

### Technical Achievements
- **GDS API Integration:** Integrated Amadeus and Sabre XML/REST APIs for real-time schedule searches, fare calculation, and seat bookings.
- **Asynchronous Search Aggregation:** Concurrent multi-provider queries with Redis caching to deliver fast search results across hundreds of airlines.
- **Payment & Verification Flow:** Integrated multi-channel payment gateways with automated transaction reconciliation and webhook validation.
- **Automated Ticket Issuance:** Background job queues handling PNR creation, e-ticket PDF generation, and automated customer email/SMS confirmations.`,
      thumbnailUrl:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80',
      bannerUrl:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&auto=format&fit=crop&q=80',
      liveDemoUrl: 'https://travel.likeashraful.com',
      repoUrl: 'https://github.com/LikeAshraful/ota-gds-booking-engine',
      featured: true,
      status: ProjectStatus.PUBLISHED,
      category: ProjectCategory.BACKEND,
      sortOrder: 3,
      viewsCount: 2800,
      likesCount: 160,
      skills: [
        'PHP',
        'Laravel',
        'RESTful APIs',
        'MySQL',
        'Redis',
        'OOP & SOLID Principles',
      ],
    },
    {
      title: 'Eishops - Multi-Vendor E-Commerce Platform',
      slug: 'eishops-multi-vendor-ecommerce-platform',
      summary:
        'Robust multi-vendor e-commerce marketplace featuring high-concurrency cart processing, inventory tracking, flash deals, and seamless payment gateways (SSLCommerz, bKash, Nagad, Stripe).',
      description: `# Eishops - Multi-Vendor E-Commerce Marketplace

A multi-vendor e-commerce platform built for high reliability, fast checkout, and seamless merchant management.

### Key Capabilities
- **Vendor Portal:** Comprehensive merchant dashboard for catalog management, order fulfillment, commission tracking, and payout settlements.
- **Optimized Checkout & Cart Engine:** Real-time coupon validation, dynamic shipping rates, and sub-second cart recalculations.
- **Payment Gateway Integrations:** Secure integration with SSLCommerz, bKash, Nagad, and Stripe with instant webhook callback handlers.
- **Database Query Tuning:** Optimized complex relational queries, composite indexing, and database read-replicas, speeding up product catalog queries by 45%.`,
      thumbnailUrl:
        'https://images.unsplash.com/photo-1556742049-0a67e557229b?w=800&auto=format&fit=crop&q=80',
      bannerUrl:
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop&q=80',
      liveDemoUrl: 'https://eishops.com',
      repoUrl: 'https://github.com/LikeAshraful/eishops-marketplace',
      featured: true,
      status: ProjectStatus.PUBLISHED,
      category: ProjectCategory.FULLSTACK,
      sortOrder: 4,
      viewsCount: 2100,
      likesCount: 115,
      skills: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'Docker'],
    },
    {
      title: 'Automated Asynchronous Notification & SMS Gateway Service',
      slug: 'automated-sms-notification-gateway',
      summary:
        'High-reliability asynchronous notification microservice handling bulk transactional SMS, email alerts, and webhook triggers with queue retry policies.',
      description: `# Automated SMS & Transactional Notification Gateway

A microservice engineered to handle multi-provider SMS dispatching, transactional email alerts, and webhook deliveries with high fault-tolerance.

### Architecture Highlights
- **Distributed Queue Processing:** Redis-backed worker pools to process tens of thousands of outbound notifications without blocking primary application threads.
- **Provider Fallback Routing:** Automatic failover between local telco SMS aggregators and global providers in case of API downtime.
- **Audit & Analytics:** Real-time delivery status logging, failure metrics, and client quota management.`,
      thumbnailUrl:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
      bannerUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
      liveDemoUrl: 'https://sms-gateway.likeashraful.com',
      repoUrl: 'https://github.com/LikeAshraful/sms-notification-gateway',
      featured: false,
      status: ProjectStatus.PUBLISHED,
      category: ProjectCategory.BACKEND,
      sortOrder: 5,
      viewsCount: 1450,
      likesCount: 92,
      skills: [
        'Node.js / Express',
        'NestJS',
        'TypeScript',
        'Redis',
        'PostgreSQL',
        'Docker',
      ],
    },
  ];

  for (const p of projectsData) {
    const { skills, ...projectFields } = p;
    const project = await prisma.project.upsert({
      where: { slug: p.slug },
      update: projectFields,
      create: projectFields,
    });

    // Link skills
    await prisma.projectSkill.deleteMany({ where: { projectId: project.id } });
    for (const skillName of skills) {
      const skillId = skillMap.get(skillName);
      if (skillId) {
        await prisma.projectSkill.create({
          data: {
            projectId: project.id,
            skillId,
            isPrimary: true,
          },
        });
      }
    }
  }
  console.log(
    `✅ Seeded ${projectsData.length} projects with skill associations`,
  );

  // 4. Seed Experiences
  const experiencesData = [
    {
      company: 'Orange Business Development Ltd.',
      position: 'Sr. Software Engineer',
      location: 'Dhaka, Bangladesh',
      employmentType: EmploymentType.FULL_TIME,
      startDate: new Date('2025-05-01'),
      endDate: null,
      isCurrent: true,
      description:
        'Architecting and developing enterprise-scale backend services, microservices, and secure RESTful APIs using PHP (Laravel) and Node.js.',
      highlights: [
        'Architect and engineer scalable backend services and secure RESTful APIs using Laravel and Node.js for enterprise clients',
        'Implement asynchronous job queues and distributed caching strategies with Redis, reducing server load during peak traffic',
        'Optimize complex SQL queries and relational schema architectures in MySQL/PostgreSQL, improving API response times by 35%',
        'Lead code reviews, enforce SOLID principles and Clean Architecture standards, and mentor junior developers',
      ],
      companyUrl: 'https://orangebd.com',
      technologies: [
        'PHP',
        'Laravel',
        'Node.js',
        'MySQL',
        'Redis',
        'Docker',
        'RESTful APIs',
      ],
      sortOrder: 1,
    },
    {
      company: 'BDTask Ltd.',
      position: 'Sr. Software Engineer',
      location: 'Dhaka, Bangladesh',
      employmentType: EmploymentType.FULL_TIME,
      startDate: new Date('2022-07-01'),
      endDate: new Date('2025-04-30'),
      isCurrent: false,
      description:
        'Led backend engineering and architectural design for flagship products including SellsERP, SaaS platforms, and multi-branch POS applications.',
      highlights: [
        'Spearheaded backend architecture and feature delivery for flagship products including SellsERP and multi-tenant SaaS management systems',
        'Designed core modules for multi-branch inventory, POS billing, double-entry accounts, and automated payroll workflows',
        'Engineered third-party API integrations including SMS gateways, dynamic payment processors (bKash, Nagad, Stripe, SSLCommerz), and webhooks',
        'Containerized application microservices with Docker and established automated CI/CD pipelines, cutting deployment cycles by 40%',
      ],
      companyUrl: 'https://bdtask.com',
      technologies: [
        'PHP',
        'Laravel',
        'Vue.js',
        'MySQL',
        'Redis',
        'Docker',
        'Git',
      ],
      sortOrder: 2,
    },
    {
      company: 'Spacecats',
      position: 'Backend Software Engineer',
      location: 'Remote',
      employmentType: EmploymentType.FULL_TIME,
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-07-31'),
      isCurrent: false,
      description:
        'Collaborated in an international remote agile team developing modular backend services and API integrations.',
      highlights: [
        'Collaborated in an agile cross-functional remote engineering team to deliver modular backend services and cloud integrations',
        'Built high-performance, well-documented REST APIs with comprehensive automated unit and integration tests',
        'Integrated third-party cloud services, asynchronous notification queues, and external analytics pipelines',
      ],
      companyUrl: 'https://spacecats.io',
      technologies: [
        'Node.js',
        'Laravel',
        'RESTful APIs',
        'PostgreSQL',
        'Docker',
        'Jira',
      ],
      sortOrder: 3,
    },
    {
      company: 'Eishops',
      position: 'Web Developer',
      location: 'Remote',
      employmentType: EmploymentType.FULL_TIME,
      startDate: new Date('2021-05-01'),
      endDate: new Date('2022-01-31'),
      isCurrent: false,
      description:
        'Led backend feature development and database performance optimizations for a high-concurrency multi-vendor e-commerce platform.',
      highlights: [
        'Led backend feature development and database optimizations for a multi-vendor e-commerce platform',
        'Refactored legacy queries and implemented composite database indexing, reducing database execution time by 45%',
        'Integrated multiple local and global payment gateways, coupon calculation engines, and real-time order tracking',
      ],
      companyUrl: 'https://eishops.com',
      technologies: [
        'PHP',
        'Laravel',
        'MySQL',
        'Vue.js',
        'Tailwind CSS',
        'Payment Gateways',
      ],
      sortOrder: 4,
    },
    {
      company: 'Barta24',
      position: 'Web Developer',
      location: 'Dhaka, Bangladesh',
      employmentType: EmploymentType.FULL_TIME,
      startDate: new Date('2018-07-01'),
      endDate: new Date('2022-06-30'),
      isCurrent: false,
      description:
        'Engineered and maintained the core digital news portal and custom CMS powering over 1M+ monthly pageviews.',
      highlights: [
        'Built and maintained the core digital news portal and custom CMS powering over 1M+ monthly pageviews',
        'Implemented multi-tier caching (Redis full-page and fragment caching) and CDN media distribution, achieving sub-second page loads',
        'Built automated RSS/news syndication feeds, instant push notification microservices, and SEO-optimized REST APIs',
      ],
      companyUrl: 'https://barta24.com',
      technologies: [
        'PHP',
        'Laravel',
        'CodeIgniter',
        'MySQL',
        'Redis',
        'JavaScript',
        'Bootstrap',
      ],
      sortOrder: 5,
    },
  ];

  for (const exp of experiencesData) {
    const existing = await prisma.experience.findFirst({
      where: { company: exp.company, position: exp.position },
    });
    if (existing) {
      await prisma.experience.update({
        where: { id: existing.id },
        data: exp,
      });
    } else {
      await prisma.experience.create({ data: exp });
    }
  }
  console.log(`✅ Seeded ${experiencesData.length} career experiences`);

  // 5. Seed Education
  const educationData = [
    {
      institution: 'University of Information Technology & Sciences (UITS)',
      degree:
        'Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)',
      fieldOfStudy: 'Computer Science & Software Engineering',
      startDate: new Date('2011-01-01'),
      endDate: new Date('2015-12-31'),
      isCurrent: false,
      grade: '3.19 / 4.00 CGPA',
      description:
        'Comprehensive curriculum covering Data Structures, Algorithms, Relational Database Management Systems (RDBMS), Object-Oriented Software Design, Computer Networks, and Web Application Engineering.',
      credentialUrl: 'https://uits.edu.bd',
      sortOrder: 1,
    },
  ];

  for (const edu of educationData) {
    const existing = await prisma.education.findFirst({
      where: { institution: edu.institution, degree: edu.degree },
    });
    if (existing) {
      await prisma.education.update({
        where: { id: existing.id },
        data: edu,
      });
    } else {
      await prisma.education.create({ data: edu });
    }
  }
  console.log(`✅ Seeded ${educationData.length} education records`);

  // 6. Seed Articles
  const articlesData = [
    {
      title:
        'Architecting Scalable Multi-Tenant ERP Systems with Laravel and MySQL',
      slug: 'architecting-scalable-multi-tenant-erp-systems-laravel-mysql',
      summary:
        'A comprehensive guide on building scalable, multi-branch ERP solutions using the Repository pattern, database partitioning, and Redis-driven queue workers.',
      content: `# Architecting Scalable Multi-Tenant ERP Systems with Laravel and MySQL

When designing ERP platforms like SellsERP to serve hundreds of concurrent businesses and branches, ensuring data isolation, high query performance, and reliable transactional integrity is paramount.

## 1. Multi-Tenancy Strategy: Single DB vs Separate Schemas
For most enterprise SaaS applications, single-database multi-tenancy with tenant identification scoping provides the best balance of maintainability, automated migrations, and cost efficiency.

\`\`\`php
trait BelongsToTenant
{
    protected static function bootBelongsToTenant()
    {
        static::addGlobalScope('tenant', function (Builder $builder) {
            if (session()->has('tenant_id')) {
                $builder->where('tenant_id', session('tenant_id'));
            }
        });
    }
}
\`\`\`

## 2. Double-Entry Accounting Invariant
Never update account balances directly with raw UPDATE statements. Always model financial transactions as double-entry ledger entries wrapped within ACID database transactions.

\`\`\`php
DB::transaction(function () use ($invoice) {
    // Debit Accounts Receivable
    LedgerEntry::create([...]);
    // Credit Sales Revenue
    LedgerEntry::create([...]);
});
\`\`\`

## 3. Asynchronous Job Queues with Redis
Offload non-critical operations such as generating PDF invoices, sending transactional SMS notifications, and synchronizing external inventory to Redis background queues.

## Conclusion
By combining strict architectural patterns, query optimization, and decoupled background workers, your Laravel backend can effortlessly scale to handle massive transaction volumes.`,
      coverImageUrl:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      tags: ['Laravel', 'PHP', 'ERP', 'MySQL', 'Architecture', 'Clean Code'],
      readingTimeMinutes: 8,
      isPublished: true,
      publishedAt: new Date('2026-01-20'),
      viewsCount: 2450,
      authorId: owner.id,
    },
    {
      title:
        'High-Concurrency Caching and Query Optimization in Digital Media Portals',
      slug: 'high-concurrency-caching-query-optimization-media-portals',
      summary:
        'Lessons learned scaling high-traffic news platforms like Barta24 to millions of monthly readers using Redis multi-tier caching and SQL index tuning.',
      content: `# High-Concurrency Caching and Query Optimization in Digital Media Portals

Publishing breaking news leads to unpredictable traffic spikes that can quickly exhaust database connections and spike server CPU if the backend is not properly architected.

## 1. Multi-Tiered Caching Hierarchy
- **Edge CDN:** Cache static assets and immutable article images.
- **Redis Full-Page Cache:** Cache hot homepage payloads with automated invalidation hooks upon article publishing.
- **Redis Fragment / Tag Caching:** Cache category widgets and trending news blocks independently.

## 2. Index Tuning for High-Volume Queries
Avoid full table scans on status and publication timestamp columns by creating composite indexes:

\`\`\`sql
CREATE INDEX idx_articles_status_published_at 
ON articles (is_published, published_at DESC);
\`\`\`

## 3. Read/Write Connection Splitting
Configure Laravel's database connection pool to route write operations to the primary MySQL server and all read queries to read-replicas.`,
      coverImageUrl:
        'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&auto=format&fit=crop&q=80',
      tags: ['Redis', 'Performance', 'MySQL', 'Caching', 'High Concurrency'],
      readingTimeMinutes: 6,
      isPublished: true,
      publishedAt: new Date('2026-02-10'),
      viewsCount: 1980,
      authorId: owner.id,
    },
  ];

  for (const art of articlesData) {
    await prisma.article.upsert({
      where: { slug: art.slug },
      update: art,
      create: art,
    });
  }
  console.log(`✅ Seeded ${articlesData.length} technical articles`);

  // 7. Seed Sample Contact Inquiry
  const sampleContact = {
    name: 'Tariqul Islam',
    email: 'tariqul@techinnovate.io',
    subject: 'Senior Backend Engineering Opportunity / Consulting',
    message:
      'Hello Ashraful, We reviewed your profile and extensive experience with Laravel, high-throughput systems, and ERP solutions. We would love to connect regarding an engineering leadership opportunity.',
    status: ContactStatus.UNREAD,
    notes: 'Inquiry received via portfolio contact portal',
  };

  const existingContact = await prisma.contactMessage.findFirst({
    where: { email: sampleContact.email },
  });
  if (existingContact) {
    await prisma.contactMessage.update({
      where: { id: existingContact.id },
      data: sampleContact,
    });
  } else {
    await prisma.contactMessage.create({ data: sampleContact });
  }
  console.log('✅ Seeded sample contact inquiry');

  // 8. Seed Analytics Metrics
  await prisma.analyticsMetric.createMany({
    data: [
      {
        type: MetricType.PAGE_VIEW,
        identifier: '/',
        referrer: 'https://google.com',
      },
      {
        type: MetricType.PAGE_VIEW,
        identifier: '/projects',
        referrer: 'https://github.com/LikeAshraful',
      },
      {
        type: MetricType.PAGE_VIEW,
        identifier: '/projects/sellserp-enterprise-pos-system',
        referrer: 'https://linkedin.com/in/LikeAshraful',
      },
      {
        type: MetricType.PAGE_VIEW,
        identifier: '/projects/barta24-digital-news-portal-cms',
        referrer: 'https://likeashraful.com',
      },
      {
        type: MetricType.RESUME_DOWNLOAD,
        identifier: 'resume.pdf',
        referrer: 'https://likeashraful.com',
      },
    ],
  });
  console.log('✅ Seeded sample telemetry events');

  console.log('🎉 Seeding completed successfully for Md. Ashraful Islam!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
