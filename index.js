let userName = 'Lee';
userName.length > 0 ? console.log(`Hello, ${userName}!\n...`): console.log('Hello!\n...');

let userQuestion = 'Will I make a decent web developer?';
userQuestion.length > 0 ? console.log(`${userName} would like to know: "${userQuestion}"\n...`): console.log(`Hello?? ${userName}??!\n...`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
  
switch (randomNumber) {
  case 0:
      eightBall = 'It is certain';
      break;
  case 1:
      eightBall = 'Signs point to yes';
      break;
  case 2:
      eightBall = 'Do not count on it';
      break;
  case 3:
      eightBall = 'Outlook not so good';
      break;
  case 4:
      eightBall = 'It is decidedly so';
      break;
  case 5:
      eightBall = 'My sources say no';
      break;
  case 6:
      eightBall = 'Cannot predict now';
      break;
  default:
      eightBall = 'Reply hazy try again';
      break;
  }

  console.log(`The 🎱 answered: ${eightBall}...`)
      
      

     /* } else if (randomNumber = 2) {
      console.log('It is decidedly so');
      } else if (randomNumber = 3) {
      console.log();
      } else if (randomNumber = 4) {
      console.log();
      } else if (randomNumber = 5) {
      console.log();
      } else if (randomNumber = 6) {
      console.log();
      } else (randomNumber = 7) {
      console.log();
    }
  }*/
