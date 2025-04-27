const { DateTime } = require("luxon"); // You might need to install luxon: npm install luxon

module.exports = function(eleventyConfig) {
  // Passthrough Copy: Copy `css/` folder to `_site/css/`
  eleventyConfig.addPassthroughCopy("css");

  // Shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Optional: Add a filter for better date formatting if needed later
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    // Set directories to watch and process
    dir: {
      input: ".",       // Root folder for inputs
      includes: "_includes", // Folder for layouts, etc.
      output: "_site"      // Folder where the built site will go
    },
    // Specify markdown processing options if needed
    markdownTemplateEngine: "njk", // Use Nunjucks for Markdown files
    htmlTemplateEngine: "njk",      // Use Nunjucks for HTML files
    dataTemplateEngine: "njk",       // Use Nunjucks for data files
  };
};