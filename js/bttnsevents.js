"use strict";

function alertLink() {
    alert("Посилання на оригінальний блог у сірому боксі")
}

const ZoomHandler = {
    handleEvent: (event) => {
        console.log(event.currentTarget);
        zoom(event.currentTarget)
    }
}

function zoom(el) {
    el.style.transform = 'scale(1.6, 1.6)';
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cl").forEach(el => el.onclick = alertLink);

    const zoomAble = document.getElementById("zoom");

    zoomAble.addEventListener("mousemove", ZoomHandler);
    zoomAble.addEventListener("mousemove", alertLink);
    zoomAble.removeEventListener("mousemove", alertLink);
});

