// Firtly we enter all the labels (including title)
let labels = [
	"Apparel", "Accesories", "Shoes", // Main categories "T-shirt",
	"Shorts", "Sweatshirt", "Pants", "Jacket", // Subcategories of Apparel
	"Cap", "Handbag", "Gloves", "Scarf", "Jewlery", // Subcategories of Accesories
	"Boots", "Sneakers", "Sandals", "Loafers", "Wedges", // Subcategories of Shoes
];

let parents = [
	"", "", "", // Set the first three labels as idividual units
	"Apparel", "Apparel", "Apparel", "Apparel", "Apparel",
	"Accesories", "Accesories", "Accesories", "Accesories", "Accesories",
	"Shoes", "Shoes", "Shoes", "Shoes", "Shoes",
];

let values = [
	2000, // Total for Apparel
	2150, // Total for accesories
	1900, // Total for shoes
	450, 400, 300, 350, 500, // Apparel values
	600, 300, 350, 400, 500, // Accesories values
	500, 550, 200, 300, 350, // Shoes values
];

let data = [
	{
		// Specifying that we want to use treemap visualization
		type: "treemap",
		labels: labels,
		parents: parents,
		values: values,
		// This setting will make sure the children have the same size as the parent
		branchvalues: "total",
	},
];

const layout = {
	title: "Total units sold by categories",
};

// Plot the data
Plotly.newPlot("container", data, layout);
