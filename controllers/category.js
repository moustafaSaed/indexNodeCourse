const slugify = require('slugify');
const categoryModel = require('../models/category');



exports.getCategories = (req, res) => {
    // const name = req.body.name;
    // console.log(name)
    res.send();
}

exports.createCategory = (req, res) => {
    const name = req.body.name;
    categoryModel.create({ name, slug: slugify(name) })
        .then((category) => res.status(201).json({ data: category }))
        .catch((err) => res.status(400).send(err));
}