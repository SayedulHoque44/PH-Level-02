# step

- npm init -> enter enter all
- yarn add express
- yarn add -D typescript --> TS ta (-D) dependecny hisebe use krteci karon amra to pore seta JS e convert kre pelbo just use case hisebe dependecy hisebe TS use krbo,tai ata -D dici , -D mane dependency
- tsc --init --> TS compiler
- create src ->app ->app.ts + server.ts
- go to tsconfig.json -> `rootDir": "./src/",` // Ts file gula ekhane thakbe
- go to tsconfig.json -> ` "outDir": "./dist/",` // Ts file gula JS e convert hoye ekhane jabe.
- copy the express hello world code and past it to app.ts -> then we need to install `yarn add -D @types/node` its for node // cz its giving error. `yarn add -D @types/express` and its for express
