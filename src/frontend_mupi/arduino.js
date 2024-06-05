let port;
let writer;

async function connectSerial() {
  try {
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });
    const textEncoder = new TextEncoderStream();
    const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
    writer = textEncoder.writable.getWriter();
    console.log('Conexión serial establecida');
  } catch (error) {
    console.error('Error al conectar al puerto serial:', error);
  }
}

async function sendCommand(command) {
  if (writer) {
    await writer.write(command);
    console.log('Comando enviado:', command);
  } else {
    console.error('No hay conexión serial establecida.');
  }
}

function triggerEvent() {
  // Envía '1' al Arduino para encender el LED
  sendCommand('1');

  // Envía '0' al Arduino después de 1 segundos para apagar el LED
  setTimeout(() => {
    sendCommand('0');
  }, 1000);
}

// Llama a la función de conexión al presionar la tecla Enter
window.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    connectSerial();
  }
});