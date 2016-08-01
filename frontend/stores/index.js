import UserStore, { USER_STORE } from './UserStore';
import UiStore, { UI_STORE } from './UiStore';
import CacheStore from './CacheStore';
import { autorunAsync } from 'mobx';

const stores = {
  user: new UserStore(),
  ui: new UiStore(),
  cache: new CacheStore(),
};

// Persist stores to localStorage
// TODO: move to store constructors
autorunAsync(() => {
  localStorage.setItem(USER_STORE, stores.user.asJson);
  localStorage.setItem(UI_STORE, stores.ui.asJson);
});

export default stores;
