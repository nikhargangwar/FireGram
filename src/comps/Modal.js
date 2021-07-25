import React from 'react';
import {motion} from 'framer-motion'

const Modal = ({selectedImg,setSelectedImg}) => {

    const handleClick = (e)=>{
        if(e.target.classList.contains('backdrop'))
        {
            setSelectedImg(null);
        }
    }
    return (  
        <motion.div className="backdrop" onClick={handleClick}
        inital={{opacity:0}}
        animate={{opacity:1}}
        
        >
            <motion.img src={selectedImg} alt="enloarged pic" 
            initial={{y:"-10vh" ,x:"100px"}}
            animate={{y:0,x:0}}
            />
        </motion.div>
    );
}
 
export default Modal;