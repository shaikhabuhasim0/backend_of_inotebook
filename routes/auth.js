const express = require('express')

const user = require('../Models/Users')

const router = express.Router()

const { body, validationResult } = require('express-validator')

router.post('/createuser', [

    body('name').isLength({ min: 3 }),

    body('email').isEmail(),

    body('password').isLength({ min: 8 }),

], async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

let user = user.findOne({email : req.body.email})
if (user){
    return res.status(400).json({error : " sorry a user with this email is already exists !! "})
}
 User = await user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    .then(user => res.json(user))
.catch(err=> {console.log(err)
res.json({error:'please enter a unique value for e mail', message:err.message})})
})

module.exports = router