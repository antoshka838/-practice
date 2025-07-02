const getRandNum = () => {
    const randNum = Math.floor(Math.random() * 10) + 1;
    console.log(randNum)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randNum <= 5){
                resolve(randNum + ' Число сгенерировано успешно')
            }
            reject(randNum + ' Ошибка, число больше 5')
        }, randNum * 1000);
    })
}

getRandNum().then(message => console.log(message)).catch(error => console.log(error));