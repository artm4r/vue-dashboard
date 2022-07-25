<script setup>
defineProps({
  users: {
    type: Array,
  }
})

const countDistance = (xCord) => {
  const absWidth = Math.floor(Math.abs(xCord))
  if (absWidth <= 50 ) {
    return 'low'
  } else if (absWidth > 50 && absWidth <= 100) {
    return 'medium'
  } else {
    return 'high'
  }
}

</script>

<template>
  <div class="users-list">
    <div class="list-title d-flex">
      <h3 class="header-title">All users</h3>
      <button class="header-filter">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.12857 4.26839L3.31563 2.12548C3.48647 1.95815 3.7636 1.9582 3.93434 2.12548L6.12132 4.26839C6.39667 4.53812 6.20059 5.00001 5.81195 5.00001H4.5V13.5714C4.5 13.8081 4.30414 14 4.0625 14H3.1875C2.94586 14 2.75 13.8081 2.75 13.5714V5.00001H1.43794C1.04853 5.00001 0.853791 4.53758 1.12857 4.26839ZM7.5625 3.7143H14.5625C14.8041 3.7143 15 3.52243 15 3.28573V2.42858C15 2.19188 14.8041 2.00001 14.5625 2.00001H7.5625C7.32086 2.00001 7.125 2.19188 7.125 2.42858V3.28573C7.125 3.52243 7.32086 3.7143 7.5625 3.7143ZM7.125 6.71429V5.85715C7.125 5.62045 7.32086 5.42858 7.5625 5.42858H12.8125C13.0541 5.42858 13.25 5.62045 13.25 5.85715V6.71429C13.25 6.951 13.0541 7.14287 12.8125 7.14287H7.5625C7.32086 7.14287 7.125 6.951 7.125 6.71429ZM7.125 13.5714V12.7143C7.125 12.4776 7.32086 12.2857 7.5625 12.2857H9.3125C9.55414 12.2857 9.75 12.4776 9.75 12.7143V13.5714C9.75 13.8081 9.55414 14 9.3125 14H7.5625C7.32086 14 7.125 13.8081 7.125 13.5714ZM7.125 10.1429V9.28572C7.125 9.04901 7.32086 8.85715 7.5625 8.85715H11.0625C11.3041 8.85715 11.5 9.04901 11.5 9.28572V10.1429C11.5 10.3796 11.3041 10.5714 11.0625 10.5714H7.5625C7.32086 10.5714 7.125 10.3796 7.125 10.1429Z" fill="#C5C7CD"/>
        </svg>
        <span>Sort</span>
      </button>
    </div>
    <div class="list-header d-flex">
      <p class="col-user-details">User details</p>
      <p class="col-company-name">Company name</p>
      <p class="col-email">Email</p>
      <p class="col-distance">Distance</p>
    </div>
    <div class="list-main">
      <RouterLink
          v-for="user in users"
          :key="`user_${user.id}`"
          :to="{ name: 'User', params: { id: user.id } }"
          class="user d-flex">
        <div class="col-user-details d-flex">
          <div class="avatar">
            <img src="@/assets/user-avatar.jpg" alt="Avatar">
          </div>
          <div class="name">
            <p class="full-name">{{ user.name }}</p>
            <p class="city">{{ user.address.city }}</p>
          </div>
        </div>
        <div class="col-company-name">
          <p class="full-name">{{ user.company.name }}</p>
          <p class="tags">{{ user.company.bs }}</p>
        </div>
        <div class="col-email">
          <p class="email">{{ user.email }}</p>
          <p class="website">{{ user.website }}</p>
        </div>
        <div class="col-distance d-flex">
          <span
              class="distance"
              :class="[countDistance(user.address.geo.lng) === 'low' ? 'distance-low' : countDistance(user.address.geo.lng) === 'medium' ? 'distance-medium' : 'distance-high']"
          >{{ countDistance(user.address.geo.lng) }}</span>
        </div>
        <button class="options">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#C5C7CD"/>
          </svg>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .table-cell-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 145%;
    letter-spacing: 0.2px;
    color: #252733;
    margin-bottom: 4px;
  }
  .table-cell-subtitle {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.1px;
    color: #C5C7CD;
  }
  .users-list {
    padding: 32px 0 0;
    margin-bottom: 30px;
    background: #FFFFFF;
    border: 1px solid #DFE0EB;
    border-radius: 8px;
    .col-user-details {
      width: 37%;
      margin-right: 40px;
    }
    .col-company-name {
      width: 20%;
      margin-right: 40px;
    }
    .col-email {
      width: 18%;
      margin-right: 40px;
    }
    .col-distance {
      width: 12%;
    }
    .list-title {
      padding: 0 32px;
      margin-bottom: 48px;
      align-items: center;
      justify-content: space-between;
      .header-title {
        font-weight: 700;
        font-size: 19px;
        line-height: 125%;
        letter-spacing: 0.4px;
        color: #252733;
      }
      .header-filter {
        appearance: none;
        outline: none;
        border: none;
        background-color: #fff;
        cursor: pointer;
        svg {
          margin-right: 8px;
          transform: translateY(2px);
        }
        span {
          font-weight: 600;
          font-size: 14px;
          line-height: 150%;
          letter-spacing: 0.2px;
          color: #4B506D;
        }
      }
    }
    .list-header {
      padding: 0 32px 12px;
      p {
        font-weight: 700;
        font-size: 14px;
        line-height: 135%;
        letter-spacing: 0.2px;
        color: #9FA2B4;
      }
    }
    .list-main {
      .user {
        display: flex;
        padding: 24px 31px;
        border-top: 1px solid #DFE0EB;
        align-items: center;
        transition: .3s;
        &:hover {
          background-color: rgba(55, 81, 255, 0.04);
        }
        .col-user-details {
          align-items: center;
          .avatar {
            position: relative;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 24px;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          .name {
            .full-name {
              @extend .table-cell-title;
            }
            .city {
              @extend .table-cell-subtitle;
            }
          }
        }
        .col-company-name {
          .full-name {
            @extend .table-cell-title;
          }
          .tags {
            @extend .table-cell-subtitle;
          }
        }
        .col-email {
          .email {
            @extend .table-cell-title;
          }
          .website {
            @extend .table-cell-subtitle;
          }
        }
        .col-distance {
          .distance {
            border-radius: 100px;
            display: inline-block;
            padding: 5px 12px;
            font-weight: 700;
            font-size: 11px;
            line-height: 120%;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: #FFFFFF;
            &.distance-low {
              background-color: #FEC400;
            }
            &.distance-medium {
              background-color: #29CC97;
            }
            &.distance-high {
              background-color: #F12B2C;
            }
          }
        }
        .options {
          margin-left: auto;
          border: none;
          outline: none;
          appearance: none;
          background-color: transparent;
          display: inline-flex;
          cursor: pointer;
        }
      }
    }
  }
</style>