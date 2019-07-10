---
@title[Serverless]

@snap[west span-70]
![Up](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/up_green.svg)
@snapend

@snap[east span-30 template-title]
@size[1.2em](Serverless Can <br>Do That?!)
@snapend

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/time_tiny.jpg&size=cover
@title[Time]

@snap[west]
@size[2.2em](Fast)
@snapend

@snap[east]
@size[2.2em](Focus)
@snapend

Note:
Time is crucial when building products. Your market might be time sensitive, and you need to grow fast. Serverless is here to help you spend that time on things that are important instead of stuff that seems shiny but isn’t essential.

---

@snap[east span-60]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/what.svg)
@snapend

@snap[west span-40]
@fa[server green-icons fragment](Abstraction of servers)</br>
@fa[balance-scale green-icons fragment](Autoscalability)</br>
@fa[coins green-icons fragment](Pay-for-use)
@snapend

Note:

When we incorporate serverless into our applications, we no longer need to worry about configuring servers, the platform provider will do that for us.


---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/anthony.jpeg&size=cover

@snap[west text-white span-55]
@quote[We’re working to solve the problem of self expression.](Anthony Casalena)
@snapend

Note: 
Anthony Casalena wants to empower every single person out there to build personal websites without having to code.  In his own words, Squarespace is "working to solve the problem of self-expression".

---

@snap[west span-40]
@fa[coins green-icons fragment]($30000)</br>
@fa[equals fragment]</br>
@fa[server green-icons fragment](Two Servers)
@snapend

@snap[east span-60]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/savings.svg)
@snapend

Note:
To get started, he needed $30000. That's how much money he had spent on buying two servers that would host his first version of Squarespace. After his initial investment, he went on to first hosting his servers into his dorm room. Didn't take him long to move onwards to renting space in a data center.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/failure.jpg&size=cover

Note:
And not long after that, he experienced his first outages,the panic of losing all his user data and with that his business. Eventually, he had to replace the original servers and buy new ones.

---
@snap[north]
@size[0.6em](Pen by Sarah Drasner)
@snapend


