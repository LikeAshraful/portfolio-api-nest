"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
exports.validateEnv = validateEnv;
const zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(['development', 'production', 'test', 'provision']).default('development'),
    PORT: zod_1.z.coerce.number().default(3000),
    API_PREFIX: zod_1.z.string().default('api/v1'),
    DATABASE_URL: zod_1.z.string().min(1, 'DATABASE_URL is required'),
    JWT_SECRET: zod_1.z.string().min(16, 'JWT_SECRET must be at least 16 characters long'),
    JWT_EXPIRES_IN: zod_1.z.string().default('7d'),
    THROTTLE_TTL: zod_1.z.coerce.number().default(60),
    THROTTLE_LIMIT: zod_1.z.coerce.number().default(100),
    CORS_ORIGIN: zod_1.z.string().default('*'),
    SWAGGER_ENABLED: zod_1.z
        .string()
        .transform((val) => val === 'true')
        .default(true),
    OPENROUTER_API_KEY: zod_1.z.string().optional(),
    OPENROUTER_BASE_URL: zod_1.z.string().optional(),
    OPENROUTER_MODEL: zod_1.z.string().optional(),
}).passthrough();
function validateEnv(config) {
    const parsed = exports.envSchema.safeParse(config);
    if (!parsed.success) {
        const errors = parsed.error.issues
            .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
            .join('\n');
        throw new Error(`Environment validation failed:\n${errors}`);
    }
    return parsed.data;
}
//# sourceMappingURL=env.validation.js.map