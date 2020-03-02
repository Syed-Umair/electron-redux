import { ipcRenderer } from 'electron';

export default function replayActionRenderer(store, callback) {
  ipcRenderer.on('redux-action', (event, payload) => {
    store.dispatch(payload);
    callback(payload);
  });
}
