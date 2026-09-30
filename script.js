let chosenRoom="",chosenPrice=0;
const modal=document.getElementById("bookingModal");
function openBooking(){modal.style.display="grid"}
function closeBooking(){modal.style.display="none"}
function toggleMenu(){document.querySelector(".nav nav").classList.toggle("mobile-open")}
function scrollToRooms(){document.getElementById("rooms").scrollIntoView({behavior:"smooth"})}
function selectRoom(room,price){
 chosenRoom=room;chosenPrice=price;
 document.getElementById("selectedRoom").textContent=room;
 document.getElementById("selectedPrice").textContent="£"+price;
 closeBooking();
 document.getElementById("booking").scrollIntoView({behavior:"smooth"});
}
function completeBooking(e){
 e.preventDefault();
 if(!chosenRoom){document.getElementById("formMessage").textContent="Please select an accommodation option first.";return}
 document.getElementById("formMessage").textContent="Registration saved — connecting you to secure Kajabi checkout.";
}
modal.addEventListener("click",e=>{if(e.target===modal)closeBooking()});