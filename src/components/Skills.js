import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./SkillsBubble.css"; // External CSS for basic styling

const SkillsBubble = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Redux"];
  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((skill, index) => {
      const animateSkill = () => {
        gsap.fromTo(
          skill,
          {
            x: Math.random() * 200 - 100, // Random horizontal start position
            y: 200, // Start from bottom of container
            opacity: 0,
          },
          {
            x: Math.random() * 200 - 100, // Random end position
            y: -50 - Math.random() * 200, // Random vertical end position
            opacity: 1,
            duration: 4 + Math.random() * 4, // Random duration between 2-4 seconds
            delay: Math.random() * 1.5, // Random delay up to 1.5 seconds
            ease: "power2.inOut",
            onComplete: animateSkill, // Loop the animation
          }
        );
      };
      animateSkill(); // Start the animation loop for each skill
    });
  }, []);

  return (
    <div className="w-28 absolute bottom-0">
      {skills.map((skill, index) => (
        <div
          key={index}
          className=""
          ref={(el) => (skillRefs.current[index] = el)}
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillsBubble;
