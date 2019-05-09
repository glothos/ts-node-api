import { Application} from "@types/express-serve-static-core";

class Router {
    app: Application;
    constructor(instance: Application) {
        this.app = instance;
    }
}