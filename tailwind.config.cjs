const production = !process.env.ROLLUP_WATCH;
module.exports = {
  theme: {
    extend: {
    },
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    // require('flowbite/plugin')
    require('daisyui')
  ],
  purge: {
    content: [
      "./src/**/*.svelte", "./src/**/*.css",
      // "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],
    enabled: production // disable purge in dev
  },

  daisyui: {
    themes: false,
  },
};

// module.exports = config;