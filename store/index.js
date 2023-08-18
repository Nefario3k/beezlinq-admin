export const state = () => ({
})
export const actions = {
    async test({ commit }, dataToSearch) {
        try {
            await this.$axios.get(`admin/savings/${dataToSearch}/all`).then(res => {
                let commitDataStance = dataToSearch.toLowerCase()
                    .split('-')
                    .join('');
                commit(`set${commitDataStance}`, res.data.data)
            })
        } catch (err) {
            console.log(err)
        }
    },
}
export const mutations = {
    test(state, details) {
        state.test = details
    },
}