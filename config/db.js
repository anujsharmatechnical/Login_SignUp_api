const mongoose = require("mongoose");
//database connection
mongoose.connect("mongodb://localhost:27017/Healthcare(api)",{useUnifiedTopology:true},{urlNewParser:true}).then(()=>{
 console.log("database connected")
})
.catch((err)=>{
    console.log(err);

})
