const express = require('express');
const app = express();
const port = 3000; // Puedes elegir otro puerto si lo deseas

// Define una ruta GET en la raíz ('/') que responde con "Hola Mundo!"
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde mi API!');
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});