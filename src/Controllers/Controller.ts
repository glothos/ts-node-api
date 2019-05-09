import { Request, Response, NextFunction} from "@types/express-serve-static-core";
import {HandlerInterface} from "./HandlerInterface";

abstract class Controller{
    abstract list: HandlerInterface.Static;
    abstract read: HandlerInterface.Static;
    abstract create: HandlerInterface.Static;
    abstract update: HandlerInterface.Static;
    abstract delete: HandlerInterface.Static;
}
export default Controller;