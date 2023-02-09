import express from 'express';
import { addCart, deleteCart, findIdCart, getAllCart, updateCart } from '../controllers/cartController';

export const cartRoute = function (app: express.Application) {
    app.route("/api/cart/save").post(addCart);
    app.route("/api/cart/save").post(getAllCart);
    app.route("/api/cart/save").post(deleteCart);
    app.route("/api/cart/save").post(updateCart);
    app.route("/api/cart/get").post(findIdCart);
}