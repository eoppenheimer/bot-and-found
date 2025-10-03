/**
 * This file extends the "express-session" module.
 * Stores the user information necessary here.
 */

import "express-session";

declare module "express-session" {
    interface SessionData {
        /** Ezra: This is a custom User ID for the browser session. */
        userId?: string;
        /** Ezra: This is a custom Username for the browser session. */
        username?: string;
    }
}