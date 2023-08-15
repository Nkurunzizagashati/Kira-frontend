const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your app
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
    filename: "bundle.js", // Name of the output bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader", // Use Babel for JavaScript/JSX files
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/", // Specify the output path for images
            },
          },
        ], // Use style and CSS loaders for CSS files
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      // Add more loaders for other file types (e.g., images, fonts) if needed
    ],
  },
  devServer: {
    historyApiFallback: true,
    // contentBase: path.join(__dirname, "public"), // Directory to serve static files
    // port: 3000, // Port for the development server
    // hot: true, // Enable Hot Module Replacement
  },
};
