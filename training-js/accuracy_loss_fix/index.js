let floatUtil = require("./floatUtil");

console.log(0.1 + 0.2);
console.log("改正后：", floatUtil.add(0.1, 0.2));

console.log(19.9 * 100);
console.log("改正后：", floatUtil.multiply(19.9, 100));

console.log(1.335.toFixed(2));
console.log("改正后：", floatUtil.toFixed(1.335,2));

console.log("======================================");
console.log("例子：地球上两个地方之间的距离公式")
console.log("======================================");

///sample： 地球上两个地方之间的距离公式

function distance(lat1, lon1, lat2, lon2) {
  var radlat1 = Math.PI * lat1 / 180;
  var radlat2 = Math.PI * lat2 / 180;
  var theta = lon1 - lon2;
  var radtheta = Math.PI * theta / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515;
  return dist * 1.609344;
}

function distance2(lat1, lon1, lat2, lon2) {
  var radlat1 = floatUtil.multiply(Math.PI, floatUtil.divide(lat1, 180));
  var radlat2 = floatUtil.multiply(Math.PI, floatUtil.divide(lat2, 180));
  var theta = floatUtil.subtract(lon1, lon2);
  var radtheta = floatUtil.multiply(Math.PI, floatUtil.divide(theta, 180));
  var dist = floatUtil.add(
    floatUtil.multiply(Math.sin(radlat1), Math.sin(radlat2)),
    floatUtil.multiply(
      floatUtil.multiply(Math.cos(radlat1), Math.cos(radlat2)),
      Math.cos(radtheta)
    )
  );
  dist = Math.acos(dist);
  dist = floatUtil.divide(floatUtil.multiply(dist, 180), Math.PI);
  dist = floatUtil.multiply(floatUtil.multiply(dist,60), 1.1515);
  return floatUtil.multiply(dist,1.609344);
}

// -8.838333, 13.234444
// 36.825875, 7.820648

// 36.871519  6.91018
// 36.824167  5.89

console.log(distance(36.871519, 6.91018, 36.824167, 5.89));
console.log(distance2(36.871519, 6.91018, 36.824167, 5.89));
