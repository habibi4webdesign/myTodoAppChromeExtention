export const main = () => {
  console.log('[content.ts] Main')

  chrome.runtime.onMessage.addListener((request) => {
    if (request.type === 'todonotifdialog') {
      showModal(request?.todo)
    }
  })

  const showModal = (todo) => {
    const modal = document.createElement('dialog')
    modal.setAttribute(
      'style',
      `
      padding: 15px;
      right: 0;
      height: 120px;
      border: none;
      bottom:0;
      border-radius: 5px;
      background-color:white;
      position: fixed;
      box-shadow: 0px 12px 48px rgb(29 5 64 / 47%);
      width: 300px;
    `,
    )
    modal.innerHTML = `<div id="todoDialogContent" style="font-size: 18px;">
    <div style="font-size: 14px; color:#828282;margin-bottom:10px">${todo.date} ${todo.time}</div>
    <div>${todo.name}</div>
    <div style="display: flex; justify-content: center; margin-top: 30px;">
    <button id="dismissTodoBtn" style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 5px;background-color: #ED0063; width:90px; ">Dismiss</button>
    <button id="donTodoBtn" style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 5px;background-color: #ff9100; width:90px; margin:0 20px">Done</button>
    </div>
    </div>
    <div style="position:absolute; top:0px; right:5px;">
    <button id="closeTodoDialogBtn" style="padding: 8px 12px; font-size: 16px; border: none;background-color: white;">x</button>
    </div>`
    document.body.appendChild(modal)
    const tododialog: any = document.querySelector('dialog')
    tododialog.showModal()

    //Close todo notif listener
    tododialog
      .querySelector('#closeTodoDialogBtn')
      .addEventListener('click', () => {
        tododialog.close()
      })

    //Done todo notif listener
    tododialog.querySelector('#donTodoBtn').addEventListener('click', () => {
      tododialog.close()
      chrome?.runtime?.sendMessage('', {
        type: 'doneTodo',
        todo,
      })
    })

    //Dissmiss todo notif listener
    tododialog
      .querySelector('#dismissTodoBtn')
      .addEventListener('click', () => {
        tododialog.close()
      })
  }
}

main()
