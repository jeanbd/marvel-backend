import { PartialType } from '@nestjs/mapped-types';
import { CreateComicDto } from './create-comic.dto';

export class UpdateComicFavorite extends PartialType(CreateComicDto) {}
