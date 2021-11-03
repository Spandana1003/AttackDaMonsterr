const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE=15;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 20;

const enteredValue= prompt('Maximum health for you and monster','100');

let chosenMaxLife = parseInt(enteredValue);

if(isNaN (chosenMaxLife) || chosenMaxLife<=0){
  chosenMaxLife=100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;




adjustHealthBars(chosenMaxLife);

function monsterAttack(mode){
  let maxDamage;
  if(mode== 'ATTACK'){
    maxDamage= ATTACK_VALUE;
  }
  else if(mode== 'STRONG_ATTACK'){
    maxDamage= STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  

}

function attackHandler() {
  monsterAttack('ATTACK');
  endround();
 
}

function strongAttackHandler(){
  monsterAttack('STRONG_ATTACK');
  endround();
}

function reset()
{
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endround(){
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if(currentPlayerHealth<=0 && hasBonusLife){
    hasBonusLife=false;
    removeBonusLife();
    currentPlayerHealth=initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You would've lost but the homies got you");
    
  }
  if(currentMonsterHealth <= 0 && currentPlayerHealth>0){
    alert('You win!');
  }
  else if(currentPlayerHealth <=0 && currentMonsterHealth>0){
    alert('You lost');
  }
  else if(currentPlayerHealth == 0 && currentMonsterHealth == 0){
    alert('It is a draw!');
  }
  if(currentPlayerHealth<=0 && hasBonusLife){
    hasBonusLife = false;
    removeBonusLife();
    alert('You would be dead but the homies got you!');
    setPlayerHealth(initialPlayerHealth);
  }
  if(currentPlayerHealth<=0 || currentMonsterHealth<=0){
    reset();
  }

}
function healPlayerHandler(){
  let healValue;
  if(currentPlayerHealth>= chosenMaxLife - HEAL_VALUE){
    healValue= chosenMaxLife- currentPlayerHealth;

  }
  else{
    healValue= HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth+= healValue; 
  endround(); 
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);