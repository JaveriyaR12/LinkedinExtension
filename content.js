
function modifyProfilePictures() {
    var profilePics = document.querySelectorAll('img[width="48"]');

    profilePics.forEach(function(img) {
        img.src = "https://media.licdn.com/dms/image/D5603AQGGnNJrr3PKvA/profile-displayphoto-shrink_400_400/0/1685133171604?e=1722470400&v=beta&t=HUCjox35ZCZ0gwNNkvRZiJcHVqWMJ1rIRL-_s_irjKQ"; // Replace this URL with the URL of your custom image
    });
}

modifyProfilePictures();

function handleMutations(mutationsList, observer) {
    mutationsList.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
            if (node instanceof HTMLElement && node.matches('img[width="48"]')) {
                modifyProfilePictures();
            }
        });
    });
}

var observer = new MutationObserver(handleMutations);

var targetNode = document.body;
var config = { childList: true, subtree: true };

observer.observe(targetNode, config);
