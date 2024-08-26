import { squreColor } from '../static/squreColor';
import { SqureElements } from './squrecreate';

document.addEventListener('DOMContentLoaded', () => {
  const root: HTMLDivElement = document.getElementById(
    'root',
  ) as HTMLDivElement;

  if (root) {
    const createSquare = setInterval(() => {
      const square = new SqureElements(root, squreColor);
    }, 1000);
  } else {
    console.error('root가 없단다 친구야.');
  }
});
