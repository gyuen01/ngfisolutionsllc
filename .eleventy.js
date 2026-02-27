module.exports = function(eleventyConfig) {
    // Only use "src/" if those folders actually exist inside a folder named src
    // If they are in your main folder, use these:
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};