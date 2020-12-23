# kintone-customize-react-ts-boilerplate

## settings

install dependencies

```
npm ci
```

copy `.env.example` to `.env`

```
cp `.env.example` `.env`
```

fill `.env`

```
KINTONE_DOMAIN="your_subdomain.cybozu.com"
KINTONE_USERNAME="your_username"
KINTONE_PASSWORD="your_password"
```

[reference](https://github.com/kintone/js-sdk/tree/master/packages/customize-uploader#options)

finally change `manifest.json` `app` property as your app number

## command

### dev

```
npm run dev
```

- watch build
- watch upload
