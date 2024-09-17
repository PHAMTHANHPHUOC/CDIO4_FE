<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/logo.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/">
                        <a class="nav-link" href="/">
                            <div class="parent-icon"><i class="fa-solid fa-address-book"></i>
                            </div>
                            <div class="menu-title">Thực Đơn</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/nhan-vien/xuat-hoa-don">
                        <a class="nav-link" href="/">
                            <div class="parent-icon"><i class="fa-solid fa-address-book"></i>
                            </div>
                            <div class="menu-title">Hóa Đơn</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/nhan-vien/kho-hang">
                        <a class="nav-link" href="/">
                            <div class="parent-icon"><i class="fa-solid fa-address-book"></i>
                            </div>
                            <div class="menu-title">Kho Hàng</div>
                        </a>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/nhan-vien/nhap-kho">
                        <a class="nav-link" href="/">
                            <div class="parent-icon"><i class="fa-solid fa-address-book"></i>
                            </div>
                            <div class="menu-title">Nhập Kho</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/nhan-vien/xuat-kho">
                        <a class="nav-link" href="/">
                            <div class="parent-icon"><i class="fa-solid fa-address-book"></i>
                            </div>
                            <div class="menu-title">Xuất Kho</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/nhan-vien/kiem-kho">
                        <a class="nav-link" href="/">
                            <div class="parent-icon"><i class="fa-solid fa-address-book"></i>
                            </div>
                            <div class="menu-title">Kiểm Kho</div>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>