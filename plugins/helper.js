export default ({ app }, inject) => {
    // initials
    inject("getInitials", (name) => {
        let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

        let initials = [...name.matchAll(rgx)] || [];

        initials = (
            (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
        ).toUpperCase();

        return initials;
    });
    // full name
    inject("getFullName", (fname, lname) => {
        if (!fname && !lname) return "Nil";
        return fname + " " + lname;
    });
    // search params for all request on the search routes
    inject("setSearchParams", (searchParam) => {
        let params = "";
        Object.entries(searchParam).forEach(([key, value]) => {
            if (value || value === 0) {
                params += `${key}=${value}&`;
            }
        });
        return params;
    });
    // getkebab case for objects with no slug
    inject("getKebabCase", (str) => {
        return str.toLowerCase().split(" ").join("-");
    });
    // getCamel case for objects with no slug
    inject("getCamelCase", (str) => {
        return str.toLowerCase().split("-").join(" ");
    });
    // getUnderCase
    inject("getUnderCase", (str) => {
        return str.toLowerCase().split("-").join("_");
    });
    // format date string for invoices
    inject("formatInvoiceDate", (dateString) => {
        if (dateString === null || dateString === "00-00-00") return "Nil";
        let date = new Date(dateString);
        let formattedDate = date
            .toLocaleString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            })
            .replace(" at", ",");
        return formattedDate;
    });
    //format date string for activity logs
    inject("formatActivityDate", (dateString) => {
        if (dateString === null || dateString === "00-00-00") return "Nil";
        let date = new Date(dateString);
        let formattedDate = date
            .toLocaleString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            })
        return formattedDate;
    });
    // general date string formatter 1
    inject("formatUserChartDate", (date) => {
        if (date === null || date === "00-00-00") return "Nil";
        const formatDate = new Date(date)
            .toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "2-digit",
            }).replace(' ', '. ')
        return formatDate;
    });
    // general date string formatter 2
    inject("formatDateString", (date) => {
        if (date === null || date === "00-00-00") return "Nil";
        const formatDate = new Date(date)
            .toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
            })
            .replace(/(\w{3}) /g, "$1. ");
        return formatDate;
    });
    // toggle full page loader
    inject("loadingAnimation", () => {
        return {
            start() {
                let body = document.querySelector("body");
                $nuxt.$loading.start();
                // body.style.height = "100vh";
                body.style.overflow = "hidden";
            },
            finish() {
                let body = document.querySelector("body");
                $nuxt.$loading.finish();
                // body.style.height = null;
                body.style.overflow = null;
            },
        };
    });
    // format currency with type
    inject("formatNairaCurrency", (num, formatType) => {
        if (num === null) return "Nil";
        const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: formatType ? formatType : 'NGN',
        });
        return formatter.format(num);
    });
    // format number
    inject("formatNumber", (num) => {
        if (num === null) return "Nil";
        const formatter = num.toLocaleString("en-US", {
            style: "decimal",
        });
        return formatter;
    });
    // rich text controller 
    inject('emptyEditorToolbar', () => {
        return {
            modules: {
                toolbar: false,
            },
        };
    })
    // remove user http text if any 
    inject('removeHttp', (url) => {
        return url.replace(/^https?:\/\//, '')
    })
    // check users links and appends hyperText
    inject('linkCheck', (url) => {
        if (!url) return 'javascript:void(0)';
        let filterLinks = [
            {
                stringsToCheck: ["https://", "http://"],
                value: 'https://' + url,
            }
        ]

        if (url.includes(filterLinks[0].stringsToCheck[0]) || url.includes(filterLinks[0].stringsToCheck[1])) {
            return url
        } else {
            return filterLinks[0].value
        }
    })
    // chart bg
    inject('getChartBg', () => {
        return app.store.state.backgroundColors
    })

    // chart bg
    inject('getChartOptions', () => {
        return {
            basicVal: {
                responsive: true,
                maintainAspectRatio: false,
                pointStyle: "rectRounded",
                hoverBackgroundColor: "#3FBF62",
                hoverBorderColor: "#3FBF62",
                barThickness: 20,
                borderRadius: 4,
                hoverOffset: 4,
            },
            // tooltip 
            tooltip: {
                backgroundColor: "#00317F",
                titleColor: "#fff",
                // bodyColor: "#eb3d34",
                bodyFont: {
                    weight: "bold",
                    size: 12,
                },
                padding: 5,
                displayColors: false,
            },
        }
    })

    // world chart color
    inject('getChartColor', (val) => {
        if (!val && val != 0) return 'red';
        var number = Number(val)
        const rangeValues = [
            // 0 - 1000
            // 1000 - 10,000
            // 10,000 - ten-M 
            // tem-M - 1B 
            // 1b - upwards
            0, 999, 99999, 999999, 9999999, 999999999
        ]
        if (number >= rangeValues[0] && number <= rangeValues[1]) {
            return "rgba(236, 239, 255, 1)";
        } else if (number >= rangeValues[1] && number <= rangeValues[2]) {
            return "#FFC289";
        } else if (number >= rangeValues[2] && number <= rangeValues[3]) {
            return "#00317F";
        } else if (number >= rangeValues[3] && number <= rangeValues[4]) {
            return "#FF993A";
        } else if (number >= rangeValues[4] && number <= rangeValues[5]) {
            return "#0062FF";
        } else {
            return "#445A8A";
        }
    })

    // state management section
    // return state data

    inject("getLoginData", () => {
        return app.store.state.loginData;
    });
};
