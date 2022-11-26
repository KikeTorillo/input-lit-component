import { LitElement, html, css } from "lit";

export class InputLit extends LitElement {

  static get properties() {
    return {
      placeholder: { type: String },
    };
  }

  constructor(){
    super();
    this.placeholder = "";
  }

  static styles = css`
  :host{
    --input-background: #ffff;
    --input-text: black;
  }
    #search-item{
      box-sizing: border-box;
      width: 32.7rem;
      height: 5.6rem;
      border-radius: 1rem;
      font-size: 1.6rem;
      box-shadow: 0 0.4rem #18191F;
      cursor: pointer;
      padding: 1rem;
      background: var(--input-background);
    }

    #search-item::placeholder{
      color: var(--input-text);
    }

  `;

  render() {
    return html`
          <input type="text" id="search-item" placeholder=${this.placeholder}>
    `;
  }
}
customElements.define("input-lit", InputLit);
