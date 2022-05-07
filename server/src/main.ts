import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  // const httpsOptions = {
  //   key: fs.readFileSync(process.env.KEY_PATH),
  //   cert: fs.readFileSync(process.env.CERT_PATH),
  // };

  const corsoptions = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions: null,
    cors: true,
  });
  app.use(bodyParser.json({ limit: '3mb' }));
  app.enableCors(corsoptions);

  const options = new DocumentBuilder()
    .setTitle('Exams Online')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || process.env.APP_PORT, () => {
    console.log(
      'application started on port',
      process.env.PORT || process.env.APP_PORT,
    );
  });
}
bootstrap();
