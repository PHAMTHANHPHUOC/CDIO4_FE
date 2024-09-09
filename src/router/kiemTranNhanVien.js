import axios from 'axios';
import 'toastr/build/toastr.css';
import toastr from 'toastr';
export default function(to, from,next){
    axios
        .post('http://127.0.0.1:8000/api/nhan-vien/kiem-tra-chia-khoa',{},{
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('chia_khoa_16')
            }
        })
    .then((res)=>{
        if(res.data.status){
            next();
        }else{
            next('/nhan-vien/dang-nhap');
            toastr.error(res.data.message);
            }
        })
        .catch(()=>{
            next('/nhan-vien/dang-nhap');
            toastr.error('Bạn phải đăng nhập nhé');
        });
}