<script setup>
import {reactive} from "vue"
import { useFetchResource } from '@/composables/useFetchResource'
import UsersStats from "@/components/UsersStats.vue"
import UsersList from '@/components/UsersList.vue'

const  { data:users } = useFetchResource()

const stats = reactive([
  {
    id: 1,
    title: 'Active',
    count: 60
  },
  {
    id: 2,
    title: 'Online',
    count: 16
  },
  {
    id: 3,
    title: 'Filtered',
    count: 43
  },
  {
    id: 4,
    title: 'Banned',
    count: 64
  },
])

</script>

<template>
    <div>
      <UsersStats :stats="stats" />
      <UsersList v-if="users.length" :users="users" />
<!--      <ul>-->
<!--        <li v-for="user in users" :key="`user_${user.id}`">-->
<!--          <RouterLink :to="{ name: 'User', params: { id: user.id }}">{{ user.name }}</RouterLink>-->
<!--        </li>-->
<!--      </ul>-->
    </div>
</template>

<style lang="scss" scoped>
  ul {
    padding-left: 20px;
  }
</style>