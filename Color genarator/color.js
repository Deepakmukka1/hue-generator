import React, { useState } from 'react'

function Color() {
    const [bgcolor,setBgColor]=useState('');
  
   
    return (
        <div className="container">
            <form>
            <div style={{marginTop:'50px',flexWrap:'wrap'}}>
                <h1><strong>Hue Generator</strong></h1>
            <input type="text" 
            placeholder="Enter HEX code (#2ecc71) "
            onChange={(e)=>{
                setBgColor(e.target.value)
            }}/>
           
            </div>
            <div style={{
                display:'inline-flex',
                flexWrap:'wrap',
                marginTop:'40px',
                marginLeft:'50px'
            }}>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    borderRadius:'8px'
                }}>
                </article>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    filter:'hue-rotate(80deg)',          
                    borderRadius:'8px'
                }}>
                </article>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    filter:'hue-rotate(160deg)',  
                    borderRadius:'8px'
                }}>
                </article>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    filter:'hue-rotate(240deg)',  
                    borderRadius:'8px'
                }}>
                </article>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    filter:'hue-rotate(320deg)',  
                    borderRadius:'8px'
                }}>
                </article>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    filter:'hue-rotate(400deg)',  
                    borderRadius:'8px'
                }}>
                </article>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    filter:'hue-rotate(480deg)',
                    borderRadius:'8px'
                }}>
                </article>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    filter:'hue-rotate(50deg)',
                    borderRadius:'8px'
                }}>
                </article>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    filter:'hue-rotate(290deg)',
                    borderRadius:'8px'
                }}>
                </article>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    filter:'hue-rotate(225deg)',
                    borderRadius:'8px'
                }}>
                </article>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    filter:'hue-rotate(140deg)',
                    borderRadius:'8px'
                }}>
                </article>
                <article style={{
                    width:'200px',
                    height:'200px',
                    backgroundColor:bgcolor,
                    filter:'hue-rotate(70deg)',
                    borderRadius:'8px'
                }}>
                </article>
            </div>
            </form>
        </div>
    )
}

export default Color
