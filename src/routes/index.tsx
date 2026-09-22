import { createFileRoute } from "@tanstack/react-router";
import { EditableComponent } from "@/components/EditableComponent";
import {
  navbarCode,
  heroCode,
  teamCode,
  achievementsCode,
  carsCode,
  footerCode,
} from "@/f1/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oracle Red Bull Racing — Team, Drivers & Achievements" },
      {
        name: "description",
        content:
          "Oracle Red Bull Racing: Featuring 4x World Champion Max Verstappen and Sergio Perez, record achievements, and championship machinery.",
      },
      {
        property: "og:title",
        content: "Oracle Red Bull Racing — Team, Drivers & Achievements",
      },
      {
        property: "og:description",
        content:
          "Explore the Oracle Red Bull Racing team, drivers Max Verstappen & Sergio Perez, and their championship achievements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="page">
      <EditableComponent name="Navbar" code={navbarCode} />
      <EditableComponent name="Hero" code={heroCode} />
      <EditableComponent name="Drivers" code={teamCode} />
      <EditableComponent name="Achievements" code={achievementsCode} />
      <EditableComponent name="Machinery" code={carsCode} />
      <EditableComponent name="Footer" code={footerCode} />
    </div>
  );
}
