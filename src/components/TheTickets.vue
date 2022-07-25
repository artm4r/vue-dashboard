<script setup>
import { reactive } from "vue";

const tickets = reactive([
  {
    id: 4238,
    title: 'Waiting on Feature Request'
  },
  {
    id: 1005,
    title: 'Awaiting Customer Response'
  },
  {
    id: 914,
    title: 'Awaiting Developer Fix'
  },
  {
    id: 281,
    title: 'Pending'
  },
])
</script>

<template>
  <div class="component-wrap">
    <div class="component-header d-flex">
      <div class="component-info">
        <h3 class="title">Unresolved tickets</h3>
        <p class="group">Group: <span>Support</span></p>
      </div>
      <a href="#" class="component-more-action">View details</a>
    </div>
    <div class="tickets-list">
      <RouterLink
          v-for="ticket in tickets"
          :key="`ticket_${ticket.id}`"
          :to="`/tickets/${ticket.id}`"
          class="ticket d-flex">
          <p class="title">{{ ticket.title }}</p>
          <span class="ticket-id">{{ ticket.id }}</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component-wrap {
  padding: 32px 0 8px;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  border-radius: 8px;
  .component-header {
    padding: 0 32px;
    justify-content: space-between;
    margin-bottom: 16px;
    .component-info {
      .title {
        font-weight: 700;
        font-size: 19px;
        line-height: 125%;
        letter-spacing: 0.4px;
        color: #252733;
        margin-bottom: 8px;
      }
      .group {
        font-weight: 400;
        font-size: 12px;
        line-height: 135%;
        letter-spacing: 0.1px;
        color: #9FA2B4;
        span {
          font-weight: 600;
          font-size: 12px;
          line-height: 130%;
          letter-spacing: 0.1px;
          color: #4B506D;
          padding-left: 2px;
        }
      }
    }
    .component-more-action {
      font-weight: 600;
      font-size: 14px;
      line-height: 145%;
      letter-spacing: 0.2px;
      color: #3751FF;
    }
  }
  .tickets-list {
    .ticket {
      padding: 20px 32px 18px;
      justify-content: space-between;
      align-items: center;
      &:not(:first-child) {
        border-top: 1px solid #DFE0EB;
      }
      .title {
        font-weight: 600;
        font-size: 14px;
        line-height: 145%;
        letter-spacing: 0.2px;
        color: #252733;
      }
      .ticket-id {
        font-weight: 600;
        font-size: 14px;
        line-height: 145%;
        text-align: right;
        letter-spacing: 0.2px;
        color: #9FA2B4;
      }
    }
  }
}
</style>