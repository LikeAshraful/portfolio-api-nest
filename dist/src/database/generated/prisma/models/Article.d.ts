import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ArticleModel = runtime.Types.Result.DefaultSelection<Prisma.$ArticlePayload>;
export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null;
    _avg: ArticleAvgAggregateOutputType | null;
    _sum: ArticleSumAggregateOutputType | null;
    _min: ArticleMinAggregateOutputType | null;
    _max: ArticleMaxAggregateOutputType | null;
};
export type ArticleAvgAggregateOutputType = {
    readingTimeMinutes: number | null;
    viewsCount: number | null;
};
export type ArticleSumAggregateOutputType = {
    readingTimeMinutes: number | null;
    viewsCount: number | null;
};
export type ArticleMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    summary: string | null;
    content: string | null;
    coverImageUrl: string | null;
    readingTimeMinutes: number | null;
    isPublished: boolean | null;
    publishedAt: Date | null;
    viewsCount: number | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ArticleMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    summary: string | null;
    content: string | null;
    coverImageUrl: string | null;
    readingTimeMinutes: number | null;
    isPublished: boolean | null;
    publishedAt: Date | null;
    viewsCount: number | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ArticleCountAggregateOutputType = {
    id: number;
    title: number;
    slug: number;
    summary: number;
    content: number;
    coverImageUrl: number;
    tags: number;
    readingTimeMinutes: number;
    isPublished: number;
    publishedAt: number;
    viewsCount: number;
    authorId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ArticleAvgAggregateInputType = {
    readingTimeMinutes?: true;
    viewsCount?: true;
};
export type ArticleSumAggregateInputType = {
    readingTimeMinutes?: true;
    viewsCount?: true;
};
export type ArticleMinAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    summary?: true;
    content?: true;
    coverImageUrl?: true;
    readingTimeMinutes?: true;
    isPublished?: true;
    publishedAt?: true;
    viewsCount?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ArticleMaxAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    summary?: true;
    content?: true;
    coverImageUrl?: true;
    readingTimeMinutes?: true;
    isPublished?: true;
    publishedAt?: true;
    viewsCount?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ArticleCountAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    summary?: true;
    content?: true;
    coverImageUrl?: true;
    tags?: true;
    readingTimeMinutes?: true;
    isPublished?: true;
    publishedAt?: true;
    viewsCount?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ArticleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[];
    cursor?: Prisma.ArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ArticleCountAggregateInputType;
    _avg?: ArticleAvgAggregateInputType;
    _sum?: ArticleSumAggregateInputType;
    _min?: ArticleMinAggregateInputType;
    _max?: ArticleMaxAggregateInputType;
};
export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
    [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateArticle[P]> : Prisma.GetScalarType<T[P], AggregateArticle[P]>;
};
export type ArticleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithAggregationInput | Prisma.ArticleOrderByWithAggregationInput[];
    by: Prisma.ArticleScalarFieldEnum[] | Prisma.ArticleScalarFieldEnum;
    having?: Prisma.ArticleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ArticleCountAggregateInputType | true;
    _avg?: ArticleAvgAggregateInputType;
    _sum?: ArticleSumAggregateInputType;
    _min?: ArticleMinAggregateInputType;
    _max?: ArticleMaxAggregateInputType;
};
export type ArticleGroupByOutputType = {
    id: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    coverImageUrl: string | null;
    tags: string[];
    readingTimeMinutes: number;
    isPublished: boolean;
    publishedAt: Date | null;
    viewsCount: number;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ArticleCountAggregateOutputType | null;
    _avg: ArticleAvgAggregateOutputType | null;
    _sum: ArticleSumAggregateOutputType | null;
    _min: ArticleMinAggregateOutputType | null;
    _max: ArticleMaxAggregateOutputType | null;
};
export type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ArticleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ArticleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ArticleGroupByOutputType[P]>;
}>>;
export type ArticleWhereInput = {
    AND?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[];
    OR?: Prisma.ArticleWhereInput[];
    NOT?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[];
    id?: Prisma.StringFilter<"Article"> | string;
    title?: Prisma.StringFilter<"Article"> | string;
    slug?: Prisma.StringFilter<"Article"> | string;
    summary?: Prisma.StringFilter<"Article"> | string;
    content?: Prisma.StringFilter<"Article"> | string;
    coverImageUrl?: Prisma.StringNullableFilter<"Article"> | string | null;
    tags?: Prisma.StringNullableListFilter<"Article">;
    readingTimeMinutes?: Prisma.IntFilter<"Article"> | number;
    isPublished?: Prisma.BoolFilter<"Article"> | boolean;
    publishedAt?: Prisma.DateTimeNullableFilter<"Article"> | Date | string | null;
    viewsCount?: Prisma.IntFilter<"Article"> | number;
    authorId?: Prisma.StringFilter<"Article"> | string;
    createdAt?: Prisma.DateTimeFilter<"Article"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Article"> | Date | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ArticleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    coverImageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    readingTimeMinutes?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    viewsCount?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
};
export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[];
    OR?: Prisma.ArticleWhereInput[];
    NOT?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[];
    title?: Prisma.StringFilter<"Article"> | string;
    summary?: Prisma.StringFilter<"Article"> | string;
    content?: Prisma.StringFilter<"Article"> | string;
    coverImageUrl?: Prisma.StringNullableFilter<"Article"> | string | null;
    tags?: Prisma.StringNullableListFilter<"Article">;
    readingTimeMinutes?: Prisma.IntFilter<"Article"> | number;
    isPublished?: Prisma.BoolFilter<"Article"> | boolean;
    publishedAt?: Prisma.DateTimeNullableFilter<"Article"> | Date | string | null;
    viewsCount?: Prisma.IntFilter<"Article"> | number;
    authorId?: Prisma.StringFilter<"Article"> | string;
    createdAt?: Prisma.DateTimeFilter<"Article"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Article"> | Date | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "slug">;
