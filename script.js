// Sample JSON structure for categories and subcategories
const categories = [
  {
    name: 'Fashion',
    subcategories: [
      {
        name: 'Men',
        subcategories: [
          { name: 'Clothing' },
          { name: 'Footwear' },
          // Add more subcategories as needed
        ]
      },
      {
        name: 'Women',
        subcategories: [
          { name: 'Clothing' },
          { name: 'Footwear' },
          // Add more subcategories as needed
        ]
      },
      // Add more categories as needed
    ]
  },
  {
    name: 'Electronics',
    subcategories: [
      { name: 'Smartphones' },
      { name: 'Laptops' },
      // Add more subcategories as needed
    ]
  },
  // Add more top-level categories as needed
];

// Function to create an expandable category
function createExpandableCategory(category) {
  const categoryElement = document.createElement('div');
  categoryElement.className = 'category';
  categoryElement.textContent = category.name;

  if (category.subcategories) {
    // Create subcategories recursively
    const subcategoriesContainer = document.createElement('div');
    subcategoriesContainer.className = 'subcategories';
    category.subcategories.forEach(subcategory => {
      subcategoriesContainer.appendChild(createExpandableCategory(subcategory));
    });

    // Append subcategories to the category
    categoryElement.appendChild(subcategoriesContainer);
  }

  // Add event listeners for click and hover
  categoryElement.addEventListener('click', () => {
    // Handle click event (e.g., navigate to a page)
    console.log(`Clicked on ${category.name}`);
  });

  categoryElement.addEventListener('mouseover', () => {
    // Handle hover event (e.g., highlight the category)
    console.log(`Hovered over ${category.name}`);
  });

  return categoryElement;
}

// Function to create the category container
function createCategoryContainer() {
  const container = document.getElementById('categoryContainer');

  categories.forEach(category => {
    const categoryElement = createExpandableCategory(category);
    container.appendChild(categoryElement);
  });
}

// Call the function when the page is loaded
window.onload = createCategoryContainer;
