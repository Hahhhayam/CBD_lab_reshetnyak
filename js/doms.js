function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 5000);
}

function order() {
    location.href = "https://t.me/peperevenge";
}

function modifyContent() {
    const content = document.getElementById('content');

    // Використання innerHTML
    content.innerHTML = "<p>Примусова <strong>РЕКЛАМА</strong>.</p> <button onclick='order()'>Замовити</button> ";

    // Використання outerHTML
    console.log("outerHTML:", content.outerHTML);

    // Використання textContent
    content.querySelector('p').textContent = "Рарітетні касети!";

    // Використання nodeValue / data
    const textNode = content.querySelector('p').firstChild;
    console.log("nodeValue/data:", textNode.nodeValue || textNode.data);
}

function modifyDOM() {
    const content = document.getElementById('content');

    // Створення нового елемента
    const newDiv = document.createElement('div');
    const newText = document.createTextNode('Не прогав можливість!');
    newDiv.appendChild(newText);

    // Вставка елементів
    content.append(newDiv);
    content.prepend("Тільки сьогодні! ");
    content.after("Щодо замовлення - контакт https://t.me/peperevenge. ");

    // Заміна елемента
    const replaceDiv = document.createElement('div');
    replaceDiv.textContent = 'Цей текст замінює початковий контент.';

    setTimeout(() => {
        content.replaceWith(replaceDiv);
    }, 5000);

    // Видалення елемента
    setTimeout(() => {
        replaceDiv.remove();
    }, 5000);
}

// Виклики функцій для тестування
document.addEventListener("DOMContentLoaded", () => {
    changeBackground();
    modifyContent();
    modifyDOM();
});
