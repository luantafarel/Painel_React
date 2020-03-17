module.exports = {
    info: {
      title: 'REST API template',
      version: '1.0.0',
      description: 'Full functional scalable REST API Template'
    },
    tags: {
      name: 'auth',
      description: 'Authorization endpoints'
    },
    basePath: '/api/',
    apis: ['src/api/auth/routes.js','src/api/users/routes.js','src/api/generic/routes.js']
  }