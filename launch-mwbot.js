// Import everything first
const MediaWiki = require("mediawiki");
var bot = new MediaWiki.Bot();

// Bot configuration
bot.settings.endpoint = "https://communitycentralbympteam.miraheze.org/w/api.php"; // You can also use other API endpoints, just make sure these are running in MW.
bot.settings.rate = 60e3 / 10;
bot.settings.userAgent = "Community Central Assistant Bot/0.0.1-alpha (+http://github.com/MadeByThePinsHub/mwbot-official)";
bot.settings.byeline = "([])";

// Main code
