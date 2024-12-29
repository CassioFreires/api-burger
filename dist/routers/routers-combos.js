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
const controller_combos_1 = __importDefault(require("../controllers/controller-combos"));
const combosRouter = express_1.default.Router();
const controllerCombos = new controller_combos_1.default();
combosRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerCombos.create(req, res);
}));
combosRouter.get('/getAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerCombos.getAll(req, res);
}));
combosRouter.get('/getById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerCombos.getById(req, res);
}));
combosRouter.patch('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerCombos.update(req, res);
}));
combosRouter.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerCombos.exclude(req, res);
}));
exports.default = combosRouter;
//# sourceMappingURL=routers-combos.js.map