/**
 * Created by vjcspy on 8/4/17.
 */
// 1
// ...
// ...
// Rebase là như thế nào
/*
 *  Đầu tiên git sẽ đi tới cha chung của 2 nhánh.(Nhánh đang làm việc và nhánh muốn rebase)
 *  Tìm sự khác biệt mà nhánh hiện tại và lưu lại
 *  Khôi phục lại nhanh hiện tại về nhánh muốn rebase(ở đây là master), đi đến commit cuối cùng ở master và apply lần lượt các thay đổi vào đấy.
 * */