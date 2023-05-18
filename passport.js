const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "588132567772-uu468s7lulcst176sd3qb6ijr1urm283.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "Iv1.e4d6b402c6c4e2d1";
GITHUB_CLIENT_SECRET = "6c4bdb6183cf17bfec4e9fc466827a1b6026a19c";

FACEBOOK_APP_ID = "759184695676645";
FACEBOOK_APP_SECRET = "02755b47c6fb3b2bccf1588a29a0dd1b";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
