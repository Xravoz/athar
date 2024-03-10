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

 const surasList = document.getElementById('surasList');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const audioPlayer = document.getElementById('audioPlayer');

    // البيانات من الـ API
    const reciters = [
     {
      "id": "20",
      "name": "خالد الجليل",
      "Server": "http://server10.mp3quran.net/jleel",
      "rewaya": "حفص عن عاصم",
      "count": "7",
      "letter": "خ",
      "suras": "الفاتحة,البقرة,ال عمران,النساء,المائدة,الأنعام,الأعراف,الأنفال,التوبة"
    },
    ];

    // إضافة خيارات السور
    reciters[0].suras.split(',').forEach((suraName, index) => {
      const suraOption = document.createElement('option');
      const suraNumber = index + 1;
      suraOption.value = `${reciters[0].Server}/${suraNumber.toString().padStart(3, '0')}.mp3`;
      suraOption.textContent = suraName;
      surasList.appendChild(suraOption);
    });

    playButton.addEventListener('click', () => {
      const selectedSurah = surasList.options[surasList.selectedIndex].value;
      if (selectedSurah) {
        audioPlayer.src = selectedSurah;
        audioPlayer.play();
      } else {
        alert('الرجاء اختيار سورة.');
      }
    });

    pauseButton.addEventListener('click', () => {
      audioPlayer.pause();
    });