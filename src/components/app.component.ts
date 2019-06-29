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
  playerName: string = 'Mustermann';
  @property()
  playerImgUrl: string = 'https://cdn.fupa.net/player/jpeg/256x320/iVAUsxKAm4fCgRD0ldjSZ9M0MX7eYBnmZtoJKNLy';
  @property()
  clubLogoUrl: string = 'https://cdn.fupa.net/club/png/50x50/th7P2b155brFxjMRmYOHG5G6VB27U02fIeFR5xM1';
  @property()
  nationLogoUrl: string = 'https://futhead.cursecdn.com/static/img/19/nations/21.png';
  @property()
  position: string = 'ST';
  @property()
  sm: number = 4;
  @property()
  wf: number = 4;

  render() {
    return html`
<div class="playercard  fut19 card-large  nif  gold text-center center-block player-detail-card " style="margin: auto; ">


  <span class="sheen"></span>

  <div class="playercard-rating">
    ${this.overall}
  </div>

  <div class="playercard-name">
    ${this.playerName}
  </div>

  <div class="playercard-position">

    ${this.position}

  </div>

  <div class="playercard-nation">
    <img height="18" width="30" alt="Germany" src=${this.nationLogoUrl}>
  </div>

  <div class="playercard-club">
    <img height="30" width="30" alt="ClubLogo" src=${this.clubLogoUrl}>
  </div>

  <div class="playercard-picture">
    <img style="border-radius: 50px" height="135" width="125" alt="Max Kruse 82" src=${this.playerImgUrl}>
  </div>




  <div class="playercard-extra">


    <div class="playercard-skill-move">
      ${this.sm}<span class="icon icon-star"></span>SM
    </div>


    <div class="playercard-weak-foot">
      ${this.wf}<span class="icon icon-star"></span>WF
    </div>


    <div class="playercard-feature-price feature-prices" data-id="183574" data-year="19">
    </div>
  </div>




  <div class="playercard-chem playercard-chembot">
    <span class="fut19 icon icon-chem-"></span>
    <span class="chem-name"></span>
  </div>


  <div class="playercard-attr playercard-attr1">
    <span class="chembot-value">${this.pac}</span> <span class="playercard-thin">PAC</span>
    <span class="chembot-delta" data-chembot-field="attr1" data-chembot-base="69"></span>
  </div>
  <div class="playercard-attr playercard-attr2">
    <span class="chembot-value">${this.sho}</span> <span class="playercard-thin">SHO</span>
    <span class="chembot-delta" data-chembot-field="attr2" data-chembot-base="83"></span>
  </div>
  <div class="playercard-attr playercard-attr3">
    <span class="chembot-value">${this.pas}</span> <span class="playercard-thin">PAS</span>
    <span class="chembot-delta" data-chembot-field="attr3" data-chembot-base="82"></span>
  </div>
  <div class="playercard-attr playercard-attr4">
    <span class="chembot-value">${this.dri}</span> <span class="playercard-thin">DRI</span>
    <span class="chembot-delta" data-chembot-field="attr4" data-chembot-base="82"></span>
  </div>
  <div class="playercard-attr playercard-attr5">
    <span class="chembot-value">${this.def}</span> <span class="playercard-thin">DEF</span>
    <span class="chembot-delta" data-chembot-field="attr5" data-chembot-base="46"></span>
  </div>
  <div class="playercard-attr playercard-attr6">
    <span class="chembot-value">${this.phy}</span> <span class="playercard-thin">PHY</span>
    <span class="chembot-delta" data-chembot-field="attr6" data-chembot-base="70"></span>
  </div>





</div>
`;
  }

}
