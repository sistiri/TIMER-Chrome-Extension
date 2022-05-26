const timeElement = document.getElementById('time')
const nameElement = document.getElementById('name')
const timerElement = document.getElementById('timer')


function updateTimeElements() {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0
    timerElement.textContent = `The timer is at: ${time} seconds`
  })
  const currentTime = new Date().toLocaleTimeString()
  timeElement.textContent = `The local timer is: ${currentTime}`
}

updateTimeElements()
setInterval(updateTimeElements, 1000)

// chrome.action.setBadgeText({
//   text: "TIME",
// }, () => {
//   console.log("Finished setting badge text")
// })

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "???"
  nameElement.textContent = `Your name is: ${name}`
})

const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

startBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true
  })
})
stopBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false
  })
})
resetBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    timer: 0,
    isRunning: false
  })
})