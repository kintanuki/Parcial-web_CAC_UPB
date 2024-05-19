import BooksInterface from "../types/librosInterface.js";

export default class IndexModel {
  constructor() {
    console.log("IndexModel");
  }
  public async getBook(pagina: number): Promise<BooksInterface[]> {
    return await new Promise((resolve, reject) => {
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
  }
  public async getAuthor(author: string): Promise<BooksInterface[]> {
    return await new Promise((resolve, reject) => {
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
  }
}
