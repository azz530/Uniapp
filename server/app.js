const express = require('express');
const app = express();
const cors = require('cors');
const { expressjwt: jwt } = require('express-jwt');
const config = require('./config');
const userRouter = require('./router/user');
const userPowerRouter = require('./router/userPower');


app.use(cors());
app.use(express.urlencoded({ extended: false }));//配置解析表单数据的中间件
app.use(express.json());

app.use((req, res, next) => {
    res.cc = function (err, status = 0) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err,
        })
    }
    next();
})

//解析token的中间件
app.use(jwt({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api/] }));

app.use('/api',userRouter);
app.use('/my',userPowerRouter);

//错误中间件
app.use((err,req,res,next)=>{
    if(err.name === 'UnauthorizedError'){
        return res.cc('身份认证失败',401);
    }
})
app.listen(config.port,()=>{
    console.log(`Server running at http://127.0.0.1:${config.port}`);
})