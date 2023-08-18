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
                body.style.height = "100vh";
                body.style.overflow = "hidden";
            },
            finish() {
                let body = document.querySelector("body");
                $nuxt.$loading.finish();
                body.style.height = null;
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

    // state management section
    // return state data

    inject("getLoginData", () => {
        return app.store.state.loginData;
    });
};
