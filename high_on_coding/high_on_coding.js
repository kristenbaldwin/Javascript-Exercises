(function() {
    var myNode = document.getElementById('container');
    
    // Add blue top bar
    var topBar = document.createElement('div');
    topBar.id = 'top-bar';
    myNode.appendChild(topBar);
    topBar.style.backgroundColor = 'rgb(77, 166, 255)';
    topBar.style.width = '90%';
    topBar.style.margin = '0 auto';
    topBar.style.padding = '15px';

    // Add h1 to topBar
    var myTitle = document.createElement('h1');
    myTitle.textContent = 'HighOnCoding';
    myTitle.style.color = 'white';
    myTitle.style.display = 'inline-block';
    myTitle.style.marginRight = '70px';
    topBar.appendChild(myTitle);

    // Add paragraph to topBar
    var item1 = document.createElement('p');
    item1.textContent = 'Home';
    item1.style.fontWeight = '600';
    item1.style.fontSize = '25px';
    item1.style.color = 'white';
    item1.style.display = 'inline-block';
    item1.style.marginRight = '70px';
    topBar.appendChild(item1);

    // Add paragraph to topBar
    var item2 = document.createElement('p');
    item2.textContent = 'Categories';
    item2.style.fontSize = '25px';
    item2.style.fontWeight = '100';
    item2.style.color = 'white';
    item2.style.display = 'inline-block';
    topBar.appendChild(item2);

    // Add gray div to myNode
    var grayBox = document.createElement('div');
    grayBox.id = 'curse-box';
    myNode.appendChild(grayBox);
    grayBox.style.backgroundColor = 'rgb(204, 204, 204)';
    grayBox.style.width = '75%';
    grayBox.style.margin = '25px auto';
    grayBox.style.padding = '15px';

    // Add h1 to gray div
    var reviews = document.createElement('h1');
    reviews.textContent = 'Curse of the Current Reviews';
    reviews.style.color = 'rgb(77, 77, 77)';
    reviews.style.marginTop = '5px';
    grayBox.appendChild(reviews);

    // Add paragraph to gray div
    var moreReviews = document.createElement('p');
    moreReviews.textContent = 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their chouce is dependent on three important factors: price, screenshot and reviews.';
    moreReviews.style.marginTop = '40px';
    moreReviews.style.marginBottom = '5px';
    grayBox.appendChild(moreReviews);

    // Add watchKit div to myNode
    var watchKit = document.createElement('div');
    watchKit.id = 'watchkit';
    myNode.appendChild(watchKit);
    watchKit.style.width = '75%';
    watchKit.style.margin = '25px auto';

    // Add blue h2 to watchKit
    var helloW = document.createElement('h2');
    helloW.textContent = 'Hello WatchKit';
    helloW.style.color = 'rgb(0, 102, 255)';
    helloW.style.fontWeight = '300';
    watchKit.appendChild(helloW);

    // Add paragraph to watchKit
    var moreW = document.createElement('p');
    moreW.textContent = 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article, we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.'
    watchKit.appendChild(moreW);

    // Add orange engagement bar to watchKit
    var engage1 = document.createElement('div');
    engage1.id = 'engage1';
    watchKit.appendChild(engage1);
    engage1.style.backgroundColor = 'rgb(255, 153, 51)';
    engage1.style.padding = '7px';

    // Add comments to orange engagement bar
    var comments1 = document.createElement('span');
    comments1.textContent = '12 comments';
    comments1.style.color = 'white';
    comments1.style.marginRight = '40px';
    comments1.style.display = 'inline-block';
    engage1.appendChild(comments1);

    // Add likes to orange engagement bar
    var likes1 = document.createElement('span');
    likes1.textContent = '124 likes';
    likes1.style.color = 'white';
    likes1.style.display = 'inline-block';
    engage1.appendChild(likes1);

    // Add swift div to myNode
    var swift = document.createElement('div');
    swift.id = 'swift';
    myNode.appendChild(swift);
    swift.style.width = '75%';
    swift.style.margin = '25px auto';

    // Add blue h2 to swift
    var introS = document.createElement('h2');
    introS.textContent = 'Introduction to Swift';
    introS.style.color = 'rgb(0, 102, 255)';
    introS.style.fontWeight = '300';
    swift.appendChild(introS);

    // Add paragraph to swift
    var moreS = document.createElement('p');
    moreS.textContent = 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development, but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.'
    swift.appendChild(moreS);

    // Add orange engagement bar to swift
    var engage2 = document.createElement('div');
    engage2.id = 'engage2';
    swift.appendChild(engage2);
    engage2.style.backgroundColor = 'rgb(255, 153, 51)';
    engage2.style.padding = '7px';

    // Add comments to orange engagement bar
    var comments2 = document.createElement('span');
    comments2.textContent = '15 comments';
    comments2.style.color = 'white';
    comments2.style.marginRight = '40px';
    comments2.style.display = 'inline-block';
    engage2.appendChild(comments2);

    // Add likes to orange engagement bar
    var likes2 = document.createElement('span');
    likes2.textContent = '45 likes';
    likes2.style.color = 'white';
    likes2.style.display = 'inline-block';
    engage2.appendChild(likes2);

})(); // Self-running function