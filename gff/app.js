const github = new GitHub;
const ui = new UI;
// search input field

const userSearched = document.getElementById('searchUser');

// search user event listener

userSearched.addEventListener('keyup', (e)=>{
 userText = e.target.value;
    if (userText !== ""){
        github.getUser(userText)
        .then(data=>{
        if(data.profile.message === "Not Found"){
            // show alert in UI file
            ui.showAlert('No user found!!','alert alert-danger');
        }else{
            // show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }    
        })
    }else{
        // clear profile
        ui.clearProfile();
    }
})