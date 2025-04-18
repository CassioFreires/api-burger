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
const service_user_1 = __importDefault(require("../services/service-user"));
const dto_login_users_1 = __importDefault(require("../dtos/Users/dto-login-users"));
const authUtils_1 = require("../utils/authUtils");
const dto_create_users_1 = __importDefault(require("../dtos/Users/dto-create-users"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dto_update_users_1 = __importDefault(require("../dtos/Users/dto-update-users"));
const twilio_1 = __importDefault(require("twilio"));
const nodemailer_1 = __importDefault(require("nodemailer"));
// Configurar o Twilio para enviar SMS
const client = (0, twilio_1.default)(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
// Função para enviar o e-mail com o código de autenticação
const sendEmail = (email, code) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail', // Usando Gmail como serviço SMTP
        auth: {
            user: 'cassiosouzaaa2@gmail.com', // Seu e-mail
            pass: 'fozs dccy rlgx ahga' // Sua senha de e-mail (ou senha de app no Gmail)
        }
    });
    const mailOptions = {
        from: 'cassiosouzaaa2@gmail.com', // Remetente
        to: email, // Destinatário
        subject: 'Código de Autenticação', // Assunto do e-mail
        text: `Seu código de autenticação é: ${code}`, // Corpo do e-mail
    };
    try {
        yield transporter.sendMail(mailOptions);
        console.log('Código de autenticação enviado por e-mail');
    }
    catch (error) {
        console.error('Erro ao enviar e-mail:', error);
    }
});
const generate2FACode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Gera um código de 6 dígitos
};
class ControllerUsers {
    constructor() {
        this.serviceUser = new service_user_1.default();
    }
    verify2fa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { code } = req.body;
                if (!req.session.twoFactorCode || !req.session.twoFactorExpires) {
                    return res.status(400).json({ message: 'Sessão inválida ou expirada' });
                }
                if (Date.now() > req.session.twoFactorExpires) {
                    return res.status(401).json({ message: 'Código expirado. Tente novamente.' });
                }
                if (code !== req.session.twoFactorCode) {
                    return res.status(401).json({ message: 'Código inválido' });
                }
                const user = req.session.userData;
                if (!user) {
                    return res.status(400).json({ message: 'Dados do usuário não encontrados na sessão' });
                }
                const token = (0, authUtils_1.generateToken)({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    roles: user.role_name,
                });
                // Limpar o 2FA da sessão
                delete req.session.twoFactorCode;
                delete req.session.twoFactorExpires;
                delete req.session.userData;
                return res.status(200).json({ message: '2FA verificado com sucesso', token });
            }
            catch (error) {
                console.error("❌ Erro na verificação 2FA:", error);
                return res.status(500).json({ message: 'Erro interno no servidor' });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password_hash } = req.body;
                if (!email || !password_hash) {
                    return res.json({ message: 'Invalid Login', status: 401 });
                }
                const loginDto = new dto_login_users_1.default(email, password_hash);
                const response = yield this.serviceUser.loginService(loginDto);
                if (!response || response == null)
                    return res.status(401).json({ message: 'Invalid creadentials', status: 401 });
                // comparando a senha do formulario com a criptgrafada que está na base
                const isPasswordEquals = yield bcryptjs_1.default.compare(password_hash, response.password_hash);
                if (!isPasswordEquals)
                    return res.json({ message: 'Invalid credentials', status: 401 });
                console.log(response);
                // Verificar se o 2FA está ativado para o usuário
                if (response.is2FAEnabled) {
                    const code = generate2FACode(); // Gerar código 2FA
                    console.log(code);
                    // ⚠️ Salvar os dados do usuário para uso depois do 2FA
                    req.session.userData = {
                        id: response.id,
                        name: response.name,
                        email: response.email,
                        role_name: response.role_name
                    };
                    // Salvar o código temporariamente (em memória ou banco de dados) e enviar via SMS
                    req.session.twoFactorCode = code;
                    req.session.twoFactorExpires = Date.now() + 5 * 60 * 1000; // Expira em 5 minutos
                    // await send2FACode(response.phoneNumber, code); // Enviar código por SMS
                    yield sendEmail('cassio.souza@ancar.com.br', code); // Enviar código por SMS
                    return res.json({ message: 'Código 2FA enviado. Insira o código para continuar', status: 200 });
                }
                const token = (0, authUtils_1.generateToken)({ id: response.id, name: response.name, email: response.email, roles: response.role_name });
                // res.json({ message: 'login OK', status: 201, response, token });
                res.json({
                    "message": "Código 2FA enviado. Insira o código para continuar",
                    "status": 200
                });
                return token;
            }
            catch (error) {
                // Lidar com erros de forma consistente
                console.error(error);
                return res.status(500).json({ message: 'Internal Server Error', status: 500 });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // registrar usuário
                const { name, email, password_hash, confirm_password } = req.body;
                if (!name || !email || !password_hash || !confirm_password)
                    return res.status(401).json({ message: 'You need to fill all fields' });
                if (password_hash !== confirm_password)
                    return res.status(401).json({ message: 'Passwords are not the same' });
                // modelo do usuário
                const newCreateUser = new dto_create_users_1.default(name, email, password_hash);
                // busca o usuário na base
                const getUser = yield this.serviceUser.getByEmailService(newCreateUser.email);
                if (getUser)
                    return res.status(401).json({ message: 'This e-mail already exist', status: 401 });
                const create = this.serviceUser.registerService(newCreateUser);
                return res.status(201).json({ message: 'User created successfully', status: 201, create });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Failed to register user', status: 500 });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.serviceUser.getAllService();
                if (!users)
                    return res.status(401).json({ message: "Users not found", status: 401 });
                return res.json({ message: 'Get all users successfully', users });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Failed to getAll user', status: 500 });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.status(401).json({ message: '"id" user invalid', status: 401 });
                const user = yield this.serviceUser.getByIdService(Number(id));
                if (!user)
                    return res.status(401).json({ message: 'User not found by id', status: 401 });
                return res.json({ message: 'User find by id successfully', status: 401, user });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Failed to get by "id" user', status: 500 });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, email, password_hash, role_id, active } = req.body;
                if (!id || isNaN(Number(id)))
                    return res.status(401).json({ message: 'id invalid', status: 401 });
                if (!name && !email && !password_hash && !role_id && !active)
                    return res.status(401).json({ message: "You need to fill at least one field", status: 401 });
                const updateUserDTO = new dto_update_users_1.default(name, email, password_hash, role_id !== undefined ? role_id : undefined, active !== undefined ? active : undefined);
                const updateUser = yield this.serviceUser.updateService(Number(id), updateUserDTO);
                if (!updateUser || updateUser == null)
                    return res.status(401).json({ message: 'Error during the update user', status: 401 });
                return res.json({ message: "Update User successfully", updateUserDTO });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Failed to update user', status: 500 });
            }
        });
    }
    exclude(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.status(401).json({ message: 'id invalid', status: 401 });
                const deleteUser = yield this.serviceUser.excludeService(Number(id));
                if (!deleteUser || deleteUser == null)
                    return res.status(401).json({ message: 'User not found for delete' });
                return res.json({ message: 'User deleted successfully', deleteUser });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Failed to delete user', status: 500 });
            }
        });
    }
}
exports.default = ControllerUsers;
//# sourceMappingURL=controller-users.js.map