<script setup>
import { useFetchResource } from '@/composables/useFetchResource'

const  { data:users } = useFetchResource()
</script>

<template>
    <div>
      <h1>Home</h1>
      <ul>
        <li v-for="user in users" :key="`user_${user.id}`">
          <RouterLink :to="{ name: 'User', params: { id: user.id }}">{{ user.name }}</RouterLink>
        </li>
      </ul>
    </div>
</template>

<style lang="scss" scoped>
  ul {
    padding-left: 20px;
  }
</style>