var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 25;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



window.alert("Welcome to Robot Gladiators!");
var fight = function(enemyName){
    
    

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//if player choses to fight, then fight
while(enemyHealth > 0){
    if (promptFight === "fight" || promptFight === "FIGHT"){
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth -= playerAttack;
        // Log a resulting message to the console so we know that it worked.
         console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

        );

        // check enemy's health
        if(enemyHealth <=0){
        window.alert(enemyName + " has died!");

    }
    else{
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth -= enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attack " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )

    if(playerHealth <= 0){
        window.alert(playerName + " has died!");

    }
    else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    //if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP"){
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes, leave fight
    if(confirmSkip){
        window.alert(playerName + " has chosen to skip the fight!");
        //subtract money from playerMoney for skipping
        playerMoney -= 2;
        
    }
    // if no, ask question again byt running fight() again
    else{
        fight(enemyNames);
    }
   

} else{
    window.alert("You need to choose a valid option. Try again!")
    fight();
    
}

}

    
    }

for(var i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
