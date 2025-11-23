import request from 'supertest';
import express, { Request, Response } from 'express';
import menuRoutes from '../routes/menuRoutes';

const app = express();
app.use(express.json());
app.use('/api/menu', menuRoutes);

describe('GET /api/menu', () => {
  test('should return all menu items with default pagination', async () => {
    const res = await request(app).get('/api/menu');
    expect(res.statusCode).toBe(200);
    expect(res.body.items.length).toBeGreaterThan(0);
    expect(res.body.meta).toHaveProperty('page');
    expect(res.body.meta).toHaveProperty('limit');
    expect(res.body.meta).toHaveProperty('total');
  });

  test('should filter by category', async () => {
    const res = await request(app).get('/api/menu?category=Main');
    expect(res.statusCode).toBe(200);
    res.body.items.forEach((item: any) => {
      expect(item.category).toBe('Main');
    });
  });

  test('should filter vegetarian items', async () => {
    const res = await request(app).get('/api/menu?isVegetarian=true');
    expect(res.statusCode).toBe(200);
    res.body.items.forEach((item: any) => {
      expect(item.is_vegetarian).toBe(true);
    });
  });

  test('should paginate results', async () => {
    const res = await request(app).get('/api/menu?page=2&limit=5');
    expect(res.statusCode).toBe(200);
    expect(res.body.items.length).toBeLessThanOrEqual(5);
    expect(res.body.meta.page).toBe(2);
    expect(res.body.meta.limit).toBe(5);
  });
});
