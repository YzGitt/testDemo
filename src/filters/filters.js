
function dateF(time) {
  let d = new Date(time)
  // var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  let date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() ;
  return date;
}
export { dateF }
