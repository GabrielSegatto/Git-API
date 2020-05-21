function novoItem(){
    const form = document.getElementsByClassName("formulario");
    const div = document.createElement("div");
    div.textContent = `
        <label for="desc" class="descr">Item</label>
        <label for="campo">Descrição</label>
        <textarea name="campo" cols="22" id="form1" rows="3"></textarea>
        <label for="nome" id="campo">Quantidade</label>
        <input type="text" name="nome">
    `;
    div.className = 'form-group';
    form.appendChild(div);
}


function novoItem2(){
    const form = document.getElementsByClassName("formulario")[0];
    const div = document.createElement("div");
    div.className = "form-group";
    div.innerHTML = `
        <label for="desc" class="descr">Item</label>
        <label for="campo">Descrição</label>
        <textarea name="campo" cols="22" id="form1" rows="3"></textarea>
        <label for="nome" id="campo">Quantidade</label>
        <input type="text" name="nome">
    `;
    console.log(div);
    console.log(form);
    form.appendChild(div)
}