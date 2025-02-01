import About from "~/components/about/about";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Internet Application - Portfolio" },
    { name: "description", content: "Web Developer" },
  ];
}

export default function HomePage() {
  return <>
    <About />
  </>;
}
