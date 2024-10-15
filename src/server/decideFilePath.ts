import path from 'node:path';

export const getFilePath = (url: string): string | undefined => {
  // URL 정리 (경로 탐색 공격 방지)
  const cleanUrl = url.replace(/\.\./g, '').replace(/^\//, '');

  // 루트 경로('/')일 때만 dist에서 나와서 public 폴더의 index.html로 경로 설정
  if (cleanUrl === '' || cleanUrl === 'index.html') {
    return path.resolve(__dirname, '../../public/index.html');
  }

  // 그 외의 경로는 dist 내부의 파일로 처리
  const resolvedPath = path.resolve(__dirname, '../', cleanUrl);

  return resolvedPath;
};
