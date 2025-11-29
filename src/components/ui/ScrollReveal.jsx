"use client";
import { motion } from "motion/react";

export const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 20,                // Slight slide up
        scale: 0.9,           // Starts 90% size for that "pop" effect
        filter: "blur(20px)"  // Heavy blur creates the "generation" feel
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        filter: "blur(0px)"   // Clears instantly as it pops in
      }}
      viewport={{ 
        once: true,
        margin: "-50px",      // Triggers just before element hits view
        amount: 0.2           // Waits until a bit of the element is visible
      }}
      transition={{ 
        duration: 0.8,
        // This custom bezier is the secret to the "Pop" feel
        // It shoots out fast and lands gently
        ease: [0.16, 1, 0.3, 1], 
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};