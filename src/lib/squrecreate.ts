import { countToColor } from './countToColor';
import { pullRandomInt } from './pullRandomInt';

export class SqureElements {
  private element: HTMLElement;
  private colorIndex: number;
  private squreBackground: string;
  private count: number;

  constructor(root: HTMLDivElement, squreColor: string[]) {
    this.element = document.createElement('div');
    this.colorIndex = pullRandomInt(0, 4);
    this.squreBackground = squreColor[this.colorIndex];
    this.count = countToColor(this.squreBackground);
    this.initialize(root);
  }

  initialize(root: HTMLDivElement): void {
    this.element.style.width = '100px';
    this.element.style.height = '100px';
    this.element.style.backgroundColor = this.squreBackground;
    this.element.addEventListener('click', this.decreaseCount);
    this.element.textContent = `${this.count}`;
    root.appendChild(this.element);
  }

  private decreaseCount(): void {
    if (this.count > 0) {
      this.count -= 1;
      this.element.textContent = `${this.count}`;
    } else if (this.count <= 0) {
      this.element.remove();
    }
  }
}
