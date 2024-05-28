const LighterHandler = {
    handleEvent: (event) => {
        on(event.currentTarget)
        off(event.relatedTarget)
    }
}

function on(li) {
    li.style.border = '3px solid green';
}
function off(li) {
    li.style.border = '';
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("li").forEach(li => li.addEventListener('mouseover', LighterHandler));
    document.querySelectorAll("li").forEach(li => li.addEventListener('mouseout', (ev) =>{
        ev.target.style.border = '';
    }));
});

