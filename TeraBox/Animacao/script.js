document.addEventListener("DOMContentLoaded", function() {
    let seconds = 15;
  
    function updateTimer() {
      document.getElementById("timer").textContent = seconds;
  
      if (seconds === 0) {
        document.getElementById("timer-container").style.display = "none";
        document.getElementById("ad-container").style.display = "block";
        document.getElementById("link-container").style.display = "block";
      } else {
        seconds--;
        setTimeout(updateTimer, 1000);
      }
    }
  
    setTimeout(updateTimer, 1000);
  });
  