"use strict";
// Configuração do Redis
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFromCache = getFromCache;
exports.setFromCache = setFromCache;
const ioredis_1 = __importDefault(require("ioredis"));
// Fallbacks padrões
const fallbackHost = '127.0.0.1';
const fallbackPort = 6379;
// Pegando variáveis de ambiente e forçando a tipagem correta
const redisHost = process.env.REDIS_IP_HOST || fallbackHost;
const redisPortEnv = process.env.REDIS_PORT;
const redisPort = redisPortEnv ? Number(redisPortEnv) : fallbackPort;
if (!redisHost || !redisPort) {
    throw new Error("❌ Error - REDIS_IP_HOST ou REDIS_PORT não definidos ou inválidos no .env");
}
const redis = new ioredis_1.default({
    host: redisHost,
    port: redisPort,
});
// função para pegar os valores da memoria ram\cache
function getFromCache(key) {
    return __awaiter(this, void 0, void 0, function* () {
        const cache = yield redis.get(key);
        if (cache) {
            return JSON.parse(cache);
        }
        return null;
    });
}
// função para enviar dados para a memoria ram/cache
function setFromCache(key, value) {
    return __awaiter(this, void 0, void 0, function* () {
        yield redis.set(key, JSON.stringify(value), 'EX', 3600);
    });
}
//# sourceMappingURL=cache.js.map