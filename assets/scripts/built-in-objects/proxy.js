//The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).

//Create traps for object operations. Step in and execute code. Control code usage/impact.

const course = {
  title: "JavaScript - The Complete Guide"
};

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === "length") {
      return 0;
    }
    return obj[propertyName] || "NOT FOUND";
  },
  set(obj, propertyName, newValue) {
    console.log("Sending data ...");
    if (propertyName === "rating") {
      return;
    }
    obj[propertyName] = newValue;
  }
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.title, pCourse.length, pCourse.rating);

//==================================================================================================================================================================
//Basic example : In this simple example the number 37 gets returned as the default value when the property name is not in the object. It is using the get handler.
var handler = {
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 37;
  }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log("c" in p, p.c); // false, 37

//==================================================================================================================================================================
//No-op forwarding proxy : In this example, we are using a native JavaScript object to which our proxy will forward all operations that are applied to it.

var target = {};
var p = new Proxy(target, {});

p.a = 37; // operation forwarded to the target

console.log(target.a); // 37. The operation has been properly forwarded

//==================================================================================================================================================================
//Validation : With a Proxy, you can easily validate the passed value for an object. This example uses the set handler.

let validator = {
  set: function(obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }
    // The default behavior to store the value
    obj[prop] = value;
    // Indicate success
    return true;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
try {
  person.age = "young"; // Throws an exception
  person.age = 300; // Throws an exception
} catch (error) {
  console.log("Throws error when invalid age is set");
}

//==================================================================================================================================================================
//Extending constructor : A function proxy could easily extend a constructor with a new constructor. This example uses the construct and apply handlers.

function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,
    "constructor"
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  };
  var proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

var Person = function(name) {
  this.name = name;
};

var Boy = extend(Person, function(name, age) {
  this.age = age;
});

Boy.prototype.gender = "M";

var Peter = new Boy("Peter", 13);
console.log(Peter.gender); // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age); // 13

//==================================================================================================================================================================
//A complete traps list example
//Now in order to create a complete sample traps list, for didactic purposes, we will try to proxify a non native object that is particularly suited to this type of
//operation: the docCookies global object created by the "little framework" published on the document.cookie page.

/*
  var docCookies = ... get the "docCookies" object here:  
  https://developer.mozilla.org/en-US/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/
var docCookies = {};
var docCookies = new Proxy(docCookies, {
  get: function(oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  set: function(oTarget, sKey, vValue) {
    if (sKey in oTarget) {
      return false;
    }
    return oTarget.setItem(sKey, vValue);
  },
  deleteProperty: function(oTarget, sKey) {
    if (sKey in oTarget) {
      return false;
    }
    return oTarget.removeItem(sKey);
  },
  enumerate: function(oTarget, sKey) {
    return oTarget.keys();
  },
  ownKeys: function(oTarget, sKey) {
    return oTarget.keys();
  },
  has: function(oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  defineProperty: function(oTarget, sKey, oDesc) {
    if (oDesc && "value" in oDesc) {
      oTarget.setItem(sKey, oDesc.value);
    }
    return oTarget;
  },
  getOwnPropertyDescriptor: function(oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue
      ? {
          value: vValue,
          writable: true,
          enumerable: true,
          configurable: false
        }
      : undefined;
  }
});
/* Cookies test */
//console.log(docCookies.my_cookie1 = 'First value');
//console.log(docCookies.getItem('my_cookie1'));
//docCookies.setItem('my_cookie1', 'Changed value');
//console.log(docCookies.my_cookie1);
