import React from 'react'



function Title({title, subTitle, showContent}) {
  return (
    <div>
        <h1> {title} </h1>
        <br/>
        <p> {subTitle} </p>
        <h2>{showContent}</h2>
    </div>
  )
}

export default Title