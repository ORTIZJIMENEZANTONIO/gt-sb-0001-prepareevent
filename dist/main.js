"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    const options = new swagger_1.DocumentBuilder()
        .setTitle("SB-0001")
        .setDescription("MS prepareevent")
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        transformOptions: {
            enableImplicitConversion: true
        }
    }));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map