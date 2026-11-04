/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first truthy element in a one-dimensional double-precision floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-dindex-of-truthy
*
* @example
* var Float64Vector = require( '@stdlib/ndarray-vector-float64' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var dindexOfTruthy = require( '@stdlib/blas-ext-base-ndarray-dindex-of-truthy' );
*
* var x = new Float64Vector( [ 0.0, 0.0, 3.0, 2.0 ] );
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var v = dindexOfTruthy( [ x, fromIndex ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
