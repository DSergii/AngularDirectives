# AngularDirectives
<h2> image-upload </h2>
<strong>Allows upload images (png, jpg, jpeg, tif, bmp, gif) and return tag <img> with src="base64 code" </strong>
<h3>Usage</h3>
```javascript
  <image-upload get-img="ctrl.text"></image-upload>
  <div contenteditable="true" class="text-box" ng-model="ctrl.text" ng-model-options="{ debounce: 300 }" ></div>
  ```
<h2> leaflet-map </h2>
<strong>Allows create a beautiful map with marker and insert it on page</strong>
<h3>Usage</h3>
```javascript
   <leaflet-map user="[latitude, longitude]" zoom="3"></leaflet-map>
   ```
<p>pass to directive coords and zoom </p>
<h4>CSS</h4>
<p>for styling marker add custom class and styling it through it (see js file)</p>
[Carto documentation](https://carto.com/docs/tutorials/)