<iframe height="265" style="width: 100%;" scrolling="no" title="What you manage with Services" src="//codepen.io/sdras/embed/gojoYb/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/sdras/pen/gojoYb/'>What you manage with Services</a> by Sarah Drasner
  (<a href='https://codepen.io/sdras'>@sdras</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Note: 
$30000, this was the initial cost of starting a business for Anthony and probably a lot of other entrepreneurs like him. Virtualization, also known as Infrastructure as a Service, freed the burden of that initial investment for a lot of startups.

Serverless is the latest step on the path of taking away the burden of infrastructure, and has a similar impact on getting you started with your products. Only now it frees you up from spending time on planning, configuring and managing servers.

---?color=#1F363D
@snap[west span-50]
@code[asm](src/forloop.asm)
@snapend

@snap[east span-50]
@code[javascript](src/forloop.js)
@snapend

Note:

Much like high-level programming languages are an abstraction of machine code, serverless is an abstraction for cloud infrastructure. When programming in a low-level language, we need to understand the memory requirements for our code to run, explicitly allocate and de-allocate it. Same with traditional applications, we need to estimate the workload at any given moment in time and provision the infrastructure required to run it. Just like how high-level programming languages abstract away the burden of configuration, enabling us to build applications faster, serverless enables us to focus on the code that's relevant to our product without having to worry about babysitting servers.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/important_tiny.jpg&size=contain&color=#C00108
@snap[north-east text-white span-60]
@quote[Get the important things right.](N. P. Calderwood)
@snapend

Note:

Serverless gives us the ability to focus on the important things right from the beginning. And, in our case, important means solving customer problems first.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/growth_tiny.jpg&size=cover
@snap[north-east]
@css[title-red-text](Scale)
@snapend

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/people_tiny.jpg&size=cover

Note:

Every five years millions of Australians fill out a survey for the census. In 2016, the Australian government decided to run the Census online. They spent 9 million dollars on building a survey form, and told everyone to go home and fill out the form. And that's exactly what happened, everyone went back home and filled in the survey *at the same time*.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/people_tiny.jpg&size=cover&opacity=50

> @css[title-red-text](#censusfail)

Note:

Next thing you know, the website has crashed, and #censusfail is trending on social media. The government managed to gather very little data and ended up spending other tens of millions to investigate and fix issues related to the failure.

---

@snap[east span-60]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/hack.svg)
@snapend

@snap[west span-40]
@fa[graduation-cap green-icons fragment](Two Students)</br>
@fa[hourglass-start green-icons fragment](72 Hours)</br>
@fa[coins green-icons fragment](< $200)
@snapend

Note:

The weekend after the failure, two students at a hackathon re-built the census website. They did it in 72 hours and used serverless. By the end of the three days, they also ran load tests. It turns out they were able to serve more requests then the initially predicted load for the census website.

With serverless, we can be sure that our applications will scale automatically to meet the current workload.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/scaling.svg

@snap[north]
@css[small-green-text](Scale automatically </br> to meet </br> current workload)
@snapend

Note:

Scalability is a term used to describe a system's ability to cope with increased load. What happens when our application grows from 10000 concurrent users to 100000? How about from 1 million to 100 million? Our system will need to deal with an increased number of concurrent requests and process larger volumes of data. Autoscaling is a way to scale up or down the number of computing resources depending upon the actual load. And the goal is to maintain reliable performance even when our load parameters have changed. With serverless, the platform will dynamically add and remove resources based on the number of incoming events.

talk about premium

---
@title[focus]

@quote[It's not that we need to *do more* but rather that we need to *focus on less*.](Nathan W Morris)

Note:

Scalability is a hard problem to solve. By outsourcing the job of monitoring and spinning up new instances, we get to focus on understanding how components in our system communicate and optimize for that.

---
@title[microbilling]

@snap[]
@css[small-green-text](1.000.000 invocations)<br>
@css[small-green-text](128MB memory)<br>
@css[small-green-text](1 second)<br>
@snapend

Note:

Finally, probably one of the most critical aspects of serverless is that you only pay for the resources you're using. Say for example in a month you have a million invocations using up to 128MB of memory and running for less than a second. That's going to cost you ZERO dollars - yes, you heard that correctly. Nowadays, you can have someone do all the hard work of spinning up and configuring servers for you, adjust depending on load, run 1 million times and you pay absolutely nothing for it. What a great time to be building applications!


---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/coffee.JPG&size=cover&opacity=60
@title[microbilling]

@snap[north]
@css[small-green-text](5.000.000 invocations)<br>
@css[small-green-text](128MB memory)<br>
@css[small-green-text](1 second)<br>
@snapend

Note:

Now let's increase the number of requests from one million to five million, the same amount of memory and CPU - it will now cost you less $5 - less than the cost of a Starbucks coffee! I call that a win.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/start_tiny.jpg&size=cover&opacity=80
@title[components]

@snap[]
@css[title-yellow-text](Getting started)
@snapend

---

@css[title-yellow-text](BaaS)
@fa[plus]
@css[title-yellow-text](FaaS)

---

@quote[An expert is a man who has made all the mistakes which can be made in a very narrow field.](Niels Bohr)

Note:

You might already be using some serverless components. When your application relies on services like Azure Storage, AWS S3, Netlify Authentication, Forms you're already benefiting from using a serverless architecture. Fully managed and highly scalable services are core tenants of any serverless system. They clear the path for us to focus on features that are truly relevant to our products by removing the need for us to learn, configure and host them.

Sure, at some point it might make sense to build your own solutions for these. Dropbox eventually decided to move off S3 to their own custom hardware after many years of running successfully on S3. But then again it might not. Netflix is still on S3. Hit play on your favorite show using Netflix and the data comes off of a serverless data store.

---
@title[cloud-functions]
@snap[west span-70]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/code.svg)
@snapend
@snap[east span-30]
@css[slide-green-text](Cloud Functions)
@snapend

Note:
At the core of serverless computing are cloud functions. They enable us to run code in ephemeral containers in reaction to an event. The execution can be triggered by any of the managed services or some custom sources you might define. In your functions, there’s a couple of things you need to be aware of. You’ll end up writing code mostly in the same way you did before. Using the programming languages that you normally use

---
@title[stateless-code]

@snap[west span-70]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/empty.svg)
@snapend
@snap[east span-30]
@css[slide-green-text](Stateless)
@snapend

Note:
Because your code is running in ephemeral containers and for us to be able to scale out your code infinitely you’ll need to write stateless code. This means that you cannot rely on any state being preserved between function calls. If you do end up having to save state, then you’ll have to use a data store like a message queue or a database.

---
@title[Event Driven]

@snap[west span-30]
@css[slide-green-text](Event Driven)
@snapend

@snap[east span-70]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/broadcast.svg)
@snapend

Note:

Our code runs in response to specific triggers which can be of type HTTP when we react to HTTP requests, blob trigger  when we run code in response to a file being uploaded to a storage account. Other commonly used triggers can be of type queue, to process a message uploaded on a queue or time triggers to run code at specified time intervals.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/third_anatomy.png&size=contain

Note: 

The anatomy of a serverless processing model is:

Event sources or triggers - they cause the function to run
Serverless controller - deploy, control and monitor function instances and their sources
Function instances - a single function/microservice that can be scaled with demand
Managed services - data stores, authentication providers, events

 A scale controller will use heuristics for each event type. For example, when you're listening to queue events, it scales based on the queue length and the age of the oldest queue message. When no events are triggering your code to run, the scale controller will reduce the number of instances running to zero.

