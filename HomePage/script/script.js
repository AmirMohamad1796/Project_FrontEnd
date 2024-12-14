// بررسی می‌کنیم که صفحه کامل لود شود
document.addEventListener('DOMContentLoaded', function() {
    // انتخاب عنصر با id="notif"
    const notifButton = document.getElementById('notif');

    // بررسی می‌کنیم که عنصر وجود داشته باشد
    if (notifButton) {
        notifButton.addEventListener('click', function(event) {
            event.preventDefault(); // از بارگذاری مجدد صفحه جلوگیری می‌کنیم
            showToast('این مرحله برای شما قفل می باشد ! ');
        });
    }
});

// تابع نمایش نوتیفیکیشن
function showToast(message) {
    const toast = document.getElementById("custom-toast");
    toast.textContent = message;

    // اضافه کردن کلاس show
    toast.classList.add("show");

    // حذف کلاس بعد از 3 ثانیه
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
