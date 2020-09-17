import React  from 'react'
import {Link} from 'react-router-dom';


const Cricketer = ({addCricketer,data}) => {

//array to maintain different options
const cricketers = ['Sachin Tendulkar','Virat Kohli', 'Adam Gilchirst','Jacques Kallis'];

    return (
        <div className = 'cricketer'>
             <div className="question-1">
                    <div className="input-question-1">
                    <div className="question-one">

                            Who is the best cricketer in the world?

                    </div>
                    <div className="answer-1">
                        {
                            cricketers.map((cricketer,index)=>{
                                let spanClass = data.cricketer === cricketer ? 'active' : 'option-1';
                                    return( <div className = {spanClass} key = {index} onClick = {()=>addCricketer(cricketer)}><li > <span>{cricketer} </span></li></div> )
                            })
                        }
                    </div>
                    {data.cricketer && <Link to = '/2'><button className = 'next'>next</button></Link>}
                    </div>  
                </div>
        </div>
    )
}

export default Cricketer
