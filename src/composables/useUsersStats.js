import { reactive } from "vue";

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

export const useUsersStats = () => {
    return { stats }
}