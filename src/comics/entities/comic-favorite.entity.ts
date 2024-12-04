import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class ComicsFavorites extends Document {
    @Prop()
    comicId:string;

    @Prop()
    userId:string;
}

export const ComicsFavoritesSchema = SchemaFactory.createForClass(ComicsFavorites);

//Indice para evitar duplicado
ComicsFavoritesSchema.index({comicId:1,userId:1},{unique:true})
