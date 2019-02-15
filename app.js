'use strict'

'use strict';

var days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

var alkiUl = document.getElementById('alkibeach');
var goldenUl = document.getElementById('gg');
var edmondsUl = document.getElementById('edmondsbeach');

var alki = {
  name: 'Alki',
  neighborhood: 'West Seattle',
  seagullCount: [
    212,
    44,
    34,
    14,
    15, 
    23,
    42,
  ],
  render: function () {
    for(var i = 0; i < days.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls.`;
      alkiUl.appendChild(liEl);
    }
  }
};

var goldenGardens = {
  name: 'Golden Gardens',
  neighborhood: 'Crown Hill',
  seagullCount: [2, 34, 67, 78, 98, 23, 101],
  render: function () {
    for(var i = 0; i < days.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls.`;
      goldenUl.appendChild(liEl);
    }
  }
};

var edmonds = {
  name: 'Edmonds',
  neighborhood: 'North Seattle',
  seagullCount: [24, 34, 54, 63, 75, 87, 94],
  render: function () {
    for(var i = 0; i < days.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls.`;
      edmondsUl.appendChild(liEl);
    }
  }
};

alki.render();
goldenGardens.render();
edmonds.render();