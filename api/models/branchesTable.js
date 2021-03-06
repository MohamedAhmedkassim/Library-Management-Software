const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchesSchema = new Schema({
    name : {
        type : String, 
        unique :  true,
        required : [true, 'branch name is required']
    },
}
);
const Branches = mongoose.model('branches', branchesSchema);
module.exports = Branches;