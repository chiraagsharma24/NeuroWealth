import React from "react" ;

export default function MainLayout({children}){
    return (
        <div className="container mx-auto my-32">
            {children}
        </div>
    )
}