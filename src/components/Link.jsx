import React from 'react'

export default function Link({ url, name }) {
    return (
        <div style={{ margin: "10px", border: "5px solid #6272a4", borderRadius: "5%" }}>
            <a href={url} target="_blank" rel="noopener noreferrer" >
                <p style={{padding: "10px 20px"}}>{name}</p>
            </a>
        </div>
    )
}
