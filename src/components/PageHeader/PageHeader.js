import React,{useEffect, useState} from 'react'

export default function PageHeader() {
   const [page, setPage]= useState()
    const headerTitle = (location) => {
        switch (location){
            
            case "/reactPortfolio/portfolio":
                setPage("Portfolio");
                break;
            case "/reactPortfolio/contact":
                setPage("Contact");
                break;
            default:
                setPage("Home");
                break;
        }
    }
    useEffect(() =>{
        console.log(window.location.pathname)
        console.log(headerTitle(window.location.pathname))
        setPage(headerTitle(window.location.pathname))
        console.log({page})
    }, [page])
    return (
        <div>
            <h2>{page}</h2>
        </div>
    )
}

