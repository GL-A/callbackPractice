/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first
  function first(name, callback){
      return callback(name[0]);
  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});

function last(name, callback){
  return callback(name[name.length - 1]);
}




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})

function multiply(num1, num2, callback){
  return callback(num1 * num2);
}





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

function contains(names, name, callback){
  return callback(names.includes(name));
}





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

  function uniq(names, callback){
    uniqArr = names.filter(function(name, index, inputArray) {
      return inputArray.indexOf(name) == index;
    })
    return callback(uniqArr);
  }








/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});

function each(names, callback){
  names.forEach((item, index) => {
    return callback(item, index);
  })
}



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
function getUserById(users, id, callback){
  var user;
  users.forEach(function(u){
    if(u.id === id){
      user = u;
    }
  })
  return callback(user);
}
