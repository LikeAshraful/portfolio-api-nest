import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type AnalyticsMetricModel = runtime.Types.Result.DefaultSelection<Prisma.$AnalyticsMetricPayload>;
export type AggregateAnalyticsMetric = {
    _count: AnalyticsMetricCountAggregateOutputType | null;
    _min: AnalyticsMetricMinAggregateOutputType | null;
    _max: AnalyticsMetricMaxAggregateOutputType | null;
};
export type AnalyticsMetricMinAggregateOutputType = {
    id: string | null;
    type: $Enums.MetricType | null;
    identifier: string | null;
    referrer: string | null;
    userAgent: string | null;
    createdAt: Date | null;
};
export type AnalyticsMetricMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.MetricType | null;
    identifier: string | null;
    referrer: string | null;
    userAgent: string | null;
    createdAt: Date | null;
};
export type AnalyticsMetricCountAggregateOutputType = {
    id: number;
    type: number;
    identifier: number;
    referrer: number;
    userAgent: number;
    createdAt: number;
    _all: number;
};
export type AnalyticsMetricMinAggregateInputType = {
    id?: true;
    type?: true;
    identifier?: true;
    referrer?: true;
    userAgent?: true;
    createdAt?: true;
};
export type AnalyticsMetricMaxAggregateInputType = {
    id?: true;
    type?: true;
    identifier?: true;
    referrer?: true;
    userAgent?: true;
    createdAt?: true;
};
export type AnalyticsMetricCountAggregateInputType = {
    id?: true;
    type?: true;
    identifier?: true;
    referrer?: true;
    userAgent?: true;
    createdAt?: true;
    _all?: true;
};
export type AnalyticsMetricAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyticsMetricWhereInput;
    orderBy?: Prisma.AnalyticsMetricOrderByWithRelationInput | Prisma.AnalyticsMetricOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsMetricWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnalyticsMetricCountAggregateInputType;
    _min?: AnalyticsMetricMinAggregateInputType;
    _max?: AnalyticsMetricMaxAggregateInputType;
};
export type GetAnalyticsMetricAggregateType<T extends AnalyticsMetricAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalyticsMetric]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnalyticsMetric[P]> : Prisma.GetScalarType<T[P], AggregateAnalyticsMetric[P]>;
};
export type AnalyticsMetricGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyticsMetricWhereInput;
    orderBy?: Prisma.AnalyticsMetricOrderByWithAggregationInput | Prisma.AnalyticsMetricOrderByWithAggregationInput[];
    by: Prisma.AnalyticsMetricScalarFieldEnum[] | Prisma.AnalyticsMetricScalarFieldEnum;
    having?: Prisma.AnalyticsMetricScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnalyticsMetricCountAggregateInputType | true;
    _min?: AnalyticsMetricMinAggregateInputType;
    _max?: AnalyticsMetricMaxAggregateInputType;
};
export type AnalyticsMetricGroupByOutputType = {
    id: string;
    type: $Enums.MetricType;
    identifier: string | null;
    referrer: string | null;
    userAgent: string | null;
    createdAt: Date;
    _count: AnalyticsMetricCountAggregateOutputType | null;
    _min: AnalyticsMetricMinAggregateOutputType | null;
    _max: AnalyticsMetricMaxAggregateOutputType | null;
};
export type GetAnalyticsMetricGroupByPayload<T extends AnalyticsMetricGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnalyticsMetricGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnalyticsMetricGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnalyticsMetricGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnalyticsMetricGroupByOutputType[P]>;
}>>;
export type AnalyticsMetricWhereInput = {
    AND?: Prisma.AnalyticsMetricWhereInput | Prisma.AnalyticsMetricWhereInput[];
    OR?: Prisma.AnalyticsMetricWhereInput[];
    NOT?: Prisma.AnalyticsMetricWhereInput | Prisma.AnalyticsMetricWhereInput[];
    id?: Prisma.StringFilter<"AnalyticsMetric"> | string;
    type?: Prisma.EnumMetricTypeFilter<"AnalyticsMetric"> | $Enums.MetricType;
    identifier?: Prisma.StringNullableFilter<"AnalyticsMetric"> | string | null;
    referrer?: Prisma.StringNullableFilter<"AnalyticsMetric"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"AnalyticsMetric"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AnalyticsMetric"> | Date | string;
};
export type AnalyticsMetricOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    identifier?: Prisma.SortOrderInput | Prisma.SortOrder;
    referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AnalyticsMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AnalyticsMetricWhereInput | Prisma.AnalyticsMetricWhereInput[];
    OR?: Prisma.AnalyticsMetricWhereInput[];
    NOT?: Prisma.AnalyticsMetricWhereInput | Prisma.AnalyticsMetricWhereInput[];
    type?: Prisma.EnumMetricTypeFilter<"AnalyticsMetric"> | $Enums.MetricType;
    identifier?: Prisma.StringNullableFilter<"AnalyticsMetric"> | string | null;
    referrer?: Prisma.StringNullableFilter<"AnalyticsMetric"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"AnalyticsMetric"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AnalyticsMetric"> | Date | string;
}, "id">;
export type AnalyticsMetricOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    identifier?: Prisma.SortOrderInput | Prisma.SortOrder;
    referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AnalyticsMetricCountOrderByAggregateInput;
    _max?: Prisma.AnalyticsMetricMaxOrderByAggregateInput;
    _min?: Prisma.AnalyticsMetricMinOrderByAggregateInput;
};
export type AnalyticsMetricScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnalyticsMetricScalarWhereWithAggregatesInput | Prisma.AnalyticsMetricScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnalyticsMetricScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnalyticsMetricScalarWhereWithAggregatesInput | Prisma.AnalyticsMetricScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AnalyticsMetric"> | string;
    type?: Prisma.EnumMetricTypeWithAggregatesFilter<"AnalyticsMetric"> | $Enums.MetricType;
    identifier?: Prisma.StringNullableWithAggregatesFilter<"AnalyticsMetric"> | string | null;
    referrer?: Prisma.StringNullableWithAggregatesFilter<"AnalyticsMetric"> | string | null;
    userAgent?: Prisma.StringNullableWithAggregatesFilter<"AnalyticsMetric"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AnalyticsMetric"> | Date | string;
};
export type AnalyticsMetricCreateInput = {
    id?: string;
    type?: $Enums.MetricType;
    identifier?: string | null;
    referrer?: string | null;
    userAgent?: string | null;
    createdAt?: Date | string;
};
export type AnalyticsMetricUncheckedCreateInput = {
    id?: string;
    type?: $Enums.MetricType;
    identifier?: string | null;
    referrer?: string | null;
    userAgent?: string | null;
    createdAt?: Date | string;
};
export type AnalyticsMetricUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    identifier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsMetricUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    identifier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsMetricCreateManyInput = {
    id?: string;
    type?: $Enums.MetricType;
    identifier?: string | null;
    referrer?: string | null;
    userAgent?: string | null;
    createdAt?: Date | string;
};
export type AnalyticsMetricUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    identifier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsMetricUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    identifier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsMetricCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AnalyticsMetricMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AnalyticsMetricMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnumMetricTypeFieldUpdateOperationsInput = {
    set?: $Enums.MetricType;
};
export type AnalyticsMetricSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    identifier?: boolean;
    referrer?: boolean;
    userAgent?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["analyticsMetric"]>;
