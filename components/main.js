export const dTitle = 'Certple';



function toast(i, time) {
    const t = time || 2000;
    let toast = document.createElement('div');
    toast.textContent = i;
    toast.style.position = 'fixed';
    toast.style.top = '20vh';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = '#000';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.zIndex = '3';
    toast.style.fontSize = '14px';
    toast.style.opacity = '0';
    toast.style.border = '1px solid #ccc';
    toast.style.transition = 'opacity 0.5s';
    toast.style.boxShadow = '0 0 7px #00000050';

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.style.opacity = '1';
    }, 100);

    setTimeout(function () {
        toast.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(toast);
        }, 500);
    }, t);
};

export const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        toast("已复制 ~");
    }).catch(err => {
        toast(err);
    });
};

export const tc = (i, t) => {
    toast(i, t);
};



export const zsQ = {

    getQuery: function (i) {
        return (new URLSearchParams(window.location.search)).get(i);
    },

    Loading: ({ text }) => {
        const t = text || 'Loading ...';
        return (
            <div className="q-font text-center my-5">
                <span className="spinner-border spinner-border-sm text-danger"></span>
                <span className="ms-3">{t}</span>
            </div>
        );
    },

};



export const SmallPage = ({ name, children }) => {
    return (
        <div className="container">
            <div className="row justify-content-center pt-4">
                <div className="col-12 col-lg-7">
                    {name && <h1 className="display-5 fw-bold mb-4">{name}</h1>}
                    {children}
                </div>
            </div>
        </div>
    );
}
