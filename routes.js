const express = require('express')


const ProductController = require('./src/controllers/ProductController');
const StoreController = require('./src/controllers/StoreController');
const ClientController = require('./src/controllers/ClientController');
const ShoppingCartController = require('./src/controllers/shoppingCartController');
const OrderController = require('./src/controllers/OrderController');

const routes = express.Router();

routes.get('/products/list', ProductController.list); //funcionando

routes.get('/stores/list', StoreController.list);   //funcionando

routes.post('/clients/create', ClientController.create); //funcionando

routes.get('/clients/list', ClientController.list); //funcionando

routes.post('/shoppingcarts/create', ShoppingCartController.create); //funcionando

routes.delete('/shoppingcarts/delete', ShoppingCartController.delete);  //funcionando

routes.post('/order/create', OrderController.create); //funcionando

routes.put('/order/update/status', OrderController.updateStatus); //funcionando

// routes.get('/shoppingcarts/list', ShoppingCartController.list);



// routes.get('/users/:user_id/addresses', AddressController.index);
// routes.post('/users/:user_id/addresses', AddressController.store);

// routes.get('/users/:user_id/techs', TechController.index);
// routes.post('/users/:user_id/techs', TechController.store);
// routes.delete('/users/:user_id/techs', TechController.delete);

// routes.get('/report', ReportController.show);

module.exports = routes;