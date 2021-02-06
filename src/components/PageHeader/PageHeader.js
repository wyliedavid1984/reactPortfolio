import React from 'react'
import "./style.css"

export default function PageHeader() {
   
    function headerTitle (location) {
        let title;
        if(location === "/portfolio"){
            title = "Portfolio";
        }else if(location === "/contact"){
           title = "Contact";
        } else{
            title = "Home";
        }
        return title
    }
    return (
            <>
                <h2 className="header">{headerTitle(window.location.pathname)}</h2>
            </>
    )
}

