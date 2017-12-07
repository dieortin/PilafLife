/*
    PilafLife, an app for checking the dining hall's menu
Copyright (C) 2017  Diego Ortín Fernández <dieortin@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
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
