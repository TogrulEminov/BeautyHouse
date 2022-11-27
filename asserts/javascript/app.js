const btn = document.querySelector(".language");
const drop = document.querySelector(".drop")
const main=document.querySelector("main")
const hide=document.querySelector(".hide")
btn.addEventListener("click", () => {
    if (drop.style.display === "none") {
        drop.style.display = "block";
    } else {
        drop.style.display = "none";

    }
})
main.addEventListener("click", () => {
    drop.style.display = "none"; 
})