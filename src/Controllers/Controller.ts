import {HandlerInterface} from "./HandlerInterface";

interface Controller{
    list: HandlerInterface.Static;
    read: HandlerInterface.Static;
    create: HandlerInterface.Static;
    update: HandlerInterface.Static;
    remove: HandlerInterface.Static;
}
export default Controller;