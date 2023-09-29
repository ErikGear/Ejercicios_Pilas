class Pila {
  #data = [];

  push(item) {
    this.#data.push(item);
  }

  pop() {
    try {
      if (this.isEmpty()) {
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
    try {
      if (this.isEmpty()) {
        let ultimo = this.#data.length;
        return this.#data[ultimo - 1];
      } else {
        throw "Error, la pila se encuentra vacia";
      }
    } catch (e) {
      console.log(e);
    }
  }

  toString() {
    for (const item of this.#data) {
      console.log(`${item}`);
    }
  }

  getSize() {
    return this.#data.length;
  }

  clear() {
    this.#data = [];
  }
}

class Contenedor {
  static id = 0;
  #id;
  #nombreContenedor;
  constructor(nombreContenedor) {
    this.#nombreContenedor = nombreContenedor;
    this.#id = ++Contenedor.id;
  }

  get getId() {
    return this.#id;
  }

  get getNombreContenedor() {
    return this.#nombreContenedor;
  }
  set setNombreContenedor(nombre) {
    this.#nombreContenedor = nombre;
  }

  toString() {
    return `id: ${this.#id}\nNombre: ${this.#nombreContenedor}\n`;
  }
}

function retirarContenedor(pila, id) {
  const tmp = new Pila();
  let eliminado = null;
  try {
    if (id < 1 || id > pila.getSize()) {
      throw "Error, ID de contenedor inexistente";
    } else {
      do {
        const item = pila.pop();
        tmp.push(item);
      } while (pila.getSize() !== id);

      eliminado = tmp.pop();

      while(!tmp.isEmpty()){
        pila.push(tmp.pop());
      }
    }
  } catch (e) {
    console.log(e);
  }
}

//Pila inicial
const almacen = new Pila();
almacen.push(new Contenedor("Dry"));
almacen.push(new Contenedor("Flat Rack"));
almacen.push(new Contenedor("High Cube Dry"));
almacen.push(new Contenedor("Open Top"));
almacen.push(new Contenedor("Plataforma"));
almacen.push(new Contenedor("Reefer"));

//imprimiendo pila incial
almacen.toString();

console.log("\n");


//retirando contenedor
retirarContenedor(almacen, 5);

//imprimeindo pila final
console.log("Pila final");
almacen.toString();