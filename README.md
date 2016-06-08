Catternaut
----------

###Leverage the full power of Google's Cloud Vision resources to answer the age-old question:
###_Is this a cat, or not?_

####Prep

- `npm install catternaut`
- Register your project with Google through [this page](https://cloud.google.com/vision/).
- Once you get your project name, add `GCLOUD_PROJECT` and the project name to your environmental variables, e.g. `process.env.GCLOUD_PROJECT = 'sleeping-kittens';` before you try to call Catternaut anywhere.
- Lastly, point your `process.env.GOOGLE_APPLICATION_CREDENTIALS` to the location of your `keys.json` file you got after registering your new project with Google.


####Usage
Pass in a URL of an image to the function `catternaut`. This will return a promise that resolves to the boolean `true` or `false`.

```js
import { catternaut } from 'catternaut';

catternaut('http://animalpetdoctor.homestead.com/acat1.jpg')
  .then((res) => {
    return res;
  });
// => true

catternaut('http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg')
  .then((res) => {
    return res;
  });
// => false
```

If you wanted your search results to be more general, just import `getLabels`. That function takes a URL to an image, and also the number of results you want back. The promise for `getLabels` resolves with an array of objects.

```js
import { getLabels } from 'catternaut';

getLabels('http://animalpetdoctor.homestead.com/acat1.jpg', 3)
  .then((res) => {
    console.log(res);
  });
//=> [ { desc: 'whiskers', mid: '/m/01l7qd', score: 97.826087 }, { desc: 'cat', mid: '/m/01yrx', score: 96.77384500000001 }, { desc: 'pet', mid: '/m/068hy', score: 96.717393 } ]

```

_supports the following image file types: JPEG, PNG8, PNG24, GIF, Animated GIF (first frame only), BMP, WEBP, RAW, ICO_ [src](https://cloud.google.com/vision/docs/image-best-practices#image_types)

####What is this wizardry?

Google offers a [computer vision service in the cloud](https://cloud.google.com/vision). Uploading an image to that service will return a JSON object of labels for items in the photo, in addition to the model's confidence rating for each label. This NPM module utilizes this service to determine if there is a cat in an uploaded image, or not.

* * *

_Based heavily on work done by [@AbhiGulati](https://github.com/AbhiGulati) &mdash; ty, d00d_
