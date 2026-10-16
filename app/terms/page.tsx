import type { Metadata } from "next";
import LegalPage from "../legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — NativeTalk",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms govern your use of NativeTalk's products and services across the Business App, CRM and VoIP offerings."
    />
  );
}
