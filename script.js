document.getElementById('search-button').addEventListener('click', searchText);

function searchText() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    
    const containers = document.querySelectorAll('.container');
    
    containers.forEach(container => {
        container.classList.remove('hidden');
    });
    
    if (searchQuery.trim() !== "") {
        const searchTags = searchQuery.split(',').map(tag => tag.trim()); 

        containers.forEach(container => {
            const textContent = container.querySelector('.text-content p').textContent.toLowerCase();
            
            const allTagsPresent = searchTags.every(tag => textContent.includes(tag));
            
            if (!allTagsPresent) {
                container.classList.add('hidden');
            }
        });
    }
}
