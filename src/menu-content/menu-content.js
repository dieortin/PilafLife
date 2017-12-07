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