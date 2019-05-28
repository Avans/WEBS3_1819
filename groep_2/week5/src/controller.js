import { View } from "./view";
import { Model } from "./model";

export class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  showData() {
    this.model.getData().then(data => {
      this.view.render(data);
    });
  }
}
