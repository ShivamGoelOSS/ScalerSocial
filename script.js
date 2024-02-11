const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var saveContent="";
var saveDate="";
var previousTarget;
window.addEventListener("DOMContentLoaded", (event) => {
    const element = document.querySelector("body");
    element.addEventListener("click", function (e) {
        if(e.target.classList.contains("heart")){
            if (e.target.src.includes("heart.png")) {
                e.target.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
            } else {
                e.target.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
            }
        }
        else if(e.target.id=="Post-button"){
            var mainElement=document.createElement("div");
            var textElement=document.querySelector("#Write-text");
            var content=textElement.value.trim();
            var date=new Date();
            var day=date.getDate();
            var month=months[date.getMonth()];
            if(content.length!=0){
                mainElement.classList.add("tweet");
                mainElement.innerHTML=`
                <div class="main-tweet">
                    <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                    <div class="tweet-right">
                        <div class="top-right-tweet">
                            <div class="name-id">
                                <span id="user-name">Joanne Graham</span>
                                <span id="user-id">@joannegraham123</span>
                                <span id="time">&#183; ${day} ${month}</span>
                            </div>
                            <div class="edit-delete">
                                <img class="edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                                <img class="delete" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                            </div>
                        </div>
                        <span contenteditable="false" id="tweet-content">${content}</span>
                        <div class="bottom-right-tweet">
                            <img class="com-icon" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="">
                            <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                        </div>
                    </div> 
                </div>
                <div class="Comment-container">
                    <div class="write-comment">
                        <div class="write-block">
                            <div class="top-block">
                                <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                                <textarea name="input-comment" id="input-comment" cols="30" rows="10" placeholder="Type your thoughts here....." maxlength="100"></textarea>
                            </div>
                            <div class="bottom-block">
                                <span id="comment-char-counter">0 / 100</span>
                                <button id="Cancel-button">Cancel</button>
                                <button id="Comment-button">Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                var parentElement=document.querySelector(".tweet-container");
                parentElement.insertBefore(mainElement,parentElement.firstChild);
                textElement.value="";
                var counterElement=document.querySelector("#char-counter");
                counterElement.innerText=0+" / 100";
                counterElement.style.color="rgba(0, 0, 0, 0.6)";
                // parentElement.parentElement.children[1].style.display="none";
                window.scrollTo(0,0);
            }
            else{
                var counterElement=document.querySelector("#char-counter");
                counterElement.innerText=0+" / 100";
                counterElement.style.color="rgba(0, 0, 0, 0.6)";
                textElement.parentElement.parentElement.style.border="2px solid red";
                setTimeout(function(){
                    textElement.parentElement.parentElement.style.border="1px solid lightgray";
                    textElement.value="";
                    textElement.focus();
                },300);
            }
        }
        else if(e.target.classList.contains("com-icon")){
            var element1=e.target.parentElement.parentElement.parentElement.parentElement.children[1];
            if(element1.style.display=="block"&&(!(element1.childElementCount==1))){
                element1.style.display="none";
            }
            else{
                element1.children[0].style.display="block";
                element1.style.display="block";
                element1.children[0].children[0].children[0].children[1].focus();
                // element1.parentElement.scrollIntoView();
            }
        }
        else if(e.target.id=="Comment-button"){
            var element3=e.target.parentElement.parentElement.children[0].children[1];
            var content=element3.value.trim();
            var date=new Date();
            var day=date.getDate();
            var month=months[date.getMonth()];
            if(content.length!=0){
                var newElement=document.createElement("div");
                newElement.classList.add("comment");
                newElement.innerHTML=`
                <div class="reply">
                    <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                    <div class="tweet-right">
                        <div class="top-right-tweet">
                            <div class="name-id">
                                <span id="user-name">Joanne Graham</span>
                                <span id="user-id">@joannegraham123</span>
                                <span id="time">&#183; ${day} ${month}</span>
                            </div>
                            <div class="edit-delete">
                                <img class="edit-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                                <img class="delete-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                            </div>
                        </div>
                        <span contenteditable="false" id="tweet-content">${content}</span>
                        <div class="bottom-right-tweet">                                        
                            <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                        </div>
                    </div>   
                </div>
                `;
                element3.value="";
                element3.parentElement.parentElement.children[1].children[0].style.color="rgba(0, 0, 0, 0.6)";
                var element4=e.target.parentElement.parentElement.parentElement.parentElement;
                element4.insertBefore(newElement,element4.children[1]);
                element4.children[0].style.display="none";
                element4.children[0].children[0].children[1].children[0].innerText=0+" / 100";
                // newElement.scrollIntoView();
            }
            else{
                var counterElement=document.querySelector("#comment-char-counter");
                counterElement.innerText=0+" / 100";
                counterElement.style.color="rgba(0, 0, 0, 0.6)";
                element3.parentElement.parentElement.parentElement.style.border="2px solid red";
                setTimeout(function(){
                    element3.parentElement.parentElement.parentElement.style.border="1px solid darkgray";
                    element3.value="";
                    element3.focus();
                },300);
            }
        }
        else if(e.target.id=="Cancel-button"){
            var element2=e.target.parentElement.parentElement.parentElement;
            element2.style.display="none";
        }
        else if(e.target.classList.contains("edit")){
            var editContent=e.target.parentElement.parentElement.parentElement.children[1].innerText.trim();
            saveContent=editContent;
            saveDate=new Date();
            var principleTweet=e.target.parentElement.parentElement.parentElement.parentElement;
            var PTParent=principleTweet.parentElement;
            var indexPT=Array.from(principleTweet.parentElement.parentElement.children).indexOf(principleTweet.parentElement);
            principleTweet.remove();
            var newDiv=document.createElement("div");
            newDiv.classList.add("main-tweet-edit");
            newDiv.innerHTML=`
            <div class="top-block-edit">
                <img class="user-img-edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                <textarea name="Write-text-edit" id="Write-text-edit" cols="30" rows="10" placeholder="Type your thoughts here....." maxlength="100">${editContent}</textarea>
            </div>
            <div class="bottom-block-edit">
                <span id="char-counter-edit">${editContent.length} / 100</span>
                <button id="Cancel-button-edit">Cancel</button>
                <button id="Post-button-edit">Post</button>
            </div>
            `;
            PTParent.parentElement.children[indexPT].insertBefore(newDiv,PTParent.parentElement.children[indexPT].firstChild);
            newDiv.children[0].children[1].focus();
            newDiv.children[0].children[1].selectionStart=newDiv.children[0].children[1].selectionEnd=newDiv.children[0].children[1].value.length;
        }
        else if(e.target.id=="Cancel-button-edit"){
            var inputText=saveContent;
            var day=saveDate.getDate();
            var month=months[saveDate.getMonth()];
            var sameTweet=document.createElement("div");
            sameTweet.classList.add("main-tweet");
            sameTweet.innerHTML=`
            <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
            <div class="tweet-right">
                <div class="top-right-tweet">
                    <div class="name-id">
                        <span id="user-name">Joanne Graham</span>
                        <span id="user-id">@joannegraham123</span>
                        <span id="time">&#183; ${day} ${month}</span>
                    </div>
                    <div class="edit-delete">
                        <img class="edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                        <img class="delete" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                    </div>
                </div>
                <span contenteditable="false" id="tweet-content">${inputText}</span>
                <div class="bottom-right-tweet">
                    <img class="com-icon" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="">
                    <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                </div>
            </div> 
            `;
            var index=Array.from(document.querySelector(".tweet-container").children).indexOf(e.target.parentElement.parentElement.parentElement);
            e.target.parentElement.parentElement.remove();
            document.querySelector(".tweet-container").children[index].insertBefore(sameTweet,document.querySelector(".tweet-container").children[index].firstChild);
        }
        else if(e.target.id=="Post-button-edit"){
            var textElement=e.target.parentElement.parentElement.children[0].children[1];
            var inputText=textElement.value;
            if(inputText.length!=0){
                var date=new Date();
                var day=date.getDate();
                var month=months[date.getMonth()];
                var editedTweet=document.createElement("div");
                editedTweet.classList.add("main-tweet");
                editedTweet.innerHTML=`
                <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                <div class="tweet-right">
                    <div class="top-right-tweet">
                        <div class="name-id">
                            <span id="user-name">Joanne Graham</span>
                            <span id="user-id">@joannegraham123</span>
                            <span id="time">&#183; ${day} ${month}</span>
                        </div>
                        <div class="edit-delete">
                            <img class="edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                            <img class="delete" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                        </div>
                    </div>
                    <span contenteditable="false" id="tweet-content">${inputText}</span>
                    <div class="bottom-right-tweet">
                        <img class="com-icon" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="">
                        <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                    </div>
                </div> 
                `;
                var index=Array.from(document.querySelector(".tweet-container").children).indexOf(e.target.parentElement.parentElement.parentElement);
                e.target.parentElement.parentElement.remove();
                document.querySelector(".tweet-container").children[index].insertBefore(editedTweet,document.querySelector(".tweet-container").children[index].firstChild);
            }
            else{
                var counterElement=document.querySelector("#char-counter-edit");
                counterElement.innerText=0+" / 100";
                counterElement.style.color="rgba(0, 0, 0, 0.6)";
                textElement.parentElement.parentElement.style.border="2px solid red";
                setTimeout(function(){
                    textElement.parentElement.parentElement.style.border="1px solid lightgray";
                    textElement.value="";
                    textElement.focus();
                },300);
            }
        }
        else if(e.target.classList.contains("delete")){
            previousTarget=e.target;
            document.querySelector(".overlay").style.display="block";
        }
        else if(e.target.classList.contains("delete-comment")){
            previousTarget=e.target;
            document.querySelector(".overlay").style.display="block";
        }
        else if(e.target.classList.contains("edit-comment")){
            saveContent=e.target.parentElement.parentElement.parentElement.children[1].innerText.trim();
            saveDate=new Date();
            var principleComment=e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
            var PCParent=principleComment.parentElement;
            var indexPC=Array.from(PCParent.children).indexOf(principleComment);
            principleComment.remove();
            var newDiv=document.createElement("div");
            newDiv.classList.add("edit-comment-block");
            newDiv.innerHTML=`
            <div class="write-block-edit">
                <div class="top-block">
                    <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                    <textarea name="input-comment-edit" id="input-comment-edit" cols="30" rows="10" placeholder="Type your thoughts here....." maxlength="100">${saveContent}</textarea>
                </div>
                <div class="bottom-block-edit">
                    <span id="comment-char-counter">${saveContent.length} / 100</span>
                    <button id="Cancel-button-comment-edit">Cancel</button>
                    <button id="Comment-button-edit">Comment</button>
                </div>
            </div>
            `;
            PCParent.insertBefore(newDiv,PCParent.children[indexPC]);
            newDiv.children[0].children[0].children[1].focus();
            newDiv.children[0].children[0].children[1].selectionStart=newDiv.children[0].children[0].children[1].selectionEnd=saveContent.length;
        }
        else if(e.target.id=="Cancel-button-comment-edit"){
            var element3=e.target.parentElement.parentElement.children[0].children[1]; //textarea
            var day=saveDate.getDate();
            var month=months[saveDate.getMonth()];
            var newElement=document.createElement("div");
            newElement.classList.add("comment");
            newElement.innerHTML=`
            <div class="reply">
                <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                <div class="tweet-right">
                    <div class="top-right-tweet">
                        <div class="name-id">
                            <span id="user-name">Joanne Graham</span>
                            <span id="user-id">@joannegraham123</span>
                            <span id="time">&#183; ${day} ${month}</span>
                        </div>
                        <div class="edit-delete">
                            <img class="edit-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                            <img class="delete-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                        </div>
                    </div>
                    <span contenteditable="false" id="tweet-content">${saveContent}</span>
                    <div class="bottom-right-tweet">                                        
                        <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                    </div>
                </div>   
            </div>
            `;
            var element4=e.target.parentElement.parentElement.parentElement.parentElement;//Comment-container
            var indexEC=Array.from(element4.children).indexOf(element3.parentElement.parentElement.parentElement);
            element4.insertBefore(newElement,element4.children[indexEC+1]); //before edit-comment-block
            element3.parentElement.parentElement.parentElement.remove();
        }
        else if(e.target.id=="Comment-button-edit"){
            var element3=e.target.parentElement.parentElement.children[0].children[1];
            var content=element3.value.trim();
            var date=new Date();
            var day=date.getDate();
            var month=months[date.getMonth()];
            if(content.length!=0){
                var newElement=document.createElement("div");
                newElement.classList.add("comment");
                newElement.innerHTML=`
                <div class="reply">
                    <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                    <div class="tweet-right">
                        <div class="top-right-tweet">
                            <div class="name-id">
                                <span id="user-name">Joanne Graham</span>
                                <span id="user-id">@joannegraham123</span>
                                <span id="time">&#183; ${day} ${month}</span>
                            </div>
                            <div class="edit-delete">
                                <img class="edit-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                                <img class="delete-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                            </div>
                        </div>
                        <span contenteditable="false" id="tweet-content">${content}</span>
                        <div class="bottom-right-tweet">                                        
                            <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                        </div>
                    </div>   
                </div>
                `;
                var element4=e.target.parentElement.parentElement.parentElement.parentElement;
                var index=Array.from(element4.children).indexOf(element3.parentElement.parentElement.parentElement);
                element4.insertBefore(newElement,element4.children[index]);
                element4.children[index+1].remove()
            }
            else{
                var counterElement=document.querySelector("#comment-char-counter");
                counterElement.innerText=0+" / 100";
                counterElement.style.color="rgba(0, 0, 0, 0.6)";
                element3.parentElement.parentElement.parentElement.style.border="2px solid red";
                setTimeout(function(){
                    element3.parentElement.parentElement.parentElement.style.border="1px solid darkgray";
                    element3.value="";
                    element3.focus();
                },300);
            }
        }
        else if((e.target.id=="cancel-delete")||(e.target.id==("crossButton"))){
            e.target.parentElement.parentElement.parentElement.style.display="none";
        }
        else if(e.target.id=="delete-delete"){
            if(previousTarget.classList.contains("delete")){
                previousTarget.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
                if(document.querySelector(".tweet-container").childElementCount===0){
                    document.querySelector("#nothing").style.display="block";
                }
            }
            else{
                previousTarget.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
            }
            e.target.parentElement.parentElement.parentElement.style.display="none";
        }
    });
    var container4=document.body;
    container4.addEventListener('keydown',function(e){
        // if(e.shiftKey==true&&e.target.value.length==0){
        //     e.preventDefault();
        // }
        if(e.key=="Enter"&&e.shiftKey==false){
            if(e.target.id=="Write-text"){
                e.preventDefault();
                var mainElement=document.createElement("div");
                var textElement=document.querySelector("#Write-text");
                var content=textElement.value.trim();
                var date=new Date();
                var day=date.getDate();
                var month=months[date.getMonth()];
                if(content.length!=0){
                    mainElement.classList.add("tweet");
                    mainElement.innerHTML=`
                    <div class="main-tweet">
                        <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                        <div class="tweet-right">
                            <div class="top-right-tweet">
                                <div class="name-id">
                                    <span id="user-name">Joanne Graham</span>
                                    <span id="user-id">@joannegraham123</span>
                                    <span id="time">&#183; ${day} ${month}</span>
                                </div>
                                <div class="edit-delete">
                                    <img class="edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                                    <img class="delete" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                                </div>
                            </div>
                            <span contenteditable="false" id="tweet-content">${content}</span>
                            <div class="bottom-right-tweet">
                                <img class="com-icon" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="">
                                <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                            </div>
                        </div> 
                    </div>
                    <div class="Comment-container">
                        <div class="write-comment">
                            <div class="write-block">
                                <div class="top-block">
                                    <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                                    <textarea name="input-comment" id="input-comment" cols="30" rows="10" placeholder="Type your thoughts here....." maxlength="100"></textarea>
                                </div>
                                <div class="bottom-block">
                                    <span id="comment-char-counter">0 / 100</span>
                                    <button id="Cancel-button">Cancel</button>
                                    <button id="Comment-button">Comment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    var parentElement=document.querySelector(".tweet-container");
                    parentElement.insertBefore(mainElement,parentElement.firstChild);
                    textElement.value="";
                    var counterElement=document.querySelector("#char-counter");
                    counterElement.innerText=0+" / 100";
                    counterElement.style.color="rgba(0, 0, 0, 0.6)";
                    parentElement.parentElement.children[1].style.display="none";
                    window.scrollTo(0,0);
                }
                else{
                    var counterElement=document.querySelector("#char-counter");
                    counterElement.innerText=0+" / 100";
                    counterElement.style.color="rgba(0, 0, 0, 0.6)";
                    textElement.parentElement.parentElement.style.border="2px solid red";
                    setTimeout(function(){
                        textElement.parentElement.parentElement.style.border="1px solid lightgray";
                        textElement.value="";
                        textElement.focus();
                    },300);
                }
            }
            else if(e.target.id=="input-comment"){
                e.preventDefault();
                var element3=e.target.parentElement.parentElement.children[0].children[1];
                var content=element3.value.trim();
                var date=new Date();
                var day=date.getDate();
                var month=months[date.getMonth()];
                if(content.length!=0){
                    var newElement=document.createElement("div");
                    newElement.classList.add("comment");
                    newElement.innerHTML=`
                    <div class="reply">
                        <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                        <div class="tweet-right">
                            <div class="top-right-tweet">
                                <div class="name-id">
                                    <span id="user-name">Joanne Graham</span>
                                    <span id="user-id">@joannegraham123</span>
                                    <span id="time">&#183; ${day} ${month}</span>
                                </div>
                                <div class="edit-delete">
                                    <img class="edit-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                                    <img class="delete-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                                </div>
                            </div>
                            <span contenteditable="false" id="tweet-content">${content}</span>
                            <div class="bottom-right-tweet">                                        
                                <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                            </div>
                        </div>   
                    </div>
                    `;
                    element3.value="";
                    element3.parentElement.parentElement.children[1].children[0].style.color="rgba(0, 0, 0, 0.6)";
                    var element4=e.target.parentElement.parentElement.parentElement.parentElement;
                    element4.insertBefore(newElement,element4.children[1]);
                    element4.children[0].style.display="none"; 
                    element4.children[0].children[0].children[1].children[0].innerText=0+" / 100";
                    // newElement.scrollIntoView();
                }
                else{
                    var counterElement=document.querySelector("#comment-char-counter");
                    counterElement.innerText=0+" / 100";
                    counterElement.style.color="rgba(0, 0, 0, 0.6)";
                    element3.parentElement.parentElement.parentElement.style.border="2px solid red";
                    setTimeout(function(){
                        element3.parentElement.parentElement.parentElement.style.border="1px solid darkgray";
                        element3.value="";
                        element3.focus();
                    },300);
                }
            }
            else if(e.target.id=="Write-text-edit"){
                e.preventDefault();
                var textElement=e.target.parentElement.parentElement.children[0].children[1];
                var inputText=textElement.value;
                if(inputText.length!=0){
                    var date=new Date();
                    var day=date.getDate();
                    var month=months[date.getMonth()];
                    var editedTweet=document.createElement("div");
                    editedTweet.classList.add("main-tweet");
                    editedTweet.innerHTML=`
                    <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                    <div class="tweet-right">
                        <div class="top-right-tweet">
                            <div class="name-id">
                                <span id="user-name">Joanne Graham</span>
                                <span id="user-id">@joannegraham123</span>
                                <span id="time">&#183; ${day} ${month}</span>
                            </div>
                            <div class="edit-delete">
                                <img class="edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                                <img class="delete" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                            </div>
                        </div>
                        <span contenteditable="false" id="tweet-content">${inputText}</span>
                        <div class="bottom-right-tweet">
                            <img class="com-icon" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="">
                            <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                        </div>
                    </div> 
                    `;
                    var index=Array.from(document.querySelector(".tweet-container").children).indexOf(e.target.parentElement.parentElement.parentElement);
                    e.target.parentElement.parentElement.remove();
                    document.querySelector(".tweet-container").children[index].insertBefore(editedTweet,document.querySelector(".tweet-container").children[index].firstChild);
                }
                else{
                    var counterElement=document.querySelector("#char-counter-edit");
                    counterElement.innerText=0+" / 100";
                    counterElement.style.color="rgba(0, 0, 0, 0.6)";
                    textElement.parentElement.parentElement.style.border="2px solid red";
                    setTimeout(function(){
                        textElement.parentElement.parentElement.style.border="1px solid lightgray";
                        textElement.value="";
                        textElement.focus();
                    },300);
                }
            }
            else if(e.target.id=="input-comment-edit"){
                var element3=e.target.parentElement.parentElement.children[0].children[1];
                var content=element3.value.trim();
                var date=new Date();
                var day=date.getDate();
                var month=months[date.getMonth()];
                if(content.length!=0){
                    var newElement=document.createElement("div");
                    newElement.classList.add("comment");
                    newElement.innerHTML=`
                    <div class="reply">
                        <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                        <div class="tweet-right">
                            <div class="top-right-tweet">
                                <div class="name-id">
                                    <span id="user-name">Joanne Graham</span>
                                    <span id="user-id">@joannegraham123</span>
                                    <span id="time">&#183; ${day} ${month}</span>
                                </div>
                                <div class="edit-delete">
                                    <img class="edit-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                                    <img class="delete-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                                </div>
                            </div>
                            <span contenteditable="false" id="tweet-content">${content}</span>
                            <div class="bottom-right-tweet">                                        
                                <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                            </div>
                        </div>   
                    </div>
                    `;
                    var element4=e.target.parentElement.parentElement.parentElement.parentElement;
                    var index=Array.from(element4.children).indexOf(element3.parentElement.parentElement.parentElement);
                    element4.insertBefore(newElement,element4.children[index]);
                    element4.children[index+1].remove()
                }
                else{
                    var counterElement=document.querySelector("#comment-char-counter");
                    counterElement.innerText=0+" / 100";
                    counterElement.style.color="rgba(0, 0, 0, 0.6)";
                    element3.parentElement.parentElement.parentElement.style.border="2px solid red";
                    setTimeout(function(){
                        element3.parentElement.parentElement.parentElement.style.border="1px solid darkgray";
                        element3.value="";
                        element3.focus();
                    },300);
                }
            }
        }
    });
    container4.addEventListener('input',function(e){
        var updateElement=e.target.parentElement.parentElement.children[1].children[0];
        var length=e.target.value.length;
        updateElement.innerText=length + " / 100";
        if(length==100){
            updateElement.style.color="red";
        }
        else{
            updateElement.style.color="rgba(0, 0, 0, 0.6)";
        }
    });
});
