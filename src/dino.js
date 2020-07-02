export class Dino {
  constructor(name) {
    this.name = name;
    this.nameArray = [];
    this.hiddenArray;
    this.nameGuess;
  }

  splitDino() {
    
    this.nameArray = this.name.split('');
  }

  guessLetter(letter) {
    for (let char of this.nameArray) {
      if (char.includes(letter)) {
        alert('true');
      }
    }
  }
}



// function splitDino() {
//   let name = "velociraptor"
//   let nameArray = name.split('');
//   let letter = "o"
//   let hiddenArray = []
//   for (let char of nameArray) {
//     if (char.includes(letter)) {
//       hiddenArray.push(char)
//     }
//   }
//   return hiddenArray
// }




// letterGuess(n) {
  //   let str = this.name;
  //   let guess = name.match(`/${n}/g`);
  // }

  // letterGuess() {
  //   if (this.name.match(`/${n}/g`)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }


//   var str = "velociraptor";
//   var res = str.match(/vel/g);

// console.log(res)
// ["vel"]
  
  
  // function test(){
  //   let name = "velociraptor"
  //    // let nameArray = name.split('');
  //     let nameGuess = "treo"
  //     //let splitGuess = nameGuess.split('')  
  //     let hiddenArray = []
  //     splitGuess = nameGuess.split('')
  //    for(let char of name){
  //     for(let char2 of nameGuess){
  //   if (char === char2){
  //     hiddenArray.push(char)
  //   }
    
  //   }
    
    
  //   }
    
  //   return hiddenArray
  //   }
    
    
    
  //   console.log(test())

// function hideDino () {
//   let name = "velociraptor"
//   let nameArray = name.split('');
//   let nameGuess = "velociraptor"
//   let splitGuess = nameGuess.split('')
//   let hiddenArray = []
//   splitGuess = nameGuess.split('')
  
//   for (i = 0; i< nameArray.length; i++){
//       for (x = 0; x< splitGuess.length; x++){
//         if ( nameArray[i] === splitGuess[x] ){
//         hiddenArray.push(nameArray[i])
//       }
          
//       }
      
//     }
//     return hiddenArray
// }

// console.log(hideDino())
// ["v", "e", "l", "o", "o", "c", "i", "r", "r", "a", "p", "t", "o", "o", "r", "r"]