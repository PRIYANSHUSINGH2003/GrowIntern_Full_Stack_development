const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

// get products Data API
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        // console.log("Console the data "+productsdata);
        res.status(201).json(productsdata)
    } catch (error) {
        console.log("error" + error.message);
    }
})

// get data to AIP
router.get("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const individuadata = await Products.findOne({ id: id });
        // console.log(individuadata + "individual data");
        res.status(201).json(individuadata);
    } catch (error) {
        res.status(400).json(individuadata);
        console.log("error" + error.message);
    }
});


// register data
router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "fill the all data" })
        console.log("not data available");
    };

    try {
        const preuser = await USER.findOne({ email: email });
        if (preuser) {
            res.status(422).json({ error: "this user is already present" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "password and cpassword not match" })
        } else {
            const finalUser = new USER({
                fname, email, mobile, password, cpassword
            });

            // incryption and decryption password
            // bcrypt.js
            // password hashing process 

            const storedata = await finalUser.save();
            console.log(storedata);
            res.status(201).json(storedata);
        }
    } catch (error) {

    }
})


// login user API
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the all data" })
    };
    try {
        const userlogin = await USER.findOne({ email: email });
        console.log(userlogin + "user value");

        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            console.log(userlogin + "pass match");

            //  token generate
            const token = await userlogin.generateAuthtoken();
            // console.log(token);
            res.cookie("Amazonweb", token, {
                expires: new Date(Date.now() + 9000000),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ error: "invalid detials" })
            } else {
                res.status(201).json({ message: "Password match" })
            }
        } else {
            res.status(400).json({ error: "invalid detials" })
        }
    } catch (error) {
        res.status(400).json({ error: "invalid detials" })
    }
})


// adding the into cart
router.post("/addcart/:id", authenticate, async (req, res) => {
    try {
        const {id} = req.params;
        const cart = await Products.findOne({id: id });
        console.log(cart + "cart value")
        const UserContact = await USER.findOne({ _id: req.userID });
        console.log(UserContact);

        if (UserContact) {
            const cartData = await UserContact.addcartdata(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        } else {
            res.status(401).json({ error: "Invaild User" });
        }

    } catch (error) {
        res.status(401).json({ error: "Invaild User" });
    }
});

// get data into the cart
router.get("/cartdetails", authenticate, async (req, res) => {
    try {
        const buyuser = await USER.findOne({ _id: req.userID });
        // console.log(buyuser + "user hain buy pr");
        res.status(201).json(buyuser);
    } catch (error) {
        console.log(error + "error for buy now");
    }
});



// get user is login or not
router.get("/validuser", authenticate, async (req, res) => {
    try {
        const validuserone = await USER.findOne({ _id: req.userID });
        // console.log(validuserone + "user hain home k header main pr");
        res.status(201).json(validuserone);
    } catch (error) {
        console.log(error + "error for valid user");
    }
});

// remove item from cart
router.delete("/remove/:id", authenticate, async(req,res)=>{
    try {
        const { id } = req.params;

        req.rootUser.carts = req.rootUser.carts.filter((cruval) => {
            return cruval.id != id
        });

        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("iteam remove");

    } catch (error) {
        console.log(error + "jwt provide then remove");
        res.status(400).json(error);
    }
})



module.exports = router;
