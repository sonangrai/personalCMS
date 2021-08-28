import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("k xa from NODE");
});

//Running the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App runing on ${PORT}`));
