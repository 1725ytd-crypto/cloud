// 當網頁載入完成後執行
window.onload = function() {
    console.log("網頁已就緒！");
    
    // 找尋標題元素
    const mainTitle = document.querySelector('.mg');
    
    // 當滑鼠點擊大標題時，會變換顏色
    mainTitle.addEventListener('click', function() {
        this.style.color = 'gold';
        alert('你發現了隱藏彩蛋！標題變色了！');
    });
};
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 商品按鈕點擊效果
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            if(this.innerText === "加入購物車") {
                this.innerText = "已加入！";
                this.style.backgroundColor = "#27ae60";
                alert("成功將商品加入清單！");
            }
        });
    });

    // 2. 聯絡表單送出
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`哈囉 ${name}，訊息已送出！我們會盡快聯絡您。`);
            contactForm.reset();
        });
    }

    
});
