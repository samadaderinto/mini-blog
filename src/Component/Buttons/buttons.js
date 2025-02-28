import React, { useState } from 'react'

const Buttons = () => {
    const [display,setDisplay] = useState("")
    const edit = () => {
        display === "none" ? setDisplay('flex') : setDisplay('none')
        // inputCont.current.style.display = display
     }

    return (
        <div className='buttons'>
            <button onClick={edit}><img
                src="https://th.bing.com/th/id/OIP.kqt2LmpQmes4Ji4p4Z8R5gAAAA?pid=ImgDet&w=180&h=180&rs=1"
                alt=''/>Edit</button>
            <button><img
                src="https://static.vecteezy.com/system/resources/previews/000/422/370/original/like-icon-vector-illustration.jpg"
                alt=''/>Like</button>
            <button><img src="https://img.icons8.com/flat-round/344/share--v1.png" alt=''/>Share</button>
        </div>
    )
}

export default Buttons