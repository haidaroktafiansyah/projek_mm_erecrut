const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    nama_kota: { type: "number", min: 3, max: 255 },
    $$strict: true // no additional properties allowed
};

const checker = v.compile(schema);

export const checkvalidasikota = (d) => checker(d);