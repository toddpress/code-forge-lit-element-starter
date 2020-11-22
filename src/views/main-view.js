import { LitElement, css, customElement, html, property } from 'lit-element'

import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  cards: [
    {
      id: nanoid(),
      title: 'My First Card',
      flipped: false,
      editable: true,
      front: '',
      back: '',
    },
  ]
};

@customElement('main-view')
class MainView extends LitElement {
    @property({ type: Array })
    cards;
    
    static get styles() {
        return css`
          :host {
            display: grid;
            grid-template-rows: auto 1fr auto;

            height: 100vh;
          }
          header {
            padding: var(--space-sm);
            background-color: dodgerblue;
          }
          main {
            padding: var(--space-md) var(--space-sm);
            background-color: lemonchiffon;
          }
          footer {
            padding: var(--space-md) var(--space-sm);
            background-color: blueviolet;
            color: rgba(255, 255, 255, 0.88);
            
            text-align: center;
            font-size: var(--text-sm);
          }
        `;
    }
    
    render() {
        return html`
            <header role="banner">
                <h1>Rolo Card</h1>
            </header>
            <main>
                Hello from the main component
            </main>
            <footer role="complementary">
                Made with 💊💊 by codeforge.
            </footer>
        `;
    }
}

export default MainView;