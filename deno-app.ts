import { serve } from "https://deno.land/std@0.147.0/http/server.ts"

const handler = (req: Request): Response => {
  return new Response(JSON.stringify({ hello: "world" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

serve(handler, { port: 3000 })
