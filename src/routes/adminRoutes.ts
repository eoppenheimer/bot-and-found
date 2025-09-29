import express from "express";
import {adminController} from "../controllers";

const router = express.Router();


// Login page
router.get("/login", (req, res) => {
    if (req.session.userId) {
        return res.redirect(req.baseUrl);
    }
  
    res.send(`
<form method="POST" action="${req.baseUrl}/login">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Login</button>
</form>
`);
});

// Handle login
router.post("/login", (req, res) => {
    const { username, password } = req.body;
  
    // In a real app, validate against database
    if (username === "admin" && password === "password") {
        req.session.userId = "123";
        req.session.username = username;
        res.redirect(req.baseUrl);
    }
    else {
        res.send(`Invalid credentials <a href="${req.baseUrl}/login">Try again</a>`);
    }
});

// Logout
router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Could not log out");
        }
        res.redirect(`${req.baseUrl}/login`);
    });
});

//router.get("/", adminController);

export default router;