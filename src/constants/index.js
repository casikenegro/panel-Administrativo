
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
export const DEVICES = [{
    codigo : 'G123',
    tipo : 'G',
    date: '2012/02/01',
    status : 'ACTIVE'
},
{
    codigo : 'M123',
    tipo : 'M',
    date: '2012/03/01',
    status : 'INACTIVE'
},
{
    codigo : 'P123',
    tipo : 'P',
    date: '2013/02/01',
    status : 'ACTIVE'
},]
export const options = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false
  }
 export const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
