<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-lg-5 col-xl-5">
              <h4 class="text-secondary"><b>{{ danh_muc.ten_danh_muc }}</b></h4>
              <!-- <h4 class="text-secondary"><b>Thiết Bị Điện Tử</b></h4> -->
            </div>
            <div class="col-lg-7 col-xl-7">
              <form class="float-lg-end">
                <div class="row row-cols-lg-2 row-cols-xl-auto g-2">
                  <div class="col">
                    <div class="position-relative">
                      <input type="text" class="form-control ps-5" placeholder="Tìm sản phẩm...">
                      <span class="position-absolute top-50 product-show translate-middle-y"><i
                          class="bx bx-search"></i></span>
                    </div>
                  </div>
                  <div class="col">
                    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                      <button type="button" class="btn btn-white">Sắp xếp</button>
                      <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button"
                          class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <i class="bx bx-chevron-down"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1" style="">
                          <li><a class="dropdown-item" href="#">Từ A đến Z</a></li>
                          <li><a class="dropdown-item" href="#">Từ Z đến A</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                      <button type="button" class="btn btn-white">Thể Loại</button>
                      <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button"
                          class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <i class="bx bxs-category"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                          <li><a class="dropdown-item" href="#">Xiaomi</a></li>
                          <li><a class="dropdown-item" href="#">Samsung Galaxy</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-white">Giá Cả</button>
                      <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button"
                          class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <i class="bx bx-slider"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="btnGroupDrop1">
                          <li><a class="dropdown-item" href="#">>3M VNĐ</a></li>
                          <li><a class="dropdown-item" href="#">>6M VND</a></li>
                          <li><a class="dropdown-item" href="#">>10M VND</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="card">
      <div class="card-body">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid ">
          <template v-for="(value, index) in list" :key="index">
            <div class="col-lg-3 align-items-stretch mb-3">

              <div class="card h-100">
                <img v-bind:src="value.hinh_anh" style="min-height: 315px;" class="card-img-top" alt="...">
                <div class="">
                  <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                </div>
                <div class="card-body">
                  <h6 class="card-title cursor-pointer">{{ value.ten_san_pham }}</h6>
                  <div class="clearfix">
                    <p class="mb-0 float-start"><strong>{{ value.so_luong }}</strong> Sales</p>
                    <p class="mb-0 float-end fw-bold"><span class="me-2 text-decoration-line-through text-secondary">{{
                      formatToVND(value.gia_ban) }}</span><span>{{
                          formatToVND(value.gia_khuyen_mai) }}</span></p>
                  </div>
                  <div class="d-flex align-items-center mt-3 fs-6">
                    <div class="cursor-pointer">
                      <i class='bx bxs-star text-warning'></i>
                      <i class='bx bxs-star text-warning'></i>
                      <i class='bx bxs-star text-warning'></i>
                      <i class='bx bxs-star text-warning'></i>
                      <i class='bx bxs-star text-secondary'></i>
                    </div>
                    <p class="mb-0 ms-auto">4.2(182)</p>
                  </div>
                </div>
              </div>

            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import baseRequest from '../../../../core/baseRequest';
export default {
  props: ['id_danh_muc', 'slug_danh_muc'],
  data() {
    return {
      list: [],
      id_danh_muc: null,
      danh_muc: {}
    }
  },
  mounted() {
    this.id_danh_muc = this.$route.params.id_danh_muc;
    this.loadData();
  },
  beforeRouteUpdate(to, from, next) {
    this.id_danh_muc = to.params.id_danh_muc;
    this.loadData();
    next();
  },
  methods: {
    formatToVND(number) {
      number = parseInt(number);
      return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    },

    loadData() {
      baseRequest
        .get('trang-chu/danh-sach-san-pham/' + this.id_danh_muc)
        .then((res) => {
          this.list = res.data.data;
          this.danh_muc = res.data.danh_muc;
        })
    },
  }
}
</script>
<style></style>