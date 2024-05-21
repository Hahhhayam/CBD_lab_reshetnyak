function dialogWithUser() {
    alert("Ласкаво просимо до нашого сайту!");

    let userName = prompt("Як вас звати?", "Гість");
    if (userName) {
        alert(`Привіт, ${userName}!`);

        let likeSite = confirm("Вам подобається наш сайт?");
        if (likeSite) {
            alert("Дякуємо, що вам подобається!");
        } else {
            alert("Шкода, що вам не подобається. Ми постараємося покращити його.");
        }
    } else {
        alert("Ви не ввели своє ім'я.");
    }
}

function showDeveloperInfo(lastName, firstName, position = "Developer") {
    alert(`Розробник: ${lastName} ${firstName}\nПосада: ${position}`);
}

function compareStrings() {
    const w1 = prompt("Перше слово");
    const w2 = prompt("Друге слово");
    if (w1 > w2) {
        alert(`Більший рядок: ${w1}`);
    } else if (w1 < w2) {
        alert(`Більший рядок: ${w2}`);
    } else {
        alert("Рядки рівні.");
    }
}
