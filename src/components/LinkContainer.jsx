import React from 'react';
import Link from "./Link";
import links from "../links";



export default function LinkContainer() {
    return (
        <div style={{ display: "flex", maxWidth: "80%", justifyContent: "center", flexWrap: "wrap" }}>
            {links.map(item => {
                return <Link key={item.key} url={item.url} name={item.name} />
            })}
        </div>
    )
}
