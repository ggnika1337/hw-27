import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      validateCustomDecorators: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// მოგესალმებით თქვენი დავალებაა დაამატოთ შემდეგი ფიჩერები წინა ანუ 26 დავალებას.

// 1) დაუმატეთ იუზერებს ახალი ფროფერტი isActive, და დაწერეთ მიგრაცია რომელიც ყველა იუზერის ჩანაწერს დაუმატებს ამ ახალ ფროფერთის შეიძლება ეს იყოს true ან false

// 2) დაამატეთ ახალი ენდფოინთი იქსფენსებზე მაგალითად /statistic და დააბრნეთ კატეგორიის მიხედვით დაჯგუფებული ხარჯები, პლუს დათვალეთ იმ კატეგორიაში რამდენი იყო სრული ხარჯი, რამდენი აითემია თითოეულ ხარჯის კატეგორიაში, და ლექციაზე როგორც ვქენით მასივის სახით ჩანდეს ეს ხარჯები.

// 3) დაამატეთ ახალი ენფოინთი იუზერებზე, დააჯგუფეთ ყველა იუზერი სქესის მიხედვით და გამოთვალეთ საშუალო ასაკი ორივეში.

// 4) ხარჯებზე დაამატეთ ახალი ენდფოინთი /expenses/top-spenders?limit=10 სადაც იუზერებს დააჯგუფებთ userId ების მიხედვით და დაუთვლით მთლიანად რამდენი აქვს დახარჯული.