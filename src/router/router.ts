import express, { Router } from "express";
import exampleRoutes from "./example";

const router: Router = express.Router();

router.use("/example", exampleRoutes);

export default router;
