const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
//const time = require('../../src/filters/index.js')
//获取及时时间
	const getTime = function(){
		let date = new Date();
		return date.getFullYear().toString().padStart(2,'0')+'-'+(date.getMonth()+1).toString().padStart(2,'0')+'-'+date.getDate().toString().padStart(2,'0')+' '+date.getHours().toString().padStart(2,'0')+':'+date.getMinutes().toString().padStart(2,'0')+':'+date.getSeconds().toString().padStart(2,'0')
	}
	
	function _connect(dbn) {
	    return new Promise(function (resolve,reject) {
	        mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true , useUnifiedTopology: true },function (err,client) {
	            // 保证你的数据库是挂起状态
	            if(err){
	                reject("连接数据库失败");
	            }else{
	                // 你要操作的数据库
	                const db = client.db(dbn);
	                resolve(db);
	            }
	        })
	    })
	}
	


//向数据库插入一条数据
module.exports.insertOne= async (dbname,jh,obj)=>{
	const db = await _connect(dbname)
	return new Promise((resolve,reject)=>{
		db.collection(jh).insertOne(obj,(err,results)=>{
			if(err){
				reject(err)
			}else{
				resolve(results)
			}
		})
	})
}
//获取数据
module.exports.find = async function (dbname,jh,obj={}) {
    const db = await _connect(dbname);
//  const dbname = dbname;
    return new Promise(function (resolve,reject) {
        db.collection(jh).find(obj).toArray(function (err,results) {
            if(err) reject(err);
            else resolve(results);
        })
    })
}


//删除一条数据
module.exports.deleteOneById = async (dbname,jh,id)=>{
	const db = await _connect(dbname);
	return new Promise((resolve,reject)=>{
		db.collection(jh).deleteOne({_id:mongodb.ObjectId(id)},function(err,results){
			if(err){
				reject(err)
			}
			else{
				resolve(results)
			}
		})
	})
}

//统计条数
module.exports.count = async (dbname,jhname,obj={})=>{
	const db = await _connect(dbname)
	return new Promise((resolve,reject)=>{
		db.collection(jhname).countDocuments(obj).then(count=>{
			resolve(count)
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
