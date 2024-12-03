import { Module } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicsController } from './comics.controller';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { ComicsFavorites, ComicsFavoritesSchema } from './entities/comic-favorite.entity';


@Module({
  controllers: [ComicsController],
  imports:[
    MongooseModule.forFeature([
      {
        name:ComicsFavorites.name,
        schema:ComicsFavoritesSchema
      }
    ]),
    HttpModule
  ],
  providers: [ComicsService],
})
export class ComicsModule {}
