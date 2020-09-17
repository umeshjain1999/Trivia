import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Start = ({addName}) => {
    const [value, setvalue] = useState('');

    //saving input value in the state
    const addNewName = (e) => {
        setvalue(e.target.value)
    }

    // for motion variants is declared
    const parentVariant = {
        hidden : {
            translateY : -100,
            opacity : 0
        },
        visible : {
            translateY : 0,
            opacity : 1,
            transition : { type : 'spring',stiffness:120 , delay : 1 , duration : 0.2 , 
            mass : 0.4,
            damping : 5,
            }
        },
    }

    return (
        <motion.div
        variants = {parentVariant}
        initial = 'hidden'
        animate = 'visible'
        >
                <div className="trivia">
                    <div className="input_name">
                    <div className="name">
                        What is your name ?
                    </div>
                    <input type="text" value = {value} onChange = {addNewName} placeholder = 'Your name here...'/>
                
                    <Link to = '/1'><button onClick = {()=> {addName(value)}} className = 'next'>next</button></Link>    
                   
                    </div>  
                </div>
        </motion.div>
    )
}

export default Start
