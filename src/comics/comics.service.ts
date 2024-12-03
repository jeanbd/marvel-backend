import { Injectable } from '@nestjs/common';
import { CreateComicDto } from './dto/create-comic.dto';
// import { UpdateComicDto } from './dto/update-comic.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ComicsInterface } from './interfaces/comics.interface';
import { AxiosResponse } from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComicsFavorites } from './entities/comic-favorite.entity';
import { CreateFavoriteDto } from './dto/create-comic-favorite.dto';

@Injectable()
export class ComicsService {

  constructor(
    @InjectModel(ComicsFavorites.name)
    private readonly comicFavoriteModel:Model<ComicsFavorites>,
    private readonly httpService:HttpService
  ){}

    readonly officialMarvelApi : string = 'http://gateway.marvel.com/v1/public/comics';
    readonly timestamp:string = '1';
    readonly apikey : string = 'edfd130f72eb28ce1953647b590097f5';
    readonly apiHash: string = 'b2386bd4579cc31cf301c3a475277785';  

  create(createComicDto: CreateComicDto) {
    return 'This action adds a new comic';
  }

  async findAll() {
    const {data} = await firstValueFrom( 
      this.httpService.get<AxiosResponse>(`${this.officialMarvelApi}?ts=${this.timestamp}&apikey=${this.apikey}&hash=${this.apiHash}`)
    );

    const response: ComicsInterface = data.data.results;

    return response;
  }

  async findOne(id: number) {

    const {data} = await firstValueFrom(
      this.httpService.get<AxiosResponse>(`${this.officialMarvelApi}/${id}?ts=${this.timestamp}&apikey=${this.apikey}&hash=${this.apiHash}`)
    );

    const response: ComicsInterface = data.data.results;

    return response;
  }

  // update(id: number, updateComicDto: UpdateComicDto) {
  //   return `This action updates a #${id} comic`;
  // }

  remove(id: number) {
    return `This action removes a #${id} comic`;
  }

  //COMICS FAVORITES
  async createComicFavorite(createFavoriteDto: CreateFavoriteDto) {
    try {
      const favoriteComic = await this.comicFavoriteModel.create(createFavoriteDto);
      return favoriteComic;
    } catch (error) {
      console.log('Error server',error);
      throw new Error (`Error server: ${error}`)
    }
  }

  async getAllComicsFavorites(id:string){
    try {
      let finalResult:ComicsInterface[]=[];
      const favoritesComics = await this.comicFavoriteModel.find({userId:id});

      for (const item of favoritesComics) {
        const _id:number = +item.comicid;
        const currentComid = await this.findOne(_id);
        finalResult.push(currentComid);
      }
      finalResult = finalResult.flatMap(item => item);
      return finalResult
    } catch (error) {
      console.log('Error server',error);
      throw new Error (`Error server: ${error}`)
    }
  }
}
