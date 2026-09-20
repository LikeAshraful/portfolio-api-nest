import { z } from 'zod';
export declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        production: "production";
        test: "test";
        provision: "provision";
    }>>;
    PORT: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    API_PREFIX: z.ZodDefault<z.ZodString>;
    DATABASE_URL: z.ZodString;
    JWT_SECRET: z.ZodString;
    JWT_EXPIRES_IN: z.ZodDefault<z.ZodString>;
    THROTTLE_TTL: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    THROTTLE_LIMIT: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    CORS_ORIGIN: z.ZodDefault<z.ZodString>;
    SWAGGER_ENABLED: z.ZodDefault<z.ZodPipe<z.ZodString, z.ZodTransform<boolean, string>>>;
    OPENROUTER_API_KEY: z.ZodOptional<z.ZodString>;
    OPENROUTER_BASE_URL: z.ZodOptional<z.ZodString>;
    OPENROUTER_MODEL: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type EnvConfig = z.infer<typeof envSchema>;
export declare function validateEnv(config: Record<string, unknown>): EnvConfig;
