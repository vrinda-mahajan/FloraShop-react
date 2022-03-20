import { useEffect } from "react"

const useDocumentTitle = (title) => {
    useEffect(()=>{
        document.title=`FloraShop | ${title}`
    },[title])
}

export { useDocumentTitle };