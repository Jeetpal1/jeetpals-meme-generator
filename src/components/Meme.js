import React from "react"

export default function Meme() {
    function handleClick(){
        
    }
    return (
        
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                 onClick={handleClick}>
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}