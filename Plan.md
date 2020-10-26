[x]Create new project
[x]inizialize npm
[x]inizialize sequelize, sequelize-cli, postgres (pg)
-> Commands -> `npx i sequelize sequelize-cli pg`
[x]Create a new development DB - new ElephantSQL instance
-> Run : `npx sequelize-cli init` ( for right setting of folders and config files)
-> Define corresponding configs for your config.json
-> check that the development server is properly connected
-> `npx sequelize-cli db:migrate`
[x]Generate what type of data the models are gonna contain
-> Command : `npx sequelize-cli model:generate --name user --attributes name:string,email:string,phone:integer,password:string`
[x] Generate different models (for the moment they are 3)
-> Command for create the file already pre-setted
-> `npx sequelize-cli seed:generate --name some-{Name model}`
