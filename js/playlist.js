document.addEventListener('DOMContentLoaded', (event) => {
    let draggedItem = null;

    document.querySelectorAll('.drag').forEach(item => {
        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            e.dataTransfer.effectAllowed = 'move';
            setTimeout(() => item.style.opacity = '0.5', 0);
        });

        item.addEventListener('dragend', (e) => {
            setTimeout(() => item.style.opacity = '1', 0);
            draggedItem = null;
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        item.addEventListener('dragenter', (e) => {
            if (item !== draggedItem) {
                item.style.border = '2px dashed #000';
            }
        });

        item.addEventListener('dragleave', (e) => {
            item.style.border = 'none';
        });

        item.addEventListener('drop', (e) => {
            e.preventDefault();
            if (item !== draggedItem) {
                item.style.border = 'none';
                let playlist = document.getElementById('playlist');
                let children = Array.from(playlist.children);
                let draggedIndex = children.indexOf(draggedItem);
                let targetIndex = children.indexOf(item);

                if (draggedIndex > targetIndex) {
                    playlist.insertBefore(draggedItem, item);
                } else {
                    playlist.insertBefore(draggedItem, item.nextSibling);
                }
            }
        });
    });
});
