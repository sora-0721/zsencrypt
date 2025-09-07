import { randomBytes } from "crypto";

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
                        const isChunks = context.chunk?.name?.includes("pages/") || context.chunk?.name?.includes("app/");
                        if (isChunks) {
                            return "static/chunks/[contenthash].js";
                        } else {
                            return "static/vendors/[contenthash].js";
                        };
                    },
                    chunkFilename: "static/chunks/[contenthash].js"
                }
            }
        };
        return config;
    },
    generateBuildId: async () => (
        "builder/" + randomBytes(8).toString("hex")
    )
};
