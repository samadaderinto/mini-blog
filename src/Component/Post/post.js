import React from 'react'

const Post = ({props}) => {
  return (
    <div class="post">
                <h1>{props.postTitle}</h1>
                {props.blogImage
                    ? <img
                            src={props.blogImage}
                            style={{
                            margin: "40px 0 0 ",
                            height: "350px",
                            width: "450px"
                        }} alt=""/>
                    : ""}
                <p>{props.content}</p>
            </div>
  )
}

export default Post