import path from 'path';
import express from 'express';
import passport from 'passport';
import passportGithub from 'passport-github';
import session from 'express-session';

const PORT = process.env.HTTP_PORT || 8081;
const deploy_url = "http://mymovieapp.us-east-1.elasticbeanstalk.com";
// const deploy_url = "http://localhost:" + PORT;
const app = express();
const GithubStrategy = passportGithub.Strategy;

app.use(session({secret: "movieapp", resave: false, saveUninitialized: false, cookie: {maxAge: 100*60}}));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
    console.log('server is listening on port:' + PORT);
});

passport.use(new GithubStrategy({
    clientID: "d4e715f39638887fa3d0",
    clientSecret: "bfd241ae30abcb74789136a5a5621afdc84739e0",
    callbackURL: deploy_url + "/auth/github/callback"
}, (accessToken, refreshToken, profile, done) => {
    //todo add stuff here
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    console.log("in serializeUser");

    let userObject = {
        id: user.username + "@github",
        username: user.username,
        provider: user.provider,
        profileImageUrl: user.photos[0].value
    };
    done(null, userObject);
});

passport.deserializeUser((user, done) => {
    console.log("in deserializeUser");
    //todo something important to look up in here. idk
    done(null, user);
});

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/'}),
    (req, res) => {
        console.log("/auth/github/callback reached.");
        res.redirect('/');
    }
);

app.get('/auth/logout', (req, res) => {
    console.log("/auth/logout reached. logging out");
    req.logout();
    res.redirect('/');
});

app.get('/auth/test', (req, res) => {
    console.log("/auth/test reached");
    const isAuth = req.isAuthenticated();
    if (isAuth) {
        console.log("user is authenticated at token :"+ JSON.stringify(req.user));
    }
    else {
        console.log("not authenticated");
    }
    res.json({isAuthenticated: isAuth, user: req.user});
});