/**
 * @customElement
 * @polymer
 */
class PilafHeader extends Polymer.Element {
    static get is() {
        return 'pilaf-header';
    }

    static get properties() {
        return {
            days: {
                type: Array,
                value: ["L", "M", "X", "J", "V", "S", "D"]
            },
            selected: {
                type: Number,
                value: 0,
                notify: true
            }
        }
    }

    ready() {
        super.ready();
        let date = new Date();
        this.selected = date.getDay() - 1;
    }

    connectedCallback() {
        super.connectedCallback();
    }
}

window.customElements.define(PilafHeader.is, PilafHeader);
