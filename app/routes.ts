import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [
//     index("routes/home.tsx"),
//     index("routes/project.tsx", 'project'),
//     index("routes/notfound.tsx"),

// ] satisfies RouteConfig;


export default [
    { path: "/", file: "routes/homePage.tsx" },
    { path: "/analysis", file: "routes/analysisPage.tsx" },
    { path: "/design", file: "routes/projectPage.tsx" },
    { path: "/development", file: "routes/developmentPage.tsx" },
    { path: "*", file: "routes/notfoundPage.tsx" },  
  ] satisfies RouteConfig;