const loggerMiddleware = (req, res, next) => {
    const now = new Date().toISOString();
    console.error(`${now} ${req.method} ${req.url}`);

    next();
 }


 module.exports = loggerMiddleware