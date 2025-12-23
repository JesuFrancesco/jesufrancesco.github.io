import { useTranslation } from "react-i18next";
import contactList from "../const/my-contact";
function Contact() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t("contact.title")}</h1>
      <p>{t("contact.description")}</p>
      <article className="flex flex-col gap-x-8 lg:flex-row">
        {contactList.map(({ type, value, href, icon }) => (
          <article key={type} className="mt-4 flex items-center gap-4">
            {icon}
            <div>
              <h2 className="font-bold">{type}</h2>
              <a href={href}>{value}</a>
            </div>
          </article>
        ))}
      </article>
    </section>
  );
}

export default Contact;
