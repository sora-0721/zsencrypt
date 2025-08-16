export default {
    output: "export",
    trailingSlash: true,
    devIndicators: false,
    images: {
        unoptimized: true
    },
    webpack: (config, { isServer, dev }) => {
        if (!isServer && !dev) {
            config = {
                ...config,
                output: {
                    ...config.output,
                    chunkFilename: "chunks/[contenthash].js",
                    filename: "static/chunks/[contenthash].js"
                }
            }
        };
        return config;
    }
};
