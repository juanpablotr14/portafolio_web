import Section from "@/core/components/Section";
import HeroPresentation from "./components/HeroPresentation";
import HeroContact from "./components/HeroContact";
import HeroExpand from "./components/HeroExpand";
import { SECTIONS } from "@/core/data/global";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Section className={styles.hero_container} id={SECTIONS.HOME}>
      <HeroPresentation />
      <HeroContact />
      <HeroExpand />
    </Section>
  );
}
