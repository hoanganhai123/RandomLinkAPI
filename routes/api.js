const router = require("express").Router();
const { getLink1 } = require("../controllers/getLink1");
const { getLink2 } = require("../controllers/getLink2");
const { home } = require("../controllers/home");

router.get("/getLink1", getLink1);
router.get("/getLink2", getLink2);
router.get("/", home);

module.exports = router;