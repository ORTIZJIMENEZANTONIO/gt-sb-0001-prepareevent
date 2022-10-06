import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const options = new DocumentBuilder()
    .setTitle("SB-0001")
    .setDescription("Api Rest Sigebi")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api',app,document);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe( 
    { 
      transform: true, 
      transformOptions:{ 
        enableImplicitConversion: true 
      } 
    } 
  ));
  
  await app.listen(3001);
}
bootstrap();


/*

template en 3:
 - api 
  - conexion db

 - microservicio
  - nuevos host y puertos (microservice)
  - se cambian peticiones (vebos) con { cmd: ''}

 - api gateway
  - recibe petición  y dirige al microservice correspondiente mediante cmd (comand)


  ALTER TABLE sae_nsbdb.cat_aclaraciones ADD PRIMARY KEY(idaclaraciones)
  ALTER TABLE sae_nsbdb.cat_aclaraciones ALTER COLUMN idaclaraciones ADD GENERATED ALWAYS AS IDENTITY;

  revisar cada una de las tablas - por ejemplo en el catalogo id tenia que ser integer en lugar de number
 */
