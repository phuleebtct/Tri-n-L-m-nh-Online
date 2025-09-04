<script>
  $(document).ready(function () {
    const flipSound = document.getElementById("flipSound");

    // ⚠️ Kích hoạt âm thanh sau lần click đầu tiên của người dùng
    const enableSound = () => {
      flipSound.play().then(() => {
        flipSound.pause();
        flipSound.currentTime = 0;
      }).catch((err) => {
        console.warn("Trình duyệt chặn âm thanh tự động:", err);
      });
      window.removeEventListener("click", enableSound);
    };
    window.addEventListener("click", enableSound);

    // Tạo 50 trang ảnh
    for (let i = 1; i <= 50; i++) {
      const page = $('<div class="page"><img src="images/' + i + '.jpg" alt="Trang ' + i + '"></div>');
      $('#flipbook').append(page);
    }

    // Khởi tạo flipbook
    $('#flipbook').turn({
      width: 800,
      height: 500,
      autoCenter: true,
      when: {
        turning: function () {
          flipSound.currentTime = 0;
          flipSound.play();
        }
      }
    });

    // Điều khiển bằng bàn phím
    $(document).keydown(function (e) {
      if (e.keyCode === 37) $('#flipbook').turn('previous'); // ←
      if (e.keyCode === 39) $('#flipbook').turn('next');     // →
    });
  });
</script>
