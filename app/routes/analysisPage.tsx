
import Work from "~/components/work/work";
import type { Route } from "../+types/root";
import Analysis from "~/components/analysis/analysis";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Internet Application - Portfolio" },
    { name: "description", content: "Web Developer - Analysis" },
  ];
}

export default function Project() {
  return <>
    <Analysis />
    </>;
}
