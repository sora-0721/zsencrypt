import { randomBytes } from "crypto";

export default {
    output: "export",
    trailingSlash: true,
    devIndicators: false,
    images: {
        unoptimized: true
    },
    generateBuildId: async () => (
        "builder/" + randomBytes(8).toString("hex")
    )
};
