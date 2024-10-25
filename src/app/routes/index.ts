import { Router } from "express";
import { AuthRoutes } from "../module/auth/auth.route";
import { SkillRoutes } from "../module/skill/skill.route";
import { ProjectRoutes } from "../module/project/project.route";
import { PostRoutes } from "../module/post/post.route";

const router = Router();

const moduleRoutes = [
    {
        path: "/auth",
        route: AuthRoutes,
    },
    {
        path: "/skills",
        route: SkillRoutes,
    },
    {
        path: "/projects",
        route: ProjectRoutes,
    },
    {
        path: "/posts",
        route: PostRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
