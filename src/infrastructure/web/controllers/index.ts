import { Request, Response } from "express";
import { getExcuse } from "../../../app/usecases";

// Generate excuse
export const generateExcuse = async (_req: Request, res: Response) => {
  try {
    const excuse = await getExcuse();

    if (!excuse) return res.status(400).json("Empty excuse generated");

    res.json({ excuse });
  } catch (error) {
    res.status(500).json({ error: `Failed to generate excuse, ${error}` });
  }
};
