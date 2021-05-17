import * as React from "react";
import { RouteType } from "../shared/interfaces/misc";

const Overview = React.lazy(() => import("../pages/Overview"));
const Members = React.lazy(() => import("../pages/Members"));
const Jobs = React.lazy(() => import("../pages/Jobs"));

//configurations
const Services = React.lazy(() => import("../pages/Services"));
const Countries = React.lazy(() => import("../pages/Countries"));
const LegalAreas = React.lazy(() => import("../pages/LegalAreas"));
const Tags = React.lazy(() => import("../pages/Tags"));
const BlogPosts = React.lazy(() => import("../pages/BlogPosts"));
const FAQs = React.lazy(() => import("../pages/FAQs"));
const Newsletter = React.lazy(() => import("../pages/Newsletter"));

const routes: RouteType[] = [
  {
    name: "Overview",
    exact: true,
    component: Overview,
    path: "/",
  },
  {
    name: "Members",
    exact: true,
    component: Members,
    path: "/members",
  },
  {
    name: "Jobs",
    exact: true,
    component: Jobs,
    path: "/jobs",
  },
  {
    name: "Services",
    exact: true,
    component: Services,
    path: "/services",
  },
  {
    name: "Countries",
    exact: true,
    component: Countries,
    path: "/countries",
  },
  {
    name: "Legal Areas",
    exact: true,
    component: LegalAreas,
    path: "/legal-areas",
  },
  {
    name: "Tags",
    exact: true,
    component: Tags,
    path: "/tags",
  },
  {
    name: "Blog Posts",
    exact: true,
    component: BlogPosts,
    path: "/blog-posts",
  },
  {
    name: "FAQs",
    exact: true,
    component: FAQs,
    path: "/faqs",
  },
  {
    name: "Newsletter",
    exact: true,
    component: Newsletter,
    path: "/send-newsletter",
  },
];

export default routes;
