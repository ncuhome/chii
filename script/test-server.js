const { start } = require('../dist');

const res = start()

if (res.wss) {
  res.wss.on('connection', ws => {
    const type = ws.type;
    if (type === 'target') {
      const { id, chiiUrl, title } = ws;
      console.log('TEST', id, chiiUrl, title)
      console.log('TEST', `http://localhost:8080/front_end/chii_app.html?ws=localhost:8080/client/asdasd?target=${id}`)
    }
  });
}

