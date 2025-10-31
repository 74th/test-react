# Mapbox + Leaflet + React のサンプル

mapbox-gl-js を使って react-leaflet に対応させる

自作 style を使って leaflet で利用する場合、TileLayer で mapbox のAPIを直接叩いたが適用されなかった。
style自体が、Raster Tile APIではサポートされず、Vector Tile APIでのみサポートされているようである。
TileLayerではRaster Tileを利用するため、mapbox-gl-jsを利用してVector Tileとして、Leafletに対応させる必要があるようである。

[./src/App.tsx](./src/App.tsx)

要 direnv。

```
cp .envrc_sample .envrc

# VITE_MAPBOX_TOKEN と VITE_MAPBOX_STYLE_ID を設定
vi .envrc

direnv allow

npm install
npm run dev
```
