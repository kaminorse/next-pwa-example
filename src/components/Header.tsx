import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import RoutePath from "@/constants/RoutePath";
import Image from "next/image";

export default function Header(): JSX.Element {
  const { t, i18n, ready } = useTranslation("translation");
  
  return (
    <header className="header">
    </header>
  );
}
