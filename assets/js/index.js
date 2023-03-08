window.onload = () =>{

    let header = document.querySelector('header.header');
    let loader = document.querySelector('.loader-box');
    
    header.style.display = 'flex';
    loader.style.display = 'none';

    
    const { createApp } = Vue;

    createApp({
        data() {
            return{
                translation: Translation
            }
        },

        mounted(){

            Translation.setLang(localStorage.getItem("application-lang"));

            let langsBtn = [...document.querySelectorAll("a.lang")];
        
            langsBtn.forEach((element) => {
        
                element.addEventListener("click", () =>{
                    
                    Translation.setLang(element.id).then(() =>{
                        
                        window.location.reload();
                    });
                });
            });
        }
    }).mount('#app');
};