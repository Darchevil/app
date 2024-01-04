export interface ITask {
  title: string;
  done: boolean;
}

export class Task implements ITask {
  title: string;
  done: boolean;

  constructor() {
    this.title = '';
    this.done = false;
  }
}
