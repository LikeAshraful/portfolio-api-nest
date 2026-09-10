import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ExperienceModel = runtime.Types.Result.DefaultSelection<Prisma.$ExperiencePayload>;
export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null;
    _avg: ExperienceAvgAggregateOutputType | null;
    _sum: ExperienceSumAggregateOutputType | null;
    _min: ExperienceMinAggregateOutputType | null;
    _max: ExperienceMaxAggregateOutputType | null;
};
export type ExperienceAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type ExperienceSumAggregateOutputType = {
    sortOrder: number | null;
};
export type ExperienceMinAggregateOutputType = {
    id: string | null;
    company: string | null;
    position: string | null;
    location: string | null;
    employmentType: $Enums.EmploymentType | null;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean | null;
    description: string | null;
    companyUrl: string | null;
    companyLogoUrl: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExperienceMaxAggregateOutputType = {
    id: string | null;
    company: string | null;
    position: string | null;
    location: string | null;
    employmentType: $Enums.EmploymentType | null;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean | null;
    description: string | null;
    companyUrl: string | null;
    companyLogoUrl: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExperienceCountAggregateOutputType = {
    id: number;
    company: number;
    position: number;
    location: number;
    employmentType: number;
    startDate: number;
    endDate: number;
    isCurrent: number;
    description: number;
    highlights: number;
    companyUrl: number;
    companyLogoUrl: number;
    technologies: number;
    sortOrder: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ExperienceAvgAggregateInputType = {
    sortOrder?: true;
};
export type ExperienceSumAggregateInputType = {
    sortOrder?: true;
};
export type ExperienceMinAggregateInputType = {
    id?: true;
    company?: true;
    position?: true;
    location?: true;
    employmentType?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    description?: true;
    companyUrl?: true;
    companyLogoUrl?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExperienceMaxAggregateInputType = {
    id?: true;
    company?: true;
    position?: true;
    location?: true;
    employmentType?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    description?: true;
    companyUrl?: true;
    companyLogoUrl?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExperienceCountAggregateInputType = {
    id?: true;
    company?: true;
    position?: true;
    location?: true;
    employmentType?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    description?: true;
    highlights?: true;
    companyUrl?: true;
    companyLogoUrl?: true;
    technologies?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ExperienceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithRelationInput | Prisma.ExperienceOrderByWithRelationInput[];
    cursor?: Prisma.ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExperienceCountAggregateInputType;
    _avg?: ExperienceAvgAggregateInputType;
    _sum?: ExperienceSumAggregateInputType;
    _min?: ExperienceMinAggregateInputType;
    _max?: ExperienceMaxAggregateInputType;
};
export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
    [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExperience[P]> : Prisma.GetScalarType<T[P], AggregateExperience[P]>;
};
export type ExperienceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithAggregationInput | Prisma.ExperienceOrderByWithAggregationInput[];
    by: Prisma.ExperienceScalarFieldEnum[] | Prisma.ExperienceScalarFieldEnum;
    having?: Prisma.ExperienceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExperienceCountAggregateInputType | true;
    _avg?: ExperienceAvgAggregateInputType;
    _sum?: ExperienceSumAggregateInputType;
    _min?: ExperienceMinAggregateInputType;
    _max?: ExperienceMaxAggregateInputType;
};
export type ExperienceGroupByOutputType = {
    id: string;
    company: string;
    position: string;
    location: string | null;
    employmentType: $Enums.EmploymentType;
    startDate: Date;
    endDate: Date | null;
    isCurrent: boolean;
    description: string;
    highlights: string[];
    companyUrl: string | null;
    companyLogoUrl: string | null;
    technologies: string[];
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ExperienceCountAggregateOutputType | null;
    _avg: ExperienceAvgAggregateOutputType | null;
    _sum: ExperienceSumAggregateOutputType | null;
    _min: ExperienceMinAggregateOutputType | null;
    _max: ExperienceMaxAggregateOutputType | null;
};
export type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExperienceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExperienceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExperienceGroupByOutputType[P]>;
}>>;
export type ExperienceWhereInput = {
    AND?: Prisma.ExperienceWhereInput | Prisma.ExperienceWhereInput[];
    OR?: Prisma.ExperienceWhereInput[];
    NOT?: Prisma.ExperienceWhereInput | Prisma.ExperienceWhereInput[];
    id?: Prisma.StringFilter<"Experience"> | string;
    company?: Prisma.StringFilter<"Experience"> | string;
    position?: Prisma.StringFilter<"Experience"> | string;
    location?: Prisma.StringNullableFilter<"Experience"> | string | null;
    employmentType?: Prisma.EnumEmploymentTypeFilter<"Experience"> | $Enums.EmploymentType;
    startDate?: Prisma.DateTimeFilter<"Experience"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Experience"> | Date | string | null;
    isCurrent?: Prisma.BoolFilter<"Experience"> | boolean;
    description?: Prisma.StringFilter<"Experience"> | string;
    highlights?: Prisma.StringNullableListFilter<"Experience">;
    companyUrl?: Prisma.StringNullableFilter<"Experience"> | string | null;
    companyLogoUrl?: Prisma.StringNullableFilter<"Experience"> | string | null;
    technologies?: Prisma.StringNullableListFilter<"Experience">;
    sortOrder?: Prisma.IntFilter<"Experience"> | number;
    createdAt?: Prisma.DateTimeFilter<"Experience"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Experience"> | Date | string;
};
export type ExperienceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    company?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    employmentType?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    highlights?: Prisma.SortOrder;
    companyUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyLogoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    technologies?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ExperienceWhereInput | Prisma.ExperienceWhereInput[];
    OR?: Prisma.ExperienceWhereInput[];
    NOT?: Prisma.ExperienceWhereInput | Prisma.ExperienceWhereInput[];
    company?: Prisma.StringFilter<"Experience"> | string;
    position?: Prisma.StringFilter<"Experience"> | string;
    location?: Prisma.StringNullableFilter<"Experience"> | string | null;
    employmentType?: Prisma.EnumEmploymentTypeFilter<"Experience"> | $Enums.EmploymentType;
    startDate?: Prisma.DateTimeFilter<"Experience"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Experience"> | Date | string | null;
    isCurrent?: Prisma.BoolFilter<"Experience"> | boolean;
    description?: Prisma.StringFilter<"Experience"> | string;
    highlights?: Prisma.StringNullableListFilter<"Experience">;
    companyUrl?: Prisma.StringNullableFilter<"Experience"> | string | null;
    companyLogoUrl?: Prisma.StringNullableFilter<"Experience"> | string | null;
    technologies?: Prisma.StringNullableListFilter<"Experience">;
    sortOrder?: Prisma.IntFilter<"Experience"> | number;
    createdAt?: Prisma.DateTimeFilter<"Experience"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Experience"> | Date | string;
}, "id">;
export type ExperienceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    company?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    employmentType?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    highlights?: Prisma.SortOrder;
    companyUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyLogoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    technologies?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ExperienceCountOrderByAggregateInput;
    _avg?: Prisma.ExperienceAvgOrderByAggregateInput;
    _max?: Prisma.ExperienceMaxOrderByAggregateInput;
    _min?: Prisma.ExperienceMinOrderByAggregateInput;
    _sum?: Prisma.ExperienceSumOrderByAggregateInput;
};
export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExperienceScalarWhereWithAggregatesInput | Prisma.ExperienceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExperienceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExperienceScalarWhereWithAggregatesInput | Prisma.ExperienceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Experience"> | string;
    company?: Prisma.StringWithAggregatesFilter<"Experience"> | string;
    position?: Prisma.StringWithAggregatesFilter<"Experience"> | string;
    location?: Prisma.StringNullableWithAggregatesFilter<"Experience"> | string | null;
    employmentType?: Prisma.EnumEmploymentTypeWithAggregatesFilter<"Experience"> | $Enums.EmploymentType;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Experience"> | Date | string;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Experience"> | Date | string | null;
    isCurrent?: Prisma.BoolWithAggregatesFilter<"Experience"> | boolean;
    description?: Prisma.StringWithAggregatesFilter<"Experience"> | string;
    highlights?: Prisma.StringNullableListFilter<"Experience">;
    companyUrl?: Prisma.StringNullableWithAggregatesFilter<"Experience"> | string | null;
    companyLogoUrl?: Prisma.StringNullableWithAggregatesFilter<"Experience"> | string | null;
    technologies?: Prisma.StringNullableListFilter<"Experience">;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Experience"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Experience"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Experience"> | Date | string;
};
export type ExperienceCreateInput = {
    id?: string;
    company: string;
    position: string;
    location?: string | null;
    employmentType?: $Enums.EmploymentType;
    startDate: Date | string;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    description: string;
    highlights?: Prisma.ExperienceCreatehighlightsInput | string[];
    companyUrl?: string | null;
    companyLogoUrl?: string | null;
    technologies?: Prisma.ExperienceCreatetechnologiesInput | string[];
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExperienceUncheckedCreateInput = {
    id?: string;
    company: string;
    position: string;
    location?: string | null;
    employmentType?: $Enums.EmploymentType;
    startDate: Date | string;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    description: string;
    highlights?: Prisma.ExperienceCreatehighlightsInput | string[];
    companyUrl?: string | null;
    companyLogoUrl?: string | null;
    technologies?: Prisma.ExperienceCreatetechnologiesInput | string[];
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExperienceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    company?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    highlights?: Prisma.ExperienceUpdatehighlightsInput | string[];
    companyUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ExperienceUpdatetechnologiesInput | string[];
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExperienceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    company?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    highlights?: Prisma.ExperienceUpdatehighlightsInput | string[];
    companyUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ExperienceUpdatetechnologiesInput | string[];
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExperienceCreateManyInput = {
    id?: string;
    company: string;
    position: string;
    location?: string | null;
    employmentType?: $Enums.EmploymentType;
    startDate: Date | string;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    description: string;
    highlights?: Prisma.ExperienceCreatehighlightsInput | string[];
    companyUrl?: string | null;
    companyLogoUrl?: string | null;
    technologies?: Prisma.ExperienceCreatetechnologiesInput | string[];
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExperienceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    company?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    highlights?: Prisma.ExperienceUpdatehighlightsInput | string[];
    companyUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ExperienceUpdatetechnologiesInput | string[];
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExperienceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    company?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    highlights?: Prisma.ExperienceUpdatehighlightsInput | string[];
    companyUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ExperienceUpdatetechnologiesInput | string[];
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ExperienceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    company?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    employmentType?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    highlights?: Prisma.SortOrder;
    companyUrl?: Prisma.SortOrder;
    companyLogoUrl?: Prisma.SortOrder;
    technologies?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExperienceAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ExperienceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    company?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    employmentType?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    companyUrl?: Prisma.SortOrder;
    companyLogoUrl?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExperienceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    company?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    employmentType?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    companyUrl?: Prisma.SortOrder;
    companyLogoUrl?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExperienceSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ExperienceCreatehighlightsInput = {
    set: string[];
};
export type ExperienceCreatetechnologiesInput = {
    set: string[];
};
export type EnumEmploymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentType;
};
export type ExperienceUpdatehighlightsInput = {
    set?: string[];
    push?: string | string[];
};
export type ExperienceUpdatetechnologiesInput = {
    set?: string[];
    push?: string | string[];
};
export type ExperienceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    company?: boolean;
    position?: boolean;
    location?: boolean;
    employmentType?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    description?: boolean;
    highlights?: boolean;
    companyUrl?: boolean;
    companyLogoUrl?: boolean;
    technologies?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["experience"]>;
export type ExperienceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    company?: boolean;
    position?: boolean;
    location?: boolean;
    employmentType?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    description?: boolean;
    highlights?: boolean;
    companyUrl?: boolean;
    companyLogoUrl?: boolean;
    technologies?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["experience"]>;
export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    company?: boolean;
    position?: boolean;
    location?: boolean;
    employmentType?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    description?: boolean;
    highlights?: boolean;
    companyUrl?: boolean;
    companyLogoUrl?: boolean;
    technologies?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["experience"]>;
export type ExperienceSelectScalar = {
    id?: boolean;
    company?: boolean;
    position?: boolean;
    location?: boolean;
    employmentType?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    description?: boolean;
    highlights?: boolean;
    companyUrl?: boolean;
    companyLogoUrl?: boolean;
    technologies?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ExperienceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "company" | "position" | "location" | "employmentType" | "startDate" | "endDate" | "isCurrent" | "description" | "highlights" | "companyUrl" | "companyLogoUrl" | "technologies" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["experience"]>;
export type $ExperiencePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Experience";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        company: string;
        position: string;
        location: string | null;
        employmentType: $Enums.EmploymentType;
        startDate: Date;
        endDate: Date | null;
        isCurrent: boolean;
        description: string;
        highlights: string[];
        companyUrl: string | null;
        companyLogoUrl: string | null;
        technologies: string[];
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["experience"]>;
    composites: {};
};
export type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExperiencePayload, S>;
export type ExperienceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExperienceCountAggregateInputType | true;
};
export interface ExperienceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Experience'];
        meta: {
            name: 'Experience';
        };
    };
    findUnique<T extends ExperienceFindUniqueArgs>(args: Prisma.SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExperienceFindFirstArgs>(args?: Prisma.SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExperienceFindManyArgs>(args?: Prisma.SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExperienceCreateArgs>(args: Prisma.SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExperienceCreateManyArgs>(args?: Prisma.SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExperienceDeleteArgs>(args: Prisma.SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExperienceUpdateArgs>(args: Prisma.SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExperienceUpdateManyArgs>(args: Prisma.SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExperienceUpsertArgs>(args: Prisma.SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma.Prisma__ExperienceClient<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExperienceCountArgs>(args?: Prisma.Subset<T, ExperienceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExperienceCountAggregateOutputType> : number>;
    aggregate<T extends ExperienceAggregateArgs>(args: Prisma.Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>;
    groupBy<T extends ExperienceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExperienceGroupByArgs['orderBy'];
    } : {
        orderBy?: ExperienceGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExperienceFieldRefs;
}
export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExperienceFieldRefs {
    readonly id: Prisma.FieldRef<"Experience", 'String'>;
    readonly company: Prisma.FieldRef<"Experience", 'String'>;
    readonly position: Prisma.FieldRef<"Experience", 'String'>;
    readonly location: Prisma.FieldRef<"Experience", 'String'>;
    readonly employmentType: Prisma.FieldRef<"Experience", 'EmploymentType'>;
    readonly startDate: Prisma.FieldRef<"Experience", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Experience", 'DateTime'>;
    readonly isCurrent: Prisma.FieldRef<"Experience", 'Boolean'>;
    readonly description: Prisma.FieldRef<"Experience", 'String'>;
    readonly highlights: Prisma.FieldRef<"Experience", 'String[]'>;
    readonly companyUrl: Prisma.FieldRef<"Experience", 'String'>;
    readonly companyLogoUrl: Prisma.FieldRef<"Experience", 'String'>;
    readonly technologies: Prisma.FieldRef<"Experience", 'String[]'>;
    readonly sortOrder: Prisma.FieldRef<"Experience", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Experience", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Experience", 'DateTime'>;
}
export type ExperienceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    where: Prisma.ExperienceWhereUniqueInput;
};
export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    where: Prisma.ExperienceWhereUniqueInput;
};
export type ExperienceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithRelationInput | Prisma.ExperienceOrderByWithRelationInput[];
    cursor?: Prisma.ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExperienceScalarFieldEnum | Prisma.ExperienceScalarFieldEnum[];
};
export type ExperienceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithRelationInput | Prisma.ExperienceOrderByWithRelationInput[];
    cursor?: Prisma.ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExperienceScalarFieldEnum | Prisma.ExperienceScalarFieldEnum[];
};
export type ExperienceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithRelationInput | Prisma.ExperienceOrderByWithRelationInput[];
    cursor?: Prisma.ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExperienceScalarFieldEnum | Prisma.ExperienceScalarFieldEnum[];
};
export type ExperienceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExperienceCreateInput, Prisma.ExperienceUncheckedCreateInput>;
};
export type ExperienceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExperienceCreateManyInput | Prisma.ExperienceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExperienceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    data: Prisma.ExperienceCreateManyInput | Prisma.ExperienceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExperienceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExperienceUpdateInput, Prisma.ExperienceUncheckedUpdateInput>;
    where: Prisma.ExperienceWhereUniqueInput;
};
export type ExperienceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExperienceUpdateManyMutationInput, Prisma.ExperienceUncheckedUpdateManyInput>;
    where?: Prisma.ExperienceWhereInput;
    limit?: number;
};
export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExperienceUpdateManyMutationInput, Prisma.ExperienceUncheckedUpdateManyInput>;
    where?: Prisma.ExperienceWhereInput;
    limit?: number;
};
export type ExperienceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    where: Prisma.ExperienceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExperienceCreateInput, Prisma.ExperienceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExperienceUpdateInput, Prisma.ExperienceUncheckedUpdateInput>;
};
export type ExperienceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    where: Prisma.ExperienceWhereUniqueInput;
};
export type ExperienceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExperienceWhereInput;
    limit?: number;
};
export type ExperienceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
};
