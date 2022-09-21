// function for live time
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('liveTime').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// welcome message component using props for custom name
Vue.component('welcome-msg', {
  props: ['name'],
  template: 
  `
    <div>
      <p>Time is now: </p>
      <div id="liveTime"></div>
      <p> Hi {{ name }}! Welcome back.</p>
    </div>
  `
});

new Vue ({
  el: "#greeting"
});

// ID submission to share outfits
Vue.component('share-id',
  {
    template: 
      `<div> <input placeholder="Enter ID here"> 
      <button @click="onidEntered">Share</button> <div>`,
    methods:
    {
      onidEntered() {
        this.$emit('applied');
      }
    }
  });

var shareID = new Vue (
  {
    el: '#idnumber',
    data: {
      heading: "Enter friend's ID to share 'fits!",
      idEntered: false
    },
    methods:
    {
      onidEntered() {
        this.idEntered = true;
      }
    }
  }
);