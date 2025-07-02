const isSecondNumisZero = (firstNum, secondNum) =>{
    try{
        console.log('Является ли второе число нулем');
        if(secondNum === 0){
            throw new Error('Второе число = 0');
        }
        console.log('Второе число = ' + secondNum);
    } catch(error){
        console.log(error.message);
    }
}

isSecondNumisZero(10, 2)