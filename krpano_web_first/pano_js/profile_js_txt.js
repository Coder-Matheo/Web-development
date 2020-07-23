/*
	krpano - super simple html5 text input plugin
*/

var krpanoplugin = function()
{
    var local = this;

    var krpano = null;
    var plugin = null;

    var Twitter = null;

    local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
    {
        krpano = krpanointerface;
        plugin = pluginobject;



        email_var = document.createElement("p");
        text_story = document.createElement("p");
        Twitter = document.createElement("button");
        sing_bnt = document.createElement("button");


        email_var.innerText = "Ali.Dinarvand1370@gmail.com";
        text_story.innerText = "Programmer";
        Twitter.innerText = "Twitter";

        Twitter.style.width  = "100px";
        Twitter.style.height  = "20px";
        Twitter.style.border = "0";
        Twitter.style.backgroundColor = "#3a82da";
        Twitter.style.borderRadius = "5px";
        Twitter.style.marginLeft = "55px";

        sing_bnt.style.width  = "108px";
        sing_bnt.style.height = "20px";
        sing_bnt.style.backgroundColor = "#5beaa5";
        sing_bnt.style.border = "0";
        sing_bnt.style.borderRadius = "5px";
        sing_bnt.innerText = "SING UP";

        text_story.style.fontSize = "12px";
        text_story.style.marginLeft = "70px";

        email_var.style.fontSize = "12px";
        email_var.style.marginLeft = "20px";
        email_var.style.fontWeight = "bold";
        email_var.style.color = "black";
        text_story.style.fontWeight = "bold";
        text_story.style.color = "black";


        email_var.addEventListener("mouseover",function () {
            email_var.style.color = "white";
            email_var.style.textDecoration = "underline";

        });
        email_var.addEventListener("mouseout",function () {
            email_var.style.color = "black";
            email_var.style.textDecoration = "none";
        });

        email_var.addEventListener("click",function () {

            var email_messageWindow = window.open("",'win1','left=500,top=400,width=400,height=300');
            email_messageWindow.document.write("" +
                "<style> body{background-color: lightblue;} input{border-radius: 5px;margin-top: 10px;margin-bottom: 10px; border: #00007F solid 1px; height: 25px}</style>" +
                "<form  action='mailto:ali.dinarvand1370@gmail.com' method='post' enctype='text/plain'>" +
                "Name: <input type='text' name='name' placeholder='YOUR NAME'><br>" +
                "E-mail: <input type='text' name='mail' placeholder='YOUR E-MAIL'><br>" +
                "Comment: <input type='text' name='comment' size='50' placeholder='YOUR COMMENT'><br>"+
                "<input type='submit' value='Send'><br>"+
                "<input type='reset' value='Reset'>"+
                "</form>");

            email_messageWindow.document.appendChild(email_messageWindow);
        });
        Twitter.addEventListener("click",function () {
            window.location = 'https://twitter.com/home';
        });



















        plugin.sprite.appendChild(email_var);
        plugin.sprite.appendChild(text_story);
        plugin.sprite.appendChild(Twitter);
    }

    local.unloadplugin = function()
    {
        plugin = null;
        krpano = null;
    }


};
