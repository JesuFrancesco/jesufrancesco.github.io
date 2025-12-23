import { useTranslation } from "react-i18next";

function Whoami() {
  const { t } = useTranslation();
  return (
    <section>
      <h1 className="font-mono">{t("whoami.title")}</h1>
      <p>
        {t("whoami.intro1")}{" "}
        <a
          href="https://www.ulima.edu.pe/pregrado/ingenieria-de-sistemas"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {t("whoami.university")}
        </a>
        . {t("whoami.intro2")}
      </p>
    </section>
  );
}

export default Whoami;
