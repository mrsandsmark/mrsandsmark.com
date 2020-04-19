let doorimage1 = document.getElementById("door1");
let doorimage2 = document.getElementById("door2");
let doorimage3 = document.getElementById("door3");
doorimage1.onclick = () =>
{
 door1.src = botDoorPath;
}
doorimage2.onclick = () =>
{
 door2.src = beachDoorPath;
}
doorimage3.onclick = () =>
{
 door3.src = spaceDoorPath;
}
 let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
 let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
 let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";