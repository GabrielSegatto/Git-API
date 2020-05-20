const bnt = document.getElementById('bnt');
const render = document.getElementById('render');
bnt.addEventListener('click', listar);

async function listar(){
    const parent = document.getElementById("render");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    const user = document.getElementById('user');
    const url = `https://api.github.com/users/${user.value}/repos`;
    const response = await fetch(url);
    const result = await response.json();

    result.forEach(element => {
        const link = document.createElement('a');
        link.href = element.html_url;
        link.textContent = element.full_name;
        render.appendChild(link);
    });
}