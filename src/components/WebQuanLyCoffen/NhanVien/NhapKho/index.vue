<template>
  <div class="row">
      <div class="col-lg-5">
          <div class="card">
              <div class="card-header">
                 <h3> Danh Sách Sản Phẩm</h3>
              </div>
              <div class="card-body">
                  <div class="table-responsive">
                      <table class="table table-bordered">
                          <thead>
                              <tr class="align-middle text-center">
                                  <th colspan="100%">
                                      <div class="input-group">
                                          <input type="text" class="form-control" placeholder="Username">
                                          <button class="btn btn-primary input-group-text"> <i class="fa-solid fa-magnifying-glass"></i></button>
                                      </div>
                                  </th>
                              </tr>
                              <tr class="text-center">
                                  <th>#</th>
                                  <th>Tên Sản Phẩm</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              
                                  <tr class="align-middle">
                                      <th class="text-center"></th>
                                      <td></td>
                                      <td class="text-center">
                                          <button class="btn btn-primary" >
                                              <i class="fa-solid fa-share ms-2"></i>
                                          </button>
                                      </td>
                                  </tr>
                            
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-lg-7">
          <div class="card">
              <div class="card-header">
                  <div class="row">
                     <h3>Danh Sách Nhập Kho</h3> 
                  </div>
              </div>
              <div class="card-body">
                  <div class="table-responsive">
                      <table class="table table-bordered">
                          <thead>
                              <tr class="text-center align-middle">
                                  <th>#</th>
                                  <th>Tên Sản Phẩm</th>
                                  <th>Số Lượng</th>
                                  <th>Đơn Giá</th>
                                  <th>Thành Tiền</th>
                                  <th>Ghi Chú</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              
                                  
                              
                              <tr>
                                  <th colspan="100%" class="text-end">
                                      Tổng Tiền: <span class="text-danger"></span>
                                  </th>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <hr>
                  <div class="row">
                      <div class="col-lg-12">
                          <button  class="btn btn-primary w-100">Nhập kho</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>

export default {
 
}
</script>
<style></style>