import { UpploadService } from "../service";
import { HandlersParams } from "../helpers/interfaces";

export default class Local extends UpploadService {
  name = "local";
  icon = "fas fa-upload";
  color = "#34495e";

  template = () => {
    return `
      <form class="${this.class("form")}">
        <input class="${this.class(
          "input"
        )}" type="search" placeholder="Enter a URL">
        <button type="submit">Get image</button>
      </form>
    `;
  };

  handlers = ({ upload, handle }: HandlersParams) => {};

  fetch(url: string) {
    return new Promise((resolve, reject) => {
      window
        .fetch("")
        .then(response => response.blob())
        .then(blob => resolve(blob))
        .catch(error => reject(error));
    });
  }
}
