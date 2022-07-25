<script setup>
import { reactive } from "vue"
import { useFetchResource } from '@/composables/useFetchResource'
import UsersStats from "@/components/UsersStats.vue"
import UsersList from '@/components/UsersList.vue'
import TheTickets from "@/components/TheTickets.vue"
import TheTasks from "@/components/TheTasks.vue"

const  { data:users, loadingStatus } = useFetchResource()

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
      <UsersList v-if="loadingStatus" :users="users" />
      <div class="bottom-widgets d-flex">
        <TheTickets class="col-half" />
        <TheTasks class="col-half" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
  ul {
    padding-left: 20px;
  }
  .bottom-widgets {
    justify-content: space-between;
    align-items: flex-start;
    .col-half {
      width: 48%;
    }
  }
</style>