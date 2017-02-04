/*jshint esversion: 6*/

const chai = require('chai');

chai.should();

const insertionSort = require('../insertion-sort.js');

describe('The Cases of Edge', ()=>{
  it('should be a function', ()=>{
    insertionSort.should.be.a('function');
  });
});

