import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { profilePhoto } from "../assets/hero";

function Hero() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="flex h-screen flex-col items-center justify-center gap-16 text-center lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      <p className="text-6xl">
        {t("hero.title")} <b>{t("hero.name")}</b>👋
      </p>

      <img
        src={profilePhoto}
        width={400}
        height={400}
        alt="pfp"
        className="rounded-full"
      />
    </motion.section>
  );
}

export default Hero;
