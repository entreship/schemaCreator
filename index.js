var http = require('http')
var fs = require('fs')

var express = require('express')
const { query } = require('express')
var app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())

async function schema(data) {
    const key1 = data.key1;
    const type1 = data.type1
    const key2 = data.key2;
    const type2 = data.type2
    const key3 = data.key3;
    const type3 = data.type3
    const key4 = data.key4;
    const type4 = data.type4

    if (!key2 || !type2) {

        var result =
            `const mongoose = require('mongoose')
        let adminSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        ${key1}: ${type1}
       
    })`
    } else if (!key3 || !type3) {

        var result =
            `const mongoose = require('mongoose')
        let postSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        ${key1}: ${type1},
        ${key2}: ${type2}
       })
       const Post = mongoose.model("Post", postSchema);
       module.exports = Post;`
    } else if (!key4 || !type4) {


        var result =
            `const mongoose = require('mongoose')
        let adminSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        ${key1}: ${type1},
        ${key2}: ${type2},
        ${key3}: ${type3}
    })
    const Post = mongoose.model("Post", postSchema);
    module.exports = Post;`

    } else {
        var result =
            `const mongoose = require('mongoose')
    let adminSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        ${key1}: ${type1},
        ${key2}: ${type2},
        ${key3}: ${type3},
        ${key4}: ${type4}
    })
    const Post = mongoose.model("Post", postSchema);
    module.exports = Post;`
    }
    fs.writeFile('demo.js', result, (err) => {
        console.log("write done")
    })
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/demo.html")
})
app.post('/', (req, res) => {
    console.log(req.body)

    schema(req.body)


    res.sendFile(__dirname + "/demo.js")
})
app.listen(8000)




















// http.createServer((req, res) => {
//     fs.readFile('schema.html', (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write(data)
//         return res.end()
//     })

//     fs.writeFile('demo.js', '', (err) => {
//         console.log("write done")
//     })
// }).listen(8000)