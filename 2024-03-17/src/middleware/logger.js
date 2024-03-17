export const logger = (req, res, next) => {
  const bloen = true;
  if (!bloen) {
    return res
      .status(403)
      .json({ message: "middleware istedigini engelledi..." });
  }
  console.log("Ben bir middleware ' im...");
  next();
};