---
@title[tools]
@snap[east span-70]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/tools.svg)
@snapend
@snap[west span-30]
@css[slide-red-text](Tools)
@snapend

Note:

With every new technology, we need to figure out what tools are available for us and how we can integrate them into our existing toolset. When getting started with serverless, we have a few options to consider.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/browser.svg&color=#1F363D
@title[browser]

Note:

First, we can use the good old browser to create, write and test functions. It’s powerful, and it enables us to code wherever we are; all we need is a computer and a browser running. The browser is a good starting point for writing our very first serverless function.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/azfunc.png&size=contain&color=#1F363D

---
@title[requirements]
@ul

- Writing code in your editor of choice
- Tools that do the heavy lifting and generate the boilerplate code for you
- Run and debug code locally
- Support for quickly deploying your code

@ulend

Note:
Next, as you get more accustomed to the new concepts and become more productive, you might want to use your local environment to continue with your development. Typically you’ll want support for a few things:

Writing code in your editor of choice Tools that do the heavy lifting and generate the boilerplate code for you Run and debug code locally Support for quickly deploying your code

---
@title[azure-core-tools]

>```npm install netlify-cli```
<br>
>```npm install azure-functions-core-tools```

Note:

With Azure Functions, you’ll have support for all these features when working with the Azure Functions Core Tools which you can install from npm.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/initcli.png&size=contain&color=#1F363D
@title[init]

Note:

Next, we can initialize a new project and create new functions using the interactive CLI

---
@title[vscode]
@snap[west span-20]
![VS Code](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/vscode.svg)
@snapend
❤️
@snap[east span-20]
![Azure Functions](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/azfunclogo.svg)
@snapend

Note:
If your editor of choice happens to be VS Code, then you can use it to write serverless code too. There's actually a great extension for it.

---?video=https://sicotinslides.blob.core.windows.net/slides/serverlessapis/create-project.mp4
@title[begin-demo]

Note: 

Once installed, a new icon will be added to the left-hand sidebar — this is where we can access all our Azure-related extensions! All related functions can be grouped under the same project  (also known as a function app). This is like a folder for grouping functions that should scale together and that we want to manage and monitor at the same time. To initialize a new project using VS Code, click on the Azure icon and then the folder icon.

---?color=#1F363D
@code[javascript](src/host.json)

Note:

This will generate a few files that help us with global settings. Let's go over those now:

host.json - We can configure global options for all functions in the project directly in the host.json file. In it, our function app is configured to use the latest version of the serverless runtime (currently 2.0). We also configure functions to timeout after ten minutes by setting the functionTimeout property to 00:10:00 — the default value for that is currently five minutes (00:05:00). 

---?color=#1F363D
@code[javascript](src/local.settings.json)

Note:

Application settings are global settings for managing runtime, language and version, connection strings, read/write access, and ZIP deployment, among others. Some are settings that are required by the platform, like FUNCTIONS_WORKER_RUNTIME, but we can also define custom settings that we’ll use in our application code, like DB_CONN which we can use to connect to a database instance. While developing locally, we define these settings in a file named local.settings.json and we access them like any other environment variable.

---?video=https://sicotinslides.blob.core.windows.net/slides/serverlessapis/create-function.mp4

Note:

Create a new function by clicking the thunder icon in the extension. The extension will use predefined templates to generate code, based on the selections we made — language, function type, and authorization level.

We use function.json to configure what type of events our function listens to and optionally to bind to specific data sources. Our code runs in response to specific triggers which can be of type HTTP when we react to HTTP requests .


---?color=#1F363D
@title[function-code]

@code[javascript](src/index.js)

@[1](Function with two parameters)
@[2](Use context object to log info)
@[4-7](Set HTTP response)

Note:

A function includes the code it executes and metadata describing the event it listens to and other resources it connects to.

Here, we can see that our function is listening to HTTP requests and we get access to the actual request through the function parameter named req.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/binding.jpg&size=cover
@title[function-metadata]
@snap[north-west]
@css[slide-red-text](Bindings)
@snapend

Note:

Function bindings are used to read and write data to data sources or services like databases or send emails. They enable developer simplicity, better performance, and security. The serverless platform manages the data connections and reusability between executions. It can also enable more advanced features like data prefetching and caching. By using these constructs, you avoid hardcoding access to other services.

---?color=#1F363D

@code[javascript](src/function.json)

@[2](Array of bindings)
@[4](Binding type)
@[5-9](Database details)
@[10](Binding direction)

Note:

Your function receives data (for example, the content of a queue message) in function parameters. You send data (for example, to create a queue message) by using the return value of the function.

