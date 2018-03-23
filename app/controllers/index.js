import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    agregar(){
      const newItem = this.get('newItem');
      if (newItem == ''|| newItem == undefined) {
        alert("Ingrese el nombre del nuevo elemento");
      }else{
        if(newItem.length >=20){
          if (newItem.length <=100) {
            var lista = this.get('model').lista;
            var item = {
              nombre: newItem,
              hecho: false
            };
            lista.pushObject(item);
            this.set('newItem', "");
          }else{
            alert("Nombre tiene que ser menor a 100 caracteres");
          }
        }else{
          alert("Nombre tiene que ser mayor a 20 caracteres");
        }
      }
    }
  }
});
