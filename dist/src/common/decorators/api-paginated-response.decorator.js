"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPaginatedResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const paginated_response_dto_1 = require("../dto/paginated-response.dto");
const ApiPaginatedResponse = (model) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(paginated_response_dto_1.PaginatedResult, paginated_response_dto_1.PaginationMetaDto, model), (0, swagger_1.ApiOkResponse)({
        description: 'Successfully retrieved paginated items',
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(paginated_response_dto_1.PaginatedResult) },
                {
                    properties: {
                        items: {
                            type: 'array',
                            items: { $ref: (0, swagger_1.getSchemaPath)(model) },
                        },
                    },
                },
            ],
        },
    }));
};
exports.ApiPaginatedResponse = ApiPaginatedResponse;
//# sourceMappingURL=api-paginated-response.decorator.js.map