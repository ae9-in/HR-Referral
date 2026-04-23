import { NestFactory } from '@nestjs/core';
console.log('🚀 API main.ts is loading...');
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

const server = express();
let cachedApp: any;

export const createServer = async (expressInstance: any) => {
  if (cachedApp) return cachedApp;
  
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
    { logger: ['log', 'error', 'warn'] }
  );
  
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  
  app.enableCors({
    origin: (origin, callback) => {
      const allowed = [
        'http://localhost:1234',
        'http://localhost:3000',
      ];
      // Allow requests with no origin (mobile apps, curl, etc)
      // Allow any .vercel.app subdomain
      if (!origin || allowed.includes(origin) || /\.vercel\.app$/.test(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  
  await app.init();
  cachedApp = app;
  return app;
};

async function bootstrap() {
  const port = process.env.PORT || 4000;
  // For local dev, we still use createServer with the express instance because it's already configured.
  // But wait, the standard way to listen is to call app.listen() on the Nest app.
  const app = await createServer(server);
  await app.listen(port);
  console.log(`🚀 API is running on: http://localhost:${port}/api`);
}

// Always run bootstrap locally
bootstrap().catch(err => {
  console.error('❌ Failed to start API:', err);
});

export default async (req: any, res: any) => {
  await createServer(server);
  return server(req, res);
};
