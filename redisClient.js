import { createClient } from "redis";
const RedisClient=createClient({url: "redis://localhost:6379"})
await RedisClient.connect();
export default RedisClient