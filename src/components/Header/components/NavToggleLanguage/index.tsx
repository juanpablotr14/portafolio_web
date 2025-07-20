"use client";
import Dropdown from "@/core/components/Dropdown";
import Text from "@/core/components/Text";
import { useTranslations } from "next-intl";
import { toggleLanguage } from "@/app/actions";
import { LOCALES } from "@/i18n/settings";
import type { NavToggleLanguageProps } from "./NavToggleLanguage.types";
import {
  PortugalFlag,
  SpainFlag,
  USAFlag,
} from "@/core/components/Icons/FlagsIcons";
import styles from "./NavToggleLanguage.module.css";

import type { JSX } from "react";

const languages = [
  { label: "english", locale: LOCALES.ENGLISH, flag: <USAFlag /> },
  { label: "spanish", locale: LOCALES.SPANISH, flag: <SpainFlag /> },
] as const;

export default function NavToggleLanguage({
  locale,
  title,
}: NavToggleLanguageProps): JSX.Element {
  const translate = useTranslations("Header");
  const formAction = async (data: FormData) => {
    await toggleLanguage(data);
  };

  return (
    <Dropdown title={translate(title as "language")}>
      {languages.map(language => (
        <form action={formAction} key={language.locale}>
          <input type="hidden" name="locale" value={language.locale} />
          <button type="submit" className={styles.language_item}>
            <div className={styles.flag_container}>{language.flag}</div>
            <Text
              size="caption"
              variant={locale === language.locale ? "gradient" : "normal"}
            >
              {translate(language.label)}
            </Text>
          </button>
        </form>
      ))}
    </Dropdown>
  );
}
