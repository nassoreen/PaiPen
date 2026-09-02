import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
    //允許所有 localhost port สำหรับ development
    //origin: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();