
// Configuração do Redis

import Redis from "ioredis";

// Fallbacks padrões
const fallbackHost = '127.0.0.1';
const fallbackPort = 6379;

// Pegando variáveis de ambiente e forçando a tipagem correta
const redisHost: string = process.env.REDIS_IP_HOST || fallbackHost;
const redisPortEnv = process.env.REDIS_PORT;
const redisPort: number = redisPortEnv ? Number(redisPortEnv) : fallbackPort;

if (!redisHost || !redisPort) {
  throw new Error("❌ Error - REDIS_IP_HOST ou REDIS_PORT não definidos ou inválidos no .env");
}

const redis = new Redis({
  host: redisHost,
  port: redisPort,
});

// função para pegar os valores da memoria ram\cache
export async function getFromCache(key:string) {
    const cache = await redis.get(key);
    if(cache) {
        return JSON.parse(cache);
    }
    return null;
}

// função para enviar dados para a memoria ram/cache
export async function setFromCache(key:string, value:any){
    await redis.set(key, JSON.stringify(value), 'EX', 3600);
}

