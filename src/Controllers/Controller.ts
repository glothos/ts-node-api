import UserController from "./Users/UserController";

class Controller{
    userController: UserController;
    constructor() {
        this.userController = new UserController();
    }
}
export default Controller;