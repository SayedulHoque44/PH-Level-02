# step

- npm init -> enter enter all
- yarn add express
- yarn add -D typescript --> TS ta (-D) dependecny hisebe use krteci karon amra to pore seta JS e convert kre pelbo just use case hisebe dependecy hisebe TS use krbo,tai ata -D dici , -D mane dependency
- tsc --init --> TS compiler
- create src ->app ->app.ts + server.ts
- go to tsconfig.json -> `rootDir": "./src/",` // Ts file gula ekhane thakbe
- go to tsconfig.json -> ` "outDir": "./dist/",` // Ts file gula JS e convert hoye ekhane jabe.

- copy the express hello world code and past it to app.ts -> then we need to install `yarn add -D @types/node` its for node // cz its giving error. `yarn add -D @types/express` and its for express

- setup server and then hit tsc then run `node dist/app/server.js` to see output

- But problem is that TS file jotobar cng krbo TSC hit kre convert krte hbe JS e and server off kre abr on krte hbe, rather we can use `tsc -w` tahole tsc amder TS file track/watch mode rakhe and kono cng hole seta JS e convert/update kore dey,

- And kono cng korar por server var var cng kora birokto, tai amra nodemone install krbo `yarn add -D nodemon` --> nodemon jkn ei amder js er kono cng pabe sathe sathe server restart kore dibe.

- but erpor package.json e scripts e akta scripts e boli dite hbe amra ki cmd likle ki open hbe kiser maddome `"dev":"nodemon ./dist/server.js"` --> mane amra `yarn dev` hit krle nodemon e amder server.js run hbe

- install postman to PC to test api
- (request + response + express + setup + run) 7.6 & 7.7 end.
- 7.8 start -->
-
