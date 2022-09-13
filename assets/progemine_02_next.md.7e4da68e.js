import{_ as e,c as a,o as s,a as n}from"./app.290ef516.js";const h=JSON.parse('{"title":"Next.js","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install","link":"#install","children":[]},{"level":2,"title":"Komponendid","slug":"komponendid","link":"#komponendid","children":[]}],"relativePath":"progemine/02_next.md"}'),i={name:"progemine/02_next.md"},t=n(`<h1 id="next-js" tabindex="-1">Next.js <a class="header-anchor" href="#next-js" aria-hidden="true">#</a></h1><p><a href="https://youtu.be/aYEFeYI7gUM?t=934" target="_blank" rel="noreferrer">Videojuhend</a></p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx create</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">app@latest htmltonext</span></span>
<span class="line"></span></code></pre></div><p>Next tuleb juba lehek\xFClgedega. Leiad need pages folderist.<br> Stardiks v\xF5ib taas kustutada sealt index.js failist kogu sisu, ehk k\xF5ik peale <code>Head</code> komponendi.<br><code>_app.js</code> failis n\xE4itame \xE4ra, et kasutataks \xF5iget stiilifaili.<br> Vaatame, et stiilifolder oleks olemas kui vaja impordime oma. Vaja on installida ka sass kui seda kasutad:</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i sass</span></span>
<span class="line"></span></code></pre></div><p>N\xFC\xFCd v\xF5ime <code>index.js</code> faili <code>&lt;Head /&gt;</code> kompnendi alla oma HTML-i kirjutada.<br> J\xE4rgmise lehe v\xF5ime teha lihtsalt koopia index.js-ist ja nimetada pmber, nt about.js ja muuta seal sisuosa nii kuis vaja.</p><h2 id="komponendid" tabindex="-1">Komponendid <a class="header-anchor" href="#komponendid" aria-hidden="true">#</a></h2><p>Erinevalt Reactist, teeme me siin aga lehe sisuosade jaoks komponendid. Nt Header. Selleks teeme uue komponentide folderi ja sinna teeme vajalikud kompionendid, nagu Reactis tegime. Seej\xE4rel impordime komponendid, antud juhul nt Headeri, k\xF5ikidele lehek\xFClgedele.</p><p>Erinevalt reactist, on vaja komponentidesse, nt HEader kompnent, kus on lingid, importima ka nexti enda lingifunktsiooni:</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Link </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">next/link</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>ja kui Reactis on <code>Link to=...</code> siis Nextis on <code>Link href=...</code><br> Juhendis soovitas mees headeris link pista <a></a> elemendi sisse, kuid see tekitas errori, paistab et seda pole ka vaja</p><p>Pildid taas public folderisse.</p>`,13),o=[t];function l(p,d,r,c,k,m){return s(),a("div",null,o)}const _=e(i,[["render",l]]);export{h as __pageData,_ as default};