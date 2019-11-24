const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
    "/github/callback",
    passport.authenticate("github", { failureRedirect: "/api" }),
    (req, res) => {
        console.log("Login Successful!");
        res.redirect("/");
    }
)

router.get(
    "/github/login",
    passport.authenticate("github", { scope: ["profile", "repo"] })
);

router.get("/github/logout", (req, res) => {
    req.logout();
    req.user = undefined;
    res.redirect("/api");
});

module.exports = router;
