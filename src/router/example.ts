import { Request, Response, Router } from "express";
import ExampleResponse from "../types/example";

const router: Router = Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const response: ExampleResponse = {
      message: "Hello, world!",
    };
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching example response:", error);
    res.status(500).json({ message: "Failed to fetch example response" });
  }
});

export default router;
