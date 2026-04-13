export default async () => {

    const repo = await fetch("https://api.github.com/repos/zeoseven/certple/git/refs/heads/main", {
        method: "GET"
    }).then(response => {
        console.log("  fetch", response.status, response.url);
        return response.json();
    }).catch(e => console.log(e));

    const GIT_HASH = repo?.object?.sha?.slice(0, 7) || "";

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
