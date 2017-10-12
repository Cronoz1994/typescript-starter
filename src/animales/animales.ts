
abstract class Animal {
  protected _nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  // mover(distancia: number=0) {
  //   console.log(`${this.nombre} se movio ${distancia}m.`);
  // }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    if(nombre.length <= 2) {
      console.error('nombre muy costo');
      return;
    }
    
    this._nombre = nombre;
  }

  abstract mover(): void;
}

class Gato extends Animal {
  
    constructor(nombre: string) {
      super(nombre);
    }
  
    mover(distancia: number = 1) {
      console.log('Caminando y ronroneando...');
      
      // super.mover(distancia);
    }
  }

  // const animal1 = new Animal('Misifus');
  // animal1.mover();
  // animal1.mover(7);

  const gato: Animal = new Gato('Tom');
  //polimorfismo
  gato.mover();
  gato.nombre = 'Lee'; // invoca al set de la clase
  console.log('gato', gato.nombre); // invoca al get de la clase
  // (<Gato> gato).mover(2);
  // (gato as Gato).mover(2);
