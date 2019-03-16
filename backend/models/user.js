const mongoose = require('mongoose');
Schema = mongoose.Schema;

let clientSchema = new Schema({
    ":20":{type:String, default:''},	
    ":22A":{type:String, default:''},	
    ":22C":{type:String, default:''},	
    ":30T":{type:String, default:''},	
    ":52A":{type:String, default:''},	
    ":82A":{type:String, default:''},	
    ":87A":{type:String, default:''},	
    ":77H":{type:String, default:''},	
    ":30V":{type:String, default:''},	
    ":36":{type:String, default:''},	
    ":32B":{type:String, default:''},	
    ":57A":{type:String, default:''},	
    ":33B":{type:String, default:''},	
    ":53A":{type:String, default:''},	
    ":56":{type:String, default:''},	
    ":57D":{type:String, default:''},	
    ":58A":{type:String, default:''},	
    ":24D":{type:String, default:''}
});

let sampleSchema = new Schema({
    ":20":{type:String, default:''},	
    ":22A":{type:String, default:''},	
    ":22C":{type:String, default:''},	
    ":30T":{type:String, default:''},	
    ":52A":{type:String, default:''},	
    ":82A":{type:String, default:''},	
    ":87A":{type:String, default:''},	
    ":77H":{type:String, default:''},	
    ":30V":{type:String, default:''},	
    ":36":{type:String, default:''},	
    ":32B":{type:String, default:''},	
    ":57A":{type:String, default:''},	
    ":33B":{type:String, default:''},	
    ":53A":{type:String, default:''},	
    ":56":{type:String, default:''},	
    ":57D":{type:String, default:''},	
    ":58A":{type:String, default:''},	
    ":24D":{type:String, default:''}
});

mongoose.model('clientdatas', clientSchema);
mongoose.model('sgdatas', sampleSchema);