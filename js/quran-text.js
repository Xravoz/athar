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

        const selectSurah = document.getElementById('surahs');
        const surahContent = document.getElementById('surah-content');

        // Fetch surahs data
        fetch('https://api.alquran.cloud/v1/surah')
            .then(response => response.json())
            .then(data => {
                data.data.forEach(surah => {
                    const option = document.createElement('option');
                    option.textContent = surah.englishName;
                    option.value = surah.number;
                    selectSurah.appendChild(option);
                });
            })
            .catch(error => console.error('Error fetching surahs:', error));

        // Fetch surah content
        function fetchSurah() {
            const surahNumber = selectSurah.value;
            if (!surahNumber) return;

            fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
                .then(response => response.json())
                .then(data => {
                    let content = `<h2>${data.data.englishName}</h2>`;
                    data.data.ayahs.forEach(verse => {
                        content += `<p>${verse.text}</p>`;
                    });
                    surahContent.innerHTML = content;
                })
                .catch(error => console.error('Error fetching surah content:', error));
        }

        // Fetch meta data
        fetch('https://api.alquran.cloud/v1/meta')
            .then(response => response.json())
            .then(data => {
                console.log('Meta Data:', data);
                // هنا يمكنك استخدام البيانات المسترجعة كما تشاء
            })
            .catch(error => console.error('Error fetching meta data:', error));
  
