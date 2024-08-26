const FAQ = require('../models/faq');

exports.getAllFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find({});
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