In Azure Functions, we have two types of bindings - input and output. You use input bindings to read from a data source and output bindings to write. Currently, you can connect to services like Azure CosmosDB, Table Storage, Event Grid, Blob and Queue Storage.

---?video=https://sicotinslides.blob.core.windows.net/slides/serverlessapis/debug-serverless.mp4
@title[debug]

Note:

When using VS Code, the Azure Functions extension gives us a lot of the setup that we need to run and debug serverless functions locally. When we created a new project using it, a .vscode folder was automatically created for us, and this is where all the debugging configuration is contained. To debug our new function, we can use the Command Palette (Ctrl+Shift+P) by filtering on Debug: Select and Start Debugging, or typing debug. One of the reasons why this is possible is because the Azure Functions runtime is open-source and installed locally on our machine when installing the azure-core-tools package.

---
@title[deploy-end-demo]

@quote[Don’t let friends right-click deploy!]( — every DevOps engineer out there)

Note: 

Time to push this goodness to the cloud. As always, the VS Code extension has your back. All it really takes is a single right-click we’re pretty much done.

The extension will ZIP up the code with the Node modules and push them all to the cloud.

While this option is great when testing our own code or maybe when working on a small project, it’s easy to overwrite someone else’s changes by accident — or even worse, your own. Once you have more than one person doing this, you'll want to move up a level.

---
@[azure-pipelines]
@code[yaml](src/azure-pipelines.yml)

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/fog_tiny.jpg?size=cover
@title[use-cases]

@snap[north]
@css[title-yellow-text](When to use Serverless?)
@snapend

---
@title[webapi]
@snap[east span-40]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/image_processing.svg)
@snapend
@snap[west span-60]
@css[slide-green-text](Web APIs)
@snapend

---
@title[data]
@snap[east span-40]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/upload.svg)
@snapend
@snap[west span-60]
@css[slide-green-text](Data Processing)
@snapend

---
@title[integration]
@snap[east span-40]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/stripe_integration.svg)
@snapend
@snap[west span-60]
@css[slide-green-text](3rd Party Integration)
@snapend

---
@title[integration]
@snap[east span-40]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/robot.svg)
@snapend
@snap[west span-60]
@css[slide-green-text](Chatbots)
@snapend

---
@title[in-practice]

@snap[west span-40]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/todo.svg)
@snapend
@snap[north span-40]
@css[slide-green-text](In Practice)
@snapend

@snap[east span-60]
@css[small-green-text](Async, Concurrent)</br>
@css[small-green-text](Spiky Traffic)</br>
@css[small-green-text](Accelerated Developer Velocity)</br>
@snapend

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/time_launch.jpg&size=cover
@title[time_launch]
@snap[west span-60]
@css[small-red-text](spend the maximum amount of time on solving the exact problem you need to address)
@snapend

Note:

Remember, you want to spend the maximum amount of time on solving the exact problem you need to address. If you're in the business of configuring and managing databases or servers, by all means, you should spend all your time on that. But if you want to work out an idea and see if there's something to it with a minimum of cost and minimum of the ceremony of running servers, then Serverless might be your best choice. And of course, in a startup, the last thing you want to do is spend time on anything else than figuring out what your business is.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/curious.jpg&size=cover
@title[best_practices]
@snap[south-east]
@css[slide-green-text](Recommendations)
@snapend

---
@snap[east span-40]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/single_responsibility.svg)
@snapend
@snap[west span-60]
@css[slide-green-text](Single Responsibility Principle)
@snapend

Note:
"The single responsibility principle states that every module, class, or function should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the function."

The same is very important in a serverless approach too. A function (app) should do one thing. How you separate functionality into functions will determine how your application scales and impact your deployment strategy. You want to find the critical components in your application and isolate them in separate functions.

---
@snap[west span-60]
![](https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/server_down.svg)
@snapend
@snap[east span-40]
@quote[A chain is only as strong as its weakest link]
@snapend

Note: 
Have a clear understanding how your system scales and which are your bottlenecks. There is no use for an application that can accept 500 HTTP req/sec if your database only accepts 10 connections. Otherwise your system will very quickly overload and you'll end up with very unhappy users. It is recommended that all components in your application scale at a similar pace. You can achieve that either by using managed services or having smart throttling strategies in place.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/nerds.jpg&size=cover

Note:
Serverless enables us to solve problems creatively, and at a fraction of the cost, we usually pay for using traditional platforms. Our serverless applications truly scale with our organization by enabling us to onboard users as we grow.

---?image=https://sicotinslides.blob.core.windows.net/slides/tour-assets/images/svg/thank_you.svg

Note:
I have nothing but gratitude and hopeful feelings about how your companies and  products are going to change the world. Based on my experience using serverless I know this technology is going to serve you well in achieving your goals. I'm so excited that it is here for you to keep making the world a better place.