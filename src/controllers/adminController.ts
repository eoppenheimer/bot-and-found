import { RouteFunction } from "../types";

/** This is the function to execute upon visiting the dashboard. */
export const adminController: RouteFunction = (req, res) => {
    res.json({ status: "OK", message: "Server is healthy"});
};