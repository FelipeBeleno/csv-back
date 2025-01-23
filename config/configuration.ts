import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot({
    envFilePath: `.env`,
    isGlobal: true,
})

const configService = new ConfigService();



export default () => ({
    db_path: configService.get('DB_PATH'),
    secretConstant: configService.get('SECRET_CONSTANT'),
});
