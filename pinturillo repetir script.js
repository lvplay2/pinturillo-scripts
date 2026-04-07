/*
Repite todos los mensajes de los demás usuarios.
*/

window.echoLock = false;

if (!window._original_execCommand) {
  window._original_execCommand = execCommand;
}

execCommand = function(v){

  if(!window.echoLock && typeof v === "string" && v.startsWith("J;")){

    const parts = v.split(";");
    const player = parts[1];
    const message = parts[3];

    // ignorar mis propios mensajes
    if(player !== ea){

      console.log("[CHAT]",player,message);

      window.echoLock = true;

      cA(ax(72,message));

      setTimeout(()=>{
        window.echoLock = false;
      },50);
    }
  }

  return window._original_execCommand(v);
};
