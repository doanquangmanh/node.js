import pool from '../configs/connectDB'

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`', );

    return res.status(200).json({
        message:'what the fuck how long time me .>>>?',
        data: rows,
    })
}
let createNewUser = async(req,res) => {
    let {lastName, fristName, email, address} = req.body
    if(!lastName || !fristName || !email || !address) {
        return res.status(200).json({
            message: 'missing',
        })
    }
    await pool.execute('insert into users(lastName, fristName, email, address) values (?, ?, ?, ?)', [lastName, fristName, email, address])
    return res.status(200).json({
        message: 'are you oke',
    })
}
let upDateUser = async(req,res) => {
    let {lastName, fristName, email, address, id } = req.body 
    if(!lastName || !fristName || !email || !address) {
        return res.status(200).json({
            message: 'missing',
        })
    }
    await pool.execute('update users set lastName= ?, fristName= ?, email= ?, address= ? where id= ?', [lastName, fristName, email, address, id])
    return res.status(200).json({
        message: 'hello update'
    })
}
let deleteUser = async(req, res) => {
    let userId = req.params.id
    if(!userId) {
        return res.status(200).json({
            message: 'missing',
        })
    }
    await pool.execute('delete from users where id= ?', [userId])
    return res.status(200).json({
        message: 'okeey deleteUser'
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    upDateUser,
    deleteUser,
}