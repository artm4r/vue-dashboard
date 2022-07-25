<script setup>
import { useUsersStats } from "@/composables/useUsersStats.js";

const { stats } = useUsersStats()
</script>

<template>
  <div class="users-stats d-flex">
    <div v-for="stat in stats" :key="`stat_${stat.id}`" class="card">
      <span class="card-title">{{ stat.title }}</span>
      <span class="card-count">{{ stat.count }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .users-stats {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 38px;
    .card {
      padding: 24px 32px;
      background: #FFFFFF;
      border: 1px solid #DFE0EB;
      border-radius: 8px;
      min-width: 250px;
      transition: .3s;
      &:hover {
        border-color: #3751FF;
        .card-title, .card-count {
          color: #3751FF;
        }
      }
      .card-title {
        display: block;
        font-weight: 700;
        font-size: 19px;
        line-height: 125%;
        text-align: center;
        letter-spacing: 0.4px;
        color: #9FA2B4;
        margin-bottom: 12px;
        transition: .3s;
      }
      .card-count {
        display: block;
        font-weight: 700;
        font-size: 40px;
        line-height: 125%;
        text-align: center;
        letter-spacing: 1px;
        color: #252733;
        transition: .3s;
      }
    }
  }
</style>