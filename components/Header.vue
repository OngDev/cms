<template>
  <header
    class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600"
  >
    <div class="flex items-center">
      <button
        class="text-gray-500 focus:outline-none lg:hidden"
        @click="toggle(true)"
      >
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <div class="flex items-center">
      <div class="relative">
        <button
          class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
          @click="dropdownOpen = !dropdownOpen"
        >
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="Your avatar"
          />
        </button>

        <div
          v-show="dropdownOpen"
          class="fixed inset-0 h-full w-full z-10"
          @click="dropdownOpen = false"
        ></div>

        <div
          v-show="dropdownOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Products</a
          >
          <router-link
            to="/"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Log out</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      dropdownOpen: false,
    }
  },
  computed: {
    isOpen(): boolean {
      return this.$store.state.sidebar.isOpen
    },
  },
  methods: {
    ...mapMutations({
      toggle: 'sidebar/toggleSidebar',
    }),
  },
}
</script>
