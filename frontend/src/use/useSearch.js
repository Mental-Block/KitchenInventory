import { useEffect, useState } from "react"

const useSearch = (data, searchValue, filter, reload) => {
    const [searchResult, setResult] = useState({ loading: true, data: null })

    useEffect(() => {
        if (!data || data === null) return
        setResult((searchResult) => ({ loading: true, data: searchResult }));

        const filtered = filter(data, searchValue);

        setResult({ loading: false, data: filtered })

    }, [searchValue, reload])


    return searchResult
}

export default useSearch;