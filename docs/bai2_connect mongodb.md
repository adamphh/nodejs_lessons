1. Cai dat mongoose
   npm i mongoose --save
2. Cách kết nối phổ biến nhất hiện nay và các nhược điểm
    - Tạo file /src/dbs/init.mongodb.lv0.js
    - Mỗi  lần có 1 action gọi đến file init.mongodb.lv0 thì nó sẽ tạo 1 kết nối  đến db => tăng số lượng kết nối
3. Cách kết nối thay thế (khuyên dùng)
    - Tạo file  /src/dbs/init.mongodb.js
    - tạo class Database để xử lý connection và khởi tạo các loại database khác nhau
    - cache connection => không tạo thêm kết nối nếu đã tồn tại rồi
4. Cách kiểm tra hệ thống có bao nhiêu connect ở thời điểm hiện tại
    - Xem file  /helpers/check.connection.js

5. Cách phát hiện hệ thống quá tải connect
    - Xem file  /helpers/check.connection.js

6. Có nên đóng connect liên tục hay không
    -Không cần phải đóng connection liên tục. TH bắt buộc thì có thể gọi mongoose.disConnect()

7. PoolSize là gì?
    - Nhóm các kết nối connection đến cơ sở dữ  liệu mà có thể tái sử dụng.  
    - Khi ứng dụng có  yêu cầu tạo kết nối với CSDL thì mongoose sẽ kiểm tra xem trong 50 kết nối này có cái nào không. Nếu có thì nó  sử dụng lại luôn, còn nếu không có thì nó tạo mới và add vào nhóm kết nối.
    - Lợi ích  khi sử dụng poolSize: giúp cải thiện hiệu suất, giảm chi phí đóng mở kết nối liên tục
8. Nếu set PoolSize là 100, mà hệ thống bị vượt quá thì hệ thống sẽ làm gì, quy luật như thế nào
    - Tối đâ có 100 kết nối có thể hoạt động ở bất kì thời điểm nào.
    - Khi không sử dụng nữa thì các kết nối trong nhóm này sẽ nằm im không hoạt động cho đến khi có yêu cầu mới thì nó sẽ lấy connect từ nhóm này ra để sử dụng luôn chứ không cần đóng mở connect thủ công nữa.
    - Thì những kết nối vượt đó sẽ  được đưa vào hàng đợi cho đến khi đến lượt
