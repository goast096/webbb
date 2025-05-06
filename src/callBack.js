function calculator(num1, num2, displayLang) {
    let sum = num1 + num2;
    displayLang(sum);
}
function resultInEng(num) {
    console.log("The result is " + num);
}
function resultInCht(num) {
    console.log("結果是 " + num);
}
calculator(1, 1,resultInEng);
calculator(1, 1,resultInCht);

//原本的code執行完才執行外部code
//displayLang是callBack，傳記憶體位址進去function，讓主程式calculator知道去哪裡執行