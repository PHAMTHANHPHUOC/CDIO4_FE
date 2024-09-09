import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraDaiLy from "./kiemTraDaiLy";
import kiemTranNhanVien from "./kiemTranNhanVien";
const routes = [
    
    
    {
        path : '/',
        component: ()=>import('../components/CDIO3/NguoiDung/Home/index.vue'),
    },
  
    {
        path : '/cdio/sale',
        component: ()=>import('../components/CDIO3/NguoiDung/Sale/index.vue'),
    },
    {
        path : '/cdio/gio-hang',
        component: ()=>import('../components/CDIO3/NguoiDung/GioHang/index.vue'),
    },
  
    
    {
        path : '/cdio/chi-tiet-san-pham-ok',
        component: ()=>import('../components/CDIO3/NguoiDung/ChiTietSanPham/index.vue'),
        props: true
    },
    {
        path : '/cdio/don-hang',
        component: ()=>import('../components/CDIO3/NguoiDung/DonHang/index.vue'),
        props: true
    },
    
    {
        path : '/cdio/admin/danh-muc',
        component: ()=>import('../components/CDIO3/Admin/DanhMuc/index.vue'),
        meta: {layout : 'am'},
    },
    {
        path : '/cdio/admin/danh-sach-khuyen-mai',
        component: ()=>import('../components/CDIO3/Admin/DanhSachKhuyenMai/index.vue'),
        meta: {layout : 'am'},
    },
    {
        path : '/cdio/admin/quan-ly-khach-hang',
        component: ()=>import('../components/CDIO3/Admin/QLKhachHang/index.vue'),
        meta: {layout : 'am'},
    },
    {
        path : '/cdio/admin/phan-quyen',
        component: ()=>import('../components/CDIO3/Admin/PhanQuyen/index.vue'),
        meta: {layout : 'am'},
    },
    {
        path : '/cdio/nha-cung-cap/hoa-don-nha-cung-cap',
        component: ()=>import('../components/CDIO3/NhaCungCap/HoaDonNhaCungCap/index.vue'),
        meta: {layout : 'ncc'},
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router