<script setup>
import { useFetchResource } from "@/composables/useFetchResource";
import TheSidebar from "@/components/TheSidebar.vue";
import TheNavbar from "@/components/TheNavbar.vue";

const { fetchResource } = useFetchResource('https://jsonplaceholder.typicode.com/users')
fetchResource()
</script>

<template>
  <div class="wrapper d-flex">
    <TheSidebar />
    <div class="tab-content">
      <TheNavbar />
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    background: #F7F8FC;
  }
  .tab-content {
    width: 100%;
    padding: 30px;
  }
</style>
