import React from 'react'
import {Link} from 'react-router-dom';


const Colors = ({addColor, data}) => {
//array to maintain different options
const colors = ['White','Yellow','Orange','Green'];
    return (
        <div className = 'colors'>
           <div className="question-2">
                    <div className="input-question-2">
                    <div className="question-two">
                         What are the colors in the Indian national flag? Select more than one:
                    </div>
                    <div className="answer-2">
                        {
                            colors.map((color,index)=>{
                                let spanClass = data.colors.includes(color) ? 'active' : 'option-2';
                            return( <div className= {spanClass} key = {index} onClick = {()=> addColor(color)}><li>{color}</li></div> )
                            })
                        }
                    </div>
                    <Link to = '/summary'><button className = 'next'>next</button></Link>
                    </div>  
                </div>
        </div>
    )
}

export default Colors
