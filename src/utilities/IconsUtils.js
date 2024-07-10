// Function to import all images from a specified directory using webpack's require.context
function importAll(r) {
  let images = {};
  // r.keys() returns an array of all possible requests that the context module can handle
  r.keys().forEach((item, index) => {
    // item is the relative path of the requested module and index is its index in the array
    // images is an object where each key is the file name and its value is the module itself
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Exported function to retrieve a weather icon by its name
export function weatherIcon(imageName) {
  // Import all images from the '../assets/icons' directory ending with '.png'
  const allWeatherIcons = importAll(
    require.context('../assets/icons', false, /\.(png)$/)
  );

  // Get an array of all keys (image names) from the imported images object
  const iconsKeys = Object.keys(allWeatherIcons);

  // Get an array of all values (image modules) from the imported images object
  const iconsValues = Object.values(allWeatherIcons);

  // Find the index of the requested imageName in the keys array
  const iconIndex = iconsKeys.indexOf(imageName);

  // Return the corresponding image module from the values array based on the found index
  return iconsValues[iconIndex];
}
