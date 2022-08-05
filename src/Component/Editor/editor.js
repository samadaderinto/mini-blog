import React from 'react'
import Input from '../Input/input'

const Editor = ({props}) => {
  return (
    <div className='input'>
                <h3>title</h3>
                <Input content={props.title}/>
                <h3>content</h3>
                <Input content={props.content}/>
                {/* <button onClick={save}>Save</button> */}
    </div>
  )
}

export default Editor