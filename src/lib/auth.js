const { SECRET_KEY } = process.env
const { sign, verify } = require('jsonwebtoken')
const db = require('../db')

function createToken (id) {
  const sub = { sub: { id } }
  const options = { expiresIn: '10 days' }

  return sign(sub, SECRET_KEY, options)
}

function parseToken (header) {
  const token = header && header.split('Bearer ')[1]
  return verify(token, SECRET_KEY)
}

function isLoggedIn (req, res, next) {
  try {
    parseToken(req.headers.authorization)
    next()
  } catch (e) {
    next({
      status: 401,
      error: `Session has expired. Please login again.`
    })
  }
}

async function isAuthorized (req, res, next) {
  try {
    const authorization = req.headers.authorization
    if (!authorization) {
      const message = `You are not authorized to access this route`
      return next({ status: 401, error: message })
    }

    const token = parseToken(authorization)
    const userId = token.sub.id

    const user_id = req.params.user_id
    // const patient = await db('patients_doctors').where({ patient_id })
    //
    // const authorized = patient.find(ele => {
    //   return ele.doctor_id === userId
    // })
    //
    // if (!authorized) {
    //   const message = `You are not authorized to access this patient`
    //   return next({ status: 401, error: message })
    // }

    next()
  } catch (e) {
    next({
      status: 401,
      error: `Session has expired. Please login again.`
    })
  }
}


module.exports = {
  createToken,
  parseToken,
  isLoggedIn,
  isAuthorized
}
