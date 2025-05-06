// 撰寫一個 JavaScript 程式，包含以下功能：
// 定義一個名為 calculator 的函式，接受三個參數：num1、num2 和 displayLang。
// 該函式計算 num1 和 num2 的總和，並將結果傳遞給 displayLang 回呼函式。
// 定義兩個回呼函式：
// resultInEng：接收一個數字並以英文格式輸出結果，例如 "The result is 2"。
// resultInCht：接收一個數字並以中文格式輸出結果，例如 "結果是 2"。
// 呼叫 calculator 函式兩次：
// 第一次傳入 resultInEng 作為回呼函式。
// 第二次傳入 resultInCht 作為回呼函式。

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