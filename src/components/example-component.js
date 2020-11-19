import { LitElement, css, customElement, html, property } from 'lit-element';

@customElement('example-component')
class ExampleComponent extends LitElement {
  @property({ type: String })
  subject = 'LitElement';

  static get styles() {
    return css``;
  }
  
  render() {
    return html`Hello, ${this.subject}.`;
  }
}

export default ExampleComponent;