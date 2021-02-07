import React,{useEffect, useState} from 'react'

export default function PageHeader() {
   const [page, setPage]= useState("");

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
        // if(location === "/reactPortfolio/portfolio"){
        //     setPage("Portfolio")
        // }else if(location === "/reactPortfolio/contact"){
        //     setPage("Contact")
        // }else{
        //     setPage("Home")
        // }
    }
    useEffect(() =>{
        console.log(window.location.pathname)
        console.log(headerTitle(window.location.pathname))
        headerTitle(window.location.pathname)
        console.log({page})
    }, [page])
    return (
        <div>
            <h2>{page}</h2>
        </div>
    )
}

