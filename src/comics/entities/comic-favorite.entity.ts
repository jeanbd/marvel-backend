import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class ComicsFavorites extends Document {
    @Prop()
    comicid:string;

    @Prop()
    userId:string;
}

export const ComicsFavoritesSchema = SchemaFactory.createForClass(ComicsFavorites);
