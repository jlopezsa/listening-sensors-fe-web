/* eslint-disable */
import figuras1 from '../../figures/iot_figure_1.jpg';
import figuras2 from '../../figures/iot_figure_2.jpg';
import figuras3 from '../../figures/iot_figure_3.png';
import figuras4 from '../../figures/iot_figure_4.jpg';
// import { getImafFromFirebase } from '../../utils/firebase';

// async function downloadUrlImage() {
//   const url = await getImafFromFirebase();
//   return url;
// }

// async function prenchArray() {
  const slideItems = [
    {
      // image: await downloadUrlImage(),
      image: figuras1,
      caption: 'Nemichi-Jinja, Seki',
    },
    {
      image: figuras2,
      caption: 'Itsukushima Shrine',
    },
    {
      image: figuras3,
      caption: 'Itsukushima Shrine',
    },
    {
      image: figuras4,
      caption: 'Itsukushima Shrine',
    },
  ];
  // console.log('----> FLA', slideItemsFunc);
//   return slideItemsFunc;
// }

// var slideItems = [];
// (
//   async () => {
//     // eslint-disable-next-line no-var
//     slideItems = await prenchArray();
//     console.log('RESOLVE PROMISE: ', slideItems);
//   }
// )();

// prenchArray().then(() => console.log());

// const slideItems = prenchArray();
// console.log('FUNCTON: ', slideItems);
export default slideItems;
