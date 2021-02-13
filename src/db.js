const mongoose = require('mongoose')

module.exports={
    connect:DB_HOST=>{
        mongoose.set('useNewUrlParser',true);
        mongoose.set('useFindAndModify',false);
        mongoose.set('useCreateIndex',true);
        mongoose.set('useUnifiedTopology',true);
        mongoose.connect(DB_HOST)
        .then(()=>{
            console.log("Connected to Database.")
        })
        .catch((err)=>{
            console.log(`Error connceting to the Database. \n ${err}`);
        })
    },

    close:()=>{
        mongoose.connection.close();
    }
}