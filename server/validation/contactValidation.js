const Joi = require('joi');

const contactValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .required()
            .email()
            .messages({
                'string.base': `E-mail powinien być adresem`,
                'string.empty': `Wprowadź e-mail`,
                'any.required': `Pole e-mail jest wymagane`
            }),
        message: Joi.string()
            .required()
            .messages({
                'string.base': `Wiadomość powinna być tekstem`,
                'string.empty': `Wprowadź wiadomość`,
                'any.required': `Pole e-mail jest wymagane`
            }),
    });

    return schema.validate(data);
}

module.exports.contactValidation = contactValidation;