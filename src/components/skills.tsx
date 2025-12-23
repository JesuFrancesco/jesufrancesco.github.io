import { useTranslation } from "react-i18next";
import skillList from "../const/my-skills";
import SkillCard from "../ui/skill-card";

function Skills() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t("skills.title")}</h1>
      <p>{t("skills.description")}</p>
      <br />

      {Object.entries(skillList).map(([category, skills]) => (
        <article key={category}>
          <h2 className="text-xl font-semibold">{category}</h2>
          <div className="flex w-full flex-wrap justify-center gap-x-2 md:justify-normal">
            {skills.map(({ skill, frameworks, icon }) => (
              <SkillCard
                key={skill}
                icon={icon}
                title={skill}
                subtitle={frameworks.join(", ")}
                className="border-2"
              />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default Skills;
