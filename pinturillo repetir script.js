/*
Repite todos los mensajes de los demás usuarios.
*/

// Guardar historial global
window.chatHistory = [];

// Guardamos la execCommand original
if (!window._original_execCommand) {
  window._original_execCommand = execCommand;
}

execCommand = function(v) {
  // Guardamos el comando crudo en historial
  window.chatHistory.push(v);

  // Procesar solo si es mensaje de chat (empieza con "J;")
  if (typeof v === "string" && v.startsWith("J;")) {
    const parts = v.split(";");
    const player = parts[1] || "???";
    const message = parts[3] || "";

    // Ignorar mis propios mensajes
    if (player !== bD) {
      // Mostrar en consola
      console.log(`[CHAT] ${player}: ${message}`);

      // Repetir con cn()
      if (typeof cn === "function") {
        try {
          cn(`${message}`);
        } catch (e) {
          console.warn("No se pudo ejecutar cn:", e);
        }
      }
    }
  }

  // Llamar a la original
  window._original_execCommand(v);
};
