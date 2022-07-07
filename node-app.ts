import fastify from "fastify"

const app = fastify({ logger: false })

app.get("/", async (request, reply) => {
  reply.send({ hello: "world" })
})

const start = async () => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
  }
}
start()
