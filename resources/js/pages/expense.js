window.updateExpense = (id,amount,entryDate,data) => {

    var expense_categories = JSON.parse(Base64.decode(data));

    let html  = ''
        html += `
        <form>
        <div class="form-group">
            <label for="sel1">Expense Category:</label>
            <select class="form-control" id="ec">`
            for(let x = 0;x < expense_categories.length;x++) {
    html +=   `<option value="${expense_categories[x]['id']}">${expense_categories[x]['name']}</option>`
            }
    html += `</select>
        </div>`

        html +=`
            <input type="hidden" name="_token" value="${token}">
            <input type="hidden" id="id" value="${id}">
            <div class="form-group">
                <label for="name">Amount:</label>
                <input type="text" class="form-control" id="amount" value="${amount}" required>
            </div>
            <div class="form-group">  
                <label for="name">Entry Date:</label>
                <input type="text" class="form-control" id="entry_date" value="${entryDate}" required>
            </div>
        </form>`
    
    let footer = ''
        footer += `<button type="button" class="btn btn-default" data-dismiss="modal" onClick="ExpenseDelete()">Delete</button>`
        footer += `<button type="button" class="btn btn-secondary" data-dismiss="modal" onClick="ExpenseClose()">Cancel</button>`
        footer += `<button type="button" class="btn btn-primary" data-dismiss="modal" onClick="ExpenseUpdate()">Update</button>`
        
    $("#modalHeader").html(`<h4 class="modal-title">ADD Expense</h4>`);
    $("#modalBody").html(html);
    $("#modalFooter").html(footer);

    $("#globalModal").modal('show');
    $('#entry_date').datepicker({format: 'yyyy-mm-dd'});

}

window.ExpenseClose = () => $("#globalModal").modal('hide')

window.ExpenseUpdate = () => {

    const myurl  = `${url}/expense-update`;
    let postData = {
        _token: token,
        id: $("#id").val(),
        amount: $("#amount").val(),
        entry_date: $("#entry_date").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/expense`;
        
    },'json')

}

window.ExpenseDelete = () => {
    
    const myurl  = `${url}/expense-delete`;
    let postData = {
        _token: token,
        id: $("#id").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/expense`;

    },'json')
}

window.ExpenseAdd = (data) => {

    var expense_categories = JSON.parse(Base64.decode(data));

    let html  = ''
        html += `
        <form>
        <div class="form-group">
            <label for="sel1">Expense Category:</label>
            <select class="form-control" id="ec">`
            for(let x = 0;x < expense_categories.length;x++) {
    html +=   `<option value="${expense_categories[x]['id']}">${expense_categories[x]['name']}</option>`
            }
    html += `</select>
        </div>`

        html +=`
            <input type="hidden" name="_token" value="${token}">
            <div class="form-group">
                <label for="name">Amount:</label>
                <input type="number" class="form-control" id="amount" value="" required>
            </div>
            <div class="form-group">  
                <label for="name">Entry Date:</label>
                <input type="text" class="form-control" id="entry_date" value="" required>
            </div>
        </form>`
    
    let footer = ''
        footer += `<button type="button" class="btn btn-secondary" data-dismiss="modal" onClick="ExpenseClose()">Cancel</button>`
        footer += `<button type="button" class="btn btn-primary" data-dismiss="modal" onClick="ExpenseSave()">Save</button>`        
        
    $("#modalHeader").html(`<h4 class="modal-title">ADD Expense</h4>`);
    $("#modalBody").html(html);
    $("#modalFooter").html(footer);

    $("#globalModal").modal('show');
    $('#entry_date').datepicker({format: 'yyyy-mm-dd'});

}

window.ExpenseSave = () => {
    
    const myurl  = `${url}/expense-add`;
    let postData = {
        _token: token,
        ec: $("#ec").val(),
        amount: $("#amount").val(),
        entry_date: $("#entry_date").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/expense`;

    },'json')
    
}

