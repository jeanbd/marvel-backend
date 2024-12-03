import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicsModule } from './comics/comics.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './auth/users/users.module';

@Module({
  imports: [
    ComicsModule,
    MongooseModule.forRoot('mongodb+srv://jeancbd:nP0d0CUmUFcxNV1T@clustercafe.leqkqea.mongodb.net/marveldb'),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
