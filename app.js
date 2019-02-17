'use strict';
console.log('script loaded');

var storeTable= document.getElementById('stores');

var storeTimes= [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];

var cookieTotal= [];

var pikeUl = document.getElementById('pikeUl');
var seatacUl = document.getElementById('seatacUl');
var seaCentUl = document.getElementById('seaCentUl');
var capUl = document.getElementById('capUl');
var alkiUl = document.getElementById('alkiUl');

// function store(minCust, maxCust, aveCust) {
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.aveCust = aveCust;
//   this.cookieTotal= [];
//   allStoreLocations.push(this);
// }

var pikeplace= {
  minCust: 23,
  maxCust: 65,
  aveSale: 6.3,
  newAveSale: 0,
  timeCookieTotal: [],
  dayCookieTotal:0,
  randomCustomer: function () {
    var min= Math.ceil(this.minCust);
    var max= Math.floor(this.maxCust);
    var multiplyRandCustAndAveSale= this.aveSale * Math.floor( Math.random() * (max-min) ) + min;
    return Math.floor(multiplyRandCustAndAveSale);
  },
  render: function (){ 
    for(var x = 0; x < storeTimes.length; x++) {
    this.newAveSale= this.randomCustomer();
    this.timeCookieTotal.push(this.newAveSale);
    var liEl = document.createElement('li');
    liEl.textContent = `${storeTimes[x]}: ${this.newAveSale}`;
    pikeUl.appendChild(liEl);
    console.log(this.newAveSale)
    };
  },
}

var seatac= {
  minCust: 3,
  maxCust: 24,
  aveSale: 1.2,
  newAveSale: 0,
  timeCookieTotal: [],
  randomCustomer: function () {
    var min= Math.ceil(this.minCust);
    var max= Math.floor(this.maxCust);
    var multiplyRandCustAndAveSale= this.aveSale * Math.floor( Math.random() * (max-min) ) + min;
    return Math.floor(multiplyRandCustAndAveSale);
  },
  render: function (){ 
    for(var x = 0; x < storeTimes.length; x++) {
    this.newAveSale= this.randomCustomer();
    this.timeCookieTotal.push(this.newAveSale);
    var liEl = document.createElement('li');
    liEl.textContent = `${storeTimes[x]}: ${this.newAveSale}`;
    seatacUl.appendChild(liEl);
    console.log(this.newAveSale)
    };
  },
}

var seattleCenter= {
  minCust: 11,
  maxCust: 28,
  aveSale: 3.7,
  newAveSale: 0,
  timeCookieTotal: [],
  randomCustomer: function () {
    var min= Math.ceil(this.minCust);
    var max= Math.floor(this.maxCust);
    var multiplyRandCustAndAveSale= this.aveSale * Math.floor( Math.random() * (max-min) ) + min;
    return Math.floor(multiplyRandCustAndAveSale);
  },
  render: function (){ 
    for(var x = 0; x < storeTimes.length; x++) {
    this.newAveSale= this.randomCustomer();
    this.timeCookieTotal.push(this.newAveSale);
    var liEl = document.createElement('li');
    liEl.textContent = `${storeTimes[x]}: ${this.newAveSale}`;
    seaCentUl.appendChild(liEl);
    console.log(this.newAveSale)
    };
  },
}

var capHill= {
  minCust: 20,
  maxCust: 38,
  aveSale: 2.3,
  newAveSale: 0,
  timeCookieTotal: [],
  randomCustomer: function () {
    var min= Math.ceil(this.minCust);
    var max= Math.floor(this.maxCust);
    var multiplyRandCustAndAveSale= this.aveSale * Math.floor( Math.random() * (max-min) ) + min;
    return Math.floor(multiplyRandCustAndAveSale);
  },
  render: function (){ 
    for(var x = 0; x < storeTimes.length; x++) {
    this.newAveSale= this.randomCustomer();
    this.timeCookieTotal.push(this.newAveSale);
    var liEl = document.createElement('li');
    liEl.textContent = `${storeTimes[x]}: ${this.newAveSale}`;
    capUl.appendChild(liEl);
    console.log(this.newAveSale)
    };
  },
}

var alki= {
  minCust: 2,
  maxCust: 16,
  aveSale: 4.6,
  newAveSale: 0,
  timeCookieTotal: [],
  randomCustomer: function () {
    var min= Math.ceil(this.minCust);
    var max= Math.floor(this.maxCust);
    var multiplyRandCustAndAveSale= this.aveSale * Math.floor( Math.random() * (max-min) ) + min;
    return Math.floor(multiplyRandCustAndAveSale);
  },
  render: function (){ 
    for(var x = 0; x < storeTimes.length; x++) {
    this.newAveSale= this.randomCustomer();
    this.timeCookieTotal.push(this.newAveSale);
    var liEl = document.createElement('li');
    liEl.textContent = `${storeTimes[x]}: ${this.newAveSale}`;
    alkiUl.appendChild(liEl);
    console.log(this.newAveSale)
    };
  },
}


pikeplace.render();
seatac.render();
seattleCenter.render();
capHill.render();
alki.render();