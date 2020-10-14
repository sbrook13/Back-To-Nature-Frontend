import React from 'react'

export default function TreeCard({tree}) {


    return (
        <div>
            <h3>{tree.name}</h3>
            <p>{tree.fun_fact}</p>
        </div>
        )
    }
    
    // {tree.image ? <img src={tree.image} alt="" />}