// // const http=require("http");
// import http from "http";

// // const name=require("./features");
// // import name,{name1,name2} from "./features.js"

// // import { generateLovePercent } from "./features.js";
// // console.log(generateLovePercent())

// const server=http.createServer((req,res)=>{

//     console.log(req.method);

//     if(req.url=="/about"){
//         res.end("<h1>This is About Page</h1>");
//     }
//     else if(req.url=="/"){
//         res.end("<h1>Home Page</h1>");
//     }
//     else if(req.url=="/contact"){
//         res.end("<h1>Contact Page</h1>");
//     }
//     else{
//         res.end("<h1>Page not found</h1>");
//     }

// });

// server.listen(5000,()=>{
//     console.log("Server is working");
// })