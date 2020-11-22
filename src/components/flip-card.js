import { LitElement, css, customElement, html, property } from 'lit-element';

@customElement('flip-card')
class FlipCard extends LitElement {
  
  @property({ type: Object })
  card;

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <article>Card cmpt</article>
    `;
  }
}

export default FlipCard;
