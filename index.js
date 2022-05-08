let foodStuffPieces = []; //массив куда все сохр

const addFoodPiece = (ev) => {
  // ev.preventDefault(); // сброс перезагрузки по клику Записать
  //создаем объект
  let foodStuffPiece = {
    namePiece: document.getElementById("namePiece").value,
    bestbefore: document.getElementById("BB").value,
  };
  //пушим в массив
  foodStuffPieces.push(foodStuffPiece);
  // Сбрасываем форму
  document.querySelector("form").reset();
  // вывод массива доделать в читаемом виде
  // console.warn("added", { foodStuffPieces });
  // let pre = document.querySelector("#msg pre");
  // pre.textContent = "\n" + JSON.stringify(foodStuffPieces, "\t", 2);
  localStorage.setItem("FoodStuffList ", JSON.stringify(foodStuffPieces));
  let stored = JSON.parse(localStorage.getItem("FoodStuffList") || "[]");
  console.log(stored);
};
// как то надо в память записывать и потом в ней работать
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addFoodPiece);
});
