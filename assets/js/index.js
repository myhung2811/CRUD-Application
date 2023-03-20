
$("#add_user").submit(function() {
    alert("Success!");
})


$("#update_user").submit(function(e) {
    e.preventDefault();

    let array_indexed = $(this).serializeArray();
    // console.log(array_indexed);
    let data = {};

    $.map(array_indexed, function(n,i) {
        data[n['name']] = n['value'];
    })

    // console.log(data);

    let request = {
        "url": `http://localhost:5000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response) {
        alert("User Updated Successfully");
    })
})



if(window.location.pathname == '/'){
    $onDelete = $(".table tbody td a.delete");
    $onDelete.click(function() {
        let id = $(this).attr("data-id");

        let  request = {
            "url": `http://localhost:5000/api/users/${id}`,
            "method": "DELETE"
        }

        if(confirm("Are you sure you want to delete")){
            
            $.ajax(request).done(function(response){
                alert("Success!");
                location.reload();
            })
        }
    })
}