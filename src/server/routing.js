const express = require('express')
const swaggerUi = require('swagger-ui-express')
const auth = require('./api/middlewares/authGuard')
const authRoutes = require('./api/auth/routes')
const userRoutes = require('./api/users/routes')
const swaggerDocument = require('./swagger.json')
const router = express.Router()

// Page in the root of the URL to redirect lost users to documentation
router.get('/',function(req,res) {
    return res.send('Lost? Go to <a href="/api">API Documentation<a/>')
})

// Load Swagger documentation
router.use('/api',swaggerUi.serve)
router.get('/api',swaggerUi.setup(swaggerDocument))

// Add routes
router.use('/api/auth',authRoutes)
router.use('/api/users',auth.verifyToken,userRoutes)

module.exports = router