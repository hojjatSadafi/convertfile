// handle dark and light

        // vars
        const changeThemeBtns = document.querySelectorAll('.change-theme-btn')

        // funcs
        function changeTheme() {
            document.documentElement.classList.toggle('dark')
            if (document.documentElement.classList.contains('dark')){
                localStorage.setItem('converter-theme','dark')
            } else {
                localStorage.setItem('converter-theme','light')
            }
        }

        // events
        window.onload = ()=>{
            let localstrageTheme = localStorage.getItem('converter-theme')
            if(localstrageTheme){
                document.documentElement.classList.add(localstrageTheme)
            }
        }
        changeThemeBtns.forEach(changeThemeBtn=>{
            changeThemeBtn.addEventListener('click',changeTheme)
        })

// drop down
        // vars
        const langDropDownBtn = document.querySelector('.lang-dropDown-btn')
        const langDropDownContent = document.querySelector('.lang-dropDown-content')
        
        // funcs
        function toggleLangDropDown(){
            langDropDownContent.classList.toggle('hide')
        }

        // event
        langDropDownBtn.addEventListener('click',toggleLangDropDown)


