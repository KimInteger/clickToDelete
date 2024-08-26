import http from 'node:http';
import fs from 'node:fs';
import qs from 'node:querystring';
import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config();

const port: number = parseInt(process.env.BASE_PORT || '3000', 10);

const server = http.createServer((req, res) => {
  console.log('hello there');
});

server.listen(port, () => {
  console.log('server connected');
  console.log(`http://localhost:${port}`);
});
