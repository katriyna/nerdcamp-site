var React = require('react');
var ReactDOM = require('react-dom');

require('react-images');

var Gallery = require('react-photo-gallery');
var $ = require('jquery');
var _ = require('lodash');

var arr = [
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29b0f/yVkUCG1TybA',604,401], y: ['29b0f/yVkUCG1TybA',807,536], z: ['29b0f/yVkUCG1TybA',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29b18/tK_GrMCAqhY',604,401], y: ['29b18/tK_GrMCAqhY',807,536], z: ['29b18/tK_GrMCAqhY',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29b7b/5LszjBvfFFI',604,401], y: ['29b7b/5LszjBvfFFI',807,536], z: ['29b7b/5LszjBvfFFI',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29b84/b7ARmxWcZQI',604,401], y: ['29b84/b7ARmxWcZQI',807,536], z: ['29b84/b7ARmxWcZQI',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29b8d/Jr2KBLjZJ9o',604,401], y: ['29b8d/Jr2KBLjZJ9o',807,536], z: ['29b8d/Jr2KBLjZJ9o',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c96/l0hcuLJDugs',604,401], y: ['29c96/l0hcuLJDugs',807,536], z: ['29c96/l0hcuLJDugs',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29b9f/DDoVwi8_tvo',604,401], y: ['29b9f/DDoVwi8_tvo',807,536], z: ['29b9f/DDoVwi8_tvo',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29b4e/y_Zhm5MOn8s',604,401], y: ['29b4e/y_Zhm5MOn8s',807,536], z: ['29b4e/y_Zhm5MOn8s',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29b60/klmPNGvxT5w',604,401], y: ['29b60/klmPNGvxT5w',807,536], z: ['29b60/klmPNGvxT5w',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29ba8/ajX2SkFDulo',604,401], y: ['29ba8/ajX2SkFDulo',807,536], z: ['29ba8/ajX2SkFDulo',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c71/ru9eMym8Z24',604,401], y: ['29c71/ru9eMym8Z24',807,536], z: ['29c71/ru9eMym8Z24',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c7a/86rwb5JFUL0',604,379], y: ['29c7a/86rwb5JFUL0',807,506], z: ['29c7a/86rwb5JFUL0',1152,723]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29bba/v9odU9m8bvk',604,401], y: ['29bba/v9odU9m8bvk',807,536], z: ['29bba/v9odU9m8bvk',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29bcc/bnSg-xUmHdg',604,401], y: ['29bcc/bnSg-xUmHdg',807,536], z: ['29bcc/bnSg-xUmHdg',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29bd5/qE58z7RgrcI',604,401], y: ['29bd5/qE58z7RgrcI',807,536], z: ['29bd5/qE58z7RgrcI',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29bde/48JhFr0NeoI',604,401], y: ['29bde/48JhFr0NeoI',807,536], z: ['29bde/48JhFr0NeoI',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29be7/GXw1SWOEUrQ',604,401], y: ['29be7/GXw1SWOEUrQ',807,536], z: ['29be7/GXw1SWOEUrQ',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29bf0/Uv8Bu1s9CT0',604,401], y: ['29bf0/Uv8Bu1s9CT0',807,536], z: ['29bf0/Uv8Bu1s9CT0',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29bf9/rVZwwN3zKgE',604,401], y: ['29bf9/rVZwwN3zKgE',807,536], z: ['29bf9/rVZwwN3zKgE',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c02/CFlrM5TsI6E',604,401], y: ['29c02/CFlrM5TsI6E',807,536], z: ['29c02/CFlrM5TsI6E',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c0b/4ZfwtiZK58Q',604,401], y: ['29c0b/4ZfwtiZK58Q',807,536], z: ['29c0b/4ZfwtiZK58Q',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c14/EDYe7UBdpDA',604,401], y: ['29c14/EDYe7UBdpDA',807,536], z: ['29c14/EDYe7UBdpDA',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c1d/1Yf9UJqhFtI',604,401], y: ['29c1d/1Yf9UJqhFtI',807,536], z: ['29c1d/1Yf9UJqhFtI',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c26/99zfvZjk0Wo',604,401], y: ['29c26/99zfvZjk0Wo',807,536], z: ['29c26/99zfvZjk0Wo',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c2f/grj8VYTSgxM',604,401], y: ['29c2f/grj8VYTSgxM',807,536], z: ['29c2f/grj8VYTSgxM',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c83/CQ55oGsfOfg',367,604], y: ['29c84/kfhPldeZUt4',491,807], z: ['29c84/kfhPldeZUt4',701,1152]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c42/pk7_o8kPnss',401,604], y: ['29c43/MicWHUNU1Tg',536,807], z: ['29c43/MicWHUNU1Tg',680,1024]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c4c/xOfaX79Qbiw',401,604], y: ['29c4d/kfQHGCPV_K0',536,807], z: ['29c4d/kfQHGCPV_K0',680,1024]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c56/KfWf5_-4x8E',604,401], y: ['29c56/KfWf5_-4x8E',807,536], z: ['29c56/KfWf5_-4x8E',1280,850]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c5f/X4Czkm7RlUw',472,604], y: ['29c5f/X4Czkm7RlUw',630,807], z: ['29c5f/X4Czkm7RlUw',800,1024]},
  {base: 'https://pp.vk.me/c624221/v624221287/', x: ['29c68/oOnlTr4wCWA',494,604], y: ['29c68/oOnlTr4wCWA',660,807], z: ['29c68/oOnlTr4wCWA',837,1024]}
];



