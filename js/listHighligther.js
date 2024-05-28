const LighterHandlerOn = {
    handleEvent: (event) => on(event.currentTarget)
}

const LighterHandlerOff = {
    handleEvent: (event) => off(event.currentTarget)
}

function on(li) {
    console.log(li);
    li.style.border = '3px solid green';
}
function off(li) {
    console.log(li);
    li.style.border = '';
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("li").forEach(li => li.addEventListener('mouseover', LighterHandlerOn));
    document.querySelectorAll("li").forEach(li => li.addEventListener("mouseout", LighterHandlerOff));
});

