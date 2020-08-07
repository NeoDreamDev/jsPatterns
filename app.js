// // BASIC FUNCTION

// (function () {
//   // Declare private vars and functions

//   return {
//     //Declare public var and functions
//   };
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function () {
//   let text = "hello world";

//   const changeText = function () {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   };
//   return {
//     callChangeText: function () {
//       changeText();
//       // console.log(text);
//     },
//   };
// })();

// UICtrl.callChangeText();
// UICtrl.changeText();

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
// const ItemCtrl = (function () {
//   let data = [];

//   function add(item) {
//     data.push(item);
//     console.log("Item Added...");
//   }

//   function get(id) {
//     return data.find((item) => {
//       return item.id === id;
//     });
//   }
//   return {
//     add: add,
//     get: get,
//   };
// })();
// ItemCtrl.add({ id: 1, name: "Salaam" });
// ItemCtrl.add({ id: 2, name: "Tyrek" });

// console.log(ItemCtrl.get(1));

// SINGLETON PATTERN
// GIVE GLOBAL POINT OF ACCESS IN STEAD OF ENCAPSULATION
// CANT HAVE MORE THAN ONE INSTANCE

// const Singleton = (function () {
//   let instance;

//   function createInstance() {
//     const object = new Object({ name: "salaam" });
//     return object;
//   }
//   return {
//     getInstance: function () {
//       if (!instance) {
//         instance = createInstance();
//       }
//       return instance;
//     },
//   };
// })();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();
// console.log(instanceA === instanceB);

// FACTORY PATTERN
//
