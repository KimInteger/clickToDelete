import path from 'node:path';

export const getFilePath = (url: string): string | undefined => {
  // URL 정리
  const cleanUrl = url.replace(/\.\./g, ''); // 경로 탐색 공격 방지

  // 루트 요청 처리
  if (cleanUrl === '/' || cleanUrl === '') {
    return '/home/kiminteger/clickToDelete/public/index.html';
  }
  return path.join(__dirname, '../', cleanUrl);
};
