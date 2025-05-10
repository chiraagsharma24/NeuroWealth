import React from "react" ;

export default function MainLayout({children}){
    return (
        <div className="container mx-auto my-10">
            {children}
        </div>
    )
}