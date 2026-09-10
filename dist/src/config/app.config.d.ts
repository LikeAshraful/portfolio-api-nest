export declare const appConfig: (() => {
    nodeEnv: string;
    port: number;
    apiPrefix: string;
    databaseUrl: string | undefined;
    jwt: {
        secret: string;
        expiresIn: string;
    };
    throttler: {
        ttl: number;
        limit: number;
    };
    corsOrigin: string;
    swaggerEnabled: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    nodeEnv: string;
    port: number;
    apiPrefix: string;
    databaseUrl: string | undefined;
    jwt: {
        secret: string;
        expiresIn: string;
    };
    throttler: {
        ttl: number;
        limit: number;
    };
    corsOrigin: string;
    swaggerEnabled: boolean;
}>;
