module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addPassthroughCopy("src");

  return {
    templateFormats: ["njk", "html"],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
