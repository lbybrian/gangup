const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

//const time = require('../../src/filters/index.js')

	
module.exports.createDbMap= function (dbname,mapname,obj){
	mongoClient.connect('mongodb://127.0.0.1:27017',{ useUnifiedTopology: true },function(err,client){
			if(err){
				console.log('创建数据库连接失败')
			}
//			else if(dbname){
//				console.log('名为',dbname,'的数据库已存在')
//				if(mapname){
//					console.log('名为',mapname,'的集合已存在')
//				}
//				else{
//					db.collection(mapname).insertOne(obj)
//					console.log('新集合：',mapname)
//				}
//			}
			else{
				const db = client.db(dbname)
				console.log('创建数据库成功：',dbname)
//				cb(db)
				db.collection(mapname).insertOne(obj)
				console.log('新集合：',mapname)
			}
		})
//	_connect(function(db){
//			console.log('创建数据库成功！新数据库：',mapname)
//			
//	},mapname)
}

module.exports.findDb=function(dbname,mapname,obj){
	mongoClient.connect('mongodb://127.0.0.1:27017',{ useUnifiedTopology: true },function(err,client){
			if(err){
				console.log('查找数据库失败')
			}
//			else if(dbname){
//				console.log('名为',dbname,'的数据库已存在')
//				if(mapname){
//					console.log('名为',mapname,'的集合已存在')
//				}
//				else{
//					db.collection(mapname).insertOne(obj)
//					console.log('新集合：',mapname)
//				}
//			}
			else{
				const db = client.db(dbname)
				db.collection(mapname).insertOne(obj)
				console.log('新集合：',mapname)
			}
		})
//	_connect(function(db){
//			console.log('创建数据库成功！新数据库：',mapname)
//			
//	},mapname)
}

//createDbMap('csdbs','csxjh',{username:'练习创建数据库集合',content:'我没有说谎，我何必说谎',time:getTime()})
