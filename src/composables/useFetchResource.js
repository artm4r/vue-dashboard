import { ref }  from 'vue'

const data = ref([])

export const useFetchResource = (url) => {
    const loadingStatus = ref(null)

    loadingStatus.value = true

    const fetchResource = () => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                data.value = json
                loadingStatus.value = false
            })
            .catch(err => {
                console.log(err)
                loadingStatus.value = false
            })
    }

    return { data, loadingStatus, fetchResource }
}