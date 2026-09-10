import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Project: "Project";
    readonly Skill: "Skill";
    readonly ProjectSkill: "ProjectSkill";
    readonly Experience: "Experience";
    readonly Education: "Education";
    readonly ContactMessage: "ContactMessage";
    readonly Article: "Article";
    readonly AnalyticsMetric: "AnalyticsMetric";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "project" | "skill" | "projectSkill" | "experience" | "education" | "contactMessage" | "article" | "analyticsMetric";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Project: {
            payload: Prisma.$ProjectPayload<ExtArgs>;
            fields: Prisma.ProjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                findMany: {
                    args: Prisma.ProjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                create: {
                    args: Prisma.ProjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                createMany: {
                    args: Prisma.ProjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                delete: {
                    args: Prisma.ProjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                update: {
                    args: Prisma.ProjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProject>;
                };
                groupBy: {
                    args: Prisma.ProjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectCountAggregateOutputType> | number;
                };
            };
        };
        Skill: {
            payload: Prisma.$SkillPayload<ExtArgs>;
            fields: Prisma.SkillFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SkillFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                findFirst: {
                    args: Prisma.SkillFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                findMany: {
                    args: Prisma.SkillFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                create: {
                    args: Prisma.SkillCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                createMany: {
                    args: Prisma.SkillCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                delete: {
                    args: Prisma.SkillDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                update: {
                    args: Prisma.SkillUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                deleteMany: {
                    args: Prisma.SkillDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SkillUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                upsert: {
                    args: Prisma.SkillUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                aggregate: {
                    args: Prisma.SkillAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSkill>;
                };
                groupBy: {
                    args: Prisma.SkillGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SkillGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SkillCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SkillCountAggregateOutputType> | number;
                };
            };
        };
        ProjectSkill: {
            payload: Prisma.$ProjectSkillPayload<ExtArgs>;
            fields: Prisma.ProjectSkillFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectSkillFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectSkillPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectSkillFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectSkillPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectSkillFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectSkillPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectSkillFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectSkillPayload>;
                };
                findMany: {
                    args: Prisma.ProjectSkillFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectSkillPayload>[];
                };
                create: {
                    args: Prisma.ProjectSkillCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectSkillPayload>;
                };
                createMany: {
                    args: Prisma.ProjectSkillCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectSkillCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectSkillPayload>[];
                };
                delete: {
                    args: Prisma.ProjectSkillDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectSkillPayload>;
                };
                update: {
                    args: Prisma.ProjectSkillUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectSkillPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectSkillDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectSkillUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectSkillUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectSkillPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectSkillUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectSkillPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectSkillAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProjectSkill>;
                };
                groupBy: {
                    args: Prisma.ProjectSkillGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectSkillGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectSkillCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectSkillCountAggregateOutputType> | number;
                };
            };
        };
        Experience: {
            payload: Prisma.$ExperiencePayload<ExtArgs>;
            fields: Prisma.ExperienceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExperienceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                findFirst: {
                    args: Prisma.ExperienceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                findMany: {
                    args: Prisma.ExperienceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>[];
                };
                create: {
                    args: Prisma.ExperienceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                createMany: {
                    args: Prisma.ExperienceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>[];
                };
                delete: {
                    args: Prisma.ExperienceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                update: {
                    args: Prisma.ExperienceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                deleteMany: {
                    args: Prisma.ExperienceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExperienceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>[];
                };
                upsert: {
                    args: Prisma.ExperienceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                aggregate: {
                    args: Prisma.ExperienceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExperience>;
                };
                groupBy: {
                    args: Prisma.ExperienceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExperienceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExperienceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExperienceCountAggregateOutputType> | number;
                };
            };
        };
        Education: {
            payload: Prisma.$EducationPayload<ExtArgs>;
            fields: Prisma.EducationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EducationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                findFirst: {
                    args: Prisma.EducationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                findMany: {
                    args: Prisma.EducationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>[];
                };
                create: {
                    args: Prisma.EducationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                createMany: {
                    args: Prisma.EducationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>[];
                };
                delete: {
                    args: Prisma.EducationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                update: {
                    args: Prisma.EducationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                deleteMany: {
                    args: Prisma.EducationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EducationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>[];
                };
                upsert: {
                    args: Prisma.EducationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                aggregate: {
                    args: Prisma.EducationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEducation>;
                };
                groupBy: {
                    args: Prisma.EducationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EducationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EducationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EducationCountAggregateOutputType> | number;
                };
            };
        };
        ContactMessage: {
            payload: Prisma.$ContactMessagePayload<ExtArgs>;
            fields: Prisma.ContactMessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                findFirst: {
                    args: Prisma.ContactMessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                findMany: {
                    args: Prisma.ContactMessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
                };
                create: {
                    args: Prisma.ContactMessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                createMany: {
                    args: Prisma.ContactMessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
                };
                delete: {
                    args: Prisma.ContactMessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                update: {
                    args: Prisma.ContactMessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                deleteMany: {
                    args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
                };
                upsert: {
                    args: Prisma.ContactMessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                aggregate: {
                    args: Prisma.ContactMessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContactMessage>;
                };
                groupBy: {
                    args: Prisma.ContactMessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactMessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContactMessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactMessageCountAggregateOutputType> | number;
                };
            };
        };
        Article: {
            payload: Prisma.$ArticlePayload<ExtArgs>;
            fields: Prisma.ArticleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ArticleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                findFirst: {
                    args: Prisma.ArticleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                findMany: {
                    args: Prisma.ArticleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>[];
                };
                create: {
                    args: Prisma.ArticleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                createMany: {
                    args: Prisma.ArticleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>[];
                };
                delete: {
                    args: Prisma.ArticleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                update: {
                    args: Prisma.ArticleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                deleteMany: {
                    args: Prisma.ArticleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ArticleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>[];
                };
                upsert: {
                    args: Prisma.ArticleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                aggregate: {
                    args: Prisma.ArticleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateArticle>;
                };
                groupBy: {
                    args: Prisma.ArticleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArticleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ArticleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArticleCountAggregateOutputType> | number;
                };
            };
        };
        AnalyticsMetric: {
            payload: Prisma.$AnalyticsMetricPayload<ExtArgs>;
            fields: Prisma.AnalyticsMetricFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnalyticsMetricFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnalyticsMetricFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>;
                };
                findFirst: {
                    args: Prisma.AnalyticsMetricFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnalyticsMetricFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>;
                };
                findMany: {
                    args: Prisma.AnalyticsMetricFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>[];
                };
                create: {
                    args: Prisma.AnalyticsMetricCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>;
                };
                createMany: {
                    args: Prisma.AnalyticsMetricCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnalyticsMetricCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>[];
                };
                delete: {
                    args: Prisma.AnalyticsMetricDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>;
                };
                update: {
                    args: Prisma.AnalyticsMetricUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>;
                };
                deleteMany: {
                    args: Prisma.AnalyticsMetricDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnalyticsMetricUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnalyticsMetricUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>[];
                };
                upsert: {
                    args: Prisma.AnalyticsMetricUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>;
                };
                aggregate: {
                    args: Prisma.AnalyticsMetricAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnalyticsMetric>;
                };
                groupBy: {
                    args: Prisma.AnalyticsMetricGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalyticsMetricGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnalyticsMetricCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalyticsMetricCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly name: "name";
    readonly title: "title";
    readonly bio: "bio";
    readonly avatarUrl: "avatarUrl";
    readonly location: "location";
    readonly githubUrl: "githubUrl";
    readonly linkedinUrl: "linkedinUrl";
    readonly twitterUrl: "twitterUrl";
    readonly websiteUrl: "websiteUrl";
    readonly resumeUrl: "resumeUrl";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly summary: "summary";
    readonly description: "description";
    readonly thumbnailUrl: "thumbnailUrl";
    readonly bannerUrl: "bannerUrl";
    readonly liveDemoUrl: "liveDemoUrl";
    readonly repoUrl: "repoUrl";
    readonly featured: "featured";
    readonly status: "status";
    readonly category: "category";
    readonly sortOrder: "sortOrder";
    readonly viewsCount: "viewsCount";
    readonly likesCount: "likesCount";
    readonly startedAt: "startedAt";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const SkillScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly category: "category";
    readonly proficiency: "proficiency";
    readonly yearsOfExperience: "yearsOfExperience";
    readonly iconUrl: "iconUrl";
    readonly isFeatured: "isFeatured";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum];
export declare const ProjectSkillScalarFieldEnum: {
    readonly projectId: "projectId";
    readonly skillId: "skillId";
    readonly isPrimary: "isPrimary";
    readonly createdAt: "createdAt";
};
export type ProjectSkillScalarFieldEnum = (typeof ProjectSkillScalarFieldEnum)[keyof typeof ProjectSkillScalarFieldEnum];
export declare const ExperienceScalarFieldEnum: {
    readonly id: "id";
    readonly company: "company";
    readonly position: "position";
    readonly location: "location";
    readonly employmentType: "employmentType";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isCurrent: "isCurrent";
    readonly description: "description";
    readonly highlights: "highlights";
    readonly companyUrl: "companyUrl";
    readonly companyLogoUrl: "companyLogoUrl";
    readonly technologies: "technologies";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum];
export declare const EducationScalarFieldEnum: {
    readonly id: "id";
    readonly institution: "institution";
    readonly degree: "degree";
    readonly fieldOfStudy: "fieldOfStudy";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isCurrent: "isCurrent";
    readonly grade: "grade";
    readonly description: "description";
    readonly credentialUrl: "credentialUrl";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum];
export declare const ContactMessageScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly subject: "subject";
    readonly message: "message";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly status: "status";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum];
export declare const ArticleScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly summary: "summary";
    readonly content: "content";
    readonly coverImageUrl: "coverImageUrl";
    readonly tags: "tags";
    readonly readingTimeMinutes: "readingTimeMinutes";
    readonly isPublished: "isPublished";
    readonly publishedAt: "publishedAt";
    readonly viewsCount: "viewsCount";
    readonly authorId: "authorId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum];
export declare const AnalyticsMetricScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly identifier: "identifier";
    readonly referrer: "referrer";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type AnalyticsMetricScalarFieldEnum = (typeof AnalyticsMetricScalarFieldEnum)[keyof typeof AnalyticsMetricScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>;
export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>;
export type EnumProjectCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectCategory'>;
export type ListEnumProjectCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectCategory[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumSkillCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillCategory'>;
export type ListEnumSkillCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillCategory[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType'>;
export type ListEnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType[]'>;
export type EnumContactStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactStatus'>;
export type ListEnumContactStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactStatus[]'>;
export type EnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType'>;
export type ListEnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    project?: Prisma.ProjectOmit;
    skill?: Prisma.SkillOmit;
    projectSkill?: Prisma.ProjectSkillOmit;
    experience?: Prisma.ExperienceOmit;
    education?: Prisma.EducationOmit;
    contactMessage?: Prisma.ContactMessageOmit;
    article?: Prisma.ArticleOmit;
    analyticsMetric?: Prisma.AnalyticsMetricOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
