const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DataSchema = Schema({
    data: { type: JSON }
})

mongoose.model('Data', DataSchema);