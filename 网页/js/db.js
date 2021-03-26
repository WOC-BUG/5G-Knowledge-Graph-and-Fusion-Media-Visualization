//db.js
const mysql = require("mysql");

const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    port:'3306',
    database:'db'
});

//连接数据库
connect.connect(function(err){
    if(err){
        console.log('MySQL connect failed: ${}!' + this.err);
    }else{
        console.log('MySQL connect succeed!');
        sqlQuery(connect);
    }
});

//查询
function sqlQuery(){
    let sqlQuery = "SELECT * FROM db.5g应用场景实例";
    connect.query(sqlQuery, function(err, result){
           if(err){
               console.log('SQL error: ${}!' + this.err)
            }else{
                console.log(result);//展示查询结果
                closeMysql(connect);
            }
        });
}

//关闭数据库
function closeMysql(connect){
    connect.end(err=>{
        if(err){
            console.log('MySQL close failed: ${}!' + this.err);
        }else{
            console.log('MySQL close succeed!');
        }
    });
}

