import app from "./app";
import { sequelize } from "./db/conection";

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log("DB conectada");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error iniciando el backend:", error);
    process.exit(1);
  }
}

start();
