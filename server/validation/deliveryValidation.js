const Joi = require('joi');

const deliveryValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .required()
            .min(6)
            .email()
            .messages({
                'string.base': `E-mail powinien być adresem`,
                'string.empty': `Wprowadź e-mail`,
                'string.min': `E-mail powinien zawierać co najmniej 6 znaków`,
                'any.required': `Pole e-mail jest wymagane`
            }),
        firstName: Joi.string()
            .required()
            .min(2)
            .max(30)
            .messages({
                'string.base': `Imię powinno zawierać tylko litery`,
                'string.empty': `Wprowadź imię`,
                'string.min': `Imię powinno zawierać co najmniej 2 znaki`,
                'string.max': `Imię powinno zawierać maksymalnie 30 znaków`,
                'any.required': `Pole 'imię' jest wymagane`
            }),
        lastName: Joi.string()
            .required()
            .min(2)
            .max(30)
            .messages({
                'string.base': `Nazwisko powinno zawierać tylko litery`,
                'string.empty': `Wprowadź Nazwisko`,
                'string.min': `Nazwisko powinno zawierać co najmniej 2 znaki`,
                'string.max': `Imię powinno zawierać maksymalnie 30 znaków`,
                'any.required': `Pole 'nazwisko' jest wymagane`
            }),
        street: Joi.string()
            .required()
            .min(3)
            .max(50)
            .allow('.')
            .messages({
                'string.empty': `Wprowadź nazwę ulicy`,
                'string.min': `Ulica powinna zawierać co najmniej 3 znaki`,
                'string.max': `Ulica powinna zawierać maksymalnie 50 znaków`,
                'any.required': `Pole 'ulica' jest wymagane`
            }),
        buildingNumber: Joi.number()
            .required()
            .messages({
                'string.empty': `Wprowadź numer budynku`,
                'any.required': `Pole 'numer domu' jest wymagane`
            }),
        flatNumber: Joi.any()
            .allow('', null)
            .messages({
                
            }),
        zipCode: Joi.any()
            .required()
            .messages({
                'string.empty': `Wprowadź kod pocztowy`,
                'any.required': `Pole 'kod pocztowy' jest wymagane`
            }),
        city: Joi.string()
            .required()
            .min(2)
            .max(30)
            .messages({
                'string.empty': `Wprowadź miasto`,
                'string.min': `Miasto powinno zawierać co najmniej 2 znaki`,
                'string.max': `Miasto powinno zawierać maksymalnie 50 znaków`,
                'any.required': `Pole 'miasto' jest wymagane`
            }),
        provider: Joi.string()
            .required()
            .messages({
                'string.empty': `Zaznacz formę dostawy`,
                'any.required': `Pole 'sposób dostawy' jest wymagane`
            }),
    });

    return schema.validate(data);
}

module.exports.deliveryValidation = deliveryValidation;