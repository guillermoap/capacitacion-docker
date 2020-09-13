import app from "./app";
import config from "./config/config";
// import { sequelize } from "./config/db";

const PORT = config.PORT;

(async () => {
  // await sequelize
  //   .sync({ force: true })
  //   .then(() => {
  //     console.log("CONNECTION ESTABLISHED SUCCESSFULLY");
  //   })
  //   .catch(() => {
  //     console.log("CONNECTION REFUSED");
  //   });
  app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });
})();
