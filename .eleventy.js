const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Passthrough Copy for CSS, images, etc.
  eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.addPassthroughCopy("img"); // Add if you have images

  // Shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Filter for date formatting
  eleventyConfig.addFilter("postDate", (dateObj) => {
    // ... (keep the date formatting logic) ...
     try {
        if (dateObj instanceof Date && !isNaN(dateObj)) {
          return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
        }
        return dateObj || "";
      } catch (error) {
        console.error("Error formatting date:", error);
        return dateObj || "";
      }
  });

  // Ensure you are still using the `url` filter in your templates!
  // Example: <link rel="stylesheet" href="{{ '/css/style.css' | url }}">
  // Example: <a href="{{ '/' | url }}">Home</a>

  return {
    // No pathPrefix needed here for basic manual deploy
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site" // This remains the output directory
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};