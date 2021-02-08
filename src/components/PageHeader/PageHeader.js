import React,{useEffect, useState} from 'react'
import {useLocation, Switch} from "react-router-dom"
export default function PageHeader() {

   const [page, setPage]= useState();
  let location = useLocation();
   const headerTitle = (location) => { 
    console.log(location)
        // switch (location){
            
        //     case "/reactPortfolio/portfolio":
        //         setPage("Portfolio");
        //         break;
        //     case "/reactPortfolio/contact":
        //         setPage("Contact");
        //         break;
        //     default:
        //         setPage("Home");
        //         break;
        // }
        if(location === "/reactPortfolio/portfolio"){
            setPage("Portfolio")
        }else if(location === "/reactPortfolio/contact"){
            setPage("Contact")
        }else{
            setPage("Home")
        }
    } 
    headerTitle(location.pathname)
    useEffect(() =>{ 
        headerTitle(location.pathname)
    }, [page]);

    return (
        <div>
            <h2>{page}</h2>
        </div>
    )
}

