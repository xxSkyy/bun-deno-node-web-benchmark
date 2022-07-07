Results from single core process

```
10 connections
5 pipelines
10 seconds

get / -> `{hello: "world"}`

node - fastify:

statusCodeStats:  '200': { count: 615 717 }
requests:
    average: 55978.19,
    mean: 55978.19,


deno - stf/http/server:

 statusCodeStats:  '200': { count: 841 077 } },
  requests:
    average: 76459.64,
    mean: 76459.64,

bun - build in server:

  statusCodeStats:  '200': { count: 1 484 700 } ,
  requests:
    average: 134961.46,
    mean: 134961.46,

bun - tsnd node app:

  statusCodeStats:  '200': { count: 479 835 } ,
  requests:
    average: 43620.37,
    mean: 43620.37,

100 connections
10 pipelines
30 seconds

node - fastify:

 statusCodeStats: { '200': { count: 1 669 546 } },
  requests: {
    average: 55 651.2,
    mean: 55 651.2,



deno - stf/http/server:

  statusCodeStats: { '200': { count: 3 195 281 } },
  requests:
    average: 106 508.8,
    mean: 106 508.8,


bun - build in server:

  statusCodeStats: { '200': { count: 4 919 230 } },
  requests:
    average: 163 969.07,
    mean: 163 969.07,

bun - tsnd node app:

  statusCodeStats: { '200': { count: 1 632689 } },
  requests:
    average: 54 425.6,
    mean: 54 425.6,
```
