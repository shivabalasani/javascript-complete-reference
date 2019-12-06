 
  const course = {
    // new Object()
    title: 'JavaScript - The Complete Guide',
    rating: 5
  };
  
  console.log(Object.getPrototypeOf(course));
  Object.setPrototypeOf(course, {
    // ...Object.getPrototypeOf(course), //If you want to keep existing prototype functionality
    printRating: function() {
      console.log(`${this.rating}/5`);
    }
  });
  
  const student = Object.create({
    printProgress: function() {
      console.log(this.progress);
    }
  }, {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Max',
      writable: true
    }
  });
  
  // student.name = 'Max';
  
  Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
  });
  
  student.printProgress();
  
  console.log(student);
  
  course.printRating();
  