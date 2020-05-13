window.updateRole = (id,name,desc) => {

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
        footer += `<button type="button" class="btn btn-default" data-dismiss="modal" onClick="roleDelete()">Delete</button>`
        footer += `<button type="button" class="btn btn-secondary" data-dismiss="modal" onClick="roleClose()">Cancel</button>`
        footer += `<button type="button" class="btn btn-primary" data-dismiss="modal" onClick="roleUpdate()">Update</button>`
        
    $("#modalHeader").html(`<h4 class="modal-title">UPDATE ROLE</h4>`);
    $("#modalBody").html(html);
    $("#modalFooter").html(footer);

    $("#globalModal").modal('show');

}

window.roleClose = () => $("#globalModal").modal('hide')

window.roleUpdate = () => {

    const myurl  = `${url}/role-update`;
    let postData = {
        _token: token,
        id: $("#id").val(),
        name: $("#name").val(),
        description: $("#description").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/roles`;
        
    },'json')

}

window.roleDelete = () => {
    
    const myurl  = `${url}/role-delete`;
    let postData = {
        _token: token,
        id: $("#id").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/roles`;

    },'json')
}

window.roleAdd = () => {

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
        footer += `<button type="button" class="btn btn-secondary" data-dismiss="modal" onClick="roleClose()">Cancel</button>`
        footer += `<button type="button" class="btn btn-primary" data-dismiss="modal" onClick="roleSave()">Save</button>`        
        
    $("#modalHeader").html(`<h4 class="modal-title">ADD ROLE</h4>`);
    $("#modalBody").html(html);
    $("#modalFooter").html(footer);

    $("#globalModal").modal('show');

}

window.roleSave = () => {
    
    const myurl  = `${url}/role-add`;
    let postData = {
        _token: token,
        name: $("#name").val(),
        description: $("#description").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/roles`;

    },'json')
}

