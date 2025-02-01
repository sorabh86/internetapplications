
import Work from "~/components/work/work";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Internet Application - Portfolio" },
    { name: "description", content: "Web Developer - Work" },
  ];
}

export default function Project() {
  return <>
    <Work />
    </>;
}
