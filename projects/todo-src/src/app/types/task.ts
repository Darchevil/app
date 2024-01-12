export interface ITask {
  title: string;
  done: boolean;
}

export class Task implements ITask {
  title: string;
  done: boolean;

  constructor(title: string) {
    this.title = title;
    this.done = false;
  }
}
