<script setup>
import {useFetchResource} from "@/composables/useFetchResource";
import UsersStats from "@/components/UsersStats.vue"
import { useRoute } from "vue-router";
import { computed } from "vue";

const route  = useRoute()
const { data:users } = useFetchResource()
const user = computed(() => users.value.find(user => user.id === parseInt(route.params.id)))

const fullAddressString = (addressObject) => {
  return `${addressObject.street || ''}, ${addressObject.suite || ''}, ${addressObject.city || ''}, ${addressObject.zipcode || ''}`
}
</script>

<template>
  <div>
    <UsersStats/>
    <div class="user-profile-card">
      <img class="profile-background" src="@/assets/profile-background.jpg" alt="Background">
      <div class="user-avatar">
        <img src="@/assets/profile-avatar.jpg" alt="Avatar">
      </div>
      <h2 class="user-name">{{ user.name }}</h2>
      <p class="user-tags">{{ user.company.catchPhrase }}</p>
      <div v-if="user.address" class="user-address user-info-block">
        <h3 class="block-title">Address</h3>
        <p>{{ fullAddressString(user.address) }}</p>
      </div>
      <div v-if="user.phone" class="user-phone user-info-block">
        <h3 class="block-title">Phone</h3>
        <p>{{user.phone.split(' ')[0]}}</p>
      </div>
      <div v-if="user.website" class="user-email user-info-block">
        <h3 class="block-title">Email</h3>
        <a href="#">{{ user.email }}</a>
      </div>
      <div v-if="user.website" class="user-website user-info-block">
        <h3 class="block-title">Website</h3>
        <a href="#">{{ user.website }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-profile-card {
  position: relative;
  padding: 130px 53px;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  border-radius: 8px;
  overflow: hidden;
  .profile-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 222px;
    z-index: 0;
    filter: drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.25));
  }
  .user-avatar {
    position: relative;
    width: 145px;
    height: 145px;
    margin: 20px auto 6px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 1;
    border: 4px solid #ffffff;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .user-name {
    text-align: center;
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    letter-spacing: 0.4px;
    color: #252733;
    margin-bottom: 8px;
  }
  .user-tags {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: 0.4px;
    color: #797A84;
    margin-bottom: 93px;
  }
  .user-info-block {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    .block-title {
      font-weight: 700;
      font-size: 36px;
      line-height: 120%;
      letter-spacing: 0.4px;
      color: #000000;
      margin-bottom: 14px;
    }
    a, p {
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: 0.4px;
    }
    p {
      color: #000000;
      max-width: 220px;
    }
    a {
      color: #3851FF;
      text-decoration: underline;
    }
  }
}
</style>