export type AnalyticsMetricSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    identifier?: boolean;
    referrer?: boolean;
    userAgent?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["analyticsMetric"]>;
export type AnalyticsMetricSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    identifier?: boolean;
    referrer?: boolean;
    userAgent?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["analyticsMetric"]>;
export type AnalyticsMetricSelectScalar = {
    id?: boolean;
    type?: boolean;
    identifier?: boolean;
    referrer?: boolean;
    userAgent?: boolean;
    createdAt?: boolean;
};
export type AnalyticsMetricOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "identifier" | "referrer" | "userAgent" | "createdAt", ExtArgs["result"]["analyticsMetric"]>;
export type $AnalyticsMetricPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnalyticsMetric";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: $Enums.MetricType;
        identifier: string | null;
        referrer: string | null;
        userAgent: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["analyticsMetric"]>;
    composites: {};
};
export type AnalyticsMetricGetPayload<S extends boolean | null | undefined | AnalyticsMetricDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload, S>;
export type AnalyticsMetricCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnalyticsMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnalyticsMetricCountAggregateInputType | true;
};
export interface AnalyticsMetricDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsMetric'];
        meta: {
            name: 'AnalyticsMetric';
        };
    };
    findUnique<T extends AnalyticsMetricFindUniqueArgs>(args: Prisma.SelectSubset<T, AnalyticsMetricFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnalyticsMetricClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnalyticsMetricFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnalyticsMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalyticsMetricClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnalyticsMetricFindFirstArgs>(args?: Prisma.SelectSubset<T, AnalyticsMetricFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnalyticsMetricClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnalyticsMetricFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnalyticsMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalyticsMetricClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnalyticsMetricFindManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnalyticsMetricCreateArgs>(args: Prisma.SelectSubset<T, AnalyticsMetricCreateArgs<ExtArgs>>): Prisma.Prisma__AnalyticsMetricClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnalyticsMetricCreateManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnalyticsMetricCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnalyticsMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnalyticsMetricDeleteArgs>(args: Prisma.SelectSubset<T, AnalyticsMetricDeleteArgs<ExtArgs>>): Prisma.Prisma__AnalyticsMetricClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnalyticsMetricUpdateArgs>(args: Prisma.SelectSubset<T, AnalyticsMetricUpdateArgs<ExtArgs>>): Prisma.Prisma__AnalyticsMetricClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnalyticsMetricDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnalyticsMetricUpdateManyArgs>(args: Prisma.SelectSubset<T, AnalyticsMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnalyticsMetricUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnalyticsMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnalyticsMetricUpsertArgs>(args: Prisma.SelectSubset<T, AnalyticsMetricUpsertArgs<ExtArgs>>): Prisma.Prisma__AnalyticsMetricClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnalyticsMetricCountArgs>(args?: Prisma.Subset<T, AnalyticsMetricCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnalyticsMetricCountAggregateOutputType> : number>;
    aggregate<T extends AnalyticsMetricAggregateArgs>(args: Prisma.Subset<T, AnalyticsMetricAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsMetricAggregateType<T>>;
    groupBy<T extends AnalyticsMetricGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnalyticsMetricGroupByArgs['orderBy'];
    } : {
        orderBy?: AnalyticsMetricGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnalyticsMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnalyticsMetricFieldRefs;
}
export interface Prisma__AnalyticsMetricClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnalyticsMetricFieldRefs {
    readonly id: Prisma.FieldRef<"AnalyticsMetric", 'String'>;
    readonly type: Prisma.FieldRef<"AnalyticsMetric", 'MetricType'>;
    readonly identifier: Prisma.FieldRef<"AnalyticsMetric", 'String'>;
    readonly referrer: Prisma.FieldRef<"AnalyticsMetric", 'String'>;
    readonly userAgent: Prisma.FieldRef<"AnalyticsMetric", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AnalyticsMetric", 'DateTime'>;
}
export type AnalyticsMetricFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
    where: Prisma.AnalyticsMetricWhereUniqueInput;
};
export type AnalyticsMetricFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
    where: Prisma.AnalyticsMetricWhereUniqueInput;
};
export type AnalyticsMetricFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
    where?: Prisma.AnalyticsMetricWhereInput;
    orderBy?: Prisma.AnalyticsMetricOrderByWithRelationInput | Prisma.AnalyticsMetricOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsMetricWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyticsMetricScalarFieldEnum | Prisma.AnalyticsMetricScalarFieldEnum[];
};
export type AnalyticsMetricFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
    where?: Prisma.AnalyticsMetricWhereInput;
    orderBy?: Prisma.AnalyticsMetricOrderByWithRelationInput | Prisma.AnalyticsMetricOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsMetricWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyticsMetricScalarFieldEnum | Prisma.AnalyticsMetricScalarFieldEnum[];
};
export type AnalyticsMetricFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
    where?: Prisma.AnalyticsMetricWhereInput;
    orderBy?: Prisma.AnalyticsMetricOrderByWithRelationInput | Prisma.AnalyticsMetricOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsMetricWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyticsMetricScalarFieldEnum | Prisma.AnalyticsMetricScalarFieldEnum[];
};
export type AnalyticsMetricCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.AnalyticsMetricCreateInput, Prisma.AnalyticsMetricUncheckedCreateInput>;
};
export type AnalyticsMetricCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnalyticsMetricCreateManyInput | Prisma.AnalyticsMetricCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnalyticsMetricCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
    data: Prisma.AnalyticsMetricCreateManyInput | Prisma.AnalyticsMetricCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnalyticsMetricUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalyticsMetricUpdateInput, Prisma.AnalyticsMetricUncheckedUpdateInput>;
    where: Prisma.AnalyticsMetricWhereUniqueInput;
};
export type AnalyticsMetricUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnalyticsMetricUpdateManyMutationInput, Prisma.AnalyticsMetricUncheckedUpdateManyInput>;
    where?: Prisma.AnalyticsMetricWhereInput;
    limit?: number;
};
export type AnalyticsMetricUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalyticsMetricUpdateManyMutationInput, Prisma.AnalyticsMetricUncheckedUpdateManyInput>;
    where?: Prisma.AnalyticsMetricWhereInput;
    limit?: number;
};
export type AnalyticsMetricUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
    where: Prisma.AnalyticsMetricWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyticsMetricCreateInput, Prisma.AnalyticsMetricUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnalyticsMetricUpdateInput, Prisma.AnalyticsMetricUncheckedUpdateInput>;
};
export type AnalyticsMetricDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
    where: Prisma.AnalyticsMetricWhereUniqueInput;
};
export type AnalyticsMetricDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyticsMetricWhereInput;
    limit?: number;
};
export type AnalyticsMetricDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsMetricSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsMetricOmit<ExtArgs> | null;
};
