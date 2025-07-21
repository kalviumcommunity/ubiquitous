const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
app.use(express.json());


app.use('/',(req,res)=>{
  res.status(200).json({ message: 'Backend working fine' })
})


connectDB();

const PORT = process.env.PORT || 5000;

//port 
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});