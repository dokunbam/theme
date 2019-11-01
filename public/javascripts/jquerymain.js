$(document).ready(function() {

    $("#addPageBtn").click(function(e) {

        e.preventDefault();

        var addPageText = $("#addPageTitle").val().trim();
        var addPageTextArea = $('textarea').text('#addPageBody');
        var addPageChecked = $("#addPageChecked").val().trim();
        var addPageMeta = $("#addPageMeta").val().trim();
        var addPageDes = $("#addPageDes").val().trim();

        //check if #addPageChecked is checked
        if ($("#addPageChecked").is(':checked')) {
            addPageChecked = '<i class="fas fa-times"></i>';
        } else {
            addPageChecked = '<i class="fas fa-check"></i>';
        }

        // var delBtn = $("tr").children().add("button").addClass("btn btn-secondary");

        //  var id = Math.random().toString(16).slice(2);



        $("tbody").append("<tr>" +
            '<td> <input type="checkbox" id="checkedDel" aria-label="Checkbox for following text input">' +
            "<td>" + addPageText + "</td>" +
            "<td>" + addPageChecked + " </td>" +
            "<td>" + addPageTextArea + "</td>" +
            "<td>" + addPageMeta + "</td>" +
            "<td>" + addPageDes + "</td>" +
            // "<td>" + delBtn + "</td>" +
            '<td><button type="button" id="editBtn" class="btn btn-secondary" >Edit</button></td>' +
            '<td><button type="button" id="deleteBtn" onclick="delPage()" class="btn btn-danger " +id+>Delete</button></td>' +
            "</tr>");

        //  var deleteBtnID = document.getElementById(deleteBtn);
        //  deleteBtn.id

    });


});

function delPage() {
    // var tbody = document.getElementById("tableBody");
    // this.Child.remove(); 
    //if (confirm("Sure?")) {
    //var checked = document.getElementById(checkedDel);
    $("tableBody").find("input[name='checkedDel']").each(function() {
        if ($("#checkedDel").is(':checked')) {
            $("tr").remove();
        }
    })
}