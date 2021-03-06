// Passport Setup

//middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "please login first!");
    res.redirect("/login");
}

module.exports = isLoggedIn;
