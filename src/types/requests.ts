import { Request, Response} from "express";

export type RouteFunction = (req: Request, res: Response) => void;