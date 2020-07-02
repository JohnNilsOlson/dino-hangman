import $ from "jquery";

export class Dino {
  constructor(name) {
    this.name = name;
    this.nameArray = [];
  }

  splitDino() {
    this.nameArray = this.name.split('');
  }
}
