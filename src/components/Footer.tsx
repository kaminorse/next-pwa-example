import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer(): JSX.Element {
  const { t, i18n, ready } = useTranslation("translation");
  return (
    <footer className="footer">
    </footer>
  );
}
