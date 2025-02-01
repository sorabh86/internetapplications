import type { Route } from "./+types/home";
import About from "~/components/about/about";

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
