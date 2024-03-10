//   window.addEventListener('load', function () {
//             // Set a timeout to hide the loading indicator and show the page content after 30 seconds
//             setTimeout(function () {
//                 var loadingIndicator = document.getElementById('loading-indicator');
//                 var pageContent = document.getElementById('body');

//                 // Hide the loading indicator
//                 loadingIndicator.style.display = 'none';

//                 // Show the page content
//                 pageContent.style.display = 'block';
//             }, 2000); // 30 seconds
//         });
const nav = document.querySelector('.nav');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');

openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show() {
    nav.style.display = 'flex';
    nav.style.top = '0';
}

function close() {
    nav.style.top = '100%';
    nav.style.display = 'none';
}


// yasser

let audio = document.querySelector('.audio-player');
let surahsContainer = document.querySelector('.surahs');
let ayah = document.querySelector('.text-select');

getSurahs();
            

function getSurahs() { 
    fetch('https://api.quran.gading.dev/surah')
        .then(response => response.json())
        .then(data => {
           for (let surah in data.data) {
    surahsContainer.innerHTML += `<div><p>${data.data[surah].name.long}</p></div>`;
            }
            let allSurahs = document.querySelectorAll('.surahs div'),
            ayahsAudios,
                ayahsText;
            allSurahs.forEach((surah,index) => { 
                console.log(surah);
                surah.addEventListener('click', () => { 
                    fetch(`https://api.quran.gading.dev/surah/${index + 1}`)
                        .then(response => response.json())
                        .then(data => {
                            let verses = data.data.verses;
                            ayahsAudios = [];
                            ayahsText = [];
                            verses.forEach(verse => {
                                ayahsAudios.push(verse.audio.primary)
                                ayahsText.push(verse.text.arab)
                                
                                    
                            })
                            let ayahIndex = 0;
                           
                            changeAyah(ayahIndex)
                            audio.addEventListener('ended', () => { 
                                ayahIndex++;
                                if (ayahIndex < ayahsAudios.length) {
                                    changeAyah(ayahIndex)
                                }
                                else {
                                    ayahIndex = 0;
                                    changeAyah(ayahIndex);
                                    audio.pause()
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "❤انتهت السورة <br> تم برمجته بواسطه  م / محمد خاطر    ",
                                        showConfirmButton: false,
                                        timer: 2800
});
                                    
                                }


                            })
                            function changeAyah(index) {
                                     audio.src = ayahsAudios[index];
                                     ayah.innerHTML = ayahsText[ayahIndex];
                                        
                                }
            
                        })
                })


            })
        })
}






function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementsByClassName("content")[0].style.marginLeft = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementsByClassName("content")[0].style.marginLeft = "0";
}

var sidebar = document.getElementById('sidebar');
var content = document.getElementsByClassName('content')[0];

function openSidebar() {
    sidebar.style.width = "250px";
    content.style.marginLeft = "250px";
}

function closeSidebar() {
    sidebar.style.width = "0";
    content.style.marginLeft = "0";
}



   
        function showAlert() {
            alert("قريباً!");
}
        



