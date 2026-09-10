import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import {
  PaginatedResult,
  PaginationMetaDto,
} from '../dto/paginated-response.dto';

export const ApiPaginatedResponse = <TModel extends Type<unknown>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiExtraModels(PaginatedResult, PaginationMetaDto, model),
    ApiOkResponse({
      description: 'Successfully retrieved paginated items',
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginatedResult) },
          {
            properties: {
              items: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};
