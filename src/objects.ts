// Type
type Order = {
    productId: string
    price: number
}

type User = {
    firstName: string
    age: number
    email:  string
    password?: string
    orders: Order[]
    register(): string
}

const user: User = {
    firstName: 'Tiago',
    age: 30,
    email: 'teste@teste.com',
    orders: [{productId:"1", price: 200}],
    register(){
        return "texto"
    }
}

const printLog = (message:string) => {}

printLog(user.password!)

// Unions
type Author = {
    books: string[]
}

const author: Author & User = {
    age:2,
    books:["Harry Potter"],
    email: "author@email.com",
    firstName: "Rowling",
    orders:[],
    register(){
        return "texto"
    }
}

// Interfaces 
interface UserInterface{
    readonly firstName: string;
    email: string
    login():string
}

const emailUser: UserInterface = {
    email:"interface@email.com",
    firstName: "Hermione",
    login(){
        return "login"
    }
}

interface AuthorInterface{
    books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
    email: 'author-interface@email.com',
    firstName: 'Roni',
    books:[],
    login(){
        return "login"
    }
}

type Grade = number | string
const garde: Grade = 1