import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi
        .string()
        .regex(new RegExp('^[a-zA-ZА-Яа-яіІїЇ]{1,20}$'))
        .required()
        .messages({
            "string.empty": '"model не може бути пустим"',
            "string.pattern.base": '"Тільки букви min 1 max 20"',
        }),
    year: Joi
        .number()
        .min(1900)
        .max(new Date()
            .getFullYear())
        .required()
        .messages({
            "number.base":"Рік від 1900 до 2022",
            "number.min":"Рік >= 1900",
            "number.max":"Рік <= 2022",
        }),
    price: Joi
        .number()
        .min(0)
        .max(1000000)
        .messages({
            "number.base":"Ціна від 1 до 1000000",
            "number.min":"Ціна >= 0",
            "number.max":"Ціна <= 1000000"
        }),
});