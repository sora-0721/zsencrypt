export default {
    output: "export",
    trailingSlash: true,
    devIndicators: false,
    images: {
        unoptimized: true
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.output.chunkFilename = "chunks/[contenthash].js";
            config.output.filename = "static/chunks/[contenthash].js";
        };
        return config;
    }
};
