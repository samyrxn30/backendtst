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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarUser = exports.createOrder = exports.createUser = exports.prisma = void 0;
var client_1 = require("@prisma/client");
var jwtjson_1 = require("../jwt/jwtjson");
exports.prisma = new client_1.PrismaClient();
var createUser = function (clientedata, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, e_1, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, exports.prisma.cliente.create({
                        data: {
                            email: clientedata.email,
                            nome: clientedata.nome,
                            idade: clientedata.idade,
                        },
                    })];
            case 1:
                user = _a.sent();
                return [2 /*return*/, "Usu\u00E1rio ".concat(user.nome, " criado com sucesso!")];
            case 2:
                e_1 = _a.sent();
                error = JSON.stringify(e_1);
                res === null || res === void 0 ? void 0 : res.status(500).json({ error: error });
                return [2 /*return*/, error];
            case 3: return [2 /*return*/];
        }
    });
}); }; //create user end point createuser
exports.createUser = createUser;
var createOrder = function (orderCliente) { return __awaiter(void 0, void 0, void 0, function () {
    var email, createisnerciotion, tokenjwt, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, exports.prisma.cliente.findUnique({
                        where: {
                            email: orderCliente.email,
                        },
                    })];
            case 1:
                email = _a.sent();
                if (!email) {
                    throw new Error('Usuário não encontrado');
                }
                return [4 /*yield*/, exports.prisma.cadastro.create({
                        data: {
                            descricao: orderCliente.descricao,
                            Cliente_email: orderCliente.email,
                        },
                    })];
            case 2:
                createisnerciotion = _a.sent();
                return [4 /*yield*/, (0, jwtjson_1.createToken)(orderCliente)]; //criação do token pos create pedido
            case 3:
                tokenjwt = _a.sent() //criação do token pos create pedido
                ;
                return [2 /*return*/, "Seu pedido foi retornado com sucesso e seu token  \u00E9 ".concat(tokenjwt, ", seu id e ").concat(createisnerciotion.id)];
            case 4:
                e_2 = _a.sent();
                return [2 /*return*/, "Erro: ".concat(e_2)];
            case 5: return [2 /*return*/];
        }
    });
}); }; //create order  and  token acess system. 
exports.createOrder = createOrder;
// para depois a exclçusao e 
//update dos datas...
var buscarUser = function (email_cliente) { return __awaiter(void 0, void 0, void 0, function () {
    var email, e_3, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, exports.prisma.cliente.findUnique({
                        where: {
                            email: email_cliente.email,
                        },
                    })];
            case 1:
                email = _a.sent();
                if (!email) {
                    throw new Error('Usuário não encontrado');
                }
                return [2 /*return*/, email];
            case 2:
                e_3 = _a.sent();
                error = e_3;
                return [2 /*return*/, "failed ".concat(error)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.buscarUser = buscarUser;
