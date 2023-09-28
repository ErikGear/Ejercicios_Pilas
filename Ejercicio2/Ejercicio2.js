class Pila {
  #data = [];

  push(item) {
    this.#data.push(item);
  }

  pop() {
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

  isEmpty() {
    return this.#data.length === 0;
  }

  peek() {
    if (this.#data !== 0) {
      let ultimo = this.#data.length;
      return this.#data[ultimo - 1];
    } else {
      return -1;
    }
  }

  toString() {
    let longitud = this.#data.length - 1;
    for (let i = longitud; i >= 0; i--) {
      console.log(`Item: ${this.#data[i]}`);
    }
  }

  getSize() {
    return this.#data.length;
  }

  clear() {
    this.#data = [];
  }
}

//Entradas: Pila, nuevo, viejo
//salida: nuevaPila, con pop de los elementos mas nuevos y reemplazando la primera coincidencia del valor viejo con el valor nuevo
function reemplazar(pila, nuevo, viejo) {

  //Declaro un pila temporal, ya que me servira para realizar pusheo de valores nuevos y los actuales, alternando un nuevo y un valor actual
  const tmp = new Pila();

  //voy extrayendo todos los elementos de la pila original
  while (!pila.isEmpty()) {
    
    //por cada iteracion. almaceno un elemento de la pila original
    const item = pila.pop();

    //comparo el elemento actual con el segundo valor, de parametro de mi función, en caso de ser iguales almaceno el nuevo elemento en la pila temporal TMP
    if (item === viejo) {
      tmp.push(nuevo);
    } else {
      //caso contrario almaceno como tal el elemento orginal
      tmp.push(item);
    }
    //en este if es donde se hace el reemplazo en las posiciones 
    //donde aparece el elemento viejo y se reemplza con el nuevo vaslor
    
  }
  
  //finalmente ya tengo el reemplazo de valores en la pila temporal TMP, 
  //vacio la pila TMP y esos valores los agrego en la pila orginal
  while(!tmp.isEmpty()) {
    pila.push(tmp.pop());
  }

  
}

//pila inicial
const pilaNumbers = new Pila();
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

//imprimiendo pila incial
pilaNumbers.toString();

//aplicando función reemplazar
reemplazar(pilaNumbers, 8, 2);

//imprimiendo en consola la pila final
console.log("\n Pila Final");
pilaNumbers.toString();

