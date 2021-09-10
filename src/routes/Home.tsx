import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChromeMessage, Sender } from '../types';
import { getCurrentTabUId, getCurrentTabUrl } from '../chrome/utils';
import Input from 'components/Input';

export const Home = () => {
  // const [url, setUrl] = useState<string>('');
  // const [responseFromContent, setResponseFromContent] = useState<string>('');

  // let { push } = useHistory();

  // /**
  //  * Get current URL
  //  */
  // useEffect(() => {
  //   getCurrentTabUrl((url) => {
  //     setUrl(url || 'undefined');
  //   });
  // }, []);

  // const sendTestMessage = () => {
  //   const message: ChromeMessage = {
  //     from: Sender.React,
  //     message: 'Hello from React',
  //   };

  //   getCurrentTabUId((id) => {
  //     id &&
  //       chrome.tabs.sendMessage(id, message, (responseFromContentScript) => {
  //         setResponseFromContent(responseFromContentScript);
  //       });
  //   });
  // };

  // const sendRemoveMessage = () => {
  //   const message: ChromeMessage = {
  //     from: Sender.React,
  //     message: 'delete logo',
  //   };

  //   getCurrentTabUId((id) => {
  //     id &&
  //       chrome.tabs.sendMessage(id, message, (response) => {
  //         setResponseFromContent(response);
  //       });
  //   });
  // };

  return (
    <div className="App">
      <Input />
    </div>
  );
};
