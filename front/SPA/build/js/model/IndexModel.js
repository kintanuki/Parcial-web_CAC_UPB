var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class IndexModel {
    constructor() {
        console.log("IndexModel");
    }
    getBook(pagina) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                const response = fetch(`http://localhost:1802/books/${pagina}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                response
                    .then((data) => {
                    resolve(data.json());
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
    getAuthor(author) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                const response = fetch(`http://localhost:1802/books/author/${author}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                response
                    .then((data) => {
                    resolve(data.json());
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
}
