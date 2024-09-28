<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col">
          <h3 class="mt-1">Kho Hàng</h3>
        </div>
        <div class="col-3">
          <button class="btn btn-primary form-control ">Thêm Kho Hàng </button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <table class="table table-bordered ">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Nguyên Liệu</th>
            <th>Số Lượng</th>
            <th>Đơn vị tính</th>
            <th>Trạng Thái</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>
              Thuốc lá 333
            </td>
            <td>
              512
            </td>
            <td>VND</td>
            <td class="text-center">
              <button class="btn btn-info ">Đang xử lý</button>
              <button class="btn btn-danger ">Đã xử lý</button>
            </td>
            <td class="text-center">
              <button class="btn btn-dark m-2  "><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
        </tbody>


      </table>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style></style>