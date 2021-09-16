export {}

chrome.runtime.onInstalled.addListener((details) => {
  console.log('[background.js] onInstalled', details)
})

chrome.runtime.onConnect.addListener((port) => {
  console.log('[background.js] onConnect', port)
})

chrome.runtime.onStartup.addListener(() => {
  console.log('[background.js] onStartup')
})

chrome.runtime.onSuspend.addListener(() => {
  console.log('[background.js] onSuspend')
})

chrome.runtime.onMessage.addListener((data) => {
  if (data.type === 'notification') {
    chrome.notifications.create('', data.options)
  }
})

