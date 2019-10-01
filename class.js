//ES6 permite a criação de classes e a herança entre classes.
class List {
    constructor() {
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

/*extends de List - portanto TodoList é do tipo List
herdando variáveis e métodos da classe.
quando criado um construtor na classe que herda é importante 
lembra de invocar o contrutor da classe herdade por meio do super.*/
class TodoList extends List{
    constructor() {
        super();

        this.usuario = "Felipe";
    }     
}

const MinhaLista = new TodoList();

//MinhaLista consegue utilizar o método add da classe List.
document.getElementById("novoTodo").onclick = function(){
    MinhaLista.add('NovoTODO'); 
}