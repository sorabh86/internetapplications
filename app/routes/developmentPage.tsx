
import Work from "~/components/work/work";
import type { Route } from "../+types/root";
import Analysis from "~/components/analysis/analysis";
import Development from "~/components/development/development";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Internet Application - Portfolio" },
    { name: "description", content: "Web Developer - Analysis" },
  ];
}

export default function DevelopmentPage() {
  return <>
    <Development />
    </>;
}
