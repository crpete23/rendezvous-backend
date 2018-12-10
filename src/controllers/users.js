const model = require('../models/users')
const auth = require('../lib/auth')
const {parseToken} = require('../lib/auth')

function signup (req, res, next) {
  try {
    const newUser = req.body
    if(!newUser.first_name || !newUser.last_name || !newUser.dob || !newUser.email || !newUser.password ) {
      throw new Error("Missing User Signup Information")
    }

    const user = model.create(newUser)

    const token = user
    .then((res)=>{
      return auth.createToken(res.id)
    })

    return Promise.all([user, token])
    .then(([newUser, token])=>{
      const userId = newUser.id
      res.status(201).json({userId, token})
    })
  } catch (e) {
    console.log(e)
    next({ status: 400, error: `User could not be registered` })
  }
}

async function login (req, res, next) {
  try {
    const user = req.body
    if(!user.email || !user.password) {
      throw new Error("Missing User Login Information")
    }

    const response = await model.login(req.body)
    const token = auth.createToken(response.id)
    const userId = response.id
    res.json({ userId, token })
  } catch (e) {
    next({ status: 401, error: `Email or password is incorrect` })
  }
}

async function verify(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    res.json({ userId })
  } catch (e){
    next({ status: 400, error: 'Token is invalid or expired'})
  }
}

module.exports = {
  signup, login, verify
}
