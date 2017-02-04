/*jshint esversion: 6*/

const chai = require('chai');

chai.should();

const insertionSort = require('../insertion-sort.js');

describe('The Cases of Edge', ()=>{

  it('should be a function', ()=>{
    insertionSort.should.be.a('function');
  });

  it('shoud be not be an array', () => {
    insertionSort.should.not.be.an('array');
  });

  it('should not be a boolean',()=>{
    insertionSort.should.not.be.a('boolean');
  });

  it('should not be a string', ()=>{
    insertionSort.should.not.be.a('string');
  });

  it('should not be null', ()=>{
    insertionSort.should.not.equal('null');
  });

  it('should return an array', ()=>{
    insertionSort([9,2,5,6,4,3,7,10,1,8]).should.be.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should not return an object', ()=>{
    insertionSort([{}, {}, {},{}]).should.not.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should not return the same numbers', ()=>{
    insertionSort([1,1,1,1,1,1,1]).should.not.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });
});

