module.exports = {
  plugins: {
    "postcss-preset-env": {
      features: {
        "custom-media-queries": {
          importFrom: {
            customMedia: {
              "--mobile-landscape":
                "(min-width: 30rem) and (orientation: landscape) and (max-height: 30rem)", // Mobile-landscape: >480px width and <480px height //
              "--max-content-width": "(min-width: 48rem)", // >768px //
            },
          },
        },
      },
    },
  },
};
