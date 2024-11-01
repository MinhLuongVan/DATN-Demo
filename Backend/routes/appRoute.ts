import express from 'express';
import {userRoute} from './userRoute';
import {productRoute} from './productRoute';
import {contactRoute} from './contactRoute';
import { cartRoute } from './cartRoute';

export const useRoute = function (app: express.Application) {
    userRoute(app);
    productRoute(app);
    contactRoute(app);
    cartRoute(app);
}