const express =require('express')
const app = express()
const request =require('request')
const fs = require('fs')
const path = require('path')
app.use(express.static(path.resolve(__dirname,'../')))//将gangup设为根路径
//console.log(path.resolve(__dirname,'../'))
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const db = require('./modules/db')
const imageinfo = require("imageinfo");
app.all("*",function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Methods","GET,DELETE,PUT,POST");
	res.header("Access-Control-Allow-Headers","content-type");
	next();
});

//获取及时时间
	const getTime = function(){
		let date = new Date();
		return date.getFullYear().toString().padStart(2,'0')+'-'+(date.getMonth()+1).toString().padStart(2,'0')+'-'+date.getDate().toString().padStart(2,'0')+' '+date.getHours().toString().padStart(2,'0')+':'+date.getMinutes().toString().padStart(2,'0')+':'+date.getSeconds().toString().padStart(2,'0')
	}
	
	//获取本地json数据
app.get("/shuihuname",function(req,res){
	fs.readFile(__dirname+'/NAME.json',function(err,result){
//		console.log('KKKKKKKKKKK',result);
		res.json({
			ok:1,
			mes:'只要JSON格式正确就行的',
			names:JSON.parse(result)
		})
	})
})
//	//获取本地图片数据1
app.get("/getwhimg",function(req,res){
	let imagePath = __dirname+'../../'+'src/assets/imgs/mjwhj/';// imagePath 是图片在本地的路径  如 'D:\img\1.jpg'
	//console.log(imageDataToBase64)
	fs.readFile(imagePath,function(err,result){
//		let imageData = fs.readFileSync(imagePath)
//		let imageDataToBase64 = imageData.toString('base64');// 转成 base64
//获取文件夹下的所有图片
	var srclist=getFiles.getImageFiles(__dirname+'../../'+'src/assets/imgs/mjwhj/');
	var srcNewList=[];
	//console.log(srclist);
	srclist.forEach(function (item, index){
	// console.log(item);
	 if(item.split(".")[1]=='jpg'){
	  srcNewList.push({'imsrc':item})
	 }else{
	  srcNewList.push({'videosrc':item})
	 }
	})
		console.log('KKKKKKKKKKK',result);
		res.json({
			ok:1,
			mes:'success',
			imgslist:srcNewList
		})
	})
})

	//获取本地图片数据2
app.get("/getimgslist",function(req,res){
//	let imagePath = __dirname+'../../'+'/static/imgs/108/35512783_6.jpg';// imagePath 是图片在本地的路径  如 'D:\img\1.jpg'
	let imagePath = __dirname+'../../'+'/static/imgs/108/';// imagePath 是图片在本地的路径  如 'D:\img\1.jpg'
	//console.log(imageDataToBase64)
	fs.readFile(imagePath,function(err,result){
//		console.log('KKKKKKKKKKK',result);

	//获取文件夹下的所有图片
	var srclist=getFiles.getImageFiles(__dirname+'../../'+'static/imgs/108/');
	var srcNewList=[];
	//console.log(srclist);
	srclist.forEach(function (item, index){
	// console.log(item);
	 if(item.split(".")[1]=='jpg'){
	  srcNewList.push({'imsrc':item})
	 }else{
	  srcNewList.push({'videosrc':item})
	 }
	})
//console.log(srcNewList)
		res.json({
			ok:1,
			mes:'success',
			imgslist:srcNewList
		})
	})
})




//	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//获取项目工程里的图片
//var image = require("imageinfo"); //引用imageinfo模块
function readFileList(path, filesList) {
 var files = fs.readdirSync(path);
 files.forEach(function (itm, index) {
  var stat = fs.statSync(path + itm);
  if (stat.isDirectory()) {
   //递归读取文件
   readFileList(path + itm + "/", filesList)
  } else {
   var obj = {};//定义一个对象存放文件的路径和名字
   obj.path = path;//路径
   obj.filename = itm//名字
   filesList.push(obj);
  }
 })
}
var getFiles = {
 //获取文件夹下的所有文件
 getFileList: function (path) {
  var filesList = [];
  readFileList(path, filesList);
  return filesList;
 },
 //获取文件夹下的所有图片
 getImageFiles: function (path) {
  var imageList = [];
  this.getFileList(path).forEach((item) => {
   var ms = imageinfo(fs.readFileSync(item.path + item.filename));
   ms.mimeType && (imageList.push(item.filename))
  });
  return imageList;
 }
};

//	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

//删除一条通过ID
app.delete('/delete/:id',(req,res)=>{
//	console.log(1111111111111,req.params)
	db.deleteOneById('csdbs','csxjh',req.params.id)
	.then(results=>{
		res.json({
			ok:1,
			msg:'删除成功',
			results
		})
	}).catch(err=>{res.json({ok: -1, msg: "删除失败"})})
})

//获取所有数据
app.get('/getdbs',async (req,res)=>{
	const allDatas=await db.find('csdbs','csxjh');
	res.json({
		ok:1,
		msg:'全部数据来了',
		allDatas
	})
})
//获取分页数据
app.get('/getdb',async (req,res)=>{
//	console.log(req.query,'11111',req.params,1111111)
	let pageIndex = (req.query.PageIndex)/1 || 1;//接口处传过来的为大写P
	const limit =5;
	const count= await db.count('csdbs','csxjh')
	let pageSum = Math.ceil(count/limit);
	if(pageSum<1) pageSum=1;
	if(pageIndex<1) pageIndex=1;
	if(pageIndex>pageSum) pageIndex=pageSum;
	const dataList= await db.find('csdbs','csxjh',{},{time:-1},
        (pageIndex - 1) * limit,
        limit,
    )
//	console.log(req.query,count,pageSum,(pageIndex - 1) * limit,limit)
	res.json({
		ok:1,
		dataList,
		msg:'数据来了',
		pageIndex,
		pageSum
	})
})
//pay向数据库添加数据
app.post('/addnews',async (req,res)=>{
	const {context} = req.body;
	const count = await db.count(req.body.dbname,req.body.jhname,{content:context})
	if(count>0){
		res.json({
			ok:-1,
			msg:'您添加的数据已存在',
			context,
			count,//该添加内容的条数
		})
	}
	else{
		const datasss=db.insertOne(req.body.dbname,req.body.jhname,{username:'你没有隐私....来自数据库的嘲讽：',content:context,time:getTime()})
		res.json({
			ok:1,
			cs:'添加成功',
			datasss,
			count//总条数
		})
	}
})
//修改内容
app.put('/change/:id',(req,res)=>{
//	console.log(req.params,222222222,req.body)
	const id = req.params.id;
	const upcontent = req.body.upcontent;
	db.change(req.body.dbname,req.body.jhname,id,{
		content:upcontent
	}).then(()=>{
		res.json({
			ok:1,
			mdg:'修改成功'
		})
	}).catch((err)=>err)
})


app.listen(8090,function(){
	console.log('success')
})
	