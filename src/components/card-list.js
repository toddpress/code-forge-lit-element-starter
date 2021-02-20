import { LitElement, css, customElement, html, property } from 'lit-element';

import { repeat } from 'lit-html/directives/repeat';

@customElement('card-list')
class CardList extends LitElement {
  @property({ type: Array })
  cards = [];

  render() {
    return html`
      <div class="card-list">
        ${repeat(
          this.cards,
          () => id,
          (card, index) => html` <flip-card .card=${card}></flip-card> `
        )}
      </div>
    `;
  }

  static get styles() {
    return css`
      .card-list {
        display: flex;
        flex-wrap: wrap;
      }
    `;
  }
}
export default CardList;
