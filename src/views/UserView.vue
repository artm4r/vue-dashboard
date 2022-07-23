<script setup>
import {useFetchResource} from "@/composables/useFetchResource";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route  = useRoute()
const { data:users } = useFetchResource()
const user = computed(() => users.value.find(user => user.id === parseInt(route.params.id)))
</script>

<template>
    <div>
        <h1> {{user.name}}'s page</h1>
    </div>
</template>

<style lang="scss" scoped>

</style>