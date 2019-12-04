//The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.
//Syntax : new WeakMap([iterable])
//iterable : Iterable is an Array or other iterable object whose elements are key-value pairs (2-element Arrays). Each key-value pair will be added to the new WeakMap. 
//null is treated as undefined.
//Keys of WeakMaps are of the type Object only. Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key).

var window;
const wm1 = new WeakMap(),
      wm2 = new WeakMap(),
      wm3 = new WeakMap();
const o1 = {},
      o2 = function() {},
      o3 = {};

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!
//wm2.set(1, 2); //TypeError: Invalid value used as weak map key. Only objects can be used as keys

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because there is no key for o2 on wm2
wm2.get(o3); // undefined, because that is the set value

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (even if the value itself is 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false

//============================================================================================================
//Implementing a WeakMap-like class with a .clear() method
class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init)
  }
  clear() {
    this._wm = new WeakMap()
  }
  delete(k) {
    return this._wm.delete(k)
  }
  get(k) {
    return this._wm.get(k)
  }
  has(k) {
    return this._wm.has(k)
  }
  set(k, v) {
    this._wm.set(k, v)
    return this
  }
}