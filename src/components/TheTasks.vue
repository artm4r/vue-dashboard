<script setup>
import { reactive, ref } from "vue";

  //Rendering existing tasks
  const tasks = reactive([
    {
      id: 1,
      title: 'Finish ticket update',
      complete: false,
      priority: 'urgent'
    },
    {
      id: 2,
      title: 'Create new ticket example',
      complete: false,
      priority: 'new'
    },
    {
      id: 3,
      title: 'Update ticket report',
      complete: true,
      priority: ''
    },
  ])
  const capitalizeFirstChar = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //Creating new tasks
  const newTaskTitle = ref('')
  const createNewTask = () => {
    if (newTaskTitle.value.trim() === '') return
    tasks.unshift({
      id: Math.random(),
      title: newTaskTitle.value,
      complete: false,
      priority: '' // No functionality for switching priority for now
    })
  }
</script>

<template>
  <div class="component-wrap">
    <div class="component-header d-flex">
      <div class="component-info">
        <h3 class="title">Tasks</h3>
        <p class="group">Today</p>
      </div>
      <a href="#" class="component-more-action">View all</a>
    </div>
    <div class="tasks-list">
      <div class="task-create d-flex">
        <input v-model="newTaskTitle" type="text" placeholder="Create new task" />
        <button @click="createNewTask" class="add-task d-flex">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="8" fill="#F0F1F7"/>
            <path d="M12 7V17" stroke="#9FA2B4" stroke-width="2" stroke-linecap="round"/>
            <path d="M17 12L7 12" stroke="#9FA2B4" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div
          v-for="task in tasks"
          :key="`task_${task.id}`"
          class="task d-flex">
        <input type="checkbox" :id="`task_${task.id}`" v-model="task.complete">
        <label :for="`task_${task.id}`">
          <span>{{ task.title }}</span>
        </label>
        <span class="task-type" :class="task.priority">
          {{ task.priority ? capitalizeFirstChar(task.priority) : 'Default' }}
        </span>
      </div>
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
  .tasks-list {
    .task-create {
      padding: 17px 32px;
      justify-content: space-between;
      align-items: center;
      input {
        border: none;
        outline: none;
        font-weight: 600;
        font-size: 14px;
        line-height: 145%;
        letter-spacing: 0.2px;
        color: #252733;
        &::placeholder {
          color: #c5c7cd;
        }
      }
      button {
        appearance: none;
        border: none;
        outline: none;
        border-radius: 8px;
        cursor: pointer;
      }
    }
    .task {
      padding: 17px 32px 18px;
      border-top: 1px solid #DFE0EB;
      align-items: center;
      input[type=checkbox] {
        display: none;
        &:checked+label::after {
          opacity: 1;
        }
      }
      label {
        position: relative;
        padding-left: 36px;
        user-select: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        line-height: 145%;
        letter-spacing: 0.2px;
        color: #252733;
        &::before {
          content: '';
          display: inline-block;
          width: 20px;
          height: 20px;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border: 2px solid #C5C7CD;
          border-radius: 50%;
        }
        &::after {
          content: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='10' fill='%233751FF'/%3E%3Cpath d='M5 11L7.92929 13.9293C7.96834 13.9683 8.03166 13.9683 8.07071 13.9293L15 7' stroke='white' stroke-width='1.7' stroke-linecap='round'/%3E%3C/svg%3E%0A");
          display: inline-block;
          width: 20px;
          height: 20px;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity .2s;
        }
      }
      .task-type {
        display: inline-flex;
        align-items: center;
        margin-left: auto;
        padding: 6px 12px;
        border-radius: 8px;
        font-weight: 700;
        font-size: 11px;
        line-height: 100%;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #9FA2B4;
        background-color: #F0F1F7;
        &.new {
          color: #ffffff;
          background-color: #29CC97;
        }
        &.urgent {
          color: #ffffff;
          background-color: #FEC400;
        }
      }
    }
  }
}
</style>