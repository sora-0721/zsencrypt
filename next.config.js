export default async () => {

    const repo = await fetch("https://api.github.com/repos/zeoseven/certple/commits/main")
        .then(response => response.json())
        .catch(e => console.log(e));

    const GIT_HASH = repo && repo.sha && repo.sha.slice(0, 7) || null;

    return {
        output: "export",
        trailingSlash: true,
        devIndicators: false,
        images: {
            unoptimized: true
        },
        env: {
            NEXT_PUBLIC_GIT_HASH: GIT_HASH
        }
    };

};
