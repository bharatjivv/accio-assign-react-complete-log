import React, { useState, useCallback } from "react";
import SkillList from "./SkillList";

const UseCallbackComp = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const addSkill = useCallback(() => {
    const trimmedSkill = skill.trim();
    if (trimmedSkill && !skills.includes(trimmedSkill)) {
      setSkills((prevSkills) => [...prevSkills, trimmedSkill]);
    }
    setSkill("");
  }, [skill, skills]);

  const deleteSkill = useCallback((skillToDelete) => {
    setSkills((prevSkills) => prevSkills.filter((s) => s !== skillToDelete));
  }, []);

  return (
    <div>
      <h1 id="heading">Skill Manager</h1>
      <input
        id="skill-input"
        type="text"
        value={skill}
        placeholder="Enter a skill"
        onChange={(e) => setSkill(e.target.value)}
      />
      <button id="skill-add-btn" onClick={addSkill}>Add Skill</button>
      <SkillList skills={skills} onDelete={deleteSkill} />
    </div>
  );
};

export default UseCallbackComp;