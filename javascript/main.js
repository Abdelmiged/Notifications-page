let unreadNotifications = [];

window.onload = getUnreadNotificationCount();
document.getElementById("read-all").addEventListener("click", changeNotificationState);

function getUnreadNotificationCount() {
    unreadNotifications = document.getElementsByClassName("unread");
    displayUnreadCount();
}

function displayUnreadCount() {
    let textNode = document.createTextNode(`${unreadNotifications.length}`);
    document.querySelector(`.count-box > span`).appendChild(textNode);
}

function resetUnreadCount() {
    let countBoxNumber = document.querySelector(`.count-box > span`);
    countBoxNumber.innerHTML = "0";
}

function changeNotificationState() {
    Array.from(unreadNotifications).forEach((currentElement) => {
        let text = currentElement.querySelector(`.notification-content > p`);
        text.removeChild(text.querySelector(`.unread-dot`));
        currentElement.classList.remove("unread");
        currentElement.classList.add("read");
    });
    resetUnreadCount();
}