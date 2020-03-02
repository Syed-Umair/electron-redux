import debug from 'debug';

const log = debug('electron-redux:validateAction');

export default function validateAction(action) {
  if (typeof action === 'object' && action.type) {
    return true;
  }
  log('WARNING! Action not valid', action);
  return false;
}
