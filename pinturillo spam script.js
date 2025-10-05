/*
Spamea un mensaje en el chat con un delay de entre 1 y 1,5 segundos.
Se recomienda ejecutar el script en varias ventanas a la vez para hacer más efectivo el spam.
*/

let count = 0;
let repeticiones = Infinity;

function generarCodigo() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  for (let i = 0; i < 4; i++) {
    resultado += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return resultado;
}

function enviarMensaje() {
  if (count >= repeticiones) return;

  const codigo = generarCodigo();
  cn(codigo + " (escribe el mensaje aquí)");
  count++;

  // Genera un delay aleatorio entre 1000ms y 1500ms
  const delay = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
  setTimeout(enviarMensaje, delay);
}

// Inicia el envío
enviarMensaje();
