//importar a dependencia do sqlite3
//verbose me da mensagens no terminal quando algo acontece fica verboso
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")


module.exports = db


// utilizar o objeto de banco de dados, para nossas operações

/*  db.serialize(() => {
    //Com comandos sql eu vou
    // 1 criar uma tabela no banco de dados
    //db.run(`
    //    CREATE TABLE IF NOT EXISTS places (
    //        id INTEGER PRIMARY KEY AUTOINCREMENT,
    //        image TEXT,
    //        name TEXT,
    //        address TEXT,
    //        address2 TEXT,
    //        state TEXT,
    //        city TEXT,
    //        items TEXT
    //    );
    //`)
    
    // 2 inserir dados na tabela
    const query = `
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        "https://images.unsplash.com/photo-1578422557421-0a9580fcaca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=60",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Numero 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]
    
    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado Com Sucesso")
        console.log(this)
    }


    db.run(query, values, afterInsertData) //n quero mais que ele insira dados  
    // 3 consultar dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        
        console.log("Aqui estão seus registros")
        console.log(rows)
    })
     // 4 Para deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [2], function(err){
        if(err) {
            return console.log(err)
        }
        
        console.log("Registro deletado com sucesso!")
    })
    // para cada ? nos precisamos de uma coleção de ? no caso [] 
})  */