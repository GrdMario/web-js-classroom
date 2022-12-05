navigation();

function navigation() {

    const replace = 'navigation/navigation.js';
    const base = document.currentScript.src.replace(replace, '');

    const navigation =
        `
        <div class="header__container">
            <ul class="navigation">
                <li class="navigation__item">
                    <a href="${base + 'index.html'}">
                    Home
                    </a>
                </li>
                <li class="navigation__item">
                    <a href="${base + 'users/index.html'}">
                    Users
                    </a>
                </li>
                <li class="navigation__item">
                    <a href="${base + 'cars/index.html'}">
                    Cars
                    </a>
                </li>
            </ul>
        </div>
        `;

    const node = document.createElement('div');
    node.innerHTML = navigation;

    document.body.insertBefore(node, document.body.firstChild);
}