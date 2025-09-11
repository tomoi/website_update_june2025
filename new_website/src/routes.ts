import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
} from "@react-router/dev/routes";

export default [
    index("./Home.tsx"),
    route("about", "./About.tsx"),

] satisfies RouteConfig;
