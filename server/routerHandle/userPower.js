const db = require('../db');
const config = require('../config.js');

exports.getUserInfo = (req,res) =>{
    const uid = req.query.uid;
    const sql = 'select username,avatar,register_time from user where uid = ?';
    db.query(sql,uid,(err,result)=>{
        if(err){
            return res.cc(err.message)
        } else if(result.length<=0){
            return res.cc('该用户不存在',403)
        } else {
            result = JSON.parse(JSON.stringify(result))
            return res.send({
                status:200,
                message:'查询成功',
                data:result[0],
            })
        }
    })
}