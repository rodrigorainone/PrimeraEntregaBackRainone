class ProductManager {
    constructor (){
        this.products=[]
    }

    // metodos
    addProduct (title,description ,price,thumbnail,code,stock){

        const product ={ 
            title,
            description, 
            price, 
            thumbnail,
            code,
            stock
        }
        // si no hay ningun progducto pone el id en 1 , si no se fija cual es el ultimo el id del ultimo progroducto y le suma 1 
        if(this.products.length===0){
            product.id = 1;
        }else{
            product.id = this.products[this.products.length-1].id+1;
        }

        // validacion de que esten todos los datos por parametros
        if (title && description && price && thumbnail && code && stock ){
            const result = this.products.find(producto => producto.code===code);
            // valido que el codigo ingresado no sea el mismo qu otro existente
            if (result===undefined){
                this.products.push(product)
            } 
            else{
                return console.log("el codigo ya del producto ya existe")
            }                       
        }
        else{
            return console.log("alguno de los campos no fue completado")
        }
       
    }

    getProducts = () =>{
        return console.log(this.products);
    }
    getProductById = (id)=>{
        const productoPorId = this.products.find(element => element.id===id);
        if (productoPorId===undefined){
            return console.log('Not found')
        }
        else
            {
                return console.log(productoPorId)
            }        
    }
}

// prueba del script 

const rodrigo = new ProductManager();


rodrigo.getProducts()
rodrigo.addProduct ("hola","pepe",52,"imagen",455,2)
rodrigo.addProduct ("anahi","ernersto",52,"imagen",4561,5)
rodrigo.addProduct ("rodrigo32",52,"imagen",4566,2) // no lo agrega pq falta 1 campo
rodrigo.addProduct ("rodrigo","pepe",52,"imagen",460,2)
rodrigo.addProduct ("rodrigo321","pepe",52,60,2) // no lo agrega pq falta 1 campo
rodrigo.addProduct("woper","wopoer",52,"imagen",4561,5)  // no lo agrega pq el codigo ya existe
rodrigo.getProducts()
rodrigo.getProductById(6) // no found
rodrigo.getProductById(1) // muentra el prodocuto hola
