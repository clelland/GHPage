<?php
header("Origin-Trial: Agnp5PFw2nL4wsOwqTxrg7OmKuxHdb91nnl/faIm71VIYWfjtSRugUb9knyPuWhdQZsoetu5lGK4vFgOBc4ZuQ0AAABYeyJvcmlnaW4iOiJodHRwczovL2NsZWxsYW5kLmdpdGh1Yi5pbzo0NDMiLCJmZWF0dXJlIjoiV2ViQmx1ZXRvb3RoIiwiZXhwaXJ5IjoxNDc4MjAzNzk5fQ==");
?><!DOCTYPE html>
<meta charset="utf-8">
<!-- DO NOT SUBMIT: Fix Page Title. Missing tags? http://go/optional-html -->
<title>Origin Trial Test</title>
<body>
<h1>Origin Trial Test</h1>
<script>
var a = document.createElement("p");
if (navigator.bluetooth) {
  a.innerHTML = "YES navigator has a bluetooth";
} else {
  a.innerHTML = "NO you took away my navigator.bluetooth";
}
var b = document.createElement("p");
if (window.BluetoothDevice) {
  b.innerHTML = "YES window has a BluetoothDevice";
} else {
  b.innerHTML = "NO you took away window.BluetoothDevice";
}
document.body.appendChild(a);
document.body.appendChild(b);
</script>
<a href="index.html">Try with a meta tag</a>
<a href="index2.html">Try without a token</a>
