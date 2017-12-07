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

class MenuContent extends Polymer.Element {
    static get is() {
        return 'menu-content'
    }

    connectedCallback() {
        super.connectedCallback();
    }

    static get properties() {
        return {
            day: {
                type: Object,
                value: {
                    lunch: {
                        firstCourses: [
                            "Lunch not loaded!"
                        ],
                        secondCourses: [
                            "Second courses not loaded"
                        ],
                        desserts: [
                            "Nope"
                        ]
                    },
                    dinner: {
                        firstCourses: [
                            "Dinner not loaded!"
                        ],
                        secondCourses: [
                            "Second courses not loaded"
                        ],
                        desserts: [
                            "Nope"
                        ]
                    }
                }
            }
        }
    }
}

window.customElements.define(MenuContent.is, MenuContent);