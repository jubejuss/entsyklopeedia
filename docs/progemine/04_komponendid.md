# Taaskasutatavad komponendid

## Taaskasutatavate Reacti componentide tegemine – nupp.

Nupu tegemine on juba lihtne, vaja teha lihtsalt nuüu komponent ja funktsioonis sulgudesse määrata muutujad, mida sul vaja muuta. Allpool näide, kus kaks nupustiili. Seda võibolla saab ka lühemalt kirjutada, peaks uurima:

```javascript
import React from 'react';

export function ButtonPrimary({ text }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
      type="button"
    >
      {text}
    </button>
  );
}

export function ButtonSecondary({ text }) {
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      type="button"
    >
      {text}
    </button>
  );
}
```

Antud näites on kasutatud Tailwindi klasse stiilimiseks. Komponenti võib importida ka oma stiilifaili [ja sel juhul tegutseda vastavalt sellisele](https://www.notimedad.dev/creating-reusable-react-buttons/) või [või sellisele juhendile (see viimane on peenem)](https://larainfo.com/blogs/create-reusable-button-component-with-react-tailwind-css)

Kaard saab samamoodi teha, kuid seal peab siis sisendväjad funktsiooni sulgudesse panema.

## Andmebaasiga ühendamine

[Õppevideo, andmebaasiga ühendamine](https://www.youtube.com/watch?v=aprLiG34b50)
