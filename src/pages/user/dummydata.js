this.users = () => {
  const users = [];
  for (var i = 0; i <= 14; i++) {
    let charID = 65;
    if (i < 10) {
      users.push({
        id: String.fromCharCode(charID) + '00' + i,
        title: 'The Name Of User ' + i + ' - A00' + i,
        public: true,
      });
    } else if (i < 100) {
      users.push({
        id: String.fromCharCode(charID) + '0' + i,
        title: 'The Name Of User ' + i + ' - A0' + i,
        public: true,
      });
    } else if (i < 1000) {
      users.push({
        id: String.fromCharCode(charID) + i,
        title: 'The Name Of User ' + i + ' - A' + i,
        public: true,
      });
    } else {
      users.push({
        id: String.fromCharCode(charID + 1) + i,
        title: 'The Name Of User ' + i + ' - A' + i,
        public: true,
      });
    }
  }

  return users;
};

this.info = () => {
  const info = [
    { name: 'Hello 1', age: '18', email: 'hello1@hello.com', dateRegister: '01/01/2021' },
    { name: 'Hello 2', age: '19', email: 'hello2@hello.com', dateRegister: '02/01/2021' },
    { name: 'Hello 3', age: '20', email: 'hello3@hello.com', dateRegister: '03/01/2021' },
  ];
  return info;
};
