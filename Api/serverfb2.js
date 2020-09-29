const express =require('express')
const app = express()
const request =require('request')

const path = require('path')
app.use(express.static(path.resolve(__dirname,'../')))//将gangup设为根路径
//console.log(path.resolve(__dirname,'../'))

const db = require('./modules/db')
//db.insertOne('cslist',{csdata:'测试项目中3',hehe:'呵呵',time:Date()})

app.all("*",function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Methods","GET,DELETE,PUT,POST");
	res.header("Access-Control-Allow-Headers","content-type");
	next();
});
//测试创建数据库集合接口
//app.get('/createdb',function(req,res){
//	db.insertOne('csdbs','csxjh',{username:'外部添加测试3',content:'我没有说谎，我何必说谎',time:getTime()})
//	db.
//	res.json({
//		ok:'1',
//		msg:'没问题哦',
//		datalist,
//		
//	})
//})
//入驻拉勾网接口
app.get("/lagougou",function(req,res){
//	request(`https://m.lagou.com/listmore.json?pageNo=2&pageSize=15`,function(err,response,body){
	const {pageNo=1,pageSize=5} = req.query;//如果前段不传值默认为pageNo=2,pageSize=15
	request(`https://m.lagou.com/listmore.json?pageNo=${pageNo}&pageSize=${pageSize}`,function(err,response,body){
//		console.log(body)
		if(!err&&response.statusCode===200){
			res.json(JSON.parse(body).content.data.page.result)
		}
		else{
			res.json({
				ok:'-1',
				msg:'网络错误'
			})
		}
	})
})

//从数据库获取数据
app.get('/getdb',async (req,res)=>{
	const dataList= await db.find('cslist')
	res.json({
		ok:1,
//		aa:dataList,
		dataList,
		msg:'数据啊',
	})
})

//pay向数据库添加数据x`
app.get('/tianjia',(req,res)=>{
	db.insertOne('cslist',{csdata:'测试接口添加3',hehe:'第3次',time:Date()})
	res.json({
		ok:1,
		cs:'测试成功'
	})
})

app.listen(8090,function(){
	console.log('success')
})
	