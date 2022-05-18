const nameInput = document.getElementById('name-input')
const timeInput = document.getElementById('time-input')
const saveBtn = document.getElementById('save-btn')

saveBtn.addEventListener("click", () => {
  const name = nameInput.value
  const notificationTime = timeInput.value
  chrome.storage.sync.set({
    name,
    notificationTime
  },
    // () => { console.log(`Name is set to ${name}`) }
  )
})

chrome.storage.sync.get(["name","notificationTime"], (res) => {
  console.log(res)
  nameInput.value = res.name ?? "???"
  timeInput.value = res.notificationTime ?? 1000
})

// console.log(this);