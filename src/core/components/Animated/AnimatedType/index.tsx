"use client";
import React, { type JSX } from "react";
import { ReactTyped, type ReactTypedProps } from "react-typed";
import styles from "./AnimatedType.module.css";

export default function AnimatedType({
  strings,
  className = "",
  typeSpeed = 40,
  ...props
}: ReactTypedProps): JSX.Element {
  return (
    <ReactTyped
      {...props}
      className={`${styles.cursor} ${className}`}
      showCursor={false}
      strings={strings}
      style={{ whiteSpace: "normal" }}
      typeSpeed={typeSpeed}
    />
  );
}
