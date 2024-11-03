
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion'


const RevealSide = ({ children, width = 'fit-content' }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControl = useAnimation();

    useEffect(() => {
        console.log(isInView)
        if (isInView) {
            mainControl.start("visible")
        }

    }, [isInView, mainControl])

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div >
    );
}


export default RevealSide;
