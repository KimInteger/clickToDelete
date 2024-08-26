import { countToColor } from './countToColor';
import { pullRandomInt } from './pullRandomInt';

export class SqureElements {
  private element: HTMLElement;
  private colorIndex: number;
  private squreBackground: string;
  private count: number;

  constructor(root: HTMLDivElement, squreColor: string[]) {
    this.element = document.createElement('div');
    this.colorIndex = pullRandomInt(0, squreColor.length - 1);
    this.squreBackground = squreColor[this.colorIndex];
    this.count = countToColor(this.squreBackground);
    this.initialize(root);
  }

  initialize(root: HTMLDivElement): void {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomLeft = pullRandomInt(0, windowWidth - 100);
    const randomTop = pullRandomInt(0, windowHeight - 100);

    this.element.style.position = 'absolute';
    this.element.style.left = `${randomLeft}px`;
    this.element.style.top = `${randomTop}px`;
    this.element.style.width = '100px';
    this.element.style.height = '100px';
    this.element.style.backgroundColor = this.squreBackground;
    this.element.addEventListener('click', () => {
      this.decreaseCount();
    });
    this.element.textContent = `${this.count}`;
    root.appendChild(this.element);
  }

  private decreaseCount = (): void => {
    if (this.count > 0) {
      if (this.count === 1) {
        this.element.remove();
      } else {
        this.count -= 1;
        this.element.textContent = `${this.count}`;
      }
    }
  };
}
