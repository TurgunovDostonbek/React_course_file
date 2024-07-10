import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)  //  Loading qilish uchun yozildi....
    const [error, setError] = useState(null)     /// Error lar bilan ishlash .....

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true)
            try{
                const req = await fetch(url)
                if(!req.ok){
                    throw new Error(req.statusText)
                }
                const data = await req.json()
                setData(data)
                setIsPending(false)
            }catch (err) {
                console.log(err.message);
                setError(err.message)
                setIsPending(false)
            }
            
        }
        fetchData()
    } ,[url])

    return{ data, isPending, error}
}

export {useFetch}