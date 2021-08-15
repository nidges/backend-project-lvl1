export default (isItAWin, userName) => {
  if (isItAWin) console.log(`Congratulations, ${userName}!`);
  else console.log(`Let's try again, ${userName}!`);
};
