const notifications = {
    group1: ['message1', 'message2'],
    group2: ['message3', 'message4'],
    group3: ['message5', 'message6'],
  };
  notifications[Symbol.iterator] = function () {
    const allNotifications = Object.values(this).flat();
    let index = 0;
    return {
      next() {
        if (index < allNotifications.length) {
          return { value: allNotifications[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  };
  for (const notification of notifications) {
    console.log(notification);
  }