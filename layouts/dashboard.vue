<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-3 py-4">
          <Nuxt />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'

export default {
  components: {
    Header,
    Sidebar,
  },
}
</script>
