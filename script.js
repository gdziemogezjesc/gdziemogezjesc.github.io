document.getElementById('search-button').addEventListener('click', searchText);

function searchText() {
    // Pobieramy wpisaną frazę z pola input
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    
    // Pobieramy wszystkie divy z klasą "container"
    const containers = document.querySelectorAll('.container');
    
    // Na początku resetujemy widoczność wszystkich divów
    containers.forEach(container => {
        container.classList.remove('hidden');  // Usuwamy klasę hidden, aby pokazać wszystkie divy
    });
    
    // Jeśli pole wyszukiwania nie jest puste, ukryj niepasujące divy
    if (searchQuery.trim() !== "") {
        // Rozdzielamy frazę na tagi
        const searchTags = searchQuery.split(',').map(tag => tag.trim()); // Usuwamy białe znaki

        containers.forEach(container => {
            const textContent = container.querySelector('.text-content p').textContent.toLowerCase();
            
            // Sprawdzamy, czy wszystkie tagi są obecne w tekście
            const allTagsPresent = searchTags.every(tag => textContent.includes(tag));
            
            // Jeśli nie wszystkie tagi są obecne, ukryj div
            if (!allTagsPresent) {
                container.classList.add('hidden');  // Ukryj div, jeśli nie pasuje
            }
        });
    }
}