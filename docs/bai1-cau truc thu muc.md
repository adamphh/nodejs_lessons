1. Khởi động dự án
   npm init -y
2. Tạo cấu trúc thư mục
   ./server.js
   ./app.js
   ./.env
   ./.gitignore
   ./package.json
   ./src/configs
   ./src/controllers
   ./src/models
   ./src/services
   ./src/utils
3. Cài đặt các thư viện cần thiết
    - Install express: npm i express --save
    - Morgan: npm i morgan --save
      - Morgan là thư viện dùng để in ra các log của server trả về mỗi khi user có action request đến
      - VD: curl http://localhost:3055, lúc này server trả về status 200, .... xem trong console
      - Morgan có 5 chế độ: 
        - dev: thông báo log ngắn gọn, có màu, thường dùng khi dev
        - combined: trả về thông tin theo format khác, khi lên production thì chuyển qua mode này
        - common
        - short
        - tiny
    - Helmet: npm i helmet --save
      - Dùng để bảo về các thông tin riêng tư của server (VD: header chứa ngôn ngữ đang sử dụng)
      - Khi hacker test url cùng thuộc tính --include: curl http://localhost:3005 --include, 
      thì server sẽ trả về thông tin x-powered-by: express. Khi đó hacker có thể tìm hiểu các lỗ hổng của express để đục vào thử 
      - Sử dụng helmet thì nó sẽ che đi thông tin nhạy cảm này.
    - Compression: npm i compression --save
      - Khi vận chuyển dữ liệu (payload) lớn => tốn băng thông rất nhiều. => dùng Compression để tối ưu 
4. Khai báo file app.js
    - Khai báo các middlewares, routes, db
5. Khai báo file server.js: Là file khởi động network js. 
    - chỉ làm nhiệm vụ khai báo server
    - Require file (module) app vào
    - khai báo port cho server
6. Start server:
   1. node server.js
   2. node --watch server.js (real time: tương tự npm start)