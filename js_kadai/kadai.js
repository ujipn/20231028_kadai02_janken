
const hands = [`グー`,`チョキ`,`パー`]

$("button").on("click",function(){
   const playerSelect = $(this) .text();
console.log(playerSelect ,"a") 
   const random  = Math.floor(Math.random()*3);
   const comSelect = hands[random];
   const imageElement = $(".pic");


      if (comSelect === "グー") {
        imageElement.attr('src',"js_kadai/img/rock.jpg"); 
      } else if (comSelect === "チョキ") {
        imageElement.attr('src',"js_kadai/img/scissors.jpg"); 
      } else if (comSelect === "パー") {
        imageElement.attr('src',"js_kadai/img/paper.jpg"); 
      }
console.log("じゃんけん画像")
  

        // ボタンが押されたときに選択した音声を再生
        const audio =$(".audio")[0];
        audio.src = "audio/audio_pon.mp3";
        audio.play();
console.log("ボタン時の音")


      let result;
      if (playerSelect === comSelect) {
console.log("あいこ")
          result = "あいこ";
      } else if (
          (playerSelect === "グー" && comSelect === "チョキ") ||
          (playerSelect === "チョキ" && comSelect === "パー") ||
          (playerSelect === "パー" && comSelect === "グー")
      ) {
console.log("勝ち")
          result = "勝ち";
      } else {
console.log("負け")
          result = "負け";
      }
console.log("勝敗")
      let resultElement = $(".result");
      resultElement.text (`あなたは ${playerSelect}、サザエさんは ${comSelect}、結果は ${result} です。うふふふふ`);


   // ビデオの要素
  var goodVideo = $('.video-good')[0];
  var badVideo = $('.video-bad')[0];
  goodVideo.src = "video/good.mp4";
  badVideo.src = "video/bad.MP4";

// ビデオ要素を非表示にする
  $(".video-good").css('display','none');
  $(".video-bad").css('display','none');

// 勝ち負けで出しわける、2秒後に再生
if (result === "勝ち") {
    $(".video-good").css('display' , "block");
    setTimeout(function(){
      goodVideo.play();
    },2500);
console.log("勝ち動画")
} else if (result === "負け") {
    $(".video-bad").css('display', "block");
    setTimeout(function() {
      badVideo.play();
  }, 2500); 
 
}

let nextButton = $(".nextButton")[0];
  if (result === "勝ち"){
    nextButton.style.display = "block"; // 勝利時にボタンを表示
  } else {
    nextButton.style.display = "none"; // 勝利でない場合にボタンを非表示
  }
});

      var resetButton = $(".resetButton")[0];
      resetButton.addEventListener("click", function() {
          // ゲームのリセット処理をここに記述
          // TOPとリセットの使い分けがわからなかった
  
          // ページをリロードしてゲームを初期状態に戻す
          location.reload();
          console.log("リセット")
      });




