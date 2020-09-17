import React from 'react';
import {motion} from 'framer-motion';

const Logo = () => {
  const logoVariant = {
    hidden : {
        translateY : -100 , 
    },
    visible : {
        translateY : 0 ,
        transition : { type : 'spring',stiffness:120 , delay : 0.3 , duration : 0.2 , 
        }
    },
}
    return (
        <motion.div className = 'logo'
        variants = {logoVariant}
        initial = 'hidden'
        animate = 'visible'
        >
          <h1>Trivia</h1>
        </motion.div>
    )
}

export default Logo
