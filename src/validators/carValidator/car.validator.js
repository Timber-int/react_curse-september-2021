import Joi from "joi";

 export const carValidator = Joi.object({
    model:
        Joi.string()
            .regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇ]{1,20}$'))
            .required()
            .messages({
                'string.empty': '"model" не може бути пустим',
                'string.pattern.base': 'Введіть лише букви мин 1 макс 20',
            }),
    price: Joi.number()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            'number.base': 'Ціна мін 1 макс 1000000',
            'number.min': 'Ціна більша або рівна 0',
            'number.max': 'Ціна менша або рівна 100000',
        }),
    year: Joi.number()
        .min(1990)
        .max(new Date().getFullYear())
        .required()
        .messages({
            'number.base': 'Рік може бути від 1990 до поточного',
            'number.min': 'Рік має бути більшим 1990',
            'number.max': 'Рік не може бути більним ніж поточний'
        }),
});

