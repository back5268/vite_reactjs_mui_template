import { useEffect, useState } from "react"

const useGetApi = (api = () => {}, params = {}, initData = null) => {
    const [data, setData] = useState(null)
    async function fetchData() {
        const response = await api({ ...params })
        if (response.status) setData(response.data)
    }
    useEffect(() => {
        fetchData()
    }, [params])
    return data || initData
}

export default useGetApi;