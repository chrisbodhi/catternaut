Catternaut
----------

###Leverage the full power of Google's Cloud Vision resources to answer the age-old question:
###_Is this a cat, or not?_

####Prep
_Instructions subject to change, especially that bit about credentials_
- `npm install catternaut`
- Add `GOOGLE_APPLICATION_CREDENTIALS` and `GCLOUD_PROJECT` to your environmental variables
  - Get them after registering with Google through [this page](https://cloud.google.com/vision/).


####Usage

```js
import { catternaut } from 'catternaut';

catternaut('http://animalpetdoctor.homestead.com/acat1.jpg');
// => true

catternaut('http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg');
// => false
```
_supports the following image file types: JPEG, PNG8, PNG24, GIF, Animated GIF (first frame only), BMP, WEBP, RAW, ICO_ [src](https://cloud.google.com/vision/docs/image-best-practices#image_types)

####What is this wizardry?

Google offers a [computer vision service in the cloud](https://cloud.google.com/vision). Uploading an image to that service will return a JSON object of labels for items in the photo, in addition to the model's confidence rating for each label. This NPM module utilizes this service to determine if there is a cat in an uploaded image, or not.

* * *

_Based heavily on work done by [@AbhiGulati](https://github.com/AbhiGulati) &mdash; ty, d00d_
