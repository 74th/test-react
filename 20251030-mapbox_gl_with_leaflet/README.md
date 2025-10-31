# Mapbox + Leaflet + React のサンプル

mapbox-gl-js を使って react-leaflet に対応させる

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
