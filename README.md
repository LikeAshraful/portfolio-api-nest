# NestJS Clean Architecture Portfolio API

A scalable, production-ready enterprise portfolio backend application engineered with **NestJS**, **TypeScript (Strict Mode)**, **Prisma ORM 7**, **PostgreSQL**, and the **Repository Pattern** with Inversion of Control.

---

## 🏛️ Architectural Principles & Design Decisions

### 1. Inversion of Control & Repository Pattern
- **Domain Interfaces:** Defined in each module (e.g. [`IUserRepository`](file:///D:/Projects/nest%20projects/nest-portfolio/src/modules/users/interfaces/user-repository.interface.ts), [`IProjectRepository`](file:///D:/Projects/nest%20projects/nest-portfolio/src/modules/projects/interfaces/project-repository.interface.ts)).
- **Prisma Implementations:** Concrete implementations (e.g. [`PrismaUserRepository`](file:///D:/Projects/nest%20projects/nest-portfolio/src/modules/users/repositories/prisma-user.repository.ts), [`PrismaProjectRepository`](file:///D:/Projects/nest%20projects/nest-portfolio/src/modules/projects/repositories/prisma-project.repository.ts)) encapsulate all database access and queries.
- **Dependency Injection Tokens:** Abstract interfaces are bound to concrete implementations via IoC tokens (e.g., `USER_REPOSITORY`, `PROJECT_REPOSITORY`), ensuring services never depend directly on the database client or ORM.
- **Separation of Concerns:** Controllers handle routing, input transformation, and validation; Services handle business orchestration; Repositories handle data persistence; Domain Entities decouple database schemas from domain contracts.

### 2. Prisma 7 with Native PostgreSQL Driver Adapter
- Configured with `prisma.config.ts` and `@prisma/adapter-pg` using native connection pooling.
- Schema generator outputs directly into [`src/database/generated/prisma`](file:///D:/Projects/nest%20projects/nest-portfolio/src/database/generated/prisma).

### 3. Layered Module Layout
```text
src/
├── common/                          # Global architectural cross-cutting concerns
│   ├── decorators/                  # @CurrentUser(), @Public(), @Roles(), @ApiPaginatedResponse()
│   ├── dto/                         # PaginationQueryDto, PaginatedResult, ApiResponseDto
│   ├── filters/                     # AllExceptionsFilter, PrismaExceptionFilter
│   ├── guards/                      # JwtAuthGuard, RolesGuard
│   ├── interceptors/                # TransformInterceptor, LoggingInterceptor
│   └── index.ts
├── config/                          # Type-safe environment validation with Zod
│   ├── app.config.ts
│   ├── env.validation.ts
│   └── index.ts
├── database/                        # Database connectivity and lifecycle hooks
│   ├── generated/prisma/            # Prisma 7 generated client & models
│   ├── prisma.service.ts            # PrismaPg driver adapter service
│   └── database.module.ts
└── modules/                         # Isolated domain feature modules
    ├── analytics/                   # Visitor telemetry, page views, and resume metrics
    ├── articles/                    # Technical write-ups, markdown posts, and read times
    ├── auth/                        # JWT authentication, token rotation, and guards
    ├── contact/                     # Public contact inquiries & management
    ├── experiences/                 # Career history, achievements, and education
    ├── health/                      # Terminus liveness and database ping probes
    ├── projects/                    # Portfolio showcases, tech stacks, and live demos
    ├── skills/                      # Technical skills categorized by domain
    └── users/                       # User management and portfolio owner profile
```

---

## 🚀 Tech Stack

- **Core Framework:** NestJS 11 (Express platform)
- **Language:** TypeScript 5.7+ (Strict Mode enabled)
- **Database:** PostgreSQL
- **ORM:** Prisma ORM 7 (`@prisma/adapter-pg`)
- **Authentication:** Passport, JWT (`@nestjs/jwt`), Bcrypt
- **Validation & Serialization:** `class-validator`, `class-transformer`, `zod`
- **Documentation:** `@nestjs/swagger` (OpenAPI 3.0)
- **Security & Reliability:** `@nestjs/throttler`, `@nestjs/terminus`
- **Testing:** Jest, `@nestjs/testing`, Supertest

---

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js `20.x` or `22.x` / `24.x`
- PostgreSQL instance running locally or via Docker

### 2. Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Review environment settings in [`.env`](file:///D:/Projects/nest%20projects/nest-portfolio/.env):
```env
NODE_ENV=development
PORT=3000
API_PREFIX=api/v1
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/nest_portfolio?schema=public
JWT_SECRET=super-secret-jwt-portfolio-key-change-in-production-2026
JWT_EXPIRES_IN=7d
THROTTLE_TTL=60
THROTTLE_LIMIT=100
CORS_ORIGIN=*
SWAGGER_ENABLED=true
```

### 3. Generate Prisma Client & Migrate Database
```bash
# Generate the Prisma Client
npx prisma generate

# Push schema or run migrations against your PostgreSQL database
npx prisma db push
# or
npx prisma migrate dev --name init
```

### 4. Seed Rich Portfolio Data
Populate the database with sample portfolio owner profiles, featured projects, categorized skills, career milestones, articles, and telemetry counters:
```bash
npx ts-node prisma/seed.ts
```

*Default Admin Credentials:*
- **Email:** `alex@example.com`
- **Password:** `AdminSecurePass123!`

---

## 🏃 Running the Application

```bash
# Development mode with hot-reload
npm run start:dev

# Production build and run
npm run build
npm run start:prod
```

### 📖 Interactive Swagger API Documentation
When the server is running, navigate to:
**[http://localhost:3000/docs](http://localhost:3000/docs)**

---

## 🧪 Testing

```bash
# Run unit test suites (Services, mocks, business logic)
npm test

# Run tests with coverage report
npm run test:cov

# Run E2E test suites (HTTP Controller routes)
npm run test:e2e
```

---

## 📑 API Endpoint Summary

| Module | Method | Endpoint | Access | Description |
|---|---|---|---|---|
| **Auth** | `POST` | `/api/v1/auth/login` | Public | Authenticate and obtain JWT tokens |
| **Auth** | `POST` | `/api/v1/auth/register` | Public | Register new user |
| **Auth** | `POST` | `/api/v1/auth/refresh` | Public | Refresh JWT access token |
| **Auth** | `GET` | `/api/v1/auth/me` | Bearer | Current user session |
| **Profile** | `GET` | `/api/v1/users/profile/public` | Public | Public owner portfolio profile |
| **Profile** | `GET` | `/api/v1/users/me` | Bearer | Current user full profile |
| **Profile** | `PATCH` | `/api/v1/users/me` | Bearer | Update current profile |
| **Projects** | `GET` | `/api/v1/projects` | Public | List published projects (paginated) |
| **Projects** | `GET` | `/api/v1/projects/featured` | Public | Curated featured projects |
| **Projects** | `GET` | `/api/v1/projects/:slugOrId` | Public | Project details & view increment |
| **Projects** | `POST` | `/api/v1/projects/:id/like` | Public | Like / upvote project |
| **Projects** | `POST` | `/api/v1/projects` | Admin | Create project |
| **Skills** | `GET` | `/api/v1/skills/grouped` | Public | Skills grouped by tech category |
| **Skills** | `GET` | `/api/v1/skills` | Public | List all skills (paginated) |
| **Skills** | `POST` | `/api/v1/skills` | Admin | Create skill |
| **Experiences** | `GET` | `/api/v1/experiences` | Public | Work history and highlights |
| **Experiences** | `GET` | `/api/v1/experiences/education` | Public | Academic background & degrees |
| **Articles** | `GET` | `/api/v1/articles` | Public | Published technical articles |
| **Articles** | `GET` | `/api/v1/articles/:slugOrId` | Public | Article content and view increment |
| **Articles** | `POST` | `/api/v1/articles` | Admin | Publish new article |
| **Contact** | `POST` | `/api/v1/contact` | Public | Submit visitor inquiry |
| **Contact** | `GET` | `/api/v1/contact/unread-count` | Admin | Total unread inquiries |
| **Contact** | `GET` | `/api/v1/contact` | Admin | List inquiries |
| **Analytics** | `POST` | `/api/v1/analytics/track` | Public | Record page view / download metric |
| **Analytics** | `GET` | `/api/v1/analytics/overview` | Admin | Analytics overview & 7-day stats |
| **Health** | `GET` | `/api/v1/health` | Public | Terminus database health check |
