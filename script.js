
var selected_gas = 'ozone';
const table = document.getElementById('highscore');
var date = new Date().toISOString().slice(0, 10);

const Guangzhou = '23.1291,113.2644',
      newyork = '40.7128,74.0060',
      tokyo = '35.6762,139.6503',
      kolkata = '22.5726,88.3639',
      Jakarta = '6.2088,106.8456',
      Delhi = '28.7041,77.1025',
      Manila = '14.5995,120.9842',
      Seoul = '37.5665,126.9780',
      Shanghai = '31.2304,121.4737',
      Karachi = '24.8607,67.0011',
      Beijing = '39.9042,116.4074',
      Sao_Paulo = '23.5505,46.6333',
      Mexico_City = '19.4326,99.1332',
      Mumbai = '19.0760,72.8777',
      Kyoto = '35.0116,135.7681',
      Moscow = '55.7558,37.6173',
      Dhaka = '23.8103,90.4125',
      Cairo = '30.0444,31.2357',
      Los_Angeles = '34.0522,118.2437',
      Bangkok = '13.7563,100.5018'



function adil(gas){
  table.innerHTML = '';
  if(gas == 'm'){
    selected_gas = 'methane';
    begin_date = '2020-12-05';
  }
  else if(gas == 'o'){
    selected_gas = 'ozone';
    begin_date = '2021-6-08';
  }
  else if(gas == 'c'){
    selected_gas = 'carbonmonoxide';
    begin_date = '2021-6-08';
  }
  else if(gas == 'n'){
    selected_gas = 'nitrogendioxide';
    begin_date = '2021-06-02';
  }
  allinone()
  data();
}

function allinone(){
  baseurl = 'https://api.v2.emissions-api.org'
        + '/api/v2/' +selected_gas+ '/statistics.json'
        + '?interval=day&begin=' + begin_date + '&end='+ date + '&point=';

urls = [Guangzhou, newyork, tokyo, kolkata, Jakarta, Delhi, Manila
        , Seoul, Shanghai, Karachi, Beijing, Sao_Paulo, Mexico_City
       , Mumbai, Kyoto, Moscow, Dhaka, Cairo, Los_Angeles, Bangkok ].map(city => baseurl + city);
}

var data = () => Promise.all(
          urls.map(url => fetch(url).then(response => response.json()))
        ).then(responses => {
          if(selected_gas != 'methane'){
            [
              [responses[0][0].value.average, 'Guangzhou'],
              [responses[1][0].value.average, 'New York'],
              [responses[2][0].value.average, 'Tokyo'],
              [responses[3][0].value.average, 'Kolkata'],
              [responses[4][0].value.average, 'Jakarta'],
              [responses[5][0].value.average, 'Delhi'],
              [responses[6][0].value.average, 'Manila'],
              [responses[7][0].value.average, 'Seoul'],
              [responses[8][0].value.average, 'Shanghai'],
              [responses[9][0].value.average, 'Karachi'],
              [responses[10][0].value.average, 'Beijing'],
              [responses[11][0].value.average, 'Sao Paulo'],
              [responses[12][0].value.average, 'Mexico City'],
              [responses[13][0].value.average, 'Mumbai'],
              [responses[14][0].value.average, 'Kyoto'],
              [responses[15][0].value.average, 'Moscow'],
              [responses[16][0].value.average, 'Dhaka'],
              [responses[17][0].value.average, 'Cairo'],
              [responses[18][0].value.average, 'Los Angeles'],
              [responses[19][0].value.average, 'Bangkok']
  
             ].sort().forEach(city => {
              var tr = document.createElement('tr'),
                  td_l = document.createElement('td'),
                  td_r = document.createElement('td');
              td_l.innerText = city[1];
              td_r.innerText = city[0].toFixed(8);
              tr.appendChild(td_l);
              tr.appendChild(td_r);
              table.appendChild(tr);
            });
          }   
          else{
            [

              [responses[0][0].value.average, 'Guangzhou'],
              [responses[9][0].value.average, 'Karachi'],
              [responses[11][0].value.average, 'Sao Paulo'],
              [responses[15][0].value.average, 'Moscow'],
              [responses[17][0].value.average, 'Cairo']

            ].sort().forEach(city => {
              var tr = document.createElement('tr'),
                  td_l = document.createElement('td'),
                  td_r = document.createElement('td');
              td_l.innerText = city[1];
              td_r.innerText = city[0].toFixed(8);
              tr.appendChild(td_l);
              tr.appendChild(td_r);
              table.appendChild(tr);
            });
          }  

          }      
        );
           
// 0,9,11,15,17
