export const state = () => ({
  raid: null,
})

export const getters = {
  raid(state) {
    return state.raid
  },
}

export const mutations = {
  setRaid: (state, raid) => {
    state.raid = raid
  },
}

export const actions = {
  async createRaid(state, newRaid) {
    console.log('raids/newRaid', newRaid)
    const createdDoc = await this.$fire.firestore
      .collection('raids')
      .add(newRaid)
    console.log(createdDoc.id)
    console.log('done')
    return createdDoc.id
  },

  async loadRaid({ commit }, id) {
    console.log('id', id)
    const raid = await this.$fire.firestore.collection('raids').doc(id).get()
    console.log('raid', { ...raid.data() })
    commit('setRaid', { ...raid.data() })
  },
}
