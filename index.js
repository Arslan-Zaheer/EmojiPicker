
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]


let stageEl = document.getElementById("stage") 
let pick_btn = document.getElementById("fight-btn")

pick_btn.addEventListener("click", function(){

        let random_pick_first = Math.floor(Math.random() * fighters.length)
        let random_pick_second = Math.floor(Math.random() * fighters.length)
        
        stageEl.textContent = fighters[random_pick_first] + " VS " + fighters[random_pick_second] 

})