const toasty = {
  success: (message, options) => createToast("success", message, options),
  error: (message, options) => createToast("error", message, options),
  warning: (message, options) => createToast("warning", message, options),
  info: (message, options) => createToast("info", message, options),
  settings: {
    timer: 5000,
    success: { icon: "fa-circle-check", defaultText: "success" },
    error: { icon: "fa-circle-xmark", defaultText: "error" },
    warning: { icon: "fa-triangle-exclamation", defaultText: "warning" },
    info: { icon: "fa-circle-info", defaultText: "info" },
  }
};

function createToast(id, message, options) {
  const { icon, defaultText } = toasty.settings[id];
  const text = message?.length ? message : defaultText;
  const invertedClass = options?.inverted ? "inverted" : "";

  const elem = document.createElement("li");
  elem.timeoutId = setTimeout(() => removeToast(elem), toasty.settings.timer);
  elem.className = `toast ${id} ${invertedClass}`;
  elem.innerHTML =
    `<div class="column">
       <i class="fa-solid ${icon}"></i>
       <span>${text}</span>
    </div>
    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

  document.querySelector(".notifications").appendChild(elem);
}

function removeToast(elem) {
  elem.classList.add("hide");
  if (elem.timeoutId) clearTimeout(elem.timeoutId);
  setTimeout(() => elem.remove(), 500);
}




window.onload = function() {
  // تشغيل البرنامج عند تحميل الصفحة
  setInterval(() => {
    // إظهار البوب "info" كل 30 ثانية
    const message = getRandomMessage();
    createToast("success", message);
  }, 40000); // كل 30 ثانية
};

function getRandomMessage() {
  const messages = [
    'اذكر الله',
    'لا حول ولا قوة الا بالله',
    'صل على رسول الله',
    'سبحان الله',
    'الحمد لله',
    'لا إله إلا الله',
    'الله اكبر',
    
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

