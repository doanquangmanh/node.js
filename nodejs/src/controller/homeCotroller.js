import { resolveShowConfigPath } from '@babel/core/lib/config/files';
import { json } from 'body-parser';
import pool from '../configs/connectDB'


let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`', );
    return res.render('index.ejs', {dataUser: rows})
    // simple query
    // let data = [];
    // connection.query(
    // 'SELECT * FROM `users`',
    //     function(err, results, fields) {
    //         results.map((row) => {data.push({
    //                 id: row.id,
    //                 firstName: row.firstName,
    //                 lastName: row.lastName,
    //                 email: row.email,
    //                 address: row.address,
    //             })
    //         });
    //     })
}
let getDetailpage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute('select * from `users` where `id`= ?', [userId]);
    return res.send(JSON.stringify(user));
}
let createNewUser = async (req, res) => {
    let {lastName, fristName, email, address} = req.body
    await pool.execute('insert into users(lastName, fristName, email, address) values(?, ?, ?, ?)', [lastName, fristName, email, address])
    return res.redirect('/')
}
let deleteUser = async (req, res) => {
    let userId = req.body.userId
    await pool.execute('delete from users where id= ?', [userId])
    return res.redirect('/')
}
let getEditPage = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute('select * from users where id= ?', [id])
    return res.render('update.ejs', {dataUser: user[0]}) // x <- y
}
let postUpDateUser = async (req, res) => {
    let {lastName, fristName, email, address, id } = req.body 
    await pool.execute('update users set lastName= ?, fristName= ?, email= ?, address= ? where id= ?', [lastName, fristName, email, address, id])
    return res.redirect('/')
}
module.exports = {
    getHomepage,
    getDetailpage,
    createNewUser,
    deleteUser,
    getEditPage,
    postUpDateUser,
}