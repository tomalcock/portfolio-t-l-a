import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';

export const Reveal = ({children, width = 'fit-content'}) => {
    
const ref = useRef(null);
  let isInView = useInView(ref, {once : false});
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      
    } else{
      mainControls.start('hidden')
    }
    
  }, [isInView])
    
    return (
        <div ref={ref}>
            <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y:0}
            }}
            initial={{opacity:0}}
            animate={mainControls}
            transition={{duraction:5, delay:0.2, type:'spring'}}
            >{children}</motion.div>
            </div>
    )
}

