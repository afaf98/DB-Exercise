---
[x]Create new project
---

## [x]inizialize npm

[x]inizialize sequelize, sequelize-cli, postgres (pg)
-> Commands -> `npx i sequelize sequelize-cli pg`

---

[x]Create a new development DB - new ElephantSQL instance

-> Run : `npx sequelize-cli init` ( for right setting of folders and config files)
-> Define corresponding configs for your config.json
-> check that the development server is properly connected
-> `npx sequelize-cli db:migrate`
-> command to Start QueryPie
➜ `npx chmod a+x QueryPie-6.2.0.AppImage`
➜ `./QueryPie*.AppImage`

---

[x]Generate what type of data the models are gonna contain
-> Command : `npx sequelize-cli model:generate --name user --attributes name:string,email:string,phone:integer,password:string`

---

[x] Generate different models (for the moment they are 3)
-> Command for create the file already pre-setted
-> `npx sequelize-cli seed:generate --name some-{Name model}`

---

## [x]Generate some dummy data

[x]Seed them in the db
-> command : `$ npx sequelize-cli db:seed:all`

## To un-do the seed we can use

`$ npx sequelize-cli db:seed:undo:all`

## We can also point to a specific seed file to run instead of "all" using the --seed flag

`$ npx sequelize-cli db:seed --seed 20191211110453-some-users`
`$ npx sequelize-cli db:seed:undo --seed 20191211110453-some-users.js (.js at the end of the file required to be able to run)`

### Important ---- To Undo

Command : ` $ npx sequelize-cli db:migrate:undo:all`
Than replace everything
--> `$ npx sequelize-cli db:migrate`
--> `$ npx sequelize-cli db:seed:all`

---

[x]Creating new attribute for First migration
--> first by adding the attribute in the file.js (todoItem.js)
--> running the command to generate the migration
--- `$ npx sequelize-cli migration:generate --name first-migration` (just to create the file where we are gonna give instruction to create a new column)
--> define the data type of the column and where

---

###### Piece of code to set in the migration file

` await queryInterface.addColumn( "todoItems", "important", { type: Sequelize.BOOLEAN }, {} );`

---

---> Than migrate --> Command : 'npx sequelize-cli db:migrate'
