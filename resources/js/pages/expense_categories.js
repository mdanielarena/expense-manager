window.updateExpenseCategories = (id,name,desc) => {

    let html  = ''
        html += `
        <form>
            <input type="hidden" name="_token" value="${token}">
            <input type="hidden" id="id" value="${id}">
            <div class="form-group">
                <label for="name">Display Name:</label>
                <input type="text" class="form-control" id="name" value="${name}" required>
            </div>
            <div class="form-group">  
                <label for="name">Description:</label>
                <input type="text" class="form-control" id="description" value="${desc}" required>
            </div>
        </form>`
        
    let footer = ''
        footer += `<button type="button" class="btn btn-default" data-dismiss="modal" onClick="ExpenseCategoriesDelete()">Delete</button>`
        footer += `<button type="button" class="btn btn-secondary" data-dismiss="modal" onClick="ExpenseCategoriesClose()">Cancel</button>`
        footer += `<button type="button" class="btn btn-primary" data-dismiss="modal" onClick="ExpenseCategoriesUpdate()">Update</button>`
        
    $("#modalHeader").html(`<h4 class="modal-title">UPDATE EXPENSE CATEGORIES</h4>`);
    $("#modalBody").html(html);
    $("#modalFooter").html(footer);

    $("#globalModal").modal('show');

}

window.ExpenseCategoriesClose = () => $("#globalModal").modal('hide')

window.ExpenseCategoriesUpdate = () => {

    const myurl  = `${url}/expense-categories-update`;
    let postData = {
        _token: token,
        id: $("#id").val(),
        name: $("#name").val(),
        description: $("#description").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/expense-categories`;
        
    },'json')

}

window.ExpenseCategoriesDelete = () => {
    
    const myurl  = `${url}/expense-categories-delete`;
    let postData = {
        _token: token,
        id: $("#id").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/expense-categories`;

    },'json')
}

window.ExpenseCategoriesAdd = (data) => {

    let html  = ''
        html += `
        <form>
            <input type="hidden" name="_token" value="${token}">
            <div class="form-group">
                <label for="name">Display Name:</label>
                <input type="text" class="form-control" id="name" required>
            </div>
            <div class="form-group">  
                <label for="name">Description:</label>
                <input type="text" class="form-control" id="description" required>
            </div>
        </form>`
    
    let footer = ''
        footer += `<button type="button" class="btn btn-secondary" data-dismiss="modal" onClick="ExpenseCategoriesClose()">Cancel</button>`
        footer += `<button type="button" class="btn btn-primary" data-dismiss="modal" onClick="ExpenseCategoriesSave()">Save</button>`        
        
    $("#modalHeader").html(`<h4 class="modal-title">ADD Expense Categories</h4>`);
    $("#modalBody").html(html);
    $("#modalFooter").html(footer);

    $("#globalModal").modal('show');

}

window.ExpenseCategoriesSave = () => {
    
    const myurl  = `${url}/expense-categories-add`;
    let postData = {
        _token: token,
        name: $("#name").val(),
        description: $("#description").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/expense-categories`;

    },'json')
}

