/* eslint-disable no-undef */
// const swaggerJsdoc = require('swagger-jsdoc')
// const swaggerUi = require('swagger-ui-express')


// //swagger definition
// const swaggerDefinition = {
// 	openapi: '3.0.0',
// 	info: {
// 		title: 'Haze app api documentation',
// 		version: '1.0.0',
// 		description: 'Haze app api documentation in details to understand the documentation'
// 	},
// 	servers: [
// 		{
// 			url: 'http://localhost:8080',
// 			description: "Local server"
// 		},
// 		{
// 			url: "https://haze.staging.app/backend",
// 			description: "Live server"
// 		},
// 	],
// }
// //options for swagger docs
// const options = {
// 	swaggerDefinition,
// 	apis: ['./routes/*.js']

// }
// const swaggerSpec = swaggerJsdoc(options)
// module.exports = {
// 	swaggerUi,
// 	swaggerSpec,

// }


const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')


//swagger definition
const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'Haze app api documentation',
		version: '1.0.0',
		description: 'Haze app api documentation in details to understand the documentation'
	},
	servers: [
		{
			url: 'http://localhost:8080'
		},
	],
}
//options for swagger docs
const options = {
	swaggerDefinition,
	apis: ['./routes/*.js']

}
const swaggerSpec = swaggerJsdoc(options)
module.exports = {
	swaggerUi,
	swaggerSpec,

}