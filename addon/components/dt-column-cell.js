import Component from '@ember/component';
import layout from '../templates/dt-column-cell';

export default Component.extend({
  layout,
  tagName:'td',
  classNames:['contextual-cell']

});
