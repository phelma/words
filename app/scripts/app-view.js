'use strict';
var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    console.log('[App View] Initialize');
    this.textIn = document.getElementById('textIn');
    this.textOut = document.getElementById('textOut');

    this.render();

    this.textIn.addEventListener('input', function (event) {
      // console.log(event);
      this.render(event);
    }.bind(this));
  },

  render: function (event) {
    // console.log('[App View] Render');
    // console.log(event);
    var text = this.textIn.textContent.trim();
    var words = text.split(' ');

    words = words.map(this.makeSpan);

    this.textOut.innerHTML = '';

    words.forEach(function (el) {
      this.textOut.appendChild(el);
      this.textOut.appendChild(this.makeSpace());
    }.bind(this));
  },

  makeSpan: function (word) {
    var span = document.createElement('span');
    span.textContent = word;
    span.classList.add('word', 'text', 'w-' + word);
    return span;
  },

  makeSpace: function () {
    var space = document.createElement('span');
    space.textContent = ' ';
    space.classList.add('space', 'text');
    return space;
  },

  events: {

  }
});
