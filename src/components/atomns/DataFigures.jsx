import {
  ref as storageRef,
} from 'firebase/storage';
import { storage, getImageFromFirebase } from '../../utils/firebase';

// const imagesFolder = storageRef(storage, '/slides');
// Find all the prefixes and items.
// const arrayPath = [];
// listAll(imagesFolder)
//   .then((res) => {
//     res.items.forEach((itemRef) => {
//       // All the items under listRef.
//       arrayPath.push(itemRef.fullPath);
//     });
//   }).catch((error) => {
//     console.log('ERROR: ', error);
//     // Uh-oh, an error occurred!
//   });

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
