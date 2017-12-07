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

class MealCard extends Polymer.Element {
    static get is() {
        return 'meal-card';
    }

    connectedCallback() {
        super.connectedCallback();

        let hour = new Date().getHours();
        if (this.mealname === "Cena") {
            this.$.icon.icon = "places:room-service"
            if (hour < 16) {
                this.$.card.classList.add("collapsed");
            }
        } else if (this.mealname === "Comida" && hour >= 16) {
            this.$.card.classList.add("collapsed");
        }
    }

    static get properties() {
        return {
            mealname: {
                type: String,
                value: "Undefined meal"
            },
            mealdata: {
                type: Object,
                value: {
                    firstCourses: [
                        "Unset meal first course", "Unset meal first course number 2"
                    ],
                    secondCourses: [
                        "Unset meal second course",
                        "Unset meal second course number 2"
                    ],
                    desserts: [
                        "This is a dessert",
                        "Yet another dessert"
                    ]
                }
            }
        }
    }
}

window.customElements.define(MealCard.is, MealCard);