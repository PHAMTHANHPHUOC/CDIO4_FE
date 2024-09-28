import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTranNhanVien from "./kiemTranNhanVien";
const routes = [
    
    
    {
        path : '/',
        component: ()=>import('../components/WebQuanLyCoffen/NhanVien/HienThiThucDon/index.vue'),
         meta: { layout: "nv" },
    },
     {
        path : '/trang-chu/danh-sach-san-pham',
        component: ()=>import('../components/WebQuanLyCoffen/NhanVien/HienThiThucDon/DanhSachSanPham.vue'),
        meta : {layout : 'nv'}
    },
    {
        path : '/danh-sach-san-pham/:id_danh_muc-:slug_danh_muc',
        component: ()=>import('../components/WebQuanLyCoffen/NhanVien/HienThiThucDon/DanhSachSanPham.vue'),
        meta : {layout : 'nv'},
        props: true
    },
   
    {
        path : '/nhan-vien/xuat-hoa-don',
        component: ()=>import('../components/WebQuanLyCoffen/NhanVien/XuatHoaDon/index.vue'),
         meta: { layout: "nv" },
    },
    {
        path : '/nhan-vien/kho-hang',
        component: ()=>import('../components/WebQuanLyCoffen/NhanVien/KhoHang/index.vue'),
         meta: { layout: "nv" },
    },
    {
        path : '/nhan-vien/Kiem-Kho',
        component: ()=>import('../components/WebQuanLyCoffen/NhanVien/KiemKho/index.vue'),
         meta: { layout: "nv" },
    },
    {
        path : '/nhan-vien/nhap-Kho',
        component: ()=>import('../components/WebQuanLyCoffen/NhanVien/NhapKho/index.vue'),
         meta: { layout: "nv" },
    },
    {
        path : '/nhan-vien/xuat-Kho',
        component: ()=>import('../components/WebQuanLyCoffen/NhanVien/XuatKho/index.vue'),
         meta: { layout: "nv" },
    },
    
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router