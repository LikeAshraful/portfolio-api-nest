import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type EducationModel = runtime.Types.Result.DefaultSelection<Prisma.$EducationPayload>;
export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null;
    _avg: EducationAvgAggregateOutputType | null;
    _sum: EducationSumAggregateOutputType | null;
    _min: EducationMinAggregateOutputType | null;
    _max: EducationMaxAggregateOutputType | null;
};
export type EducationAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type EducationSumAggregateOutputType = {
    sortOrder: number | null;
};
export type EducationMinAggregateOutputType = {
    id: string | null;
    institution: string | null;
    degree: string | null;
    fieldOfStudy: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean | null;
    grade: string | null;
    description: string | null;
    credentialUrl: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EducationMaxAggregateOutputType = {
    id: string | null;
    institution: string | null;
    degree: string | null;
    fieldOfStudy: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean | null;
    grade: string | null;
    description: string | null;
    credentialUrl: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EducationCountAggregateOutputType = {
    id: number;
    institution: number;
    degree: number;
    fieldOfStudy: number;
    startDate: number;
    endDate: number;
    isCurrent: number;
    grade: number;
    description: number;
    credentialUrl: number;
    sortOrder: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EducationAvgAggregateInputType = {
    sortOrder?: true;
};
export type EducationSumAggregateInputType = {
    sortOrder?: true;
};
export type EducationMinAggregateInputType = {
    id?: true;
    institution?: true;
    degree?: true;
    fieldOfStudy?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    grade?: true;
    description?: true;
    credentialUrl?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EducationMaxAggregateInputType = {
    id?: true;
    institution?: true;
    degree?: true;
    fieldOfStudy?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    grade?: true;
    description?: true;
    credentialUrl?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EducationCountAggregateInputType = {
    id?: true;
    institution?: true;
    degree?: true;
    fieldOfStudy?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    grade?: true;
    description?: true;
    credentialUrl?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EducationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EducationWhereInput;
    orderBy?: Prisma.EducationOrderByWithRelationInput | Prisma.EducationOrderByWithRelationInput[];
    cursor?: Prisma.EducationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EducationCountAggregateInputType;
    _avg?: EducationAvgAggregateInputType;
    _sum?: EducationSumAggregateInputType;
    _min?: EducationMinAggregateInputType;
    _max?: EducationMaxAggregateInputType;
};
export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
    [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEducation[P]> : Prisma.GetScalarType<T[P], AggregateEducation[P]>;
};
export type EducationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EducationWhereInput;
    orderBy?: Prisma.EducationOrderByWithAggregationInput | Prisma.EducationOrderByWithAggregationInput[];
    by: Prisma.EducationScalarFieldEnum[] | Prisma.EducationScalarFieldEnum;
    having?: Prisma.EducationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EducationCountAggregateInputType | true;
    _avg?: EducationAvgAggregateInputType;
    _sum?: EducationSumAggregateInputType;
    _min?: EducationMinAggregateInputType;
    _max?: EducationMaxAggregateInputType;
};
export type EducationGroupByOutputType = {
    id: string;
    institution: string;
    degree: string;
    fieldOfStudy: string | null;
    startDate: Date;
    endDate: Date | null;
    isCurrent: boolean;
    grade: string | null;
    description: string | null;
    credentialUrl: string | null;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    _count: EducationCountAggregateOutputType | null;
    _avg: EducationAvgAggregateOutputType | null;
    _sum: EducationSumAggregateOutputType | null;
    _min: EducationMinAggregateOutputType | null;
    _max: EducationMaxAggregateOutputType | null;
};
export type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EducationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EducationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EducationGroupByOutputType[P]>;
}>>;
export type EducationWhereInput = {
    AND?: Prisma.EducationWhereInput | Prisma.EducationWhereInput[];
    OR?: Prisma.EducationWhereInput[];
    NOT?: Prisma.EducationWhereInput | Prisma.EducationWhereInput[];
    id?: Prisma.StringFilter<"Education"> | string;
    institution?: Prisma.StringFilter<"Education"> | string;
    degree?: Prisma.StringFilter<"Education"> | string;
    fieldOfStudy?: Prisma.StringNullableFilter<"Education"> | string | null;
    startDate?: Prisma.DateTimeFilter<"Education"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Education"> | Date | string | null;
    isCurrent?: Prisma.BoolFilter<"Education"> | boolean;
    grade?: Prisma.StringNullableFilter<"Education"> | string | null;
    description?: Prisma.StringNullableFilter<"Education"> | string | null;
    credentialUrl?: Prisma.StringNullableFilter<"Education"> | string | null;
    sortOrder?: Prisma.IntFilter<"Education"> | number;
    createdAt?: Prisma.DateTimeFilter<"Education"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Education"> | Date | string;
};
export type EducationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    institution?: Prisma.SortOrder;
    degree?: Prisma.SortOrder;
    fieldOfStudy?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    grade?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    credentialUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EducationWhereInput | Prisma.EducationWhereInput[];
    OR?: Prisma.EducationWhereInput[];
    NOT?: Prisma.EducationWhereInput | Prisma.EducationWhereInput[];
    institution?: Prisma.StringFilter<"Education"> | string;
    degree?: Prisma.StringFilter<"Education"> | string;
    fieldOfStudy?: Prisma.StringNullableFilter<"Education"> | string | null;
    startDate?: Prisma.DateTimeFilter<"Education"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Education"> | Date | string | null;
    isCurrent?: Prisma.BoolFilter<"Education"> | boolean;
    grade?: Prisma.StringNullableFilter<"Education"> | string | null;
    description?: Prisma.StringNullableFilter<"Education"> | string | null;
    credentialUrl?: Prisma.StringNullableFilter<"Education"> | string | null;
    sortOrder?: Prisma.IntFilter<"Education"> | number;
    createdAt?: Prisma.DateTimeFilter<"Education"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Education"> | Date | string;
}, "id">;
export type EducationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    institution?: Prisma.SortOrder;
    degree?: Prisma.SortOrder;
    fieldOfStudy?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    grade?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    credentialUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EducationCountOrderByAggregateInput;
    _avg?: Prisma.EducationAvgOrderByAggregateInput;
    _max?: Prisma.EducationMaxOrderByAggregateInput;
    _min?: Prisma.EducationMinOrderByAggregateInput;
    _sum?: Prisma.EducationSumOrderByAggregateInput;
};
export type EducationScalarWhereWithAggregatesInput = {
    AND?: Prisma.EducationScalarWhereWithAggregatesInput | Prisma.EducationScalarWhereWithAggregatesInput[];
    OR?: Prisma.EducationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EducationScalarWhereWithAggregatesInput | Prisma.EducationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Education"> | string;
    institution?: Prisma.StringWithAggregatesFilter<"Education"> | string;
    degree?: Prisma.StringWithAggregatesFilter<"Education"> | string;
    fieldOfStudy?: Prisma.StringNullableWithAggregatesFilter<"Education"> | string | null;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Education"> | Date | string;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Education"> | Date | string | null;
    isCurrent?: Prisma.BoolWithAggregatesFilter<"Education"> | boolean;
    grade?: Prisma.StringNullableWithAggregatesFilter<"Education"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Education"> | string | null;
    credentialUrl?: Prisma.StringNullableWithAggregatesFilter<"Education"> | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Education"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Education"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Education"> | Date | string;
};
export type EducationCreateInput = {
    id?: string;
    institution: string;
    degree: string;
    fieldOfStudy?: string | null;
    startDate: Date | string;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    grade?: string | null;
    description?: string | null;
    credentialUrl?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EducationUncheckedCreateInput = {
    id?: string;
    institution: string;
    degree: string;
    fieldOfStudy?: string | null;
    startDate: Date | string;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    grade?: string | null;
    description?: string | null;
    credentialUrl?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EducationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.StringFieldUpdateOperationsInput | string;
    degree?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldOfStudy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentialUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EducationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.StringFieldUpdateOperationsInput | string;
    degree?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldOfStudy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentialUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EducationCreateManyInput = {
    id?: string;
    institution: string;
    degree: string;
    fieldOfStudy?: string | null;
    startDate: Date | string;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    grade?: string | null;
    description?: string | null;
    credentialUrl?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EducationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.StringFieldUpdateOperationsInput | string;
    degree?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldOfStudy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentialUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EducationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.StringFieldUpdateOperationsInput | string;
    degree?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldOfStudy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentialUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EducationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    institution?: Prisma.SortOrder;
    degree?: Prisma.SortOrder;
    fieldOfStudy?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    credentialUrl?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EducationAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type EducationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    institution?: Prisma.SortOrder;
    degree?: Prisma.SortOrder;
    fieldOfStudy?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    credentialUrl?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EducationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    institution?: Prisma.SortOrder;
    degree?: Prisma.SortOrder;
    fieldOfStudy?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    credentialUrl?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EducationSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type EducationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    institution?: boolean;
    degree?: boolean;
    fieldOfStudy?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    grade?: boolean;
    description?: boolean;
    credentialUrl?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["education"]>;
export type EducationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    institution?: boolean;
    degree?: boolean;
    fieldOfStudy?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    grade?: boolean;
    description?: boolean;
    credentialUrl?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["education"]>;
export type EducationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    institution?: boolean;
    degree?: boolean;
    fieldOfStudy?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    grade?: boolean;
    description?: boolean;
    credentialUrl?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["education"]>;
export type EducationSelectScalar = {
    id?: boolean;
    institution?: boolean;
    degree?: boolean;
    fieldOfStudy?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    grade?: boolean;
    description?: boolean;
    credentialUrl?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EducationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "institution" | "degree" | "fieldOfStudy" | "startDate" | "endDate" | "isCurrent" | "grade" | "description" | "credentialUrl" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["education"]>;
export type $EducationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Education";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        institution: string;
        degree: string;
        fieldOfStudy: string | null;
        startDate: Date;
        endDate: Date | null;
        isCurrent: boolean;
        grade: string | null;
        description: string | null;
        credentialUrl: string | null;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["education"]>;
    composites: {};
};
export type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EducationPayload, S>;
export type EducationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EducationCountAggregateInputType | true;
};
export interface EducationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Education'];
        meta: {
            name: 'Education';
        };
    };
    findUnique<T extends EducationFindUniqueArgs>(args: Prisma.SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EducationClient<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EducationClient<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EducationFindFirstArgs>(args?: Prisma.SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma.Prisma__EducationClient<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EducationClient<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EducationFindManyArgs>(args?: Prisma.SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EducationCreateArgs>(args: Prisma.SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma.Prisma__EducationClient<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EducationCreateManyArgs>(args?: Prisma.SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EducationDeleteArgs>(args: Prisma.SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma.Prisma__EducationClient<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EducationUpdateArgs>(args: Prisma.SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma.Prisma__EducationClient<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EducationDeleteManyArgs>(args?: Prisma.SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EducationUpdateManyArgs>(args: Prisma.SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EducationUpsertArgs>(args: Prisma.SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma.Prisma__EducationClient<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EducationCountArgs>(args?: Prisma.Subset<T, EducationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EducationCountAggregateOutputType> : number>;
    aggregate<T extends EducationAggregateArgs>(args: Prisma.Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>;
    groupBy<T extends EducationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EducationGroupByArgs['orderBy'];
    } : {
        orderBy?: EducationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EducationFieldRefs;
}
export interface Prisma__EducationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EducationFieldRefs {
    readonly id: Prisma.FieldRef<"Education", 'String'>;
    readonly institution: Prisma.FieldRef<"Education", 'String'>;
    readonly degree: Prisma.FieldRef<"Education", 'String'>;
    readonly fieldOfStudy: Prisma.FieldRef<"Education", 'String'>;
    readonly startDate: Prisma.FieldRef<"Education", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Education", 'DateTime'>;
    readonly isCurrent: Prisma.FieldRef<"Education", 'Boolean'>;
    readonly grade: Prisma.FieldRef<"Education", 'String'>;
    readonly description: Prisma.FieldRef<"Education", 'String'>;
    readonly credentialUrl: Prisma.FieldRef<"Education", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"Education", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Education", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Education", 'DateTime'>;
}
export type EducationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelect<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    where: Prisma.EducationWhereUniqueInput;
};
export type EducationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelect<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    where: Prisma.EducationWhereUniqueInput;
};
export type EducationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelect<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    where?: Prisma.EducationWhereInput;
    orderBy?: Prisma.EducationOrderByWithRelationInput | Prisma.EducationOrderByWithRelationInput[];
    cursor?: Prisma.EducationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EducationScalarFieldEnum | Prisma.EducationScalarFieldEnum[];
};
export type EducationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelect<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    where?: Prisma.EducationWhereInput;
    orderBy?: Prisma.EducationOrderByWithRelationInput | Prisma.EducationOrderByWithRelationInput[];
    cursor?: Prisma.EducationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EducationScalarFieldEnum | Prisma.EducationScalarFieldEnum[];
};
export type EducationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelect<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    where?: Prisma.EducationWhereInput;
    orderBy?: Prisma.EducationOrderByWithRelationInput | Prisma.EducationOrderByWithRelationInput[];
    cursor?: Prisma.EducationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EducationScalarFieldEnum | Prisma.EducationScalarFieldEnum[];
};
export type EducationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelect<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EducationCreateInput, Prisma.EducationUncheckedCreateInput>;
};
export type EducationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EducationCreateManyInput | Prisma.EducationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EducationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    data: Prisma.EducationCreateManyInput | Prisma.EducationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EducationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelect<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EducationUpdateInput, Prisma.EducationUncheckedUpdateInput>;
    where: Prisma.EducationWhereUniqueInput;
};
export type EducationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EducationUpdateManyMutationInput, Prisma.EducationUncheckedUpdateManyInput>;
    where?: Prisma.EducationWhereInput;
    limit?: number;
};
export type EducationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EducationUpdateManyMutationInput, Prisma.EducationUncheckedUpdateManyInput>;
    where?: Prisma.EducationWhereInput;
    limit?: number;
};
export type EducationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelect<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    where: Prisma.EducationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EducationCreateInput, Prisma.EducationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EducationUpdateInput, Prisma.EducationUncheckedUpdateInput>;
};
export type EducationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelect<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    where: Prisma.EducationWhereUniqueInput;
};
export type EducationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EducationWhereInput;
    limit?: number;
};
export type EducationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EducationSelect<ExtArgs> | null;
    omit?: Prisma.EducationOmit<ExtArgs> | null;
};
