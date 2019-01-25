const http = require('http');
const socketio = require('socket.io');
const pitchModel = require('./model');
const { sleep } = require('./utils');

const TIMEOUT_BETWEEN_EPOCHS_MS = 500;
const PORT = 8001;

async function run() {
    const port = PORT;
    const server = http.createServer();
    const io = socketio(server);
    let useTestData = false;

    server.listen(port, () => {
        console.log(` > Running socket on port: ${port}`);
    });

    io.emit('accuracyPerClass', await pitchModel.evaluate(false));
    await sleep(TIMEOUT_BETWEEN_EPOCHS_MS);

    io.on('connection', (socket) => {
        socket.on('test_data', (value) => {
            useTestData = value === 'true' ? true : false;
        });
    });

    io.emit('accuracyPerClass', await pitchModel.evaluate(useTestData));
    await sleep(TIMEOUT_BETWEEN_EPOCHS_MS);

    while(true){
        await pitchModel.model.fitDataset(pitchModel.trainingData, {epochs: 1});
        io.emit('accuracyPerClass', await pitchModel.evaluate(useTestData));
        await sleep(TIMEOUT_BETWEEN_EPOCHS_MS);
    }
}

run();