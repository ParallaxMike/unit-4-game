

    var targetNumber = 53;
  
    $("#number-to-guess").text(targetNumber);
  
    var counter = 0;
    var wins = 0;
    var losses = 0;
  
    // Now for the hard part. Creating multiple crystals each with their own unique number value.
  
    // We begin by expanding our array to include four options.
    var numberOptions = [10, 5, 3, 7];
    var imageOptions = ["./images/cyrstal1.png", "./images/crystal2.png", "./images/crystal3.png", "./images/crystal4.png"]
    var crystalID = ["#crystal1", "#crystal2", "#crystal3", "#crystal4"]
    function reset(){
      counter=0;
    }
    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {
  
      // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");
  
      // First each crystal will be given the class ".crystal-image".
      // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");
  
      // Each imageCrystal will be given a src link to the crystal image
      imageCrystal.attr("src", imageOptions[i]);
  
      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  
      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $(crystalID[i]).append(imageCrystal);
  
    }
  
    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function() {
      //clear win or lose banner
      document.getElementById("winalert").innerHTML = "";
  
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      // We then add the crystalValue to the user's "counter" which is a global variable.
      // Every click, from every crystal adds to the global counter.
      counter += crystalValue;
  
      // All of the same game win-lose logic applies. So the rest remains unchanged.
      // alert("New score: " + counter);
      document.getElementById("score").innerHTML = "Your Score: " + counter;
      document.getElementById("wins").innerHTML = "Your wins: " + wins;
      document.getElementById("losses").innerHTML = "Your losses: " + losses;
      if (counter === targetNumber) {
        document.getElementById("winalert").innerHTML = "You Win!";
        wins++;
        reset();
        document.getElementById("score").innerHTML = "Your Score: " + counter;
      document.getElementById("wins").innerHTML = "Your wins: " + wins;
      document.getElementById("losses").innerHTML = "Your losses: " + losses;
      }
  
      else if (counter >= targetNumber) {
        document.getElementById("winalert").innerHTML = "You Lose!";
        losses++;
        reset();
        document.getElementById("score").innerHTML = "Your Score: " + counter;
      document.getElementById("wins").innerHTML = "Your wins: " + wins;
      document.getElementById("losses").innerHTML = "Your losses: " + losses;
      }
      
      
    });


  

 

