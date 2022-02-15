const Joi = require('joi');

const authValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .required()
            .email()
            .messages({
                'string.base': `E-mail powinien być adresem`,
                'string.empty': `Wprowadź e-mail`,
                'any.required': `Pole e-mail jest wymagane`
            }),
        password: Joi.string()
            .required()
            .messages({
                'string.base': `Hasło powinno być tekstem`,
                'string.empty': `Wprowadź hasło`,
                'any.required': `Pole hasło jest wymagane`
            }),
    });

    return schema.validate(data);
}

module.exports = authValidation;