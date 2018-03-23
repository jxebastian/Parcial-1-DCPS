import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return{
      lista:[{
        nombre: "Calificar parciales de diseño",
        hecho: false
      },{
        nombre: "Subir notas de redes al sia",
        hecho: false
      },{
        nombre: "Preparar clase de diseño",
        hecho: false
      }]
    };
  }
});
