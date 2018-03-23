import Component from '@ember/component';

export default Component.extend({
  didInsertElement(){
    this._super(...arguments);
    const item = this.get('item');
    if(item.hecho){
      this.$('.fondo')
        .css(
          'background-color', '#d4edda'
        );
    }else{
      this.$('.fondo')
        .css(
          'background-color', '#fff3cd'
        );
    }

  },
  didUpdate(){
    this._super(...arguments);
    const item = this.get('item');
    if(item.hecho){
      this.$('.fondo')
        .css(
          'background-color', '#d4edda'
        );
    }else{
      this.$('.fondo')
        .css(
          'background-color', '#fff3cd'
        );
    }
  },
  actions:{
    cambiar(){
      this._super(...arguments);
      //const lista = this.modelFor('index').lista;
      const item = this.get('item');
      //this.set('', true)
      item.hecho = true;
      console.log(item.hecho);
    }
  }
});
