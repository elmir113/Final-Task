function toggle(card){
  const content = card.querySelector(".week-content");
  const icon = card.querySelector("span");

  if(content.style.display === "block"){
    content.style.display = "none";
    icon.textContent = "+";
  } else {
    content.style.display = "block";
    icon.textContent = "−";
  }
}
