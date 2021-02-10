import React from 'react'
import {useLocation} from "react-router-dom"
export default function PageHeader() {

  let location = useLocation();
   const headerTitle = (location) => { 
        switch (location){
            
            case "/reactPortfolio/portfolio":
                return "Portfolio";
            case "/reactPortfolio/contact":
                return "Contact";
            default:
                return "Home";
        }
    } 
    return (
        <section>
            <h2>{headerTitle(location.pathname)}</h2>
        </section>
    )
}