arr = arr.map(function(item) {
  return {
    url_m: item.base + item.x[0] + '.jpg',
    width_m: item.x[1],
    height_m: item.x[2],
    url_c: item.base + item.y[0] + '.jpg',
    width_c: item.y[1],
    height_c: item.y[2],
    url_l: item.base + item.z[0] + '.jpg',
    width_l: item.z[1],
    height_l: item.z[2]
  }
});



console.log('RESULT = ', arr);

var PHOTO_SET = [
  {
    url_m: 'https://pp.vk.me/c624221/v624221287/29b0f/yVkUCG1TybA.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29b0f/yVkUCG1TybA.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29b0f/yVkUCG1TybA.jpg',
    width_l: 1280,
    height_l: 850
  },
  {
    url_m: 'https://pp.vk.me/c624221/v624221287/29b18/tK_GrMCAqhY.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29b18/tK_GrMCAqhY.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29b18/tK_GrMCAqhY.jpg',
    width_l: 1280,
    height_l: 850
  },
  {
    url_m: 'https://pp.vk.me/c624221/v624221287/29b7b/5LszjBvfFFI.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29b7b/5LszjBvfFFI.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29b7b/5LszjBvfFFI.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29b84/b7ARmxWcZQI.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29b84/b7ARmxWcZQI.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29b84/b7ARmxWcZQI.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29b8d/Jr2KBLjZJ9o.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29b8d/Jr2KBLjZJ9o.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29b8d/Jr2KBLjZJ9o.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c96/l0hcuLJDugs.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c96/l0hcuLJDugs.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c96/l0hcuLJDugs.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29b9f/DDoVwi8_tvo.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29b9f/DDoVwi8_tvo.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29b9f/DDoVwi8_tvo.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29b4e/y_Zhm5MOn8s.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29b4e/y_Zhm5MOn8s.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29b4e/y_Zhm5MOn8s.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29b60/klmPNGvxT5w.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29b60/klmPNGvxT5w.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29b60/klmPNGvxT5w.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29ba8/ajX2SkFDulo.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29ba8/ajX2SkFDulo.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29ba8/ajX2SkFDulo.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c71/ru9eMym8Z24.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c71/ru9eMym8Z24.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c71/ru9eMym8Z24.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c7a/86rwb5JFUL0.jpg',
    width_m: 604,
    height_m: 379,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c7a/86rwb5JFUL0.jpg',
    width_c: 807,
    height_c: 506,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c7a/86rwb5JFUL0.jpg',
    width_l: 1152,
    height_l: 723
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29bba/v9odU9m8bvk.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29bba/v9odU9m8bvk.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29bba/v9odU9m8bvk.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29bcc/bnSg-xUmHdg.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29bcc/bnSg-xUmHdg.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29bcc/bnSg-xUmHdg.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29bd5/qE58z7RgrcI.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29bd5/qE58z7RgrcI.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29bd5/qE58z7RgrcI.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29bde/48JhFr0NeoI.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29bde/48JhFr0NeoI.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29bde/48JhFr0NeoI.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29be7/GXw1SWOEUrQ.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29be7/GXw1SWOEUrQ.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29be7/GXw1SWOEUrQ.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29bf0/Uv8Bu1s9CT0.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29bf0/Uv8Bu1s9CT0.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29bf0/Uv8Bu1s9CT0.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29bf9/rVZwwN3zKgE.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29bf9/rVZwwN3zKgE.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29bf9/rVZwwN3zKgE.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c02/CFlrM5TsI6E.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c02/CFlrM5TsI6E.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c02/CFlrM5TsI6E.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c0b/4ZfwtiZK58Q.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c0b/4ZfwtiZK58Q.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c0b/4ZfwtiZK58Q.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c14/EDYe7UBdpDA.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c14/EDYe7UBdpDA.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c14/EDYe7UBdpDA.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c1d/1Yf9UJqhFtI.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c1d/1Yf9UJqhFtI.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c1d/1Yf9UJqhFtI.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c26/99zfvZjk0Wo.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c26/99zfvZjk0Wo.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c26/99zfvZjk0Wo.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c2f/grj8VYTSgxM.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c2f/grj8VYTSgxM.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c2f/grj8VYTSgxM.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c83/CQ55oGsfOfg.jpg',
    width_m: 367,
    height_m: 604,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c84/kfhPldeZUt4.jpg',
    width_c: 491,
    height_c: 807,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c84/kfhPldeZUt4.jpg',
    width_l: 701,
    height_l: 1152
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c42/pk7_o8kPnss.jpg',
    width_m: 401,
    height_m: 604,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c43/MicWHUNU1Tg.jpg',
    width_c: 536,
    height_c: 807,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c43/MicWHUNU1Tg.jpg',
    width_l: 680,
    height_l: 1024
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c4c/xOfaX79Qbiw.jpg',
    width_m: 401,
    height_m: 604,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c4d/kfQHGCPV_K0.jpg',
    width_c: 536,
    height_c: 807,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c4d/kfQHGCPV_K0.jpg',
    width_l: 680,
    height_l: 1024
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c56/KfWf5_-4x8E.jpg',
    width_m: 604,
    height_m: 401,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c56/KfWf5_-4x8E.jpg',
    width_c: 807,
    height_c: 536,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c56/KfWf5_-4x8E.jpg',
    width_l: 1280,
    height_l: 850
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c5f/X4Czkm7RlUw.jpg',
    width_m: 472,
    height_m: 604,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c5f/X4Czkm7RlUw.jpg',
    width_c: 630,
    height_c: 807,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c5f/X4Czkm7RlUw.jpg',
    width_l: 800,
    height_l: 1024
  }, {
    url_m: 'https://pp.vk.me/c624221/v624221287/29c68/oOnlTr4wCWA.jpg',
    width_m: 494,
    height_m: 604,
    url_c: 'https://pp.vk.me/c624221/v624221287/29c68/oOnlTr4wCWA.jpg',
    width_c: 660,
    height_c: 807,
    url_l: 'https://pp.vk.me/c624221/v624221287/29c68/oOnlTr4wCWA.jpg',
    width_l: 837,
    height_l: 1024
  },
  {
    title: 'Cows on a hill',
    url_o: 'https://farm8.staticflickr.com/7263/8168484671_3992e5133d_o.jpg',
    height_o: 272,
    width_o: 1024,
    url_m: 'https://farm8.staticflickr.com/7263/8168484671_f47b9e53bf.jpg',
    height_m: 133,
    width_m: 500,
    url_l: 'https://farm8.staticflickr.com/7263/8168484671_f47b9e53bf_b.jpg',
    height_l: 272,
    width_l: 1024,
    url_c: 'https://farm8.staticflickr.com/7263/8168484671_f47b9e53bf_c.jpg',
    height_c: 213,
    width_c: 800
  }
];

