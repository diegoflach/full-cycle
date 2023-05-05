module.exports = app => {
    app.route('/api/v1').get(function (req, res, next) {
        res.status(200).send({
            title: "Node Express API",
            version: "1.0.0"
        });
    });
}