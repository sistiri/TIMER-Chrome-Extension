const timeElement = document.getElementById('time')
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `The local time is: ${currentTime}`

chrome.action.setBadgeText({
  text: "TIME",
}, () => {
  console.log("Finished setting badge text")
})