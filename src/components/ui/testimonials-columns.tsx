"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

// ADISHTU Energy Bar Testimonials Data
export const testimonials = [
  {
    text: "These energy bars are absolutely amazing! Perfect for my morning workouts. The strawberry flavor is so natural and delicious.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Priya Sharma",
    role: "Fitness Enthusiast",
  },
  {
    text: "As a marathon runner, I need reliable energy sources. ADISHTU bars give me sustained energy without any sugar crashes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Rajesh Kumar",
    role: "Marathon Runner",
  },
  {
    text: "Finally, a healthy snack I can trust! No chemicals, no preservatives - just pure, natural ingredients. My kids love them too!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Anita Patel",
    role: "Working Mom",
  },
  {
    text: "The coffee energy bar is my go-to pre-workout snack. It gives me the perfect boost without any jitters or crashes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Arjun Singh",
    role: "Gym Trainer",
  },
  {
    text: "I've tried many energy bars, but ADISHTU stands out. The cranberry flavor is incredible and the ingredients are so clean.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Sneha Reddy",
    role: "Nutritionist",
  },
  {
    text: "Perfect for my busy lifestyle! These bars keep me energized throughout the day without any artificial additives.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Vikram Joshi",
    role: "Software Engineer",
  },
  {
    text: "The fig and apricot combination is divine! It's like having a healthy dessert that actually fuels my body properly.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Kavya Nair",
    role: "Yoga Instructor",
  },
  {
    text: "As someone who's health-conscious, I love that ADISHTU uses only natural ingredients. The peanut bar is my favorite!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Rohit Agarwal",
    role: "Health Coach",
  },
  {
    text: "These bars have become an essential part of my hiking trips. Lightweight, nutritious, and absolutely delicious!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    name: "Deepika Mehta",
    role: "Adventure Enthusiast",
  },
];


