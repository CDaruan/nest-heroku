import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://daruanAPP:q3Qhhj8VNuXGs62@cluster0.upm5q.mongodb.net/test',
    ),
    MembersModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
