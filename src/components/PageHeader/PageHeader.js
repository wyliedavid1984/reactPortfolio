import React from 'react'

export default function PageHeader() {
   
    const headerTitle = (location) => {

        if(location === "/portfolio"){
            return "Portfolio";
        }else if(location === "/contact"){
            return "Contact";
        }else {
            return;
        }
    }
    return (
        <div>
            <h2>{headerTitle(window.location.pathname)}</h2>
        </div>
    )
}

