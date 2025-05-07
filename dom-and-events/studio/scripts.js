// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () => {
   const flightStatus = document.getElementById("flightStatus");
   const flightDisplay = document.getElementById("flightDisplay");
   const shuttleBackground = document.getElementById("shuttleBackground");
   const up = document.getElementById("up");
   const down = document.getElementById("down");
   const right = document.getElementById("shuttleBackground");
   const left = document.getElementById("left");
   const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
   const takeoff = document.getElementById("takeoff");
   const landing = document.getElementById("landing");
   const missionAbort = document.getElementById("missionAbort");
   const rocket = document.getElementById("rocket");
   
   takeoff.addEventListener("click", ()  => {
    let confirmTakeoff = window.confirm("Confirm that the shuttle is ready for takoff.")
    if (confirmTakeoff) {
        flightStatus.textContent = "Shuttle in flight."
        shuttleBackground.style.backgroundColor = "blue"
        spaceShuttleHeight.innerHTML = 10000
    }
   })
   landing.addEventListener("click", () => {
    let confirmLanding = window.confirm("The shuttle is landing. Landing gear engaged.")
    if (confirmLanding) {
        flightStatus.textContent = "The Shuttle has landed."
        shuttleBackground.style.backgroundColor = "green"
        spaceShuttleHeight.innerHTML = 0 
    }   
    }) 
    missionAbort.addEventListener("click", () => {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.")
        if (confirmAbort) {
            flightStatus.textContent = "Mission Aborted."
            shuttleBackground.style.backgroundColor = "green"
            spaceShuttleHeight.innerHTML = 0 
        }   
    }) 
    up.addEventListener("click", () => {


})
