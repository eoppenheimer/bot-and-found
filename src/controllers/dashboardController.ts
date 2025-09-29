import { RouteFunction } from "../types";
import { pruneJSON } from "../utils";

/** This is the function to execute upon visiting the dashboard. */
export const dashboardController: RouteFunction = (req, res) => {
    res.json({ status: "OK", message: "Server is healthy", session: pruneJSON(req.session, 5) });
};