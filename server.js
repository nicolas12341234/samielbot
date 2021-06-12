const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('Estoy listo:D');
});
 
function keepAlive() {
   server.listen(3000, () => { console.log("servidor listo!" + Date.now()) });
}

module.exports = keepAlive;