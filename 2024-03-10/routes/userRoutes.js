import express from "express";
import data from "../data/users.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(data);
});

router.get("/search-user", (req, res) => {
  const reqData = req.query;

  const user = data.filter((user) => {
    if (user.id == reqData.userID && user.yas === reqData.yas) {
      return user;
    }
  });

  if (user.length == 0) {
    res.json({ message: "Istenilen kullanici data mevcut degildir." });
    return;
  }

  res.json(user);
});

// parametre ile alma : /2
router.get("/:id", (req, res) => {
  const reqID = req.params.id;
  //   const user = data.filter((user) => user.id == reqID);
  const user = data.filter((user) => user.id === Number(reqID));

  res.json(user);
});

router.post("/search", (req, res) => {
  const reqData = req.body;

  const result = data.filter((user) => {
    return user.id == reqData.id && user.ad == reqData.ad;
  });

  if (result.length == 0) {
    return res.json({ message: " aranan veri bulunamadi..." });
  }

  res.json(result);
});

router.post("/addUser", (req, res) => {
  const reqData = req.body;
  data.push(reqData);
  res.json(data);
});

router.put("/updateUser", (req, res) => {
  const reqData = req.body;

  const findedIndex = data.findIndex((user) => user.id == reqData.id);

  data[findedIndex].ad = reqData.ad;

  res.json(data);
});

router.patch("/", (req, res) => {
  res.send("patch istegi yapildi.");
});

router.delete("/deleteUser", (req, res) => {
  const reqID = req.body.id;

  const result = data.filter((user) => user.id !== reqID);

  res.json(result);
});

export default router;
