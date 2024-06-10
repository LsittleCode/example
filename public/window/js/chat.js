Chat.prototype.messageList_add = function(){
    this.data.messageList.forEach((e)=>{
        e.addEventListener('click',()=>{
            this.data.chatWindow_header.innerHTML = e.querySelector("h6").innerHTML;
            this.data.mes_count.innerHTML = '';
            this.data.chatWindow.querySelector('.win_mes_mod').style.display = 'block';
            this.data.chatWindow.style.flex = 1;
        });
    });
}
Chat.prototype.sub_value = function(){
    this.data.submit.addEventListener('click',()=>{
       if(this.data.value.value.trim() !=""){
            const li = document.createElement('li');
            li.classList.add('mes');
            li.innerHTML = `
                <span class="text">${this.data.value.value}</span>
                <img src="./images/weChat_img.jpg" alt="本尊">
            `;
            this.data.mes_count.append(li);
            this.data.value.value = '';
       }else{
            return false;
       }
    })
}
function Chat(messageList,chatWindow){
    this.data = {
        messageList:document.querySelectorAll(`${messageList} li`),
        chatWindow:document.querySelector(`${chatWindow}`),
        chatWindow_header:document.querySelector('.p_name'),
        mes_count:document.querySelector('.count'),
        submit:document.querySelector('.sub'),
        value:document.querySelector('#text'),
    }
    this.messageList_add();
    this.sub_value();
}

const messagelist = new Chat('.messageList','.chat_window');










const fixed_mod = document.querySelector('.fixed_mod');
const circle_of_friends  = document.querySelector('.circle_of_friends ');
circle_of_friends.addEventListener('click',()=>{
    fixed_mod.style.display = 'block';
});
const circle_close = document.querySelector('.close');
circle_close.addEventListener('click',()=>{
    fixed_mod.style.display = 'none';
});