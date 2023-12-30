import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as fs from 'fs';


async function bootstrap() {
  const config = JSON.parse(fs.readFileSync(join(__dirname, 'settings.json'), 'utf8'));
  console.log(config.motd);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