export type ArticleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    coverImageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    readingTimeMinutes?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    viewsCount?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ArticleCountOrderByAggregateInput;
    _avg?: Prisma.ArticleAvgOrderByAggregateInput;
    _max?: Prisma.ArticleMaxOrderByAggregateInput;
    _min?: Prisma.ArticleMinOrderByAggregateInput;
    _sum?: Prisma.ArticleSumOrderByAggregateInput;
};
export type ArticleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ArticleScalarWhereWithAggregatesInput | Prisma.ArticleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ArticleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ArticleScalarWhereWithAggregatesInput | Prisma.ArticleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Article"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Article"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Article"> | string;
    summary?: Prisma.StringWithAggregatesFilter<"Article"> | string;
    content?: Prisma.StringWithAggregatesFilter<"Article"> | string;
    coverImageUrl?: Prisma.StringNullableWithAggregatesFilter<"Article"> | string | null;
    tags?: Prisma.StringNullableListFilter<"Article">;
    readingTimeMinutes?: Prisma.IntWithAggregatesFilter<"Article"> | number;
    isPublished?: Prisma.BoolWithAggregatesFilter<"Article"> | boolean;
    publishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null;
    viewsCount?: Prisma.IntWithAggregatesFilter<"Article"> | number;
    authorId?: Prisma.StringWithAggregatesFilter<"Article"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Article"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Article"> | Date | string;
};
export type ArticleCreateInput = {
    id?: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    coverImageUrl?: string | null;
    tags?: Prisma.ArticleCreatetagsInput | string[];
    readingTimeMinutes?: number;
    isPublished?: boolean;
    publishedAt?: Date | string | null;
    viewsCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutArticlesInput;
};
export type ArticleUncheckedCreateInput = {
    id?: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    coverImageUrl?: string | null;
    tags?: Prisma.ArticleCreatetagsInput | string[];
    readingTimeMinutes?: number;
    isPublished?: boolean;
    publishedAt?: Date | string | null;
    viewsCount?: number;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArticleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.ArticleUpdatetagsInput | string[];
    readingTimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutArticlesNestedInput;
};
export type ArticleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.ArticleUpdatetagsInput | string[];
    readingTimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArticleCreateManyInput = {
    id?: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    coverImageUrl?: string | null;
    tags?: Prisma.ArticleCreatetagsInput | string[];
    readingTimeMinutes?: number;
    isPublished?: boolean;
    publishedAt?: Date | string | null;
    viewsCount?: number;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArticleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.ArticleUpdatetagsInput | string[];
    readingTimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArticleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.ArticleUpdatetagsInput | string[];
    readingTimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArticleListRelationFilter = {
    every?: Prisma.ArticleWhereInput;
    some?: Prisma.ArticleWhereInput;
    none?: Prisma.ArticleWhereInput;
};
export type ArticleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ArticleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    coverImageUrl?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    readingTimeMinutes?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    viewsCount?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArticleAvgOrderByAggregateInput = {
    readingTimeMinutes?: Prisma.SortOrder;
    viewsCount?: Prisma.SortOrder;
};
export type ArticleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    coverImageUrl?: Prisma.SortOrder;
    readingTimeMinutes?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    viewsCount?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArticleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    coverImageUrl?: Prisma.SortOrder;
    readingTimeMinutes?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    viewsCount?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArticleSumOrderByAggregateInput = {
    readingTimeMinutes?: Prisma.SortOrder;
    viewsCount?: Prisma.SortOrder;
};
export type ArticleCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.ArticleCreateWithoutAuthorInput, Prisma.ArticleUncheckedCreateWithoutAuthorInput> | Prisma.ArticleCreateWithoutAuthorInput[] | Prisma.ArticleUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutAuthorInput | Prisma.ArticleCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.ArticleCreateManyAuthorInputEnvelope;
    connect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[];
};
export type ArticleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.ArticleCreateWithoutAuthorInput, Prisma.ArticleUncheckedCreateWithoutAuthorInput> | Prisma.ArticleCreateWithoutAuthorInput[] | Prisma.ArticleUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutAuthorInput | Prisma.ArticleCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.ArticleCreateManyAuthorInputEnvelope;
    connect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[];
};
export type ArticleUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.ArticleCreateWithoutAuthorInput, Prisma.ArticleUncheckedCreateWithoutAuthorInput> | Prisma.ArticleCreateWithoutAuthorInput[] | Prisma.ArticleUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutAuthorInput | Prisma.ArticleCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.ArticleUpsertWithWhereUniqueWithoutAuthorInput | Prisma.ArticleUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.ArticleCreateManyAuthorInputEnvelope;
    set?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[];
    disconnect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[];
    delete?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[];
    connect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[];
    update?: Prisma.ArticleUpdateWithWhereUniqueWithoutAuthorInput | Prisma.ArticleUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.ArticleUpdateManyWithWhereWithoutAuthorInput | Prisma.ArticleUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.ArticleScalarWhereInput | Prisma.ArticleScalarWhereInput[];
};
export type ArticleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.ArticleCreateWithoutAuthorInput, Prisma.ArticleUncheckedCreateWithoutAuthorInput> | Prisma.ArticleCreateWithoutAuthorInput[] | Prisma.ArticleUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutAuthorInput | Prisma.ArticleCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.ArticleUpsertWithWhereUniqueWithoutAuthorInput | Prisma.ArticleUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.ArticleCreateManyAuthorInputEnvelope;
    set?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[];
    disconnect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[];
    delete?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[];
    connect?: Prisma.ArticleWhereUniqueInput | Prisma.ArticleWhereUniqueInput[];
    update?: Prisma.ArticleUpdateWithWhereUniqueWithoutAuthorInput | Prisma.ArticleUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.ArticleUpdateManyWithWhereWithoutAuthorInput | Prisma.ArticleUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.ArticleScalarWhereInput | Prisma.ArticleScalarWhereInput[];
};
export type ArticleCreatetagsInput = {
    set: string[];
};
export type ArticleUpdatetagsInput = {
    set?: string[];
    push?: string | string[];
};
export type ArticleCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    coverImageUrl?: string | null;
    tags?: Prisma.ArticleCreatetagsInput | string[];
    readingTimeMinutes?: number;
    isPublished?: boolean;
    publishedAt?: Date | string | null;
    viewsCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArticleUncheckedCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    coverImageUrl?: string | null;
    tags?: Prisma.ArticleCreatetagsInput | string[];
    readingTimeMinutes?: number;
    isPublished?: boolean;
    publishedAt?: Date | string | null;
    viewsCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArticleCreateOrConnectWithoutAuthorInput = {
    where: Prisma.ArticleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArticleCreateWithoutAuthorInput, Prisma.ArticleUncheckedCreateWithoutAuthorInput>;
};
export type ArticleCreateManyAuthorInputEnvelope = {
    data: Prisma.ArticleCreateManyAuthorInput | Prisma.ArticleCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type ArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.ArticleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ArticleUpdateWithoutAuthorInput, Prisma.ArticleUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.ArticleCreateWithoutAuthorInput, Prisma.ArticleUncheckedCreateWithoutAuthorInput>;
};
export type ArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.ArticleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ArticleUpdateWithoutAuthorInput, Prisma.ArticleUncheckedUpdateWithoutAuthorInput>;
};
export type ArticleUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.ArticleScalarWhereInput;
    data: Prisma.XOR<Prisma.ArticleUpdateManyMutationInput, Prisma.ArticleUncheckedUpdateManyWithoutAuthorInput>;
};
export type ArticleScalarWhereInput = {
    AND?: Prisma.ArticleScalarWhereInput | Prisma.ArticleScalarWhereInput[];
    OR?: Prisma.ArticleScalarWhereInput[];
    NOT?: Prisma.ArticleScalarWhereInput | Prisma.ArticleScalarWhereInput[];
    id?: Prisma.StringFilter<"Article"> | string;
    title?: Prisma.StringFilter<"Article"> | string;
    slug?: Prisma.StringFilter<"Article"> | string;
    summary?: Prisma.StringFilter<"Article"> | string;
    content?: Prisma.StringFilter<"Article"> | string;
    coverImageUrl?: Prisma.StringNullableFilter<"Article"> | string | null;
    tags?: Prisma.StringNullableListFilter<"Article">;
    readingTimeMinutes?: Prisma.IntFilter<"Article"> | number;
    isPublished?: Prisma.BoolFilter<"Article"> | boolean;
    publishedAt?: Prisma.DateTimeNullableFilter<"Article"> | Date | string | null;
    viewsCount?: Prisma.IntFilter<"Article"> | number;
    authorId?: Prisma.StringFilter<"Article"> | string;
    createdAt?: Prisma.DateTimeFilter<"Article"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Article"> | Date | string;
};
export type ArticleCreateManyAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    coverImageUrl?: string | null;
    tags?: Prisma.ArticleCreatetagsInput | string[];
    readingTimeMinutes?: number;
    isPublished?: boolean;
    publishedAt?: Date | string | null;
    viewsCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArticleUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.ArticleUpdatetagsInput | string[];
    readingTimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArticleUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.ArticleUpdatetagsInput | string[];
    readingTimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArticleUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.ArticleUpdatetagsInput | string[];
    readingTimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArticleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    summary?: boolean;
    content?: boolean;
    coverImageUrl?: boolean;
    tags?: boolean;
    readingTimeMinutes?: boolean;
    isPublished?: boolean;
    publishedAt?: boolean;
    viewsCount?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["article"]>;
