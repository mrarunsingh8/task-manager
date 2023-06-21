const Joi = require("joi");

const taskValidator = Joi.object({
    id: Joi.number().required(),
    assign_to: Joi.string().optional(),
    assigned_by: Joi.string().optional(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    due_date: Joi.string().pattern(/^\d{2}-\d{2}-\d{4}$/).required(),
    status: Joi.boolean().required(),
    priority: Joi.string().valid('Low', 'Medium', 'High').required().label("Priority")
}).options({ abortEarly: false });

module.exports = taskValidator;