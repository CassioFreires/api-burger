"use strict";
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
const express_1 = __importDefault(require("express"));
const controllers_promocoes_1 = __importDefault(require("../controllers/controllers-promocoes"));
const RoleMiddleware_1 = require("../middlewares/RoleMiddleware");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const promotionsRouter = express_1.default.Router();
const controllerPromotions = new controllers_promocoes_1.default();
promotionsRouter.post('/create', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerPromotions.create(req, res);
}));
promotionsRouter.get('/getAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerPromotions.getAll(req, res);
}));
promotionsRouter.get('/getById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerPromotions.getById(req, res);
}));
promotionsRouter.patch('/update/:id', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerPromotions.update(req, res);
}));
promotionsRouter.delete('/delete/:id', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerPromotions.exclude(req, res);
}));
exports.default = promotionsRouter;
//# sourceMappingURL=routers.promotions.js.map