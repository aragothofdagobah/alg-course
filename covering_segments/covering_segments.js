function cov_seg(segmentArray) {
  segmentArray = segmentArray.sort();
  var outputCoordinates = [];
  for (var i = 0; i < segmentArray.length; i++) {
    let distance = segmentArray[i][1] - segmentArray[i][0];
    for(var x = i; x < distance; x++){
      console.log(segmentArray[x]);
      if (x == distance - 1) {
        console.log(segmentArray[x][1]);
        i = x;
      }
    }
  }
}

var testArray = [[4,7],[1,3],[2,5],[5,6]]

cov_seg(testArray);
