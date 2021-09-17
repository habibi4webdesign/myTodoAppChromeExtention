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

  if (data.type === 'doneTodo') {
    chrome?.runtime?.sendMessage('', {
      type: 'doneTodoToComp',
      todo: data.todo,
    })
  }

  if (data.type === 'todoNotif') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: 'todonotifdialog',
        todo: data.todo,
      })
    })
  }
})
