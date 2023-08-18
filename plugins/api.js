export default function ({ $axios, store }, inject) {
    // post requests

    // authentication 
    // login 
    inject("getLogin", async (payload) => {
        const res = await $axios.post('users/login', payload)
        return res
    });
    // register 
    inject("getRegister", async (payload) => {
        const res = await $axios.post('users/signup', payload)
        return res
    });

    // get requests 
}
