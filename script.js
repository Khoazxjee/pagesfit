document.addEventListener('DOMContentLoaded', () => {
    const cacMucBan = document.querySelectorAll('.muc-ban');

    cacMucBan.forEach(item => {
        const nutMo = item.querySelector('.nut-mo-ban');
        const chiTiet = item.querySelector('.chi-tiet-ban');

        if (nutMo && chiTiet) {
            nutMo.addEventListener('click', () => {
                const dangMo = chiTiet.classList.contains('active');

                cacMucBan.forEach(mucKhac => {
                    if (mucKhac !== item) {
                        const chiTietKhac = mucKhac.querySelector('.chi-tiet-ban');
                        const nutMoKhac = mucKhac.querySelector('.nut-mo-ban');

                        if (chiTietKhac && chiTietKhac.classList.contains('active')) {
                            chiTietKhac.classList.remove('active');
                            if (nutMoKhac) {
                                nutMoKhac.classList.remove('active');
                            }
                        }
                    }
                });

                if (dangMo) {
                    chiTiet.classList.remove('active');
                    nutMo.classList.remove('active');
                } else {
                    chiTiet.classList.add('active');
                    nutMo.classList.add('active');
                }
            });
        }
    });
});