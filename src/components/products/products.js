const allFeatures = [
  "100% Warranty",
  "Free Delivery",
  "10 Days Replacement",
  "Amazon Delivered",
  "Cash on Delivery",
  "Easy Returns",
  "24/7 Customer Support",
  "Eco-Friendly Packaging",
  "Secure Payment",
  "Premium Quality"
];

export const products = Array.from({ length: 25 }, (_, i) => {
  // shuffle and pick random features
  const features = allFeatures
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 4) + 2); // 2 to 5 features

  return {
    _id: i + 1,
    name: `Product ${i + 1} - Classy Easy Zipper Tote`,
    image: `/images/image_${(i % 10) + 1}.jpg`,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: ["Zenon", "UrbanEdge", "Fable", "TrendyCo", "Miniml"][i % 5],
    category: ["Bags", "Backpacks", "Accessories", "Luggage"][i % 4],
    price: 1000 + (i % 10) * 150,
    discount: [0, 10, 15, 20][i % 4],
    previousPrice: Math.round((1000 + (i % 10) * 150) / (1 - [0, 0.1, 0.15, 0.2][i % 4])),
    countInStock: 5 + (i % 6) * 3,
    rating: (Math.random() * 2 + 3).toFixed(1),
    numReviews: Math.floor(Math.random() * 100),
    colors: ["#000000", "#8B4513", "#D2B48C", "#F5F5DC", "#808000", "#000080", "#808080", "#800000", "#FFFFFF", "#36454F"].slice(0, (i % 6) + 2),
    availableColors: [
      "#000000", "#8B4513", "#D2B48C", "#F5F5DC", "#808000",
      "#000080", "#808080", "#800000", "#FFFFFF", "#36454F"
    ].slice(0, (i % 6) + 2),
    sizes: ["XS","SM", "MD", "LG","XL","2XL","3XL","4XL"].slice(0, (i % 4) + 1),
    availableSizes: ["XS","SM", "MD", "LG","XL","2XL","3XL","4XL"].slice(0, (i % 4) + 1),
    material: ["Leather", "Canvas", "Nylon", "Synthetic"][i % 4],
    isFeatured: i % 6 === 0,
    createdAt: new Date(Date.now() - i * 86400000).toISOString(),
    brandDetails: {
      name: ["Zenon", "UrbanEdge", "Fable", "TrendyCo", "Miniml"][i % 5],
      origin: ["Italy", "USA", "Japan", "India", "Germany"][i % 5],
      description: `High-quality products by ${["Zenon", "UrbanEdge", "Fable", "TrendyCo", "Miniml"][i % 5]}, crafted with precision and care.`
    },
    features
  };
});
