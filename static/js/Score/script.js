function menuChange(){
    var trang_chu = document.getElementById('trang-chu');
    var phong_hoc = document.getElementById('phong-hoc');
    var hoc_luc = document.getElementById('hoc-luc');
    var tai_khoan = document.getElementById('tai-khoan');

    trang_chu.setAttribute('class', 'nav-link');
    phong_hoc.setAttribute('class', 'nav-link');
    tai_khoan.setAttribute('class', 'nav-link');
    hoc_luc.setAttribute('class', 'nav-link active');
    
}



function showingType(options){
    var score_container = document.getElementById('score');
    var hanh_kiem_container = document.getElementById('hanh-kiem');
    var bieu_do_container = document.getElementById('bieu-do');
    switch (options){
        case 1:
            score_container.style.display = 'block';
            hanh_kiem_container.style.display = 'none';
            bieu_do_container.style.display = 'none';
            break;
        case 2:
            score_container.style.display = 'none';
            hanh_kiem_container.style.display = 'block';
            bieu_do_container.style.display = 'none';
            break;
        case 3:
            score_container.style.display = 'none';
            hanh_kiem_container.style.display = 'none';
            bieu_do_container.style.display = 'block';
            break;
        default:
            break;
    }

}
    

score_array = [
    {
        subject: "Toán",
        TX1: 10,
        TX2: 9,
        TX3: 8,
        TX4: 7,
        DGGK: 10,
        DGCK: 8.5,
        DTB: 8.9,
    },
    {
        subject: "Toán",
        TX1: 10,
        TX2: 9,
        TX3: 8,
        TX4: 7,
        DGGK: 10,
        DGCK: 8.5,
        DTB: 8.9,
    },
    {
        subject: "Toán",
        TX1: 10,
        TX2: 9,
        TX3: 8,
        TX4: 7,
        DGGK: 10,
        DGCK: 8.5,
        DTB: 8.9,
    },
    {
        subject: "Toán",
        TX1: 10,
        TX2: 9,
        TX3: 8,
        TX4: 7,
        DGGK: 10,
        DGCK: 8.5,
        DTB: 8.9,
    },

];


function scoreBroad(score){
    return `<tr>
                <td>${score.subject}</td>
                <td>${score.TX1}</td>
                <td>${score.TX2}</td>
                <td>${score.TX3}</td>
                <td>${score.TX4}</td>
                <td>${score.DGGK}</td>
                <td>${score.DGCK}</td>
                <td>${score.DTB}</td>
            </tr>
            `
}

function showScoreBroad(){
    var table_body = document.getElementById('broad-body');
    table_body.innerHTML = score_array.map(scoreBroad).join('');
}