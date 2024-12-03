import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { CreateComicDto } from './dto/create-comic.dto';
import { CreateFavoriteDto } from './dto/create-comic-favorite.dto';
// import { UpdateComicDto } from './dto/update-comic.dto';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Post()
  create(@Body() createComicDto: CreateComicDto) {
    return this.comicsService.create(createComicDto);
  }

  @Get('allComics')
  findAll() {
    return this.comicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comicsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateComicDto: UpdateComicDto) {
  //   return this.comicsService.update(+id, updateComicDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comicsService.remove(+id);
  }

  /////////////FAVORITES
  @Post('create-favorite')
  createComicFavorite(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.comicsService.createComicFavorite(createFavoriteDto);
  }

  @Get('comics-favorites/:userId')
  getComicsFavorites(@Param('userId') userId: string) {
    return this.comicsService.getAllComicsFavorites(userId);
  }
}
