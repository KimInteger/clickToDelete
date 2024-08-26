import { squreColor } from '../static/squreColor';
import { SqureElements } from './squrecreate';

document.addEventListener('DOMContentLoaded', () => {
  const root: HTMLDivElement = document.getElementById(
    'root',
  ) as HTMLDivElement;

  if (root) {
    // 버튼 생성 및 텍스트 추가
    const squareCreateBtn: HTMLButtonElement = document.createElement('button');
    squareCreateBtn.textContent = '나와라 상자!';

    // 버튼을 root에 추가
    root.appendChild(squareCreateBtn);

    // 버튼 클릭 시 네모 생성
    squareCreateBtn.addEventListener('click', () => {
      const randomSqure = new SqureElements(root, squreColor);
    });
  } else {
    console.error('root가 없단다 친구야.');
  }
});
