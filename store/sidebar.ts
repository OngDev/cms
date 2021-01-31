export const state = () => ({
  isOpen: false,
})

export const mutations = {
  toggleSidebar(state: { isOpen: boolean }) {
    state.isOpen = !state.isOpen
  },
}
