const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

module.exports = function(application) {
  application.post("/register", upload.single("productImage"), function(
    req,
    res
  ) {
    req.body.img = req.file.path;
    console.log(req.body);
    console.log(req.file);
    application.app.controllers.login.register(application, req, res);
  });

  application.get("/login/email/:email/senha/:senha", function(req, res) {
    application.app.controllers.login.login(application, req, res);
  });

  application.get("/verify", function(req, res) {
    application.app.controllers.login.verifyToken(application, req, res);
  });
};
