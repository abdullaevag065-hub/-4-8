function checkPassword(password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password === "1234") {
          resolve("Доступ открыт");
        } else {
          reject("Неверный пароль");
        }
      }, 1000);
    });
  }
  
  async function login(password) {
    try {
      const result = await checkPassword(password);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }