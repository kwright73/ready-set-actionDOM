function main() {
    document.getElementById("grow-me").classList.add("big");
    document.getElementById("shrink-me").classList.remove("big");
  
    const list = document.querySelector("ol").textContent;
    console.log(list);
  
    const destinationLink = document.querySelector(".link");
    destinationLink.href = "https://www.example.com";
    destinationLink.textContent = "somewhere";
  
    document.getElementById("hide-me").style.display = "none";
    document.getElementById("show-me").style.display = "block";
  
    const greetingName = document.getElementById("name").value;
    document.querySelector("h1").textContent = `Welcome ${greetingName}!`; };