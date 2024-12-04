import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoriteDto } from './create-comic-favorite.dto';

export class UpdateFavoriteDto extends PartialType(CreateFavoriteDto) {}
