import importmap from "@eik/rollup-plugin";

export default {
  input: "source.production.js",
  plugins: [
    importmap({
      maps: [
        {
          imports: {
            react:
              "https://neik.dev.intern.nav.no/npm/@pika/react/v16/package/source.production.js",
          },
        },
      ],
    }),
  ],
  output: [
    {
      file: "source.bundle.production.js",
      format: "esm",
    },
  ],
};
