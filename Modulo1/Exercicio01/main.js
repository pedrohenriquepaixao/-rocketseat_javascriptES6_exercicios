class Usuario {
    constructor(Email,Senha){
        this.Email = Email;
        this.Senha = Senha;
    }

    isAdmin(){
        return this.admin === true;
    }
}

class Admin  extends Usuario{
    constructor(){
        super()
        admin = true;
    }
    
}

const Usuario1 = new Usuario("Pedro@pedro.com","123456")
const Admin1 = new Admin("Pedro2@pedro.com","123456")

console.log(Admin1)
console.log(Usuario1.isAdmin())
console.log(Admin1.isAdmin())