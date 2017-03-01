Catternaut
----------

###Leverage the full power of Google's Cloud Vision resources to answer the age-old question:
###_Is this a cat, or not?_

####Prep

- `npm install catternaut`
- Register your project with Google through [this page](https://cloud.google.com/vision/).
- Once you get your project name, add `GCLOUD_PROJECT` and the project name to your environmental variables, e.g. `process.env.GCLOUD_PROJECT = 'sleeping-kittens';` before you try to call Catternaut anywhere.
- Lastly, add a `keys.json` file [the content of which coming from Google after registering your new project with them] to the `config` directory.


####Usage
Pass in a URL of an image to the function `catternaut`. This will return a promise that resolves to the boolean `true` or `false`.

```js
import { catternaut } from 'catternaut';

catternaut('http://animalpetdoctor.homestead.com/acat1.jpg')
  .then(res => res);
// => true

catternaut('http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg')
  .then(res => res);
// => false
```

If you wanted your search results to be more general, just import `getLabels`. That function takes a URL to an image. The promise for `getLabels` resolves with an array of strings.

```js
import { getLabels } from 'catternaut';

getLabels('http://animalpetdoctor.homestead.com/acat1.jpg')
  .then((res) => {
    console.log(res);
  });
//=> [ 'whiskers', 'cat', 'pet' ]

```

_supports the following image file types: JPEG, PNG8, PNG24, GIF, Animated GIF (first frame only), BMP, WEBP, RAW, ICO_ [src](https://cloud.google.com/vision/docs/image-best-practices#image_types)

####What is this wizardry?

Google offers a [computer vision service in the cloud](https://cloud.google.com/vision). Uploading an image to that service will return a JSON object of labels for items in the photo, in addition to the model's confidence rating for each label. This NPM module utilizes this service to determine if there is a cat in an uploaded image, or not.

* * *

_Based heavily on work done by [@AbhiGulati](https://github.com/AbhiGulati) &mdash; ty, d00d_
