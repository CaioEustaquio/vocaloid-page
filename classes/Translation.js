class Translation{

    static translate(key){

        let lang = !localStorage.getItem("application-lang") ? "en" : localStorage.getItem('application-lang');

        var request = new XMLHttpRequest();
        request.open("GET", `../assets/translate/${lang}.json`, false);
        request.send(null);
        var data = JSON.parse(request.responseText);
        
        return data[key];
    };

    static setLang(langId){

        return new Promise((resolve) =>{
            
            let selectedLang = document.querySelector("a.selected-lang");

            selectedLang.classList.remove("selected-lang");

            let element;

            if(langId){

                element = document.querySelector(`a#${langId}`);
                localStorage.setItem('application-lang', langId);
                
            }else{
                
                element = document.querySelector('a#en');
                localStorage.setItem('application-lang', "en");
            }
            
            element.classList.add("selected-lang");

            resolve();
        });
    }
}