<script setup>
import { ref } from 'vue'

const newNotifications  = ref(true)
</script>

<template>
  <div class="navbar d-flex">
    <h2 class="page-title">Users</h2>
    <div class="navbar-actions d-flex">
      <div class="search">
        <div class="icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6.5" cy="6.5" r="5.75" stroke="#C5C7CD" stroke-width="1.5"/>
            <path d="M11 11L15 15" stroke="#C5C7CD" stroke-width="1.5" stroke-linecap="round"/>
          </svg>

        </div>
      </div>
      <div class="notifications">
        <div class="icon">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00002 19C9.10377 19 9.99908 18.1047 9.99908 17H6.00096C6.00096 18.1047 6.89627 19 8.00002 19ZM14.731 14.3216C14.1272 13.6728 12.9975 12.6969 12.9975 9.5C12.9975 7.07188 11.295 5.12812 8.9994 4.65125V4C8.9994 3.44781 8.5519 3 8.00002 3C7.44815 3 7.00065 3.44781 7.00065 4V4.65125C4.70502 5.12812 3.00252 7.07188 3.00252 9.5C3.00252 12.6969 1.87283 13.6728 1.26908 14.3216C1.08158 14.5231 0.998459 14.7641 1.00002 15C1.00346 15.5125 1.40565 16 2.00315 16H13.9969C14.5944 16 14.9969 15.5125 15 15C15.0016 14.7641 14.9185 14.5228 14.731 14.3216Z" fill="#C5C7CD"/>
            <circle v-if="newNotifications" cx="13" cy="5" r="3.75" fill="#3751FF" stroke="#F7F8FC" stroke-width="1.5"/><!--    Condition for new notifications        -->
          </svg>
        </div>
      </div>
      <div class="current-user d-flex">
        <a href="#" class="user-name">Jones Ferdinand</a>
        <div class="user-avatar">
          <img src="@/assets/user-avatar.jpg" alt="Avatar">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .navbar {
    width: 100%;
    align-items: center;
    margin-bottom: 54px;
    .navbar-actions {
      margin-left: auto;
      align-items: center;
      .search {
        margin-right: 24px;
        cursor: pointer;
      }
      .notifications {
        margin-right: 32px;
        cursor: pointer;
      }
      .current-user {
        padding-left: 32px;
        border-left: 1px solid #DFE0EB;
        align-items: center;
        .user-name {
          font-weight: 600;
          font-size: 14px;
          line-height: 143%;
          letter-spacing: 0.2px;
          color: #252733;
          margin-right: 15px;
        }
        .user-avatar {
          width: 44px;
          height: 44px;
          overflow: hidden;
          position: relative;
          border: 1.5px solid #DFE0EB;
          border-radius: 50%;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          &::before {
            content: '';
            display: block;
            position: absolute;
            top: -1px;
            left: -1px;
            bottom: -1px;
            right: -1px;
            border-radius: 50%;
            border: 2px solid #F7F8FC;
            z-index: 2;
          }
        }
      }
    }
  }
</style>