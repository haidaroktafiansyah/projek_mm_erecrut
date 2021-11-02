
//validator
export const Joi = require('joi');

// password hasher
export const bcrypt = require('bcryptjs');

//mailer
const nodemailer = require("nodemailer");

//uniquie string maker
const { uuid } = require('uuidv4');


export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'andromediarecruitment@gmail.com',
        pass: 'team41234!'

    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("ready");
        console.log(success);
    }
});

export const ext = {

}