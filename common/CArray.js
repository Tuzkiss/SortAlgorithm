/*
*      CArray.js
*
*    author tuzkiss
*
*     date 2015-4-21
*/

function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert ;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;

    for (var i = 0, len = numElements.length; i < len; i ++) {
        this.dataStore = numElements[i];
    }
}

function setData () {
    for (var i = 0, len = this.numElements ; i < len; i ++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}


function clear () {
    for (var i = 0, len = this.dataStore.length; i < len; i ++) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString () {
    var retstr = '';
    for (var i = 0, len = this.dataStore.length ; i < len; i ++) {
        retstr  += (this.dataStore[i] < 10 ?  ('0' +  this.dataStore[i]) : this.dataStore[i] ) + '&nbsp;' ;



        if ( i > 0 && i % 10 === 0) {
            retstr += '<br/>';
        }
    }
    return retstr;
}

function swap (arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp; 
}

