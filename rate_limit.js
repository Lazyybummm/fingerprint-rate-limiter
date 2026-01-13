import RedisClient from "./redisClient.js";

async function middleware(req,res,next){
    try{
    const limit=3;
    const key=req.body.key;
    const exists=await RedisClient.get(key)
    if(exists==null){//new entry created for user 
        await RedisClient.set(key,1)
        return next();//move on with your task
    }
    else{
        if(Number(exists)==3){
            return res.status(429).json({message:"limit reached"})
        }
        else{
            await RedisClient.incr(key);
            return next();
        }
    }
}catch(e){
    console.log("error occured:",e)
}

}

export default middleware