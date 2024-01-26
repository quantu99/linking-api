const Link = require('../Model/Link');
const LinkController = {
    addNew: async (req, res) => {
        try {
            const newLink = await new Link(req.body);
            const savedLink = await newLink.save();
            return res.status(200).json(savedLink);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
};
module.exports = LinkController;
