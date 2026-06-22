import type { Metadata } from "next";
import LegalPage from "../legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — NativeTalk",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what data NativeTalk collects, how it is used to deliver our communication services, and the choices you have."
    />
  );
}
