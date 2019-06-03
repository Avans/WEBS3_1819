class MyWindhaan extends HTMLElement {
  connectedCallback() {
    let template = document.getElementById("windhaan-template").import;
    let shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.body);
    shadow.querySelector("input").addEventListener("input", el => {
      shadow.getElementById("windhaan").style.transform =
        "rotate(" + el.target.value + "deg)";
    });
  }
}

window.customElements.define("my-windhaan", MyWindhaan);
