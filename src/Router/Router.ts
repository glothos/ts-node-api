import { Application, Response } from "@types/express-serve-static-core";
import Users from './Routes/Users';
import App from "../app";
import express from 'express';

export default class Router extends Users {
    // Router specific manipulation
    // verify step
    constructor(instance) {
        super(instance);
    }

}