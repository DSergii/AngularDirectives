# AngularDirectives
<h2> image-upload </h2>
<strong>Allows upload images (png, jpg, jpeg, tif, bmp, gif) and return tag <img> with src="base64 code" </strong>
<h3>Usage</h3>
```javascript
  <image-upload get-img="ctrl.text"></image-upload>
  <div contenteditable="true" class="text-box" ng-model="ctrl.text" ng-model-options="{ debounce: 300 }" ></div>
  ```
<h2> leaflet-map </h2>
<strong>Allows create beautiful map and insert in page</strong>
<h3>Usage</h3>
```javascript
   <leaflet-map user="[latitude, longitude]" zoom="3"></leaflet-map>
   ```
<p>pass to directive coords and zoom </p>
[Carto documentation](https://carto.com/docs/tutorials/)
