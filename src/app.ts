import http from 'node:http';
import fs from 'node:fs';
import qs from 'node:querystring';
import dotenv from 'dotenv';
import path from 'node:path';
import { add } from './server/test';

dotenv.config();

const port: number = parseInt(process.env.BASE_PORT || '3000', 10);

const server = http.createServer((req, res) => {
  console.log(add(9, 5));
});

server.listen(port, () => {
  console.log('server connected');
  console.log(`http://localhost:${port}`);
});
