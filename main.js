document.addEventListener("DOMContentLoaded", () => {
    const materials = [];

    const materialList = document.querySelector('.material-list');
    const searchInput = document.getElementById('search');

    const displayMaterials = (filteredMaterials) => {
        materialList.innerHTML = '';
        filteredMaterials.forEach(material => {
            const materialItem = document.createElement('div');
            materialItem.classList.add('material-item');
            
            materialItem.innerHTML = `
                <img src="${material.preview}" alt="${material.name} preview" class="material-preview">
                <h3>${material.name}</h3>
                <p>${material.description}</p>
                <button class="download" onclick="window.location.href='${material.link}'">Claim</button>
            `;

            materialList.appendChild(materialItem);
        });
    };

    const addMaterial = (name, description, link, preview) => {
        materials.push({ name, description, link, preview });
        displayMaterials(materials);
    };

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMaterials = materials.filter(material =>
            material.name.toLowerCase().includes(searchTerm) ||
            material.description.toLowerCase().includes(searchTerm)
        );
        displayMaterials(filteredMaterials);
    });

    // Example of adding new materials with preview images
    addMaterial('Grass Global', 'High-quality grass PBR material with photorealism featured <br>Tags: grass, ground', 'materials/grass_01', 'materials/grass_01/preview.png');
    addMaterial('Material 2', 'Seamless texture for projects.', '#', 'path/to/preview2.jpg');
});