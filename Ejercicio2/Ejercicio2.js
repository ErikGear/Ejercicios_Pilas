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

//Entradas: Pila, nuevo, viejo
//salida: nuevaPila, con pop de los elementos mas nuevos y reemplazando la prmiera coincidencia del valor viejo con el valor nuevo}
function reemplazar(pila, nuevo, viejo){
    const pilaOld = new Pila();
    const pilaNew = new Pila();
    
    while (!pila.isEmpty()) {
        const item = pila.pop();

        if (item === viejo) {
            
        } else {
            
        }
    }
}

//pila inicial
const pilaNumbers  = new Pila();
pilaNumbers.push(3);
pilaNumbers.push(2);
pilaNumbers.push(3);
pilaNumbers.push(4);
pilaNumbers.push(6);
pilaNumbers.push(8);
pilaNumbers.push(1);
pilaNumbers.push(2);
pilaNumbers.push(5);
pilaNumbers.push(5);

pilaNumbers.toString();




