import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'; 
import { App } from '/imports/ui/App';



(function() {
  var reset = function(e) {
    e.target.className = '';
    setTimeout(function() {
      e.target.className = 'meteor';
    }, 0);
  };
  var meteors = document.querySelectorAll('.meteor');
  for(var i = 0; i < meteors.length; i++) {
    meteors[i].addEventListener('animationend', reset);
  }
}());

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
