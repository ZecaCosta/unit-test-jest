/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails('itemA', 'itemB'), 'object');

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('itemA', 'itemB').length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const returnedArray = productDetails('itemA', 'itemB');
    assert.strictEqual(typeof returnedArray[0], 'object');
    assert.strictEqual(typeof returnedArray[1], 'object');

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(returnedArray[0], returnedArray[1])
    
    // (Difícil) Teste que os dois productIds terminam com 123.
    const productIds1 = (returnedArray[0].details.productId);
    const test1 = productIds1.length - productIds1.search("123");
    assert.strictEqual(test1, 3);

    const productIds2 = (returnedArray[0].details.productId);
    const test2 = productIds2.length - productIds2.search("123");
    assert.strictEqual(test2, 3);
  });
});
