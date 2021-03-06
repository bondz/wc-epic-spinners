import SpinnerElement from '../SpinnerElement.js';

export class FlowerSpinner extends SpinnerElement {
  static get is() { return 'flower-spinner'; }

  static get defaults() {
    return {
      color: '#ff1d5e',
      duration: 2.5,
      size: 70,
    };
  }

  static get observedAttributes() {
    return [
      'color',
      'duration',
      'size',
    ];
  }

  template({ color, duration, size }) {
    return `
      <style>
        * {
          box-sizing: border-box;
        }

        :host {
          display: block;
        }

        .flower-spinner {
          align-items: center;
          display: flex;
          flex-direction: row;
          height: var(--flower-spinner-size, ${size}px);
          justify-content: center;
          width: var(--flower-spinner-size, ${size}px);
        }

        .flower-spinner .dots-container {
          height: calc(var(--flower-spinner-size, ${size}px) / 7);
          width: calc(var(--flower-spinner-size, ${size}px) / 7);
        }

        .flower-spinner .smaller-dot {
          animation: flower-spinner-smaller-dot-animation var(--flower-spinner-duration, ${duration}s) 0s infinite both;
          background: var(--fingerprint-spinner-color, ${color});
          border-radius: 50%;
          height: 100%;
          width: 100%;
        }

        .flower-spinner .bigger-dot {
          animation: flower-spinner-bigger-dot-animation var(--flower-spinner-duration, ${duration}s) 0s infinite both;
          background: var(--fingerprint-spinner-color, ${color});
          border-radius: 50%;
          height: 100%;
          padding: 10%;
          width: 100%;
        }

        @keyframes flower-spinner-bigger-dot-animation {
          0%, 100% {
            box-shadow: var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px;
          }
          50% {
            transform: rotate(180deg);
          }
          25%, 75% {
            box-shadow: var(--fingerprint-spinner-color, ${color}) 26px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) -26px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 26px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px -26px 0px,
                        var(--fingerprint-spinner-color, ${color}) 19px -19px 0px,
                        var(--fingerprint-spinner-color, ${color}) 19px 19px 0px,
                        var(--fingerprint-spinner-color, ${color}) -19px -19px 0px,
                        var(--fingerprint-spinner-color, ${color}) -19px 19px 0px;
          }
          100% {
            transform: rotate(360deg);
            box-shadow: var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px;
          }
        }
        @keyframes flower-spinner-smaller-dot-animation {
          0%, 100% {
            box-shadow: var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
            var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
            var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
            var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
            var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
            var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
            var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
            var(--fingerprint-spinner-color, ${color}) 0px 0px 0px;
          }
          25%, 75% {
            box-shadow: var(--fingerprint-spinner-color, ${color}) 14px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) -14px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 14px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px -14px 0px,
                        var(--fingerprint-spinner-color, ${color}) 10px -10px 0px,
                        var(--fingerprint-spinner-color, ${color}) 10px 10px 0px,
                        var(--fingerprint-spinner-color, ${color}) -10px -10px 0px,
                        var(--fingerprint-spinner-color, ${color}) -10px 10px 0px;
          }
          100% {
            box-shadow: var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px,
                        var(--fingerprint-spinner-color, ${color}) 0px 0px 0px;
          }
        }
      </style>

      <div class="flower-spinner">
        <div class="dots-container">
          <div class="bigger-dot">
            <div class="smaller-dot"></div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(FlowerSpinner.is, FlowerSpinner);
