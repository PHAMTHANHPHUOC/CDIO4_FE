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
                    
                        <a class="nav-link" >
                            <div class="parent-icon"><i class="fa-solid fa-user"></i>
                            </div>
                            <div class="menu-title">ADMIN</div>
                        </a>
                 
                </li>             
               
                <li class="nav-item">
                    <router-link to="/cdio/admin/danh-sach-khuyen-mai">
                        <a class="nav-link" href="/cdio/admin/danh-sach-khuyen-mai">
                            <div class="parent-icon"><i class="fa-solid fa-weight-scale"></i>
                            </div>
                            <div class="menu-title">Danh Sach Khuyen Mai</div>
                        </a>
                    </router-link>
                </li>
                
                <li class="nav-item">
                    <router-link to="/cdio/admin/danh-muc">
                        <a class="nav-link" href="/cdio/admin/danh-muc">
                            <div class="parent-icon"><i class="fa-solid fa-sliders"></i>
                            </div>
                            <div class="menu-title">Danh Mục Sản Phẩm</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/cdio/admin/quan-ly-khach-hang">
                        <a class="nav-link" href="/cdio/admin/quan-ly-khach-hang">
                            <div class="parent-icon"><i class="fa-solid fa-users"></i>
                            </div>
                            <div class="menu-title">Danh sách khách hàng</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/cdio/admin/phan-quyen">
                        <a class="nav-link" href="/cdio/admin/phan-quyen">
                            <div class="parent-icon"><i class="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div class="menu-title">Phân quyền</div>
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
<style >
    
</style>