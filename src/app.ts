import http from 'node:http';
import fs from 'node:fs';
import dotenv from 'dotenv';
import path from 'node:path';
import { getFilePath } from './server/decideFilePath';

dotenv.config();

const port: number = parseInt(process.env.BASE_PORT || '3000', 10);

const server = http.createServer((req, res) => {
  // 요청 URL에 대한 파일 경로 얻기
  const filepath = getFilePath(req.url || '');

  console.log(`filepath는 이것 : ${filepath}`); // 디버깅을 위한 로그

  if (req.method === 'GET') {
    if (req.url === '/favicon.ico') {
      res.writeHead(204);
      res.end();
      return;
    }

    if (filepath) {
      fs.readFile(filepath, (err, data) => {
        if (err) {
          console.error(`fs에서 에러남: ${err.message}`); // 디버깅을 위한 로그
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(`에러 발생함 : ${err.message}`);
          return;
        }

        // 파일 확장자에 따라 Content-Type 설정
        const extname = path.extname(filepath);
        let contentType = 'text/plain';
        switch (extname) {
          case '.html':
            contentType = 'text/html';
            break;
          case '.js':
            contentType = 'application/javascript';
            break;
          case '.css':
            contentType = 'text/css';
            break;
          case '.png':
            contentType = 'image/png';
            break;
          case '.jpg':
            contentType = 'image/jpeg';
            break;
          case '.gif':
            contentType = 'image/gif';
            break;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(port, () => {
  console.log('Server connected');
  console.log(`http://localhost:${port}`);
});
