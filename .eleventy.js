module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addPassthroughCopy({"_build/css/*.css": "css"});

  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addPassthroughCopy("src");

  return {
    templateFormats: ["njk", "html", "md"],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
