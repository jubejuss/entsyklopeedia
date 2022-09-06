# Next.js

[Videojuhend](https://youtu.be/aYEFeYI7gUM?t=934)

## Install

```javascript
npx create-next-app@latest htmltonext
```

Next tuleb juba lehekülgedega. Leiad need pages folderist.  
Stardiks võib taas kustutada sealt index.js failist kogu sisu, ehk kõik peale `Head` komponendi.  
`_app.js` failis näitame ära, et kasutataks õiget stiilifaili.  
Vaatame, et stiilifolder oleks olemas kui vaja impordime oma.
Vaja on installida ka sass kui seda kasutad:

```javascript
npm i sass
```

Nüüd võime `index.js` faili `<Head />` kompnendi alla oma HTML-i kirjutada.  
Järgmise lehe võime teha lihtsalt koopia index.js-ist ja nimetada pmber, nt about.js ja muuta seal sisuosa nii kuis vaja.

## Komponendid

Erinevalt Reactist, teeme me siin aga lehe sisuosade jaoks komponendid. Nt Header. Selleks teeme uue komponentide folderi ja sinna teeme vajalikud kompionendid, nagu Reactis tegime. Seejärel impordime komponendid, antud juhul nt Headeri, kõikidele lehekülgedele.

Erinevalt reactist, on vaja komponentidesse, nt HEader kompnent, kus on lingid, importima ka nexti enda lingifunktsiooni:

```javascript
import Link from 'next/link';
```

ja kui Reactis on `Link to=...` siis Nextis on `Link href=...`  
Juhendis soovitas mees headeris link pista <a></a> elemendi sisse, kuid see tekitas errori, paistab et seda pole ka vaja

Pildid taas public folderisse.
