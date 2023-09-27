class Pila{
    
    #data = [];

    push(item){
        this.#data.push(item);
    }

    
    pop(){
      try {
        if (this.#data.length === 0) {
            throw "Error, no hay elmentos en la Pila";
        } else {
            return this.#data.pop();
        }
      } catch (e) {
        console.log(e);
      }
    }

   
    isEmpty(){
        return this.#data.length === 0;
    }

    
    peek(){
      if (this.#data !== 0) {
        let ultimo = this.#data.length;
        return this.#data[ultimo - 1];
      } else {
        return -1;
      }
    }

    toString(){
        let longitud = this.#data.length-1;
        for (let i = longitud; i >= 0 ; i--) {
            console.log(`Item: ${this.#data[i]}`);
        }
    }

    getSize(){
      return this.#data.length;
    }
}

const pila  = new Pila();

pila.push("Manzana");
pila.push("Cebolla");
pila.push("Apio");
pila.push("Naranja");
pila.push("Papaya");
pila.push("Sandía");
pila.push("Melón");

pila.toString();


function itemsStack(pila, num){
    const newArray = [];
    
    for (let i = 0; i < num; i++) {
        newArray.push(pila.pop());
    }

    return newArray;
}


let newArreglo = itemsStack(pila, 4);
console.log(newArreglo);