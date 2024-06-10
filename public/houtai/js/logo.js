window.addEventListener('DOMContentLoaded',function(){

    function isValue(el){
        this.el = el;
        this.bt = this.el.querySelector(".sub");
        this.bt.addEventListener("click",function(){
            const name = el.querySelector("#uname").value;
            const pwd = el.querySelector("#upassword").value;
            if(name.trim() == "zxs" && pwd.trim() == "570789429"){
               alert("登录成功");
               location.href = '../index.html';
            }else{
                alert("请确保用户名和密码的正确！");
            }
        });
    }
    const table = this.document.querySelector(".table");
    new isValue(table);

    const fanhui = document.querySelector("#fanhui");
    fanhui.addEventListener('click',function(){
        history.go(-1);
    });

});





















