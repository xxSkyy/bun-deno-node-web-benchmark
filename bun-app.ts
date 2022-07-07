export default {
  port: 3000,
  fetch(request) {
    return new Response(JSON.stringify({ hello: "world" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  },
}
