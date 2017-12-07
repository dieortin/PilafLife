/**
 * @customElement
 * @polymer
 */
class MenuApp extends Polymer.Element {
    static get is() {
        return 'menu-app';
    }

    constructor() {
        super();

        let loadedDays = [];
        for (let i = 0; i < 7; i++) {
            loadedDays.push({
                lunch: {},
                dinner: {}
            })
        }

        function getDataForMoment(day, moment) {
            // Create new promise with the Promise() constructor;
            // This has as its argument a function
            // with two parameters, resolve and reject
            return new Promise(function (resolve, reject) {
                // Standard XHR to load an image
                let request = new XMLHttpRequest();
                request.open("GET", `http://serovet.es/sudaderas/getMenu.php?day=${day}&moment=${moment}`, true);
                request.responseType = "json";
                // When the request loads, check whether it was successful
                request.onload = function () {
                    if (request.status === 200) {
                        // If successful, resolve the promise by passing back the request response
                        resolve([request.response, day, moment]);
                    } else {
                        // If it fails, reject the promise with a error message
                        reject(Error('Data didn\'t load successfully; error code:' + request.statusText));
                    }
                };
                request.onerror = function () {
                    // Also deal with the case when the entire request fails to begin with
                    // This is probably a network error, so reject the promise with an appropriate message
                    reject(Error('There was a network error.'));
                };
                // Send the request
                request.send();
            });
        }

        function parseDataForMoment(array) {
            let data = array[0];
            let day = array[1];
            let moment = array[2];
            console.log("Moment is: " + moment);
            let firstCourses = [];
            let secondCourses = [];
            let desserts = [];
            if (!data.hasOwnProperty("menus")) {
                console.error("Data doesn't have 'menus' property, doesn't match expected format");
                return;
            }
            let menus = data["menus"];
            for (let dish in menus) {
                if (menus[dish].hasOwnProperty("tipo")) {
                    let d = menus[dish];
                    switch (d["tipo"]) {
                        case "3":
                            desserts.push(d["texto"]);
                            break;
                        case "2":
                            secondCourses.push(d["texto"]);
                            break;
                        case "1":
                            firstCourses.push(d["texto"]);
                            break;
                        default:
                            console.error("Undefined dish type!");
                    }
                } else {
                    console.error("Dish doesn't have type property!");
                    console.log(d);
                }
            }

            let momentData = {};
            momentData.firstCourses = firstCourses;
            momentData.secondCourses = secondCourses;
            momentData.desserts = desserts;

            if (moment === 0) {
                console.log("Adding lunch for day " + day);
                loadedDays[day].lunch = momentData;
            } else if (moment === 1) {
                console.log("Adding dinner for day " + day);
                loadedDays[day].dinner = momentData;
            } else {
                console.log(moment);
                console.log("Unexpected moment!");
            }

            console.log(loadedDays);
        }

        let promises = [];
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 2; j++) {
                let p = getDataForMoment(i, j);
                p.then(parseDataForMoment);

                promises.push(p);
            }
        }

        Promise.all(promises).then(function(t) {
            console.log("Done loading!!");
            document.querySelector("menu-app").days = [];
            console.log(loadedDays);
            for (let i = 0; i < loadedDays.length; i++) {
                document.querySelector("menu-app").days.push(loadedDays[i]);
            }
        })
    }

    static get properties() {
        return {
            selected: {
                type: Number,
                value: 0,
                notify: true
            },
            days: {
                type: Array,
                notify: true,
                value: [
                    {
                        lunch: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        },
                        dinner: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        }
                    },
                    {
                        lunch: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        },
                        dinner: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        }
                    },
                    {
                        lunch: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        },
                        dinner: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        }
                    },
                    {
                        lunch: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        },
                        dinner: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        }
                    },
                    {
                        lunch: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        },
                        dinner: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        }
                    },
                    {
                        lunch: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        },
                        dinner: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        }
                    },
                    {
                        lunch: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        },
                        dinner: {
                            firstCourses: [
                                "Sin datos"
                            ],
                            secondCourses: [
                                "Sin datos"
                            ],
                            desserts: [
                                "Sin datos"
                            ]
                        }
                    }
                ]
            }
        }
    }
}

window.customElements.define(MenuApp.is, MenuApp);
