// 제품 데이터
const product_data = [
    { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { category: "상의", brand: 'Gucci', product: '구찌 스네이크로고 맨투맨', price: '670,000' },
    { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { category: "하의", brand: 'Amiri', product: '아미리 청바지', price: '318,000' },
    { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { category: "신발", brand: 'ALEXANDER McQUEEN', product: '알렉산더 맥퀸', price: '738,000' },
    { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
    { category: "패션잡화", brand: 'Music&Goods', product: '언니 이건 사야해 귀걸이', price: '35,000' },
    { category: "패션잡화", brand: 'Music&Goods', product: '넌 내꺼 팔찌', price: '23,000' },
    { category: "패션잡화", brand: 'Music&Goods', product: '저기 신사분이 보낸 모자', price: '25,000' },
// ...
    ];
    // 제품 테이블에 데이터 추가
const product_data_Table = document.getElementById('product_data_Table');

// 초기 데이터 로딩
product_data.forEach((item) => {
    const row = product_data_Table.insertRow();
    row.insertCell(0).innerHTML = item.category;
    row.insertCell(1).innerHTML = item.brand;
    row.insertCell(2).innerHTML = item.product;
    row.insertCell(3).innerHTML = item.price;
    });
// 다크 모드

const darkModeSwitch = document.getElementById('darkModeSwitch');

darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeSwitch.checked);
});

// 회원가입
document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signupBtn');
    const signupForm = document.getElementById('signupForm');

    signupBtn.addEventListener('click', () => {
        signupForm.style.display =
            signupForm.style.display === 'none' || signupForm.style.display === ''
                ? 'block'
                : 'none';
    });
});
