const RECENT_USERS_KEY = 'recentUsers';

export const addRecentUser = (user) => {
    const users = JSON.parse(localStorage.getItem(RECENT_USERS_KEY)) || [];
    if (!users.find(u => u.login === user.login)) {
      users.push(user);
      localStorage.setItem(RECENT_USERS_KEY, JSON.stringify(users));
    }
  };
  
  export const getRecentUsers = () => {
    return JSON.parse(localStorage.getItem(RECENT_USERS_KEY)) || [];
  };
  