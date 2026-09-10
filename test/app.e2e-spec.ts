import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Portfolio API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /api/v1/skills/grouped', () => {
    it('should return 200 and grouped skills dictionary or envelope', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/v1/skills/grouped')
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
    });
  });

  describe('GET /api/v1/projects', () => {
    it('should return 200 and paginated projects', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/v1/projects')
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data).toHaveProperty('items');
      expect(response.body.data).toHaveProperty('meta');
    });
  });

  describe('POST /api/v1/contact', () => {
    it('should validate contact message submission', async () => {
      // Missing required fields -> 400 Bad Request
      await request(app.getHttpServer())
        .post('/api/v1/contact')
        .send({ email: 'invalid-email' })
        .expect(400);
    });
  });
});
