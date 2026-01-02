const express = require("express");
const app = express();

// Sirve la carpeta GDTPS_TOS en /GDTPS_TOS
app.use("/GDTPS_TOS", express.static(__dirname + "/GDTPS_TOS"));

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000/GDTPS_TOS");
});
