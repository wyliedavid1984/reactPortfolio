// import {createContext, useState} from "react"

// export const TitleContext = createContext()

// const TitleContextProvider = (props) =>{
//     const [page, setPage] = useState();

//     const headerTitle = (location) => {
//         switch (location) {

//             case "/reactPortfolio/portfolio":
//                 setPage("Portfolio");
//                 break;
//             case "/reactPortfolio/contact":
//                 setPage("Contact");
//                 break;
//             default:
//                 setPage("Home");
//                 break;
//         }
//         // if(location === "/reactPortfolio/portfolio"){
//         //     setPage("Portfolio")
//         // }else if(location === "/reactPortfolio/contact"){
//         //     setPage("Contact")
//         // }else{
//         //     setPage("Home")
//         // }
//     }
    
//     return (
//         <TitleContext.Provider value={{page, headerTitle}}>
//             { props.children}
//         </TitleContext.Provider>
//     )
// }

// export default TitleContextProvider