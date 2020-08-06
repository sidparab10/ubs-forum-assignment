document.onreadystatechange = () => {
    loadComponents('header', $("#header-container"));
    loadComponents('main', $("#main-container"));
    loadComponents('footer', $("#footer-container"));
}
https://sidparab10.github.io/ubs-forum-assignment/src/components/header/css/header.css
loadComponents = (name, container) => {
    $.get(`https://sidparab10.github.io/ubs-forum-assignment/src/components/${name}/${name}.json`, (configData) => {
        $.get(`https://sidparab10.github.io/ubs-forum-assignment/src/components/${name}/${name}.hbs`, (data) => {
            const headerTemplate = Handlebars.compile(data);
            container.html(headerTemplate(configData.data));
        }, 'html');
        if (configData.addCss && configData.addCss.length) {
            configData.addCss.forEach((elem) => {
                addStyleTag(name, elem);
            });
        }
        if (configData.addScript && configData.addScript.length) {
            configData.addScript.forEach((elem) => {
                addScriptTag(name, elem);
            });
        }
    });
}

addStyleTag = (name, elem) => {
    const id = `style-${name}-${elem}`;
    const count = $('head').find("#" + id).length;
    if (!count) {
        const styleElem = document.createElement("link");
        styleElem.href = `https://sidparab10.github.io/ubs-forum-assignment/src/components/${name}/css/${elem}.css`;
        styleElem.rel = 'stylesheet';
        styleElem.id = id
        document.head.appendChild(styleElem);
    }
}

addScriptTag = (name, elem) => {
    const id = `script-${name}-${elem}`;
    const count = $('head').find("#" + id).length;
    if (!count) {
        const styleElem = document.createElement("script");
        styleElem.src = `https://sidparab10.github.io/ubs-forum-assignment/src/components/${name}/js/${elem}.js`;
        document.head.appendChild(styleElem);
    }
}