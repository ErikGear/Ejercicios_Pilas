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


class Pueblo {
  #_nombre;
  #_cabeceraMunicipal;
  #_estado;

  constructor(nombre, cabecerMunicipal, estado) {
    this.#_nombre = nombre;
    this.#_cabeceraMunicipal = cabecerMunicipal;
    this.#_estado = estado;
  }

  get getNombre() {
    return this.#_nombre;
  }
  set setNombre(nombre) {
    this.#_nombre = nombre;
  }

  get getCabeceraM() {
    return this.#_cabeceraMunicipal;
  }
  set setCabeceraM(nuevaCabecera) {
    this.#_cabeceraMunicipal = nuevaCabecera;
  }

  get getEstado() {
    return this.#_estado;
  }
  set setEstado(estado) {
    this.#_estado = estado;
  }

  toString(){
    return `
    Pueblo: ${this.#_nombre}
    \n
    Cabecera Municipal: ${this.#_cabeceraMunicipal}
    \n
    Estado: ${this.#_estado}
    `;
  }
}

function recorridosIdaVuelta(pila, destino){
    const ida = new Pila();
    const vuelta = new Pila();

    while (!pila.isEmpty()) {
        
    }


}

//pila incial
const recorrido = new Pila();
recorrido.push(new Pueblo("Amecameca", "Amecameca de Juárez", "Edomex"));
recorrido.push(new Pueblo("Chalco", "Chalco de Díaz Covarrubias", "Edomex"));
recorrido.push(new Pueblo("Cocotitlán", "Cocotitlán", "Edomex"));
recorrido.push(new Pueblo("Juchitepec", "Juchitpec de Mariano Rivapalacio", "Edomex"));
recorrido.push(new Pueblo("Ixtapaluca", "Amecameca de Juárez", "Edomex"));
recorrido.push(new Pueblo("Jocotitlán", "Jocotitlán", "Edomex"));
recorrido.push(new Pueblo("Huixquilucan", "Huixquilucan de Degollado", "Edomex"));
recorrido.push(new Pueblo("Atlautla", "Atlautla de Victoria	", "Edomex"));


