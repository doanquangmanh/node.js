import express from 'express'
import homeController from '../controller/homeCotroller'
let router = express.Router();

const initWeRouter = (app) => {
    router.get('/', homeController.getHomepage) 
    router.get('/detail/user/:id', homeController.getDetailpage)
    router.post('/crete/user', homeController.createNewUser)
    router.post('/delete-user', homeController.deleteUser)
    router.get('/edit-user/:id', homeController.getEditPage)
    router.post('/update-user', homeController.postUpDateUser)
    return app.use('/', router)
}
export default initWeRouter;
// module.export = initWeRouter;