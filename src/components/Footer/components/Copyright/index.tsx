"use client";
import { useTranslations } from "next-intl";
import Text from "@/core/components/Text";

import type { JSX } from "react";

export default function Copyright(): JSX.Element {
  const translate = useTranslations("Footer");
  return (
    <Text size="caption">
      &copy; {new Date().getFullYear()} Juan Pablo Tascón Roldan. {translate("copyright")}
    </Text>
  );
}
