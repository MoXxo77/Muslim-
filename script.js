// الحصول على عناصر النموذج ورسالة الخطأ
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// إضافة حدث عند إرسال النموذج
form.addEventListener('submit', function(event) {
    // منع إرسال النموذج بشكل افتراضي
    event.preventDefault();

    // الحصول على القيم من الحقول
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // التحقق من صحة المدخلات
    if (validateEmail(email) && password.length >= 6) {
        // عند نجاح التحقق
        alert('تم تسجيل الدخول بنجاح!');
        // هنا يمكنك إضافة الكود لإرسال البيانات إلى الخادم
    } else {
        // عند فشل التحقق
        errorMessage.classList.remove('hidden');
    }
});

// دالة للتحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
