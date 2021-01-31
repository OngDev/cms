export const state = () => ({
  isOpen: false,
})

export const mutations = {
  toggleSidebar(state: { isOpen: boolean }, isOpen: boolean) {
    state.isOpen = isOpen
  },
}
