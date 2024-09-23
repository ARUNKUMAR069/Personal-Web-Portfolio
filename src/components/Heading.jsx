import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Heading = ({ title = 'Title' }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 100], [-50, 0]); // Slide in from above
    const opacity = useTransform(scrollY, [0, 100], [0, 1]); // Fade in effect
    const scale = useTransform(scrollY, [0, 100], [0.9, 1]); // Scale effect for a gentle zoom

    return (
        <div className="bg-gradient-to-r from-teal-400 via-purple-500 to-indigo-600 p-5 flex justify-center items-center my-4">
            <motion.h1
                className="text-white text-4xl uppercase tracking-widest"
                style={{ y, opacity, scale }}
                initial={{ y: -100, opacity: 0 }} // Initial state for more dramatic entry
                animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }} // Animate to visible
                whileHover={{ scale: 1.05 }} // Slight zoom on hover
            >
                {title}
            </motion.h1>
        </div>
    );
};

export default Heading;
