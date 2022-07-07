const autocannon = require("autocannon")

const run = () =>
  new Promise((resolve, reject) => {
    autocannon(
      {
        connections: 100,
        pipelining: 10,
        duration: 30,
        url: "http://localhost:3000/",
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      },

      (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      }
    )
  })

const fire = async (opts, handler, save) => {
  const result = await run(opts)

  console.log(result)
}

fire()
