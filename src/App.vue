<script setup>
import { useFetchResource } from "@/composables/useFetchResource";
import TheSidebar from "@/components/TheSidebar.vue";

const { fetchResource } = useFetchResource('https://jsonplaceholder.typicode.com/users')
fetchResource()
</script>

<template>
  <div class="wrapper d-flex">
    <TheSidebar />

    <RouterView />
  </div>
</template>

<style lang="scss" scoped>

</style>
