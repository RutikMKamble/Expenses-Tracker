const express = require('express');

const router = express.Router();


router.post('/',require("./../controllers/userControllers").createUser);

router.get('/',require("./../controllers/userControllers").getUsers);

router.delete("/:userID", require("./../controllers/userControllers").deleteUser);



router.get("/:userID", require("./../controllers/userControllers").getUser);

router.put("/:userID", require("./../controllers/userControllers").updateUser);


module.exports = router;