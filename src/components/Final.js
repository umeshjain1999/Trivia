import React , {useEffect} from 'react'
import {Link} from 'react-router-dom';




const Final = ({data,clearState}) => {

    //here we have fetched data from localstorage and maintain data in the localstorage to maintain history
    useEffect(() => {
        let newData = JSON.parse(localStorage.getItem('games'));
        if (newData) {
            newData.push(data); 
            localStorage.setItem('games' , JSON.stringify(newData))
        }
        else {
            newData = [data];
            localStorage.setItem('games' , JSON.stringify(newData))
        }

    }, [data])
    return (
        <div>
            <div className="details">
                <h3>Hello {data.name}!</h3>
                <div className="details-1">
                    <p>Q. Who is the best cricketer in the world?</p>
                    <div className="ans"> <span>Answer.</span> <p className="selected-ans left">{data.cricketer}</p></div>
                </div>
                <div className="details-2">
                    <p>Q. What are the colors in the Indian national flag?</p>
                    <div className="ans"><span>Answer.</span> <p className="selected-ans left">{
                        data.colors.map((ans,index)=>{
                        return( <span key = {index}>{ans},</span> )
                        })
                    }</p></div>
                </div>
            </div>
            <div className="buttons">
                <Link to  = '/history' onClick = {()=> clearState()}><button>history</button></Link>
                <Link to = '/' onClick = {()=> clearState()} ><button  className = 'finish-button'>finish</button></Link>
            </div>
        </div>
    )
}

export default Final