export type ArticleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    summary?: boolean;
    content?: boolean;
    coverImageUrl?: boolean;
    tags?: boolean;
    readingTimeMinutes?: boolean;
    isPublished?: boolean;
    publishedAt?: boolean;
    viewsCount?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["article"]>;
export type ArticleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    summary?: boolean;
    content?: boolean;
    coverImageUrl?: boolean;
    tags?: boolean;
    readingTimeMinutes?: boolean;
    isPublished?: boolean;
    publishedAt?: boolean;
    viewsCount?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["article"]>;
export type ArticleSelectScalar = {
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    summary?: boolean;
    content?: boolean;
    coverImageUrl?: boolean;
    tags?: boolean;
    readingTimeMinutes?: boolean;
    isPublished?: boolean;
    publishedAt?: boolean;
    viewsCount?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ArticleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "slug" | "summary" | "content" | "coverImageUrl" | "tags" | "readingTimeMinutes" | "isPublished" | "publishedAt" | "viewsCount" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["article"]>;
export type ArticleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ArticleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ArticlePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Article";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        slug: string;
        summary: string;
        content: string;
        coverImageUrl: string | null;
        tags: string[];
        readingTimeMinutes: number;
        isPublished: boolean;
        publishedAt: Date | null;
        viewsCount: number;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["article"]>;
    composites: {};
};
export type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ArticlePayload, S>;
export type ArticleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ArticleCountAggregateInputType | true;
};
export interface ArticleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Article'];
        meta: {
            name: 'Article';
        };
    };
    findUnique<T extends ArticleFindUniqueArgs>(args: Prisma.SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ArticleFindFirstArgs>(args?: Prisma.SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ArticleFindManyArgs>(args?: Prisma.SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ArticleCreateArgs>(args: Prisma.SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ArticleCreateManyArgs>(args?: Prisma.SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ArticleDeleteArgs>(args: Prisma.SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ArticleUpdateArgs>(args: Prisma.SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ArticleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ArticleUpdateManyArgs>(args: Prisma.SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ArticleUpsertArgs>(args: Prisma.SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ArticleCountArgs>(args?: Prisma.Subset<T, ArticleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ArticleCountAggregateOutputType> : number>;
    aggregate<T extends ArticleAggregateArgs>(args: Prisma.Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>;
    groupBy<T extends ArticleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ArticleGroupByArgs['orderBy'];
    } : {
        orderBy?: ArticleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ArticleFieldRefs;
}
export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ArticleFieldRefs {
    readonly id: Prisma.FieldRef<"Article", 'String'>;
    readonly title: Prisma.FieldRef<"Article", 'String'>;
    readonly slug: Prisma.FieldRef<"Article", 'String'>;
    readonly summary: Prisma.FieldRef<"Article", 'String'>;
    readonly content: Prisma.FieldRef<"Article", 'String'>;
    readonly coverImageUrl: Prisma.FieldRef<"Article", 'String'>;
    readonly tags: Prisma.FieldRef<"Article", 'String[]'>;
    readonly readingTimeMinutes: Prisma.FieldRef<"Article", 'Int'>;
    readonly isPublished: Prisma.FieldRef<"Article", 'Boolean'>;
    readonly publishedAt: Prisma.FieldRef<"Article", 'DateTime'>;
    readonly viewsCount: Prisma.FieldRef<"Article", 'Int'>;
    readonly authorId: Prisma.FieldRef<"Article", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Article", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Article", 'DateTime'>;
}
export type ArticleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where: Prisma.ArticleWhereUniqueInput;
};
export type ArticleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where: Prisma.ArticleWhereUniqueInput;
};
export type ArticleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[];
    cursor?: Prisma.ArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ArticleScalarFieldEnum | Prisma.ArticleScalarFieldEnum[];
};
export type ArticleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[];
    cursor?: Prisma.ArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ArticleScalarFieldEnum | Prisma.ArticleScalarFieldEnum[];
};
export type ArticleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[];
    cursor?: Prisma.ArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ArticleScalarFieldEnum | Prisma.ArticleScalarFieldEnum[];
};
export type ArticleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ArticleCreateInput, Prisma.ArticleUncheckedCreateInput>;
};
export type ArticleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ArticleCreateManyInput | Prisma.ArticleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ArticleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    data: Prisma.ArticleCreateManyInput | Prisma.ArticleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ArticleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ArticleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ArticleUpdateInput, Prisma.ArticleUncheckedUpdateInput>;
    where: Prisma.ArticleWhereUniqueInput;
};
export type ArticleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ArticleUpdateManyMutationInput, Prisma.ArticleUncheckedUpdateManyInput>;
    where?: Prisma.ArticleWhereInput;
    limit?: number;
};
export type ArticleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ArticleUpdateManyMutationInput, Prisma.ArticleUncheckedUpdateManyInput>;
    where?: Prisma.ArticleWhereInput;
    limit?: number;
    include?: Prisma.ArticleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ArticleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where: Prisma.ArticleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArticleCreateInput, Prisma.ArticleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ArticleUpdateInput, Prisma.ArticleUncheckedUpdateInput>;
};
export type ArticleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where: Prisma.ArticleWhereUniqueInput;
};
export type ArticleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArticleWhereInput;
    limit?: number;
};
export type ArticleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
};
