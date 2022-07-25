<script setup>
import { useFetchResource } from '@/composables/useFetchResource'
import UsersStats from "@/components/UsersStats.vue"
import UsersList from '@/components/UsersList.vue'
import TheTickets from "@/components/TheTickets.vue"
import TheTasks from "@/components/TheTasks.vue"

const  { data:users, loadingStatus } = useFetchResource()

</script>

<template>
    <div>
      <UsersStats />
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