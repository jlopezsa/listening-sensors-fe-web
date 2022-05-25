/* eslint-disable */
import { storage } from '../../utils/firebase';
import {
  ref as storageRef,
} from 'firebase/storage';
// import figuras1 from '../../figures/iot_figure_1.jpg';
// import figuras2 from '../../figures/iot_figure_2.jpg';
// import figuras3 from '../../figures/iot_figure_3.png';
// import figuras4 from '../../figures/iot_figure_4.jpg';
import { getImageFromFirebase } from '../../utils/firebase';

const imagesRef1 = storageRef(storage, 'slides/iot_figure_1.jpg');
const imagesRef2 = storageRef(storage, 'slides/iot_figure_2.jpg');
const imagesRef3 = storageRef(storage, 'slides/iot_figure_3.png');
const imagesRef4 = storageRef(storage, 'slides/iot_figure_4.jpg');

async function downloadUrlImage(imagesRef) {
  const url = await getImageFromFirebase(imagesRef);
  return url;
}

async function prenchArray() {
  const slideItems = [
    {
      image: await downloadUrlImage(imagesRef1),
      caption: 'Nemichi-Jinja, Seki',
    },
    {
      image: await downloadUrlImage(imagesRef2),
      caption: 'Itsukushima Shrine',
    },
    {
      image: await downloadUrlImage(imagesRef3),
      caption: 'Itsukushima Shrine',
    },
    {
      image: await downloadUrlImage(imagesRef4),
      caption: 'Itsukushima Shrine',
    },
  ];
  return slideItems;
}

export default prenchArray;
