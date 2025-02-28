import React,{ useState } from 'react'
import Post from '../Post/post'
import Editor from '../Editor/editor'
import "./card.css"
import Buttons from '../Buttons/buttons'

const Card = ({props}) => {
    const [edit, setEdit] = useState("")

    return (
        <div className='card'>
            <div className='card-info'>
                <img src={props.image} alt='blog-writer-pic'/>
                <span>
                    <div>{props.name}</div>
                    <a href="h">{props.email}</a>
                </span>
            </div>
            <Post props={props}/>
            <Editor props={props}/>
            <Buttons/>
        </div>
    )
}

export default Card