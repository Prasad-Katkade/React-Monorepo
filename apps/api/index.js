//imports
const express = require("express");
const cors = require("cors");
const data = require("./MOCK_DATA.json");
const fs = require("fs");

//plugins
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//routes

app.get("/products", (req, res) => { //get all products
  return res.json({ success: true, data: data });
});

app.get("/products/:id", (req, res) => { // get by product id
  const id = Number(req.params.id);
  const product = data.find((prod) => prod.id === id);
  return res.json({ success: product ? true : false, data: product });
});

app.post("/products", (req, res) => { // create new product
  const body = req.body;
  if (!body) {
    return res.status(400).json({ success: false, error: "Bad Request" });
  }
  if (!data) {
    return res.status(400).json({ success: false, error: "Bad Request" });
  }
  if (data && data.length > 0 && body) {
    data.push({ id: data.length + 1, ...body, price: parseInt(body.price) });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, fileData) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
      }
      return res.json({ success: true, data: { ...data[data.length - 1] } });
    });
  }
});

app.put("/products/:id", (req, res) => { //fully update product
  const id = Number(req.params.id);
  const body = req.body;
  if (!body) {
    return res.status(400).json({ success: false, error: "Bad Request" });
  }
  if (!data) {
    return res.status(400).json({ success: false, error: "Bad Request" });
  }
  if (data && data.length > 0 && body) {
    const index = data.findIndex((item) => item.id === id);
    const temp = data[index];
    data[index] = { id: temp.id, ...body, price: parseInt(body?.price) || temp.price };
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, fileData) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
      }
      return res.json({ success: true, data: { ...data[index] } });
    });
  }
});

app.patch("/products/:id", (req, res) => { //partially update product
    const id = Number(req.params.id);
    const body = req.body;
    if (!body) {
      return res.status(400).json({ success: false, error: "Bad Request" });
    }
    if (!data) {
      return res.status(400).json({ success: false, error: "Bad Request" });
    }
    if (data && data.length > 0 && body) {
      const index = data.findIndex((item) => item.id === id);
      const temp = data[index];
      data[index] = { id: temp.id,...temp, ...body, price: parseInt(body?.price) || temp.price  };
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, fileData) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ success: false, error: "Internal Server Error" });
        }
        return res.json({ success: true, data: { ...data[index] } });
      });
    }
  });

app.delete("/products/:id", (req, res) => { // delete product
  const id = Number(req.params.id);
  if (!data) {
    return res.status(400).json({ success: false, error: "Bad Request" });
  }
  if (data && data.length > 0) {
    const index = data.findIndex((item) => item.id === id);
    const temp = data[index];
    data.splice(index, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, fileData) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
      }
      return res.json({ success: true, data: { temp } });
    });
  }
});

// init
app.listen(8000, () => console.log("Server Started at 8000"));
