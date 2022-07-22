import { ref, onMounted }  from 'vue'

export const useFetchResource = (url) => {
    const data = ref([])
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

    onMounted(() => {
        fetchResource()
    })

    return { data, loadingStatus }
}