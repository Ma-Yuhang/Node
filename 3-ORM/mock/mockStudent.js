const Mock = require("mockjs");
const result = Mock.mock({
  "data|5-7": [
    {
      name: "@cname",
      birthday: "@date",
      "sex|1-2": true,
      mobile: /1\d{10}/,
      //   location: "@city(true)",
      "ClassId|1-16": 0,
    },
  ],
}).data;
// console.log(result);
const Student = require("../models/Student");
Student.bulkCreate(result);
