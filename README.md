<h2>First step with svelteKit </h2>
<h3>Table of Contents: </h3>
<ul>
  <li>Description of the project </li>
  <li>What i did</li>
  <li>What I learned</li>
  <li>Run the App</li>
  </ul>
<hr />
<h3>Description of the project :</h3>
  <p>I decided to do this simple web application which contains three routes <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/index.svelte">/</a> , <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/about/index.svelte">/about</a>, <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/setting/index.svelte">/setting</a>. and a <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/stores/currentPathStore.js">store</a> which store the current path, and three components on the lib folder which are the main <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/lib/nav.svelte">navBar</a>, <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/lib/footer.svelte">footer</a>, and the <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/lib/settingNav.svelte">settingNavBar</a>. 

PS: the current path store is used to know the active link in the main navBar. So each route will call the changePath of the store with the current path of this route. <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/index.svelte">See ligne 5</a>

Note: Do not take the design in consideration :sweat_smile::sweat_smile::sweat_smile:
 </p>
 
 <h3>What I Did  :</h3>
 <p> what I wanted in this project is to learn how to use svelteKit, so this is the summary of what I learned. </p>
 
 <h3>What I Learned  :</h3>
<ul>
<li>
<h3>Routes </h3
<p>
we can use either a file or a folder that will contain an index.svelte to represent a route. <br/>
 e.g: for the route /about : use file "/about.svelte" or with a <a href="https://github.com/JugurthaMoad/sveltekitTuto/tree/main/src/routes/about">folder</a>.
</p>
</li>
<li>
<h3>Layout :</h3>
<p>
we can use a layout for routes that share the same components. <br/>
eg: the following routes share the same components <br/>
<a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/index.svelte">"/"</a> will have the navBar and footer in addition to its content <br/>
<a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/about/index.svelte">"/about"</a> will have the navBar and footer in addition to its content <br />
So <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/__layout.svelte">"__layout.svelte"</a> will serve as layout of the two routes 
</p>
</li>
<li>
<h3>Named layouts and the Inheritance chains :  </h3>
<p>
if we want to have another layout for a specific route we can do like the following: <br/>
<a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/__layout-root.svelte">"__layout-root.svelte"</a> is another named layout for the root of the app which is a blank layout "reset the layout to blank" <br />
<a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/setting/__layout%40root.svelte">"__layout@root.svelte"</a> inherit from <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/__layout-root.svelte">"__layout-root.svelte"</a>, this will reset the global layout and apply the new layout that we want. which is "__layout@root.svelte"
</p>
</li>
<li>
<h3>Error pages :</h3>
<p>
<a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/__error.svelte">"__error.svelte"</a> is a page where to display errors. <br/>
Eg: if we try to access a path that we don't have, we will have an error with the status 404, this error message will be displayed
in <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/__error.svelte">"__error.svelte"</a> which is going to have the same layout as <a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/__layout.svelte">"__layout.svelte"</a> . 
If we want to change the layout of this page and display the error message without the navBar, we can do the following: 

<a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/%5B...path%5D%40root.svelte">"[...path]@root.svelte"</a> will do the work.<br/> 
 "...path" means others paths, in our case other paths starting with "/" . <br/>
 @root means it will inherit the blank layout "__layout-root.svelte", so we will display only the content of "__error.svelte" without the navBar
</p>
</li>
<li>
<h3>Route with dynamic parameters : </h3>
<p>
<a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/about/%5Bid%5D.svelte">"[id].svelte"</a> represent the description of a post with and id = integer. 
</p>
</li>
<li>
<h3>Fetch data : </h3>
<p>
<a href="https://github.com/JugurthaMoad/sveltekitTuto/blob/main/src/routes/about/index.svelte">"about/index.svelte"</a> is an exemple of how to fetch data from an API. 
</p>
</li>
</ul>
<h3>How to run the project: </h3>
<ul>
<li>
npm install 
</li>
<li>
npm run dev
</li>
</ul>
