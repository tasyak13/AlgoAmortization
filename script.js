//Рассмотрите задачу динамического увеличения массива. Реализуйте функцию, которая принимает на вход массив и число элементов, 
// и возвращает новый массив, который содержит все элементы исходного массива и заданное число новых элементов.

function getNewArr(arr, num) {
    let newArr = arr;
    for (let i = 0; i < num; i++) {
    newArr.push(null); 
    }
    return newArr;
    }
    
    let arr = [1, 2, 3, 4, 5] ;
    let arrTwo = getNewArr(arr, 2); 
    
    console.log(arrTwo);
