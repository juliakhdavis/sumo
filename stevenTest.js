

function openNavBar () {
   let menu =  document.getElementsByClassName('navDrawer')[0];
   if(menu.style.visibility == 'visible'){
    menu.style.visibility = 'hidden'
    console.log(menu.style.visibility);
   }
   else{
    menu.style.visibility = 'visible'
   }

}


function clearMenu(){
    let menu =  document.getElementsByClassName('navDrawer')[0];
    menu.style.visibility = 'hidden'
}

function makeGetRequest() {
    clearMenu();
    fetch('http://localhost:3000/').then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        // This is the JSON from our response
        document.getElementById("response").innerHTML = data;
    });
    
    }

function clearApi() {
    clearMenu();
    document.getElementById("response").innerHTML = "Info cleared";
}

function homeworkHelp() {
    clearMenu();
    document.getElementById("response").innerHTML = toggleHelp;
}



















































































const toggleHelp =`<h1 id="basic-routing">Basic Routing</h1>
<p>Basic routing is adding a reference to another page so you are able to navigate to it. We will do this by adding onClick events to items in the navdrawer.</p>
<h3 id="step-1">Step 1</h3>
<p>Create a new html file for every page you want. You will want a new page for each navigable link. So, likely, something like <strong>rankings.html</strong>, <strong>settings.html</strong>, <strong>tournaments.html</strong>, etc. Leave these empty for now.</p>
<h3 id="step-2">Step 2</h3>
<p>Add an onClick event on each navigation item that will navigate the user to the next page. The navigation items I am discussing are the items in <strong>&lt; div class=“NavItems”&gt;</strong>. I will prove you with one example. </br> Change <strong><em>&lt; h4&gt;Sumo Tournament&lt; /h4&gt;</em></strong> to <strong><em>&lt; h4 onClick=“document.location = ‘./tournaments.html’”&gt;Sumo Tournament&lt; /h4&gt;</em></strong>. </br> Then change all other items.</br> A couple things to note: - The onClick=“document.location” is just saying hey, when I click this I want to render whatever is at the location I provide, so you provide the <em>relative</em> file location. The <em>relative</em> location is signaled by the <strong>./</strong>. You are also able to prove the <em>exact</em> file location, but this is usually not preffered. - Adding *<strong>cursor: pointer</strong> in your css file under the NavItems style will let you have a pointer when your mouse inside of that div, which will let users know that they can click the links.</p>
<h3 id="step-3">Step 3</h3>
<p>Copy over all your <strong>&lt; head&gt;</strong> divs and all the navigation divs to each of the files. Anything you want on each page you will need to copy over. You will want the navigation bar and the navigation drawer so you can navigate on every page. Basically, you want to copy the top of the file down to the end of the last navigation div to each file.</p>
<h1 id="building-a-table">Building a table</h1>
<p>A table is a very useful way to organize and present data. We will practice on the <strong>rankings</strong> page. We will build a very simple table. Please refer to this <em>https://www.w3schools.com/html/html_tables.asp</em> tutorial. You can make a table that matches mine or a table that is more appropriate to real sumo. I don’t have much time right now. :)</p>
<p><strong><em>Good luck! This will hopefully be relatively simple,but I wanted to get your started on something. Next, we will work on inputs and forms which will use a bit of javascript. Also, I encourage you to continue to decorate and design the pages better. It will really help with your html and css skills and with the right attitude can be good fun</em></strong></p>

`;
