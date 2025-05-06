const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kunal:kunal@cluster0.acncl.mongodb.net/');

const User_Schema = new mongoose.Schema({
    first_name : {
        type : String,
        required : true
    } , 
    last_name : {
        type : String,
        required : true
    } , 
    username : {
        type : String,
        required : true,
        unique : false
    } , 
    password : {
        type : String,
        required : true
    }
} , {timestamps : true})


const File_Schema = new mongoose.Schema({
    file_url : {
        type : String,
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ab_users'
    } 
} , {timestamps :true})

const Result_Schema = new mongoose.Schema({
    file_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ab_files'
    } , 
    result : {
        type : Array
    }
},{timestamps : true})

const Users = mongoose.model('ab_users' , User_Schema);
const Files = mongoose.model('ab_files' , File_Schema);
const Results = mongoose.model('ab_results' , Result_Schema);

module.exports = {
    Users,
    Files,
    Results
}