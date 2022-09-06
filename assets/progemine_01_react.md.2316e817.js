import{_ as s,c as a,o as n,a as l}from"./app.399a818f.js";const p="/entsyklopeedia/assets/001-folder-view.99310d2a.jpg",o="/entsyklopeedia/assets/002-content-in-react.efd9211c.jpg",e="/entsyklopeedia/assets/003-react-routes.81a4218c.jpg",m=JSON.parse('{"title":"React","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install","link":"#install","children":[]},{"level":2,"title":"komponendid","slug":"komponendid","link":"#komponendid","children":[]},{"level":2,"title":"Router","slug":"router","link":"#router","children":[]}],"relativePath":"progemine/01_react.md"}'),t={name:"progemine/01_react.md"},c=l(`<h1 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-hidden="true">#</a></h1><p><a href="https://youtu.be/aYEFeYI7gUM?t=223" target="_blank" rel="noreferrer">Videojuhend</a></p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><p>Stardiks Reacti proov:</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx create</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">react</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">app@latest nimi</span></span>
<span class="line"></span></code></pre></div><p>Stardis v\xF5ib kogu src folderi t\xFChjendada, j\xE4ttes alles vaid <code>App.js</code> ja <code>index.js</code><img src="`+p+'" alt="Staripilt"> J\xE4rgmiseks v\xF5ib kirjutada kogu tavalise html-i body osa App.js faili, funktsiooni return osasse: <img src="'+o+`" alt="HTML reacti sees"> CSS tuleks importida App.js faili, st</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./styles/styles.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Kasutada v\xF5ib muidugi ka scss-i, see kompileeritakse automaatselt</p><p>Fondid v\xF5ib lisada nii <code>build</code> folderis olevasse index.html faili, nagu tavaliselt v\xF5i <code>@import</code> abil css faili</p><p>Pildid l\xE4hevad <code>public</code>folderisse</p><h2 id="komponendid" tabindex="-1">komponendid <a class="header-anchor" href="#komponendid" aria-hidden="true">#</a></h2><p>J\xE4rgmiseks, juhul kui meil oli kopitud <code>App.js</code>-i tervik <code>HTML</code>, splitime selle komponentideks v\xF5i kui polnud, siis loome uued komponendid \u2013 header, footer ja erinevad lehed jne \u2013 teem componentide folderi, et asjad sassi ei l\xE4heks. N\xE4ide, <code>Home.js</code>:</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Home</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&gt;&lt;/&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>See <code>&lt;&gt;&lt;/&gt;</code>on vajalik vanemelement</p><p>Ja seej\xE4rel impordime loodud komponendi v\xF5i komponendid oma <code>App.js</code>-i ning returni all palume selle ka tagastada:</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Home </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./components/Home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./styles/styles.scss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Home</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> App</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="router" tabindex="-1">Router <a class="header-anchor" href="#router" aria-hidden="true">#</a></h2><p>J\xE4rmiseks, et mitut lehek\xFClge n\xE4idata, peame kasutusele v\xF5tma <code>React routeri</code> vt <a href="https://reactrouter.com/en/main/getting-started/installation" target="_blank" rel="noreferrer">reactrouter.com</a>, et installida viimane versioon. Hetkel on see <code>npm install react-router-dom@6</code></p><p>Seej\xE4rel pakime kogu oma web\xE4pi routerisse, ehk siis <code>index.js</code> faili imporfime:</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BrowserRouter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react-router-dom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>ning allpool pistame \xE4pi <code>&lt;App /&gt;</code> routerisse, ehk:</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">React.StrictMode</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">BrowserRouter</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">BrowserRouter</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">React.StrictMode</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Seej\xE4rel impordime routeri ka <code>App.js</code>-i:</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Routes</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Route</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react-router-dom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Ja seej\xE4rel v\xF5ime juba app faili oma n\xF6 roudid ehk teekonnad panna:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;Routes&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Route path=&quot;about&quot; element={&lt;About /&gt;} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Routes&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Header komponendi impordime ja lisame <code>App.js</code>-is routside, teekondade peale:</p><p><img src="`+e+`" alt="React routes"></p><p>Header komponenti impordime react routerist lingif (ma ei tea kuidas seda nimetada \u2013 lingi funktsioon vms)</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Link</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">NavLink</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react-router-dom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Ja seej\xE4rel saame hakata linkima:</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">logo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Home</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Link</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/about</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">About</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Link</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Ja voilaa, ongi lihtne leht peamise navigatsiooniga valmis.</p>`,33),r=[c];function i(D,F,y,d,u,C){return n(),a("div",null,r)}const g=s(t,[["render",i]]);export{m as __pageData,g as default};
