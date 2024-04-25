$("body").on('submit', '#formlogin', function(e) {
            e.preventDefault();        
            const formData = new FormData(e.target);
            $.ajax({
                type: "POST",
                dataType: 'json',
                url: "action/signin",
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                   success: function(data) {
                        if(data.status==true){
                            $('.page-loader').fadeOut('slow');
                            swal("Success", "Redirecting...", "success").then(function(){ window.location.href='index.php';});
                        }
                        else{
                            swal("Failed", "Invalid Credentials", "error");
                        }
                    },
                    error: function(xhr, status, error) {
                        console.log(error);
                    } 
            });
        });
$("body").on('submit', '#checkout', function(e) {
            e.preventDefault();        
            const formData = new FormData(e.target);
            $.ajax({
                type: "POST",
                dataType: 'json',
                url: "action/insert",
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                success: function(data) {
                    if (data.status===true){                
                        swal("Success", "Redirecting...", "success").then(function(){window.location.href="index.php"});
                    }else{
                        swal("Failed", "Invalid Credentials", "error");
                    }
                }
            });
        });
        
$("body").on('submit', '#formregister', function(e) {
            e.preventDefault();        
            const formData = new FormData(e.target);
            $.ajax({
                type: "POST",
                dataType: 'json',
                url: "action/register",
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                success: function(data) {
                    if (data.status===true){                
                        swal(data.icon, data.message, data.icon).then(function(){window.location.href="index.php"});
                    }else{
                        swal(data.icon, data.message, data.icon);
                    }
                }
            });
        });
        
function addQty(){
    var qty = $("#qty").val();
    $("#qty").val(parseInt(qty)+1);
}
function minusQty(){
    var qty = $("#qty").val();
    if(qty>1){
        $("#qty").val(parseInt(qty)-1);    
    }
}
function addCart(a){
    
    var qty = $("#qty").val();
    
    $.ajax({
            url: 'php/insert',
            type: 'POST', 
            data:{
              add_into_cart:"1",
              a:a,
              qty:qty
            },
            dataType: 'json', 
            success: function(data) {
                if (data.status===200){                
                    swal("Success", "Redirecting...", "success").then(function(){location.reload();});
                }else{
                    swal("Failed", data.msg , "error");
                }
            },
            error: function(xhr, status, error) {
                console.log(error);
            } 
        });
    
}

function searchItem(){
    
    var str = $("#search_param").val();
    
    if(str.length>0 && str!==''){
        
        $("#displaySearchvalue").show();
    
        $.ajax({
                url: 'action/insert',
                type: 'POST', 
                data:{
                  search_products:"1",
                  str:str
                },
                dataType: 'text', 
                success: function(data) {
                     $("#displaySearchvalue").html(data);
                },
                error: function(xhr, status, error) {
                    console.log(error);
                } 
            });
        
    }else{
        
        $("#displaySearchvalue").hide();
        
    }
    
}

function confirmOrder(){
    
    var a = {};
    
    a['fname'] = $("#firstName").val();
    a['lname'] = $("#lastName").val();
    a['cname'] = $("#companyName").val();
    a['add'] = $("#address").val();
    a['city'] = $("#townCity").val();
    a['state'] = $("#stateCountry").val();
    a['zip'] = $("#zipcode").val();
    a['phone'] = $("#phone").val();
    a['save'] = $("#shippingAddressEscape").val();
    
    if(a.fname.length>0 && a.cname.length>0 && a.phone.length>0){
    
        $.ajax({
                url: 'action/insert',
                type: 'POST', 
                data:{
                  order_confirmation:"1",
                  a:a
                },
                dataType: 'json',
                beforeSend:function() {    
                    $('.page-loader').show();
                    
                },
                success: function(data) {
                    if(data.status==true){
                        $('.page-loader').fadeOut('slow');
                        swal("Success", "Order submitted...", "success").then(function(){ window.location.href='index.php';});
                    }
                },
                error: function(xhr, status, error) {
                    console.log(error);
                } 
            });
        
    }else{
        
        swal("Warning", "Oops please fill manditory details" , "warning");
        
    }
    
}

function clearPopup(){
    
    //$(".remove-cart-shadow").attr("style","display:none");
    $(".top-cart").removeClass("show");
    $(".dropdown-menu").removeClass("show");
    
}
function cart_remove(id,rowid){
        var rowid = rowid;
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "action/update",
            data: {remove_cart:1,id:id},
            success: function(data) {
                if (data.del_sta===true){                
                    swal("Removed", "From Cart", "success").then(
                        function(){
                        $("#id_"+id).remove()
                        if(rowid=='1'){
                            location.reload();
                        }
                    });
                }else{
                    swal("Failed", "Somthing went Wrong", "error");
                }
            }
        });
    }
// var mobilemenubtn = document.getElementById("show-megamenu");

// console.log(mobilemenubtn);