const mongoose  = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/hostel')
// .then(()=>{
//     console.log("Database connection successfull");
// })
// .catch((e)=>{
//     console.log(e);
// })

mongoose.connect('mongodb+srv://shivam1:Shivam1@project.zpeoq.mongodb.net/hostelDB?retryWrites=true&w=majority')
.then(()=>{
    console.log("Database connection successfull");
})
.catch((e)=>{
    console.log(e);
})