export class User {
  id: number;
  name: string;
  lastname : string;
  process: boolean;
  select: boolean;

  constructor() {
    this.id = 0;
    this.name = '';
    this.lastname = '';
    this.process = false;
    this.select = false;
  }

  setData(id: number, name: string, lastname: string, process: boolean, select: boolean) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.process = process;
    this.select = select;
  }
}
