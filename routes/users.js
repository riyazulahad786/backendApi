const router = require("express").Router();
//  User Registration 
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser
} = require("../utils/Auth");

// new ticket Users Registeration 
router.post("/register-newUser", async (req, res) => {
  await userRegister(req.body, "user", res);
});

// Admin Registration Route
router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

// employee Registration Route
router.post("/register-employee", async (req, res) => {
  await userRegister(req.body, "employee", res);
});

// Users Login Route
router.post("/login-user", async (req, res) => {
  await userLogin(req.body, "user", res);
});




router.get("/ticket", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

// Users Protected Route
router.get(
  "/user-protectd",
  userAuth,
  checkRole(["user"]),
  async (req, res) => {
    return res.json("Hello User");
  }
);

// Admin Protected Route
router.get(
  "/admin-protectd",
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {
    return res.json("Hello Admin");
  }
);

// employee Protected Route
router.get(
  "/employee-protectd",
  userAuth,
  checkRole(["employee"]),
  async (req, res) => {
    return res.json("Hello employee");
  }
);

//  Protected Route
router.get(
  "/employee-and-admin-protectd",
  userAuth,
  checkRole(["employee", "admin"]),
  async (req, res) => {
    return res.json("employee and Admin");
  }
);

module.exports = router;

















// const express = require("express");
// const router = express.Router()

// router.get('/', async(req,res) => {
//     try{
//            const tickets = await Ticket.find()
//            res.json(tickets)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// })

// module.exports = router