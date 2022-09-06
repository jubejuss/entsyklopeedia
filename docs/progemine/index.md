# Proge III sissejuhatav osa

**Ülesanne, leida fullstack setup**

## Express.js vs Next.js vs Nuxt.js

**Nexti ja Expressi** vahe selgitab ehk [see artikkel asjad rahuldavalt ära](https://merge.rocks/blog/next-js-vs-expressjs-which-one-to-use)  
Express vastutab vaid serveripoolse koodi eest, on väiksem, kiirem.
Nextis on seevastu kõik front-endi jaoks tarvilik juba olemas ja kui satuvad olema ka ülesande lahenduseks vajalikud back-endi jupid, siis peaks sobima. Seega jääb küsimus, kas temas sisalduv rahuldab ülesande vajadused.

**Nuxt** on sisuliselt Next'i **Vue**le vastav versioon.

[Nuxti kohta leiab](https://niharraoteblog.netlify.app/custom-express-server-nuxtjs) materjali, mis ütleb, et Nuxti server jääb nõrgaks, et hallata nt POST ja GET päringuid. **See siiski ei vasta tõele**, kuna netis on [konkreetsed juhised, kuidas Nuxtiga need päringud tööle panna](https://serversideup.net/post-put-and-patch-requests-with-nuxt-3/).

Põgusa googeldamise alusel võib esialgu seega väita, et nii Next kui Nuxt saavad üsna sama asjaga hakkama kui Express. Vahe vast siiski selles, et kui Next on Reactil baseeruv ja Nuxt Vuel, siis Express on selles suhtes sõltumatu. Võibolla annab see front-endi suhtes vabamad käed.

Aga nii Nexti kui Nuxti saab ka koos Expressiga kasutada.

Seega esimese mõttena tundub, et JS front-end raamistik (React või Vue) niikuinii kasutusele võtta, siis võib juba ka vastava SSR raamistikuga asja teha. Samas Express pole seotud kindla raamistikuga, mis võib olla eeliseks.

## Next + MySql test

[Õppevideo, HTML –> Next.js](https://www.youtube.com/watch?v=aYEFeYI7gUM)
