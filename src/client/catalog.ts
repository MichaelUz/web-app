const formCatalog = {
    ISBN: -1,
    action: "add",
    quantity: 0
}

window.onload = () => {
    const root = document.querySelector("#container");
    fetch("/api/book")
    .then(res => res.json())
    .then(books => {
        const tableData = getBookTable(books);
        createTable(tableData, root);
        const formRoot = document.querySelector("#edit-catalog-inputs");
        createFormInputs({
            ISBN: "number",
            action: "text",
            quantity: "number"
        }, formRoot, formCatalog);
        
        createButton(ButtonType.PRIMARY, formRoot, "Make order", () => console.log(formCatalog));
    })
    
}