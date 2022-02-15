const Joi = require('joi');

const productValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .required()
            .messages({
                'string.empty': `Wprowadź nazwę produktu`,
                'any.required': `Nazwa produktu jest wymagana`
            }),
        category: Joi.string()
            .required()
            .messages({
                'string.empty': `Wprowadź kategorię produktu`,
                'any.required': `Kategoria produktu jest wymagana`
            }),
        price: Joi.number()
            .required()
            .min(0)
            .messages({
                'number.empty': `Wprowadź cenę produktu`,
                'any.required': `Cena produktu jest wymagana`,
                'number.min': `Cena nie może być ujemna`
            }),
        quantity: Joi.number()
            .required()
            .min(1)
            .max(10)
            .default(1)
            .messages({
                'number.empty': `Wprowadź ilość produktów`,
                'any.required': `Ilość produktów jest wymagana`,
                'number.min': `Musi być co najmniej 1 produkt na stanie`,
                'number.max': `Na stanie może być maksymalnie 10 produktów`
            }),
    });

    return schema.validate(data, {
        allowUnknown: true
    });
}

module.exports = productValidation;