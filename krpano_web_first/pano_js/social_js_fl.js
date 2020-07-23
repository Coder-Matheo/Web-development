/*
	krpano - super simple html5 text input plugin
*/

var krpanoplugin = function()
{
    var local = this;

    var krpano = null;
    var plugin = null;

    var inputelement = null;

    local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
    {
        krpano = krpanointerface;
        plugin = pluginobject;

        inputelement = document.createElement("input");
        inputelement1 = document.createElement("input");
        inputelement2 = document.createElement("input");
        inputelement3 = document.createElement("button");
        inputelement4 = document.createElement("button");
        inputelement5 = document.createElement("button");
        inputelement6 = document.createElement("input");
        inputelement7 = document.createElement("p");
        inputelement8 = document.createElement("button");




        inputelement.type = "text";
        inputelement1.type = "text";
        inputelement2.type = "text";
        inputelement6.type = "radio";


        inputelement3.innerText = "Click men1";
        inputelement4.innerText = "Click men2";
        inputelement5.innerText = "Click men3";
        inputelement.style.width  = "120px";
        inputelement1.style.width  = "120px";
        inputelement2.style.width  = "120px";
        inputelement3.style.width  = "128px";
        inputelement4.style.width  = "128px";
        inputelement5.style.width  = "128px";
        inputelement8.style.width  = "128px";

        inputelement.style.height = "20px";
        inputelement1.style.height = "20px";
        inputelement2.style.height = "20px";
        inputelement8.style.height = "30px";
        inputelement.style.marginBottom = "30px";
        inputelement3.style.backgroundColor = "#3b5998";
        inputelement4.style.backgroundColor = "#3a82da";
        inputelement5.style.backgroundColor = "#cb3f23";
        inputelement8.style.backgroundColor = "#5beaa5";
        inputelement3.style.border = "0";
        inputelement4.style.border = "0";
        inputelement5.style.border = "0";
        inputelement8.style.border = "0";
        inputelement.style.borderRadius = "5px";
        inputelement1.style.borderRadius = "5px";
        inputelement2.style.borderRadius = "5px";
        inputelement3.style.borderRadius = "5px";
        inputelement4.style.borderRadius = "5px";
        inputelement5.style.borderRadius = "5px";
        inputelement8.style.borderRadius = "5px";
        inputelement.placeholder = "Login";
        inputelement1.placeholder = "E-mail";
        inputelement2.placeholder = "Password";

        inputelement4.style.marginLeft = "3px";
        inputelement5.style.marginLeft = "3px";
        inputelement3.style.marginRight = "3px";
        inputelement4.style.marginRight = "3px";

        inputelement1.style.marginLeft = "3px";
        inputelement2.style.marginLeft = "3px";
        inputelement.style.marginRight = "3px";
        inputelement1.style.marginRight = "3px";

        inputelement3.innerText = "Continue with Facebook";
        inputelement4.innerText = "Continue with Twitter";
        inputelement5.innerText = "Continue with Google";
        inputelement8.innerText = "SING UP";



        inputelement6.style.borderBottomWidth = "0 3px 3px 0";
        inputelement6.style.marginTop = "15px";

        inputelement7.innerText = "I have carefully reviewed and understood\n" +
            "updated Terms and Conditions and\n" +
            "Privacy Policy";
        inputelement7.style.fontSize = "10px";
        inputelement7.style.float = "right";
        inputelement7.style.marginRight = "180px";




        plugin.registerattribute("text", "", text_set, text_get);
        plugin.registerattribute("onchanged", null);

        inputelement.addEventListener("change", text_changed, true);

        plugin.sprite.appendChild(inputelement);
        plugin.sprite.appendChild(inputelement1);
        plugin.sprite.appendChild(inputelement2);
        plugin.sprite.appendChild(inputelement3);
        plugin.sprite.appendChild(inputelement4);
        plugin.sprite.appendChild(inputelement5);
        plugin.sprite.appendChild(inputelement6);
        plugin.sprite.appendChild(inputelement7);
        plugin.sprite.appendChild(inputelement8);

    }

    local.unloadplugin = function()
    {
        plugin = null;
        krpano = null;
    }

    function text_set(newtext)
    {
        inputelement.value = newtext;
    }

    function text_get()
    {
        return inputelement.value;
    }

    function text_changed()
    {
        krpano.call(plugin.onchanged, plugin);
    }
};
