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
      "id": "76",
      "name": "علي جابر",
      "Server": "http://server11.mp3quran.net/a_jbr",
      "rewaya": "حفص عن عاصم",
      "count": "114",
      "letter": "ع",
        "suras": "الفاتحة,البقرة,آل عمران,النساء,المائدة,الأنعام,الأعراف,الأنفال,التوبة,يونس,هود,يوسف,الرعد,إبراهيم,الحجر,النحل,الإسراء,الكهف,مريم,طه,الأنبياء,الحج,المؤمنون,النور,الفرقان,الشعراء,النمل,القصص,العنكبوت,الروم,لقمان,السجدة,الأحزاب,سبإ,فاطر,يس,الصافات,ص,الزمر,غافر,فصلت,الشورى,الزخرف,الدخان,الجاثية,الأحقاف,محمد,الفتح,الحجرات,ق,الذاريات,الطور,النجم,القمر,الرحمن,الواقعة,الحديد,المجادلة,الحشر,الممتحنة,الصف,الجمعة,المنافقون,التغابن,الطلاق,التحريم,الملك,القلم,الحاقة,المعارج,نوح,الجن,المزمل,المدثر,القيامة,الإنسان,المرسلات,النبأ,النازعات,عبس,التكوير,الإنفطار,المطففين,الإنشقاق,البروج,الطارق,الأعلى,الغاشية,الفجر,البلد,الشمس,الليل,الضحى,الشرح,التين,العلق,القدر,البينة,الزلزلة,العاديات,القارعة,التكاثر,العصر,الهمزة,الفيل,قريش,الماعون,الكوثر,الكافرون,النصر,المسد,الإخلاص,الفلق,الناس"
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