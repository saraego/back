import index from "./index"
require('dotenv').config()

index.listen(process.env.PORT ,()=>{
    console.log("serve started");
})