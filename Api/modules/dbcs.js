const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

//const time = require('../../src/filters/index.js')
//获取及时时间
	const getTime = function(){
		let date = new Date();
		return date.getFullYear().toString().padStart(2,'0')+'-'+(date.getMonth()+1).toString().padStart(2,'0')+'-'+date.getDate().toString().padStart(2,'0')+' '+date.getHours().toString().padStart(2,'0')+':'+date.getMinutes().toString().padStart(2,'0')+':'+date.getSeconds().toString().padStart(2,'0')
	}
	
//function _connect(cb){
//	mongoClient.connect("mongodb://127.0.0.1:27017",{ useUnifiedTopology: true },function(err,client){
//		if(err){
//			console.log('连接数据库失败')
//		}
//		else{
//			console.log("连接数据库成功--db",getTime())
//			const db = client.db('cs')
//			cb(db)
//		}
//	})
//}

function _connect() {
    return new Promise(function (resolve,reject) {
        mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true , useUnifiedTopology: true },function (err,client) {
            // 保证你的数据库是挂起状态
            if(err){
                reject("连接数据库失败");
            }else{
                // 你要操作的数据库
                const db = client.db("cs");
                resolve(db);
            }
        })
    })
}

//向数据库插入一条数据
module.exports.insertOne=(jh,obj)=>{
	_connect((db)=>{
		db.collection(jh).insertOne(obj,(err,results)=>{
			if(err){
				console.log('添加失败')
			}else{
				console.log('添加成功',results)
			}
		})
	})
}
//获取数据
//module.exports.databsae =()=>{
//	_connect((db)=>{
//		db.collection('cslist').find().toArray((err,res)=>{
//			if(err){
//				console.log('查询数据失败')
//			}
//			else{
//				console.log('获取数据成功',)
//				return res;
//			}
//		})
//	})
//}

module.exports.find = async function (coll) {
    const db = await _connect();
    return new Promise(function (resolve,reject) {
        db.collection(coll).find().toArray(function (err,results) {
            if(err) reject(err);
            else resolve(results);
        })
    })
}
//mongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
//	if(err){
//		console.log('')
//	}
//	else{
//		//要操作的数据库
//		const db = client.db('dba');
//		db.collection('aa').insert({userName:"测试",age:13,hobby:"xxxxxxxxxxx"},function(err,res){
//			if(err){
//				console.log("插入失败")
//			}
//			else{
//				console.log("插入成功",res)
//			}
//		})
//	}
//})
