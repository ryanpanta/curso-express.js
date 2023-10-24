module.exports = {
    get:  (req, res) => res.send("[GET] Professor"),
    create: (req, res) => res.send("[POST] Professor"),
    delete: (req, res) => res.send("[DELETE] Professor"),
    update: (req, res) => res.send("[PATCH] Professor"),
}