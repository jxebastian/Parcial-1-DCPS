import Component from '@ember/component';
import {set} from '@ember/object';

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
      const item = this.get('item');
      if (item.hecho) {
        set(item, 'hecho', false);
      }else{
        set(item, 'hecho', true);
      }

    }
  }
});
