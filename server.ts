import App from './src/app';
import http from "http";

const portValue: number = parseInt(process.env.PORT, 10) || 8000;
const app: App = new App();
app.port = portValue;
const server = http.createServer(app.instance);
server.listen(app.port);