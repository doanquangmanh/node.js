import express from 'express'
import APIController from '../controller/APIController'

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers)// read data- metod GET
    router.post('/create-user', APIController.createNewUser)// method POST - create data
    router.put('/update-user', APIController.upDateUser)// method put - updateuser
    router.delete('/delete-user/:id', APIController.deleteUser)// method delete
    return app.use('/api/v1/', router)
}
export default initAPIRoute;
// module.export = initWeRouter;