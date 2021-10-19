const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE=15;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

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
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if(currentMonsterHealth <= 0 && currentPlayerHealth>0){
    alert('You win!');
  }
  else if(currentPlayerHealth <=0 && currentMonsterHealth>0){
    alert('You lost');
  }
  else if(currentPlayerHealth == 0 && currentMonsterHealth == 0){
    alert('It is a draw!');
  }

}

function attackHandler() {
  monsterAttack('ATTACK');
 
}

function strongAttackHandler(){
  monsterAttack('STRONG_ATTACK');
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
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);