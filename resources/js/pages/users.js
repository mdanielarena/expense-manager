window.updateUser = (id,username,email,data) => {

    var roles = JSON.parse(Base64.decode(data));

    let html  = ''
        html += `
        <form>
            <input type="hidden" name="_token" value="${token}">
            <input type="hidden" id="id" value="${id}">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="username" value="${username}" required>
            </div>
            <div class="form-group">  
                <label for="name">Email Address:</label>
                <input type="email" class="form-control" id="email" value="${email}" required>
            </div>
            `
        html += `
            <div class="form-group">
                <label for="sel1">Select Role:</label>
                <select class="form-control" id="role">`
                    for(let x = 0;x < roles.length;x++) {
        html +=        `<option value="${roles[x]['id']}">${roles[x]['name']}</option>`
                    }
        html += `
                </select>
           </div>
        </form>`
        
    
    let footer = ''
        footer += `<button type="button" class="btn btn-default" data-dismiss="modal" onClick="userDelete()">Delete</button>`
        footer += `<button type="button" class="btn btn-secondary" data-dismiss="modal" onClick="userClose()">Cancel</button>`
        footer += `<button type="button" class="btn btn-primary" data-dismiss="modal" onClick="userUpdate()">Update</button>`
        
    $("#modalHeader").html(`<h4 class="modal-title">UPDATE USER</h4>`);
    $("#modalBody").html(html);
    $("#modalFooter").html(footer);

    $("#globalModal").modal('show');

}

window.userClose = () => $("#globalModal").modal('hide')

window.userUpdate = () => {

    const myurl  = `${url}/user-update`;
    let postData = {
        _token: token,
        id: $("#id").val(),
        username: $("#username").val(),
        email: $("#email").val(),
        role: $("#role").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/users`;
        
    },'json')

}

window.userDelete = () => {
    
    const myurl  = `${url}/user-delete`;
    let postData = {
        _token: token,
        id: $("#id").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/users`;

    },'json')
}

window.userAdd = (data) => {

    var roles = JSON.parse(Base64.decode(data));

    let html  = ''
        html += `
        <form>
            <input type="hidden" name="_token" value="${token}">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="username" required>
            </div>
            <div class="form-group">  
                <label for="name">Email Address:</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="form-group">  
                <label for="name">Password:</label>
                <input type="password" class="form-control" id="password" required>
            </div>`
            
        html += `
            <div class="form-group">
                <label for="sel1">Select Role:</label>
                <select class="form-control" id="role">`
                    for(let x = 0;x < roles.length;x++) {
        html +=        `<option value="${roles[x]['id']}">${roles[x]['name']}</option>`
                    }
        html += `
                </select>
           </div>
        </form>`
    
    let footer = ''
        footer += `<button type="button" class="btn btn-secondary" data-dismiss="modal" onClick="userClose()">Cancel</button>`
        footer += `<button type="button" class="btn btn-primary" data-dismiss="modal" onClick="userSave()">Save</button>`        
        
    $("#modalHeader").html(`<h4 class="modal-title">ADD USER</h4>`);
    $("#modalBody").html(html);
    $("#modalFooter").html(footer);

    $("#globalModal").modal('show');

}

window.userSave = () => {
    
    const myurl  = `${url}/user-add`;
    let postData = {
        _token: token,
        username: $("#username").val(),
        email: $("#email").val(),
        role: $("#role").val(),
        password: $("#password").val(),
    }

    $.post(myurl,postData,(res) => {

        var data = JSON.parse(Base64.decode(res));
        if(data.succ) window.location = `${url}/users`;

    },'json')
}

