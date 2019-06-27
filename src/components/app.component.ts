import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./app.component.scss');

@customElement('marius-fifa-card')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
          <h1>Fifa Card</h1>
`;
  }

}
