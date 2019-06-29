import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./app.component.scss');

@customElement('marius-fifa-card')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  pac: number = 99;
  @property()
  sho: number = 99;
  @property()
  pas: number = 99;
  @property()
  dri: number = 99;
  @property()
  def: number = 99;
  @property()
  phy: number = 99;
  @property()
  name: number = 99;
  @property()
  overall: number = 99;
  @property()
  playerName: string = 'Messi';
  @property()
  imageUrl: string = 'https://thispersondoesnotexist.com/image';

  render() {
    return html`
          <div class="card">
            <div class="cardBody">
              <span class="overall">${this.overall}</span>
              <img src=${this.imageUrl}>
            </div>

            <div class="stats">
              <div class="playerName">
                ${this.playerName}
              </div>
              <div class="statsLeft">
                <p>${this.pac} PAC</p>
                <p>${this.sho} SHO</p>
                <p>${this.pas} PAS</p>
              </div>
              <div class="statsRight">
                <p>${this.dri} DRI</p>
                <p>${this.def} DEF</p>
                <p>${this.phy} PHY</p>
              </div>
            </div>
          </div>
`;
  }

}
