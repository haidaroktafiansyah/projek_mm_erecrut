//mailer
export const nodemailer = require("nodemailer");

//uniquie string maker
const uuidv4 = require('uuid');


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "andromediarecruitment@gmail.com",
        pass: "team41234!",
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("email verifier is ready");
        console.log(success);
    }
});

//validator
const Joi = require('joi');

// password hasher
const bcrypt = require('bcrypt');

export const ext = { transporter, Joi, bcrypt }