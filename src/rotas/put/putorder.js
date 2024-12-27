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
exports.UpdateValues = exports.verificationexitence = exports.queryparamsID = void 0;
var jwtjson_1 = require("../../jwt/jwtjson");
var mil_1 = require("../../mildwaare/mil");
var estrutura_1 = require("../../database/estrutura");
var yup = require("yup");
var databasefuc_1 = require("../../database/databasefuc");
exports.queryparamsID = (0, mil_1.MildawareValidationSchema)({
    query: yup.object().shape({
        idhash: yup.string().required().max(300)
    }),
    body: yup.object().shape({
        id: yup.number().required().max(18),
        email: yup.number().required().max(60),
        newdescricao: yup.string().required().max(300)
    }),
}); //validate values, case of brute force data email or description or id...
var verificationexitence = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var idOrder, reqdata, verificationauthtoKEN, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idOrder = req.query;
                reqdata = JSON.parse(JSON.stringify(req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, jwtjson_1.jwt.verify(idOrder, jwtjson_1.keysecret)];
            case 2:
                verificationauthtoKEN = _a.sent();
                if (verificationauthtoKEN.id == reqdata.id) {
                    next();
                }
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); }; //verificar se o id e compativel com o token, caso nao seja fudeu
exports.verificationexitence = verificationexitence;
var UpdateValues = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var reqdata, Estrutra_udpate, result, searchUser_and_Update, e_2, error_descrition_failed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                reqdata = JSON.parse(JSON.stringify(req.body));
                Estrutra_udpate = new estrutura_1.UpdateOrderCliente(reqdata, reqdata.descricao);
                result = Estrutra_udpate.udpatedata();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, databasefuc_1.prisma.cadastro.update({
                        where: {
                            id: result.id
                        },
                        data: {
                            descricao: result.descricao
                        },
                        select: {
                            descricao: true
                        },
                    })];
            case 2:
                searchUser_and_Update = _a.sent();
                res.json({
                    update: true, dataUpdate: "seu dados atualizados sao ".concat(searchUser_and_Update.descricao)
                });
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                error_descrition_failed = e_2;
                res.json({
                    update: false, dataUpdate: "suas informa\u00E7\u00F5es nao foram atualizados pois ".concat(error_descrition_failed)
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); }; //aero fuction of update data of order client. The  next fuction sample information data order client.
exports.UpdateValues = UpdateValues;
