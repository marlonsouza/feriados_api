export default async (req, res, next) => {
  if (req.url.slice(-1) === "/") {
    req.url = req.url.slice(0, -1);
  }

  return next();
};
