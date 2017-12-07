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