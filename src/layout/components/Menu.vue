<template >
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class=" navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/">
                        <a class="nav-link" href="/">
                            <div class="parent-icon"><i class="fa-solid fa-house"></i>
                            </div>
                            <div class="menu-title">TrangChu</div>
                        </a>
                    </router-link>
                </li>             
               
                <li class="nav-item">
                    <router-link to="/cdio/sale">
                        <a class="nav-link" href="/cdio/sale">
                            <div class="parent-icon"><i class="fa-solid fa-fire"></i>
                            </div>
                            <div class="menu-title">Sẩn phẩm sale</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/cdio/chi-tiet-san-pham-ok">
                        <a class="nav-link" href="/cdio/chi-tiet-san-pham-ok">
                            <div class="parent-icon"><i class="fa-solid fa-weight-scale"></i>
                            </div>
                            <div class="menu-title">Chi Tiết Sản Phẩm</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/cdio/gio-hang">
                        <a class="nav-link" href="/cdio/gio-hang">
                            <div class="parent-icon"><i class="fa-solid fa-weight-scale"></i>
                            </div>
                            <div class="menu-title">Giỏ Hàng</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/cdio/don-hang">
                        <a class="nav-link" href="/cdio/don-hang">
                            <div class="parent-icon"><i class="fa-solid fa-weight-scale"></i>
                            </div>
                            <div class="menu-title">đơn Hàng</div>
                        </a>
                    </router-link>
                </li>
                










<!--                 
                <li class="nav-item">
                    <router-link to="/cdio/danh-sach-khuyen-mai">
                        <a class="nav-link" href="/cdio/danh-sach-khuyen-mai">
                            <div class="parent-icon"><i class="fa-solid fa-weight-scale"></i>
                            </div>
                            <div class="menu-title">Danh Sach Khuyen Mai</div>
                        </a>
                    </router-link>
                </li>
                
                <li class="nav-item">
                    <router-link to="/cdio/danh-muc">
                        <a class="nav-link" href="/cdio/danh-muc">
                            <div class="parent-icon"><i class="fa-solid fa-list"></i>
                            </div>
                            <div class="menu-title">Danh Mục Sản Phẩm</div>
                        </a>
                    </router-link>
                </li> -->
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style >
    
</style>