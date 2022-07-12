import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':idCategory/product/:idProduct')
  getCategory(
    @Param('idCategory') idCategory: number,
    @Param('idProduct') idProduct: number,
  ) {
    return `Category ${idCategory} Product ${idProduct}`;
  }
}
