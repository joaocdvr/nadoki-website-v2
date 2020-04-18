module.exports = {
  plugins: {
    "postcss-preset-env": {
      features: {
        "custom-media-queries": {
          importFrom: {
            customMedia: {
              "--mobile-landscape":
                "(min-width: 30rem) and (orientation: landscape)", // Mobile-landscape: >480px //
              "--tablet-portrait":
                "(min-width: 48rem) and (orientation: portrait)", // Tablet-portrait: >768px //
              "--tablet-landscape":
                "(min-width: 62rem) and (orientation: landscape)", // Tablet-landscape: >992px //
              "--desktop": "(min-width: 75rem) and (orientation: landscape)", // Desktop: >1200px //
              "--mobile-landscape-big": "(min-device-aspect-ratio: 2/1)", //  Big mobile-landscape like iPhone X  //
            },
          },
        },
      },
    },
  },
};