var App = React.createClass({
  
  propTypes: {
    photos: React.PropTypes.array,
    pageNum: React.PropTypes.number,
    totalPages: React.PropTypes.number,
    loadedAll: React.PropTypes.bool
  },

  getInitialState: function () {
    return {
      photos: this.props.photos,
      pageNum: this.props.pageNum,
      totalPages: this.props.totalPages,
      loadedAll: this.props.loadedAll
    };
  },
  
  componentDidMount: function() {
    this.loadMorePhotos();
    this.loadMorePhotos = _.debounce(this.loadMorePhotos, 200);
    window.addEventListener('scroll', this.handleScroll);
  },
  
  handleScroll: function() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
      this.loadMorePhotos();
    }
  },
  
  loadMorePhotos: function(e) {
    if (e){
      e.preventDefault();
    }
    if (this.state.pageNum > this.state.totalPages){
      this.setState({loadedAll: true});
      return;
    }

    const drawImages = function(photoSet) {
      let photos = photoSet.map(function(obj){
        let aspectRatio = parseFloat(obj.width_l / obj.height_l);
        return {
          src: (aspectRatio >= 3) ? obj.url_c : obj.url_m,
          width: parseInt(obj.width_l),
          height: parseInt(obj.height_l),
          aspectRatio: aspectRatio,
          lightboxImage: {
            src: obj.url_l,
            caption: obj.title
          }
        };
      });
      this.setState({
        photos: this.state.photos ? this.state.photos.concat(photos) : photos,
        pageNum: this.state.pageNum + 1,
        totalPages: 1
      });
    }.bind(this);

    drawImages(PHOTO_SET);
  },
  
  renderGallery: function() {
    return(
      <Gallery photos={this.state.photos} />
    );
  },
  
  render: function() {
    // no loading sign if its all loaded
    if (this.state.photos && this.state.loadedAll){
      return(
        <div className='App'>
          {this.renderGallery()}
        </div>
      );
    }
    else if (this.state.photos){
      return(
        <div className='App'>
          {this.renderGallery()}
          <div className='loading-msg' id='msg-loading-more'>Loading</div>
        </div>
      );
    }
    else{
      return(
        <div className='App'>
          <div id='msg-app-loading' className='loading-msg'>Loading</div>
        </div>
      );
    }
  }
});


module.exports = function() {
  ReactDOM.render(<App />, document.getElementById('past-events-gallery-placeholder'));
};