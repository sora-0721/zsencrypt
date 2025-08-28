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
                    filename: (context) => {
                        const name = context.chunk?.name?.includes("pages/");
                        if (name) {
                            return "static/chunks/[contenthash].js";
                        } else {
                            return "static/vendors/[contenthash].js";
                        };
                    }
                }
            }
        };
        return config;
    },
    generateBuildId: async () => (
        "builder/" + crypto.createHash("md5").update(String(Date.now())).digest("hex").slice(0, 16)
    )
};
