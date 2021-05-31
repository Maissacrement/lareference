const local = (req, res) => res.download(`${process.cwd()}/src/apk/app.apk`)

module.exports = { local }