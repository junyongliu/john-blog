module.exports = {
themeConfig:{
sidebar:{
"/node/":[
["", "node目录"],
["path", "作为前端也需要知道的路径知识"],
["stream", "node核心模块-stream"]
],
"/web/":[
["", "前端"],
{
title: "css",
name: "css",
collabsable: false,
children: [
["css/", "目录"],
['css/1', "css常考面试题"]
]
}
]
}
}
}
