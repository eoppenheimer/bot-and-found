import express from "express";
import session from "express-session";
import path from "path";
import { adminRouter, dashboardRouter } from "./routes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}));


// Serve static files (optional)
app.use(express.static(path.join(__dirname, "./public/body.html")));

// Basic route
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "..", "public", "body.html")));

// Dashboard route.
app.use("/dashboard", dashboardRouter);

// Admin route.
app.use("/admin", adminRouter);


export default app;