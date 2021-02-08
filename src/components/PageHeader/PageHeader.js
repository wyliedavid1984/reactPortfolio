import React,{useEffect, useState} from 'react'
import {useLocation, Switch} from "react-router-dom"
export default function PageHeader() {

  let location = useLocation();
   const headerTitle = (location) => { 
    console.log(location)
        switch (location){
            
            case "/reactPortfolio/portfolio":
                return "Portfolio";
            case "/reactPortfolio/contact":
                return "Contact";
            default:
                return "Home";
        }
        // if(location === "/reactPortfolio/portfolio"){
        //     setPage("Portfolio")
        // }else if(location === "/reactPortfolio/contact"){
        //     setPage("Contact")
        // }else{
        //     setPage("Home")
        // }
    } 

    return (
        <div>
            <h2>{headerTitle(location.pathname)}</h2>
        </div>
    )
}

