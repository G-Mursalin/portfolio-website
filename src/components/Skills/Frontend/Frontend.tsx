// Icons
import { skills } from "@/utils/skills";
import { LuBadgeCheck } from "react-icons/lu";

export default function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skills.frontendSkills?.map((val) => (
            <div key={val.id} className="skills__data">
              <LuBadgeCheck />
              <div>
                <h3 className="skills__name">{val.skillName}</h3>
                <span className="skills__level">{val.skillLevel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
