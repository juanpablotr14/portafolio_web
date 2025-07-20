import { type JSX } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/core/components/Section";
import AnimatedTitle from "@/core/components/Animated/AnimatedTitle";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import Tooltip from "@/core/components/Tooltip";
import { SECTIONS } from "@/core/data/global";
import { technologiesList } from "@/core/data/technologies";
import styles from "./Technologies.module.css";

export default function Technologies(): JSX.Element {
  const translate = useTranslations("Technologies");
  return (
    <Section id={SECTIONS.TECHNOLOGIES}>
      <AnimatedTitle id="technologies_title">
        {translate("title")}
      </AnimatedTitle>

      <AnimatedInView
        animationType="slideInUp"
        className={styles.technologies_container}
        id={SECTIONS.TECHNOLOGIES}
        useId={false}
      >
        {technologiesList.map(tech => (
          <Tooltip tooltip={tech.name} key={tech.name}>
            <Image
              alt={`${tech.name} logo`}
              height={45}
              src={tech.logo_path}
              title={tech.name}
              unoptimized
              loading="lazy"
              width={45}
            />
          </Tooltip>
        ))}
      </AnimatedInView>
    </Section>
  );
}
