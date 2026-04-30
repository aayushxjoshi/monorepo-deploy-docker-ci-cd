import express from "express";
import { prisma } from "db/client";

const app = express()

app.use(express.json())

app.get("/healthcheck", (req, res) => {
  res.send({
    message: "Server Up and Runnning"
  })
})

// Ideally this won't be get endpoint this is added just for testing nothing related don't take it personally
app.get("/user", async (req, res) => {
  const randomEmail = Math.random().toString()
  const randomName = Math.random().toString()
  const response = await prisma.user.create({
    data: {
      email: randomEmail,
      name: randomName
    }
  })
  res.send(response)
})

app.post("/user", async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    const hash = await Bun.password.hash(password, process.env.BUN_PASSWORD_TEST as any);

  } catch (error) {
    console.error("Oops! Something went wrong")
  }
})

app.listen(8000, () => {
  console.log('Everything Working!!')
})
