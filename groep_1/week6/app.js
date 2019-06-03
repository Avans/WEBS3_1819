class MyMeter extends HTMLElement {
  connectedCallback() {
    var shadow = this.attachShadow({
      mode: "open"
    });

    let length = this.getAttribute("length");

    let template = document.querySelector("#my-meter-template").import;
    let content = template.querySelector("template").content;
    shadow.appendChild(content);

    shadow.querySelector(".mercury").style.width = length + "%";
  }
}

window.customElements.define("my-meter", MyMeter);

class MyInput extends HTMLElement {}
