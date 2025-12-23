import { useTranslation } from "react-i18next";
import projectList from "../const/my-projects";

import { cn } from "../lib/utils";
import ProjectCard from "../ui/project-card";

function Projects() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t("projects.title")}</h1>
      <p>{t("projects.description")}</p>

      <article className="mt-2 flex flex-col justify-center gap-y-6">
        {projectList.map(
          ({ description, link, thumbnail, title, tags }, index) => (
            <ProjectCard
              className={cn(
                index % 2 === 0
                  ? "bg-linear-to-r md:self-start"
                  : "bg-linear-to-l md:self-end",
              )}
              description={description}
              link={link}
              thumbnail={thumbnail}
              title={title}
              key={index}
              tags={tags}
            />
          ),
        )}
      </article>
    </section>
  );
}

export default Projects;
