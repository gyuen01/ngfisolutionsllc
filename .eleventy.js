module.exports = function(eleventyConfig) {
    // This tells Eleventy to copy your CSS and Images 
    // directly to the finished site folder (_site)
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");

    return {
        dir: {
            input: "src",    // This is the key fix!
            output: "_site"
        }
    };
